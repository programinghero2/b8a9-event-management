import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const navLinks = <div className="md:flex lg:flex">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/blogs">blogs</NavLink></li>
        <li><NavLink to="/clientPackage">Client Packages</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>
    </div>
    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast("Logout successfully")
            })
            .catch(error => {
                toast(error.message)
            })
    }
    return (
        <div className="navbar bg-blue-300 w-11/12 mx-auto">
            <div className="navbar-start">
                <div className="dropdown z-50 md:hidden">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl md:text-2xl font-bold ">BRIDES</a>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <div className="dropdown absolute z-50">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user && user.photoURL} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 border right-0 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <button>
                                    {user && user.displayName}
                                </button>
                            </li>
                            <li><button onClick={handleLogOut}>Logout</button></li>
                        </ul>
                    </div> :
                        <NavLink to="/login" className="btn btn-sm">Login</NavLink>

                }
            </div>
        </div>
    );
};

export default Navbar;