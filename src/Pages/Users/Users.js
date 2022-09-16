import UserBox from "./Components/UserBox"
import { useState, useEffect } from "react"
import Loading from "../../Components/Loading"
const Users = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const getData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users/')
            const data = await response.json()
            setUsers(data)
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
                <div className="flex flex-col items-center w-screen mt-20 mb-8">
                    <h1 className="mb-10 text-4xl w-2/4 md:text-left text-center">User List</h1>
                    {users.map((user) => (
                        <UserBox key={user.id} id={user.id} name={user.name} username={user.username} email={user.email}/>
                    ))}
                </div>
            )}
        </>
    )
}
export default Users