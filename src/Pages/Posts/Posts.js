import { useState, useEffect } from "react"
import PostBox from "./Components/PostBox"
import Loading from "../../Components/Loading"
const Posts = () => {
    const [posts, setPosts] = useState([])
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const getData = async () => {
        try {
            const responsePosts = await fetch("https://jsonplaceholder.typicode.com/posts")
            const responseUsers = await fetch("https://jsonplaceholder.typicode.com/users")
            const dataPosts = await responsePosts.json()
            const dataUsers = await responseUsers.json()
            setPosts(dataPosts)
            setUsers(dataUsers)
            setLoading(false)
        } catch (e) {
            console.log(e);
        }
    }
    const findNameById = (userId) => {
        let user = users.find((u) => u.id === userId)
        return user.name
    }
    useEffect(() => {
        getData()
    }, [])
    return(
        <>
            {loading ? (
                <Loading/>
            ) : (
                <div className="flex flex-col items-center w-screen mt-20 mb-8">
                    <h1 className="mb-10 text-4xl w-2/4 md:text-left text-center">User Post</h1>
                    {posts.map((post) => (
                        <PostBox key={post.id} id={post.id} title={post.title} userId={post.userId} name={findNameById(post.userId)} body={post.body}/>
                    ))}
                </div>
            )}
        </>
        
    )
}
export default Posts