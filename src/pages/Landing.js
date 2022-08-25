import React from "react";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <div className="h-screen flex justify-center items-center flex-wrap  gap-x-4 gap-y-4 p-10 ]">
      <div className="md:w-[500px] flex flex-col items-center justify-center bg-[url()]">
        <h1 className="text-purple-600 text-5xl font-bold font-serif  leading-snug text-center">
          BUZZEPIC
        </h1>
        <h2 className="text-gray-500 text-[1.7rem] text-center pb-3 font-semibold">
          {" "}
          One app the world loves !
        </h2>
        <p className="text-gray-400 text-[1.2rem] text-center ">
          Brownie I love icing shortbread I love. Liquorice croissant pie I love
          macaroon. Bear claw cake chocolate cake dragée cupcake jelly beans
          fruitcake brownie
        </p>
        <Link to="/login">
          <button className="bg-gray-400 p-2 rounded text-white font-bold text-center mt-3 ">
            Login to Explore
          </button>
        </Link>
      </div>
      {/* <div className="outline-dotted">
        <img
          className=""
          src="https://cdn.dribbble.com/users/614270/screenshots/4046303/yoga_drib01.gif"
        ></img>
      </div> */}
      <div className="flex justify-center items-center mx-auto bg-purple-50">
        <img
          src="https://cdn.dribbble.com/users/614270/screenshots/4046303/yoga_drib01.gif"
          className="object-cover h-[400px] w-[400px] md:h-[600px] md:w-[600px]
      "
        ></img>
      </div>
    </div>
  );
};

export default Landing;
