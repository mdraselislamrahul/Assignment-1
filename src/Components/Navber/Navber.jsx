import { NavLink } from "react-router-dom";
import img from "../Image/1048966.png"
const Navber = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden md:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><NavLink to="/"
                                style={({ isActive, }) => {
                                    return {
                                        fontWeight: isActive ? "bold" : "",
                                        color: isActive ? "red" : "",

                                    };
                                }}
                            >Home</NavLink></li>
                            <li className=""><NavLink to="/assignment"
                                style={({ isActive, }) => {
                                    return {
                                        fontWeight: isActive ? "bold" : "",
                                        color: isActive ? "red" : "",

                                    };
                                }}
                            >Assignments</NavLink></li>
                            <li className=""><NavLink to="/about"
                                style={({ isActive, }) => {
                                    return {
                                        fontWeight: isActive ? "bold" : "",
                                        color: isActive ? "red" : "",

                                    };
                                }}
                            >Abouts Us</NavLink></li>
                        </ul>
                    </div>
                    <a className=""><img className="h-20 w-full" src={img} alt="" /></a>
                </div>
                <div className="navbar-center hidden md:flex lg:flex">
                    <ul className=" menu-horizontal px-1">
                        <li><NavLink to="/"
                            style={({ isActive, }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",
                                    color: isActive ? "red" : "",

                                };
                            }}
                        >Home</NavLink></li>
                        <li className="ml-10"><NavLink to="/assignment"
                            style={({ isActive, }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",
                                    color: isActive ? "red" : "",

                                };
                            }}
                        >Assignments</NavLink></li>
                        <li className="ml-10"><NavLink to="/about"
                            style={({ isActive, }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",
                                    color: isActive ? "red" : "",

                                };
                            }}
                        >Abouts Us</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Navber;