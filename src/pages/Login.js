import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="flex items-center justify-center fixed top-0 left-0 h-full w-full">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-[#fff] border-gray-600 w-[22rem] space-y-2 p-[1rem] m-[2rem] shadow-md"
        >
          <h3 className="text-center text-[1.8rem] font-[600] text-purple-500">
            LOGIN
          </h3>
          <div className="flex flex-col">
            <h4 className="text-sm">Email</h4>
            <input
              className="flex-1 p-1 border-2 rounded-[3px] outline-0"
              placeholder="enter your email"
            ></input>
          </div>

          <div className="flex flex-col">
            <h4 className="text-sm">Password</h4>
            <input
              placeholder="enter your password"
              className="flex-1 p-1 border-2 rounded-[3px] outline-0"
            ></input>
          </div>

          <button className="w-full p-1 bg-purple-600 text-white font-bold rounded-[3px] tracking-wider cursor-pointer">
            LOGIN
          </button>
          <button className="w-full p-1 bg-[#fff] text-gray-500 font-bold border-2 rounded-[3px]  tracking-wider text-sm cursor-pointer">
            GUEST LOGIN
          </button>
          <div className="flex space-x-1">
            <p className="text-gray-500 ">Don't have an account create one </p>
            <Link to="/signup" className="text-purple-600">
              Signup
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
