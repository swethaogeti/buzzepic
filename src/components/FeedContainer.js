import React, { useState } from "react";
import Posts from "./Posts";
import TextInputBox from "./TextInputBox";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllPosts } from "../features/postsSlice";
import SortIcon from "@material-ui/icons/Sort";
import FilterModal from "./FilterModal";
import { getSortPosts } from "../utils";

const FeedContainer = () => {
  const { posts } = useSelector((state) => state.posts);
  const { sort } = useSelector((state) => state.filters);
  console.log(sort);
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  useEffect(() => {
    dispatch(getAllPosts());
  }, []);
  const sortPosts = getSortPosts(posts, sort);

  return (
    <div className="flex-grow  h-screen pb-20 ">
      <div className="mx-auto max-w-lg md:max-w-full overflow-scroll h-full scrollbar-hide">
        <TextInputBox />
        <div className="flex justify-end  items-end flex-col p-4 relative">
          <div className="flex justify-end space-x-2 cursor-pointer">
            <h2 className="text-purple-600 font-bold">{sort}</h2>
            <SortIcon onClick={() => setModal(true)} />
          </div>
          {modal && <FilterModal setModal={setModal} />}
        </div>

        <Posts posts={sortPosts} />
      </div>
    </div>
  );
};

export default FeedContainer;
