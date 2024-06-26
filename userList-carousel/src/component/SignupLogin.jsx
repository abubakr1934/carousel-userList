import React, { useEffect } from "react";
import "./SignupLogin.css";

import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

import google from "../assets/google1.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";

const SignupLogin = () => {
  useEffect(() => {
    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");
    const container = document.getElementById("container");

    if (signUpButton && signInButton && container) {
      signUpButton.addEventListener("click", () => {
        container.classList.add("right-panel-active");
      });

      signInButton.addEventListener("click", () => {
        container.classList.remove("right-panel-active");
      });
      return () => {
        signUpButton.removeEventListener("click", () => {
          container.classList.add("right-panel-active");
        });

        signInButton.removeEventListener("click", () => {
          container.classList.remove("right-panel-active");
        });
      };
    }
  }, []);

  return (
    <div className="container cont" id="container">
      <div className="form-container sign-up-container">
        <form action="#">
          <h1>Create Account</h1>

          <input
            type="text"
            placeholder="Name"
            className="mb-3"
            style={{ borderRadius: "5px" }}
          />
          <input
            type="email"
            placeholder="Email"
            className="mb-3"
            style={{ borderRadius: "5px" }}
          />
          <input
            type="password"
            placeholder="Password"
            className="mb-3"
            style={{ borderRadius: "5px" }}
          />

          <button style={{ borderRadius: "25px" }} className="mb-3">
            Sign Up
          </button>
          <span>or register with:</span>
          <div className="social-container">
            <a href="#" className="social">
              <img src={facebook} alt="" />
            </a>
            <a href="#" className="social">
              <img src={google} alt="" />
            </a>
            <a href="#" className="social">
              <img src={linkedin} alt="" />
            </a>
            <a href="" className="social">
              <img src={twitter} alt="" />
            </a>
          </div>
        </form>
      </div>
      
      <div className="form-container sign-in-container">
        <form action="#">
          <h1>Sign in</h1>

          <input
            type="email"
            placeholder="Email"
            className="mb-3"
            style={{ borderRadius: "5px" }}
          />
          <input
            type="password"
            placeholder="Password"
            className="mb-3"
            style={{ borderRadius: "5px" }}
          />
          <a href="#">Forgot your password?</a>
          <button style={{ borderRadius: "25px" }} className="mb-3">
            {" "}
            Sign In
          </button>
          <span>or login with</span>
          <div className="social-container">
            <a href="#" className="social">
              <img src={facebook} alt="" />
            </a>
            <a href="#" className="social">
              <img src={google} alt="" />
            </a>
            <a href="#" className="social">
              <img src={linkedin} alt="" />
            </a>
            <a href="" className="social">
              <img src={twitter} alt="" />
            </a>
          </div>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>
              To keep connected with us please login with your personal info
            </p>
            <button
              className="ghost"
              id="signIn"
              style={{ borderRadius: "25px" }}
            >
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>
              New to userList?, Enter your personal details and start journey
              with us
            </p>
            <button
              className="ghost"
              id="signUp"
              style={{ borderRadius: "25px" }}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupLogin;
