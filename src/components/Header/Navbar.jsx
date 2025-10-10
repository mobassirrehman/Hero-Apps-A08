import React from "react";
import { NavLink } from "react-router";
import logoImg from '../../assets/logo.png'
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/" className={({ isActive }) => 
        isActive ? "text-primary font-bold" : "" 
        }>Home</NavLink>
      </li>
      <li>
        <NavLink to="/apps" className={({ isActive }) => 
        isActive ? "text-primary font-bold" : ""
        }>Apps</NavLink>
      </li>
      <li>
        <NavLink to="/installation" className={({ isActive }) => 
        isActive ? "text-primary font-bold" : ""
        }>Installation</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm px-4 lg:px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-xl font-bold text-primary">
        <img className="w-8 h-8" src={logoImg} alt="" />
          HERO.IO
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">{links}</ul>
      </div>
      <div className="navbar-end">
      <a href="https://github.com/mobassirrehman"
         target="_blank"
         rel="noopener noreferrer"
         className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] btn-sm md:btn-md text-white ml-2 text-xs md:text-sm gap-2">
          <FaGithub className="w-5 h-5" />
          Contribute
      </a>
      </div>
    </div>
  );
};

export default Navbar;