import CommentBox from "./Components/CommentBox"
import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import Loading from "../../Components/Loading"
const PostDetail = () => {
    const [post, setPost] = useState({})
    const [user, setUser] = useState([])
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(true)
    let params = useParams()
    const getData = async () => {
        try {
            const responsePost = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
            const responseComments = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}/comments`)
            const dataPost = await responsePost.json()
            const dataComments = await responseComments.json()
            setPost(dataPost)
            const responseUser = await fetch(`https://jsonplaceholder.typicode.com/users/${dataPost.userId}`)
            const dataUser = await responseUser.json()
            setUser(dataUser)
            setComments(dataComments)
            setLoading(false)
        } catch (e) {
            //
        }
    }
    useEffect(() => {
        getData()
    }, [])
    return(
        <>
            {loading ? (
                <Loading/>
            ) : (
                <div className="flex flex-col items-center w-screen mt-20">
                    <div className="md:w-2/4 w-9/12 flex flex-col flex-wrap p-3 mb-5">
                        <h2 className="text-3xl font-medium">{post.title}</h2>
                        <Link to={`/users/${user.id}`}><h4 className="hover:underline text-slate-400 mt-1">{user.name}</h4></Link>
                        <h4 className="text-slate-400 mb-2">{user.email}</h4>
                        <p className="text-lg">{post.body}</p>
                    </div>
                    <div className="md:w-2/4 w-9/12 flex flex-col flex-wrap p-3 mb-5">
                        <h5 className="mb-3 text-xl"><b>Comments:</b></h5>
                        {comments.map((comment) => (
                            <CommentBox key={comment.id} name={comment.name} email={comment.email} body={comment.body}/>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}
export default PostDetail