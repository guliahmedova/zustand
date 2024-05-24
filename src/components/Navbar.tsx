import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/">Counter</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/users">Users</Link>
        </div>
    )
}

export default Navbar