import React from "react";
import { useState } from "react";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
// import { a } from 'react-scroll';
import {} from "react-router-dom";

const Navbar = () => {
  const [action, setAction] = useState(false);
  return (
    <div className="sticky top-0 z-50">
      <div className="navbar">
        <div className="navbar-start ">
            
          <div className="dropdown">
            <label
              onClick={() => setAction(!action)}
              tabIndex={0}
              className="btn mt-4 ml-3 btn-ghost text-red-800 block sm:hidden"
            >
              {!action && (
                <AdjustmentsHorizontalIcon className="mt-2 h-6 w-6 text-red-800" />
              )}
              {action && <XMarkIcon className="mt-2 h-6 w-6 text-red-800" />}
            </label>
            {action && (
              <ul
                tabIndex={0}
                className="ml-[33vw] menu menu-compact dropdown-content mt-1 p-2 shadow bg-base-100 rounded-box w-100"
              >
                <a href="#about" className="btn btn-ghost normal-case text-xl">
                  Home
                </a>
                <a href="#about" className="btn btn-ghost normal-case text-xl">
                  About
                </a>
                <a
                  href="#service"
                  className="btn btn-ghost normal-case text-xl"
                >
                  Service
                </a>
                <a href="#skills" className="btn btn-ghost normal-case text-xl">
                  Dashboard
                </a>
                <a
                  href="#contact"
                  className="btn btn-ghost normal-case text-xl"
                >
                  Contact
                </a>
              </ul>
            )}
          </div>
          <h1 className="text-3xl ml-2">LOGO</h1>
        </div>

        <div className="navbar-center hidden sm:block">
          <a href="#about" className="btn btn-ghost normal-case text-xl">
            Home
          </a>
          <a href="#about" className="btn btn-ghost normal-case text-xl">
            About
          </a>
          <a href="#project" className="btn btn-ghost normal-case text-xl">
            Service
          </a>
          <a href="#skills" className="btn btn-ghost normal-case text-xl">
            Skills
          </a>
          <a href="#contact" className="btn btn-ghost normal-case text-xl">
            Contact
          </a>
        </div>

        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
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
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end mx-4">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="bear"
                  src="https://tinypng.com/images/social/website.jpg"
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
