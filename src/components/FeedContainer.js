import React, { useState } from "react";
import Posts from "./Posts";
import TextInputBox from "./TextInputBox";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllPosts } from "../features/postsSlice";
import SortIcon from "@material-ui/icons/Sort";
import FilterModal from "./FilterModal";

const FeedContainer = () => {
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  useEffect(() => {
    dispatch(getAllPosts());
  }, []);
  return (
    <div className="flex-grow  h-screen pb-20 ">
      <div className="mx-auto max-w-lg md:max-w-full overflow-scroll h-full">
        <TextInputBox />
        <div className="flex justify-end  items-end flex-col p-4 relative">
          <div className="flex justify-end  cursor-pointer">
            <h2>LATEST</h2>
            <SortIcon onClick={() => setModal(true)} />
          </div>
          {modal && <FilterModal setModal={setModal} />}
        </div>

        <Posts posts={posts} />
      </div>
    </div>
  );
};

export default FeedContainer;
