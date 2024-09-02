import { Link, NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
    const links = [
        <li key="item-1">
            <NavLink
                to="/"
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
                Home
            </NavLink>
        </li>,
        <li key="item-2">
            <NavLink
                to="/listedBook"
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
                Listed Books
            </NavLink>
        </li>,
        <li key="item-3">
            <NavLink
                to="/pageToRead"
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
                Page To Read
            </NavLink>
        </li>
    ];

    return (
        <div className="navbar bg-base-100 w-full max-w-[1170px] mx-auto flex flex-row items-center justify-between">
            <div className="navbar-start flex items-center">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 w-52 p-2 shadow bg-base-100 rounded-box z-50"
                    >
                        {links}
                    </ul>
                </div>
                <Link to="/" className="text-3xl font-extrabold ml-2">
                    Book Vibe
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-2">
                    {links}
                </ul>
            </div>
            <div className="navbar-end flex items-center gap-4">
                <Link to="/signin" className="btn bg-[#23BE0A] text-white px-5 py-3 rounded-md">
                    Sign In
                </Link>
                <Link to="/signup" className="btn bg-[#59C6D2] text-white px-5 py-3 rounded-md">
                    Sign Up
                </Link>
            </div>
        </div>
    );
};

export default Header;
