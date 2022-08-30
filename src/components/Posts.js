import Post from "./Post";
const Posts = ({ posts }) => {
  return (
    <div className="p-1 m-1 ">
      {posts?.map((item) => {
        return <Post key={item._id} item={item} />;
      })}
    </div>
  );
};

export default Posts;
