import { Avatar } from "@material-ui/core";
import React from "react";
import HomeIcon from "@material-ui/icons/HomeRounded";
import ExploreIcon from "@material-ui/icons/ExploreOutlined";
import BookmarkIcon from "@material-ui/icons/BookmarkBorderOutlined";
import ArchiveIcon from "@material-ui/icons/ArchiveOutlined";
import AccountCircleIcon from "@material-ui/icons/AccountCircleRounded";
import SidebarRow from "./SidebarRow";
const Navbar = () => {
  return (
    <div className=" p-3 sticky top-0 z-50 bg-white shadow-sm">
      <div className="flex items-center justify-between mx-auto max-w-lg md:max-w-7xl">
        <h1 className="text-purple-600 text-4xl font-bold hidden md:block">
          BuzzEpic
        </h1>
        <h1 className="text-purple-600 text-4xl font-bold md:hidden "> BE</h1>
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
          <SidebarRow Icon={ArchiveIcon} title={"Archive"} />

          {/* <SidebarRow
            src="https://avatars.githubusercontent.com/u/65771591?v=4"
            Icon={AccountCircleIcon}
            path={"profile/:profileId"}
             title={"Profile"}
          /> */}
        </div>

        <div className="flex  space-x-2 items-center cursor-pointer flex-col">
          <Avatar src="https://avatars.githubusercontent.com/u/65771591?v=4"></Avatar>
          <p className="text-gray-600 font-bold">Sweety </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
