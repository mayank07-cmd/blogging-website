import { Avatar } from "./BlogCard";
import { Link } from "react-router-dom";

export const Appbar = () => {
  return (
    <div className="border-b flex justify-between px-10 py-2">
      <Link to={"/"}
        className="flex flex-col direction-col justify-center cursor-pointer">
        Medium
      </Link>
      <div>
        <Link to={'/publish'}>
        <button type="button" className="text-white bg-green-700 hover:bg-green-900 
        focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full 
        text-sm px-5 py-3 text-center me-5 mb-2"> New </button>
        </Link>
        <Avatar size={"big"} name="Mayank" />
      </div>
    </div>
  );
};
