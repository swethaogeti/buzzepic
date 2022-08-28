import React from "react";
import DownArrowIcon from "@material-ui/icons/ArrowDownwardRounded";
import UpArrowIcon from "@material-ui/icons/ArrowUpwardRounded";
import TrendingIcon from "@material-ui/icons/TrendingUpRounded";

const FilterModal = ({ setModal }) => {
  return (
    <div>
      <div
        className="flex flex-col  space-y-2 cursor-pointer bg-gray-50 border-2 w-24 absolute top-10 z-10 right-5"
        onClick={() => setModal(false)}
      >
        <div className="flex">
          <UpArrowIcon />
          <button className="hover:bg-white  font-bold text-gray-700 ">
            Latest
          </button>
        </div>
        <div className="flex">
          <TrendingIcon />
          <button className="hover:bg-white  font-bold  text-gray-700">
            Trending
          </button>
        </div>
        <div className="flex">
          <DownArrowIcon />
          <button className="hover:bg-white  font-bold  text-gray-700">
            Oldest
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
