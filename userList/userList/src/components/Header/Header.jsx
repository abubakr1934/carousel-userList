import React, { useEffect } from "react";
import logo from "../../assets/userList-logo-large.png";
import "./Header.css";
import { TbLogin2 } from "react-icons/tb";
import { BsFillSignIntersectionFill } from "react-icons/bs";

const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.fixed-header');
      if (window.scrollY > 100) {
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
                <a href="#" title="" className="text-xl font-medium links text-white">
                  Home
                </a>
                <a href="#" title="" className="text-xl font-medium links text-white">
                  Features
                </a>
                <a href="#" title="" className="text-xl font-medium links text-white">
                  Contact Us
                </a>
                <a href="#" title="" className="text-xl font-medium links text-white">
                  Blogs
                </a>
              </div>

              <div className="hidden lg:flex lg:items-center lg:space-x-5 margin-right-override">
              <button class="bg-white text-black text-xl font-medium px-4 py-2 rounded shadow button-hover">Login</button>
              <button class="bg-white text-black text-xl font-medium px-4 py-2 rounded shadow button-hover">Signup</button>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
