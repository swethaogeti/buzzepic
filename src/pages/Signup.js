import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../features/authSlice";
import { USER_DATA, USER_TOKEN } from "../constants";
const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
  });

  const changeHandlerSignup = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const signupUserHandle = async (user) => {
    const res = await dispatch(signup(user));
    if (res !== undefined) {
      localStorage.setItem(USER_DATA, JSON.stringify(res.payload.createdUser));
      localStorage.setItem(USER_TOKEN, res.payload.encodedToken);
      navigate("/");
    }
  };
  return (
    <div>
      <div className="flex items-center justify-center fixed top-0 left-0 h-full w-full">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-[#fff] border-gray-600 w-[22rem] space-y-2 p-[1rem] m-[2rem] shadow-md"
        >
          <h3 className="text-center text-[1.8rem] font-[600] text-purple-500">
            SIGNUP
          </h3>
          <div className="flex flex-col">
            <h4 className="text-sm">First Name</h4>
            <input
              type="text"
              name="firstname"
              value={user.firstname}
              onChange={(e) => changeHandlerSignup(e)}
              placeholder="enter your first name"
              className="flex-1 p-1 border-2 rounded-[3px] outline-0"
            ></input>
          </div>
          <div className="flex flex-col">
            <h4 className="text-sm">Last Name</h4>
            <input
              type="text"
              name="lastname"
              value={user.lastname}
              onChange={(e) => changeHandlerSignup(e)}
              placeholder="enter your last name"
              className="flex-1 p-1 border-2 rounded-[3px] outline-0"
            ></input>
          </div>
          <div className="flex flex-col">
            <h4 className="text-sm">User Name</h4>
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={(e) => changeHandlerSignup(e)}
              className="flex-1 p-1 border-2 rounded-[3px] outline-0"
              placeholder="enter your username"
            ></input>
          </div>

          <div className="flex flex-col">
            <h4 className="text-sm">Password</h4>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={(e) => changeHandlerSignup(e)}
              placeholder="enter your password"
              className="flex-1 p-1 border-2 rounded-[3px] outline-0"
            ></input>
          </div>

          <button
            className="w-full p-1 bg-purple-600 text-white font-bold rounded-[3px] tracking-wider cursor-pointer"
            onClick={() => signupUserHandle(user)}
          >
            SIGNUP
          </button>

          <div className="flex space-x-1">
            <p className="text-gray-500 ">Don't have an account create one </p>
            <Link to="/login" className="text-purple-600">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
