import React, { useEffect } from "react";
import logo from "../../assets/userList-logo-large.png";
import "./Header.css";
import { TbLogin2 } from "react-icons/tb";
import { BsFillSignIntersectionFill } from "react-icons/bs";

const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.fixed-header');
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <header className="fixed-header">
        <div>
          <div className="px-4 mx-auto sm:px-6 lg:px-8">
            <nav className="relative flex items-center justify-between h-16 lg:h-20">
              <div className="flex-shrink-0">
                <a href="#" title="" className="flex">
                  <img className="w-auto h-8 lg:h-10" src={logo} alt="Logo" />
                </a>
              </div>

              <div className="hidden lg:flex lg:items-center lg:space-x-7">
                <a href="#" title="" className="text-xl font-medium links text-black">
                  Home
                </a>
                <a href="#" title="" className="text-xl font-medium links text-black">
                  Features
                </a>
                <a href="#" title="" className="text-xl font-medium links text-black">
                  Contact Us
                </a>
                <a href="#" title="" className="text-xl font-medium links text-black">
                  Blogs
                </a>
              </div>

              <div className="hidden lg:flex lg:items-center lg:space-x-5">
                <button
                  type="button"
                  className="inline-block rounded bgg1 px-6 pb-2 pt-2.5 text-s font-medium leading-normal text-black shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong button-hover"
                >
                  Signup
                </button>
                <button
                  type="button"
                  className="inline-block rounded bgg1 px-6 pb-2 pt-2.5 text-s font-medium leading-normal text-black shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong button-hover"
                >
                  Login
                </button>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
