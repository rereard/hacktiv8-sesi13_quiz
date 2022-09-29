import { Link } from 'react-router-dom'
const Navbar = () => {
    return(
        <nav className="w-screen border-2 border-b-stone-700 bg-white flex justify-evenly text-lg p-3 font-medium top-0 fixed">
            <Link to="/" role={'linkHome'} className="hover:underline">Home</Link>
            <Link to="/posts"  role={'linkPosts'} className="hover:underline">Posts</Link>
            <Link to="/users"  role={'linkUsers'} className="hover:underline">Users</Link>
        </nav>
    )
}
export default Navbar