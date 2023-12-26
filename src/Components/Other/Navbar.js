import React from "react";
import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const handleNavToggle = () => {
    setToggleNav(!toggleNav);
  };
  return (
    <>
      <div className="flex items-center justify-between w-full p-4 bg-green-300 text-slate-50">
        <span className="text-3xl text-green-800 font-bold">
          The Grand Exotica
        </span>
        <span
          onClick={handleNavToggle}
          className=" flex md:hidden text-blue-950 text-3xl"
        >
          <TiThMenu />
        </span>
        <div className="hidden md:flex items-center justify-end space-x-4 text-lg">
          <ul className="flex items-center  space-x-4 justify-end">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/galary">Galary</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
          </ul>

          <button className="rounded-full text-lg bg-green-800 px-5 py-2">
            <Link to="/log-in">Sign-In</Link>
          </button>
          <button className="rounded-full text-lg bg-green-800 px-5 py-2">
            <Link to="/register">Sign-up</Link>
          </button>
        </div>
      </div>

      {/* for responsive */}

      {toggleNav ? (
        <div className="bg-teal-50 p-4">
          <ul className="flex flex-col items-start justify-center gap-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/galary">Galary</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
          </ul>
          <div className="flex items-center justify-start space-x-4 mt-4">
            <button className="rounded-full text-lg bg-green-800 px-5 py-2">
              <Link to="/log-in">Sign-In</Link>
            </button>
            <button className="rounded-full text-lg bg-green-800 px-5 py-2">
              <Link to="/register">Sign-up</Link>
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Navbar;
