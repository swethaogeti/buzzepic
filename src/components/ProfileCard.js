import React from "react";

const ProfileCard = () => {
  return (
    <div className="flex md:space-x-5 cursor-pointer border-2 flex-wrap  md:flex-nowrap m-2 p-4 ">
      <div className="h-20 w-20 md:h-40 md:w-40">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Eo_circle_purple_white_letter-s.svg/1200px-Eo_circle_purple_white_letter-s.svg.png"
          className="h-auto max-w-full"
        ></img>
      </div>

      <div className="space-y-1">
        {/* ***************************** */}
        <div className="flex items-center justify-between">
          <div className=" flex flex-col ">
            <h2 className="text-gray-800 font-semibold text-[1.5rem]">
              Swetha Ogeti
            </h2>
            <p className="text-gray-500  text-[1.1rem]">@sweety5555</p>
          </div>
          <button className="w-14 rounded-full bg-purple-500 text-white p-1">
            Edit
          </button>
        </div>
        {/* ***************************** */}

        <p>
          “A thousand words will not leave so deep an impression as one deed.”
        </p>
        <div className="font-thin text-sm text-gray-400">
          <a href="https://github.com/swethaogeti">
            {"https://github.com/swethaogeti"}
          </a>
        </div>

        <div className="flex space-x-7">
          <div className="flex space-x-1">
            <h4 className="font-extrabold">4</h4>
            <p>Following</p>
          </div>
          <div className="flex space-x-1">
            <h4 className="font-extrabold">6</h4>
            <p>Followers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
