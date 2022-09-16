import { Link } from "react-router-dom"
const UserBox = (props) => {
    return(
        <div className="border-2 border-slate-400 rounded-lg md:w-2/4 w-9/12 flex flex-col flex-wrap p-3 mb-5">
            <Link to={`/users/${props.id}`}><h2 className="hover:underline text-2xl font-medium">{props.name}</h2></Link>
            <h4 className="text-slate-400 text-lg mt-2">{props.username}</h4>
            <h4 className="text-slate-400 text-lg">{props.email}</h4>
        </div>
    )
}
export default UserBox