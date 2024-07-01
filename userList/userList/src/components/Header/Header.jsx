import React from "react";
import logo from "../../assets/userList-logo-large.png";
import "./Header.css";
import { TbLogin2 } from "react-icons/tb";
import { BsFillSignIntersectionFill } from "react-icons/bs";

const Header = () => {
  return (
    <div>
      <header className="fixed-header">
        <div className="bg-orange-400 border-gray-200">
          <div className="px-4 mx-auto sm:px-6 lg:px-8">
            <nav className="relative flex items-center justify-between h-16 lg:h-20">
              <div className="flex-shrink-0">
                <a href="#" title="" className="flex">
                  <img className="w-auto h-8 lg:h-10" src={logo} alt="Logo" />
                </a>
              </div>

              <div className="hidden lg:flex lg:items-center lg:space-x-7">
                <a
                  href="#"
                  title=""
                  className="text-xl font-medium links text-black"
                >
                  Home
                </a>
                <a
                  href="#"
                  title=""
                  className="text-xl  font-medium links text-black"
                >
                  Features
                </a>
                <a
                  href="#"
                  title=""
                  className="text-xl font-medium links text-black"
                >
                  Contact Us
                </a>
                <a
                  href="#"
                  title=""
                  className="text-xl font-medium links text-black"
                >
                  Blogs
                </a>
              </div>

              <div className="hidden lg:flex lg:items-center lg:space-x-5">
                <button
                  type="button"
                  class="inline-block rounded bg-white px-6 pb-2 pt-2.5 text-s font-medium leading-normal text-black shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong button-hover"
                >
                  Signup
                  
                </button>
                <button
                  type="button"
                  class="inline-block rounded bg-white px-6 pb-2 pt-2.5 text-s font-medium leading-normal text-black shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong button-hover"
                  
                >
                  Login
                </button>
              </div>

              {/* <button type="button" className="flex items-center justify-center ml-auto text-white bg-black rounded-full w-9 h-9 lg:hidden">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </button>

              <button type="button" className="inline-flex p-2 ml-5 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button> */}
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
