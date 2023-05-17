import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid";
import { AuthContext } from "../../providers/AuthProviders";
import { ToastContainer, toast } from "react-toastify";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("User logout successfully");
      })
      .catch((error) => {
        console.error(error.message);
        toast.error(error.message);
      });
  };
  return (
    <header className="bg-gray-100 sticky top-0 z-10">
      <ToastContainer />
      <nav className="navbar max-w-7xl mx-auto flex justify-between items-center py-4 px-4">
        <div className="">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  exact
                  activeclassName="active text-[#757575] font-semibold hover:text-success"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeclassName="active text-[#757575] font-semibold hover:text-success"
                  to="/blog"
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName="active text-[#757575] font-semibold hover:text-success"
                  to="/login"
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName="active text-[#757575] font-semibold hover:text-success"
                  to="/register"
                >
                  Register
                </NavLink>
              </li>
            </ul>
          </div>
          <Link to="/">
            <h3 className="text-xl md:text-2xl text-[#1A1919] font-bold">
              awesomeChef
            </h3>
          </Link>
        </div>
        <div className="hidden lg:flex">
          <ul className="flex items-center gap-6 px-1">
            <li>
              <NavLink
                activeClassName="active text-[#757575] font-semibold hover:text-success"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="active text-[#757575] font-semibold hover:text-success"
                to="/blog"
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="active text-[#757575] font-semibold hover:text-success"
                to="/login"
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="active text-[#757575] font-semibold hover:text-success"
                to="/register"
              >
                Register
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          {user ? (
            <div className="flex items-center justify-center gap-6">
              <img
                title={user.displayName}
                className="w-12 h-12 rounded-full"
                src={user.photoURL}
                alt=""
              />
              <button
                onClick={handleLogOut}
                className="btn border-0 text-white bg-success px-4 py-2 font-bold rounded-md flex items-center gap-1"
              >
                <ArrowLeftOnRectangleIcon className="h-5 w-5" />
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn border-0 text-white bg-success px-4 py-2 font-bold rounded-md flex items-center gap-1">
                <ArrowRightOnRectangleIcon className="h-5 w-5" />
                Login
              </button>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;