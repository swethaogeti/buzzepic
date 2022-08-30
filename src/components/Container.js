import Posts from "./Posts";

const Container = ({ posts }) => {
  return (
    <div className="flex-grow h-screen pb-20 ">
      <div className="mx-auto max-w-lg md:max-w-full  overflow-scroll h-full scrollbar-hide">
        <Posts posts={posts} />
      </div>
    </div>
  );
};

export default Container;
