import React from "react";
import DownArrowIcon from "@material-ui/icons/ArrowDownwardRounded";
import UpArrowIcon from "@material-ui/icons/ArrowUpwardRounded";
import TrendingIcon from "@material-ui/icons/TrendingUpRounded";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { filterSort } from "../features/filterSlice";
const FilterModal = ({ setModal }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div
        className="flex flex-col  space-y-2 cursor-pointer  border-2 w-24 absolute top-10 z-50 bg-white right-5 shadow-md"
        onClick={() => setModal(false)}
      >
        <div className="flex">
          <UpArrowIcon />
          <button
            className="hover:bg-white  font-medium text-gray-700 "
            onClick={() => dispatch(filterSort("latest"))}
          >
            Latest
          </button>
        </div>
        <div className="flex">
          <TrendingIcon />
          <button
            className="hover:bg-white  font-medium  text-gray-700"
            onClick={() => dispatch(filterSort("trending"))}
          >
            Trending
          </button>
        </div>
        <div className="flex">
          <DownArrowIcon />
          <button
            className="hover:bg-white  font-medium text-gray-700"
            onClick={() => dispatch(filterSort("oldest"))}
          >
            Oldest
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
