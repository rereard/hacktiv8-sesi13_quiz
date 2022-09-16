import PostBox from "../Posts/Components/PostBox"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Loading from "../../Components/Loading"
const UserDetail = () => {
    let params = useParams()
    const [user, setUser] = useState({})
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const getData = async () => {
        try {
            const responseUser = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
            const responsePosts = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}/posts`)
            const dataUser = await responseUser.json()
            const dataPosts = await responsePosts.json()
            setUser(dataUser)
            setPosts(dataPosts)
            setLoading(false)
        } catch (e) {
            //
        }
    }
    useEffect(() => {
        getData()
    }, []);
    return(
        <>
            {loading ? (
                <Loading/>
            ) : (
                <div className="flex flex-col items-center w-screen mt-20">
                    <div className="md:w-2/4 w-9/12 flex flex-col flex-wrap p-3 mb-5">
                        <h2 className="text-4xl font-medium">{user.name}</h2>
                        <h4 className="text-slate-400 text-lg mt-2">{user.username}</h4>
                        <h4 className="text-slate-400 text-lg mb-4">{user.email}</h4>
                        <h4><b>Address: </b>{user.address.suite}, {user.address.street} Street, {user.address.city} City, {user.address.zipcode}</h4>
                        <h4><b>Phone Number: </b>{user.phone}</h4>
                        <h4><b>Website: </b>{user.website}</h4>
                    </div>
                    <div className="w-screen flex flex-col items-center flex-wrap p-3 mb-5 ">
                        <h5 className="mb-3 text-xl md:w-2/4"><b>User's Posts:</b></h5>
                        {posts.map((post) => (
                            <PostBox key={post.id} title={post.title} id={post.id} body={post.body}/>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}
export default UserDetail