import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import RoomIcon from "@material-ui/icons/Room";
const Comment = ({ item }) => {
  return (
    <div className="flex space-x-1 p-2 m-2 border cursor-pointer bg-white ">
      <img src={item?.avatarURL} className="h-14 w-14 rounded-full"></img>
      <div className="space-y-3 flex-1">
        <div className="flex items-center justify-between ">
          <div>
            <h3 className="text-purple-500 font-[600] ">
              {item.firstName} {item.lastName}
            </h3>

            <p className="text-gray-500 font-thin text-[.7rem] md:text-[.9rem]">
              {item.username}
            </p>
          </div>
        </div>

        <p className="text-[.8rem] md:text-[1rem] ">{item.text}</p>

        <div className="text-gray-600 flex space-x-2"></div>
      </div>
    </div>
  );
};

export default Comment;
