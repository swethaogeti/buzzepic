import React from "react";
import HomeIcon from "@material-ui/icons/HomeRounded";
import ExploreIcon from "@material-ui/icons/ExploreOutlined";
import BookmarkIcon from "@material-ui/icons/BookmarkBorderOutlined";
import ArchiveIcon from "@material-ui/icons/ArchiveOutlined";
import AccountCircleIcon from "@material-ui/icons/AccountCircleRounded";
import SidebarRow from "./SidebarRow";
const Sidebar = () => {
  return (
    <div className="p-2 mt-5  sticky max-w-[600px] xl:min-w-[300px] hidden md:block">
      <SidebarRow Icon={HomeIcon} title={"Feed"} path={""} />
      <SidebarRow Icon={ExploreIcon} title={"Explore"} path={"explore"} />
      <SidebarRow Icon={BookmarkIcon} title={"Bookmarks"} path={"bookmarks"} />
      <SidebarRow Icon={ArchiveIcon} title={"Archive"} />

      <SidebarRow
        src="https://avatars.githubusercontent.com/u/65771591?v=4"
        // Icon={AccountCircleIcon}
        path={"profile/:profileId"}
        title={"Profile"}
      />
    </div>
  );
};

export default Sidebar;
