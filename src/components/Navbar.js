import { Avatar } from "@material-ui/core";
import React from "react";
import HomeIcon from "@material-ui/icons/HomeRounded";
import ExploreIcon from "@material-ui/icons/ExploreOutlined";
import BookmarkIcon from "@material-ui/icons/BookmarkBorderOutlined";
import ArchiveIcon from "@material-ui/icons/ArchiveOutlined";
import AccountCircleIcon from "@material-ui/icons/AccountCircleRounded";
import SidebarRow from "./SidebarRow";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className=" p-3 sticky top-0 z-50 bg-white shadow-sm">
      <div className="flex items-center justify-between mx-auto max-w-lg md:max-w-7xl">
        <Link to="/buzzepic">
          <h1 className="text-purple-600 text-4xl font-bold hidden md:block">
            BuzzEpic
          </h1>
        </Link>
        <Link to="/buzzepic">
          <h1 className="text-purple-600 text-4xl font-bold md:hidden "> BE</h1>
        </Link>

        <div className="  max-w-[600px] xl:min-w-[300px] flex md:hidden">
          <SidebarRow
            Icon={HomeIcon}
            //  title={"Feed"}
            path={""}
          />
          <SidebarRow
            Icon={ExploreIcon}
            // title={"Explore"}
            path={"explore"}
          />
          <SidebarRow
            Icon={BookmarkIcon}
            // title={"Bookmarks"}
            path={"bookmarks"}
          />
          {/* <SidebarRow Icon={ArchiveIcon} title={"Archive"} /> */}

          <SidebarRow Icon={AccountCircleIcon} path={"profile/:profileId"} />
        </div>

        <div className="flex  space-x-2 items-center cursor-pointer flex-col">
          <Avatar
            src={
              user
                ? user?.avatarURL
                : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Eo_circle_purple_white_letter-s.svg/1200px-Eo_circle_purple_white_letter-s.svg.png"
            }
          ></Avatar>
          <p className="text-gray-600 font-bold">
            {user ? user?.firstName : "Hey Hi👋"}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
