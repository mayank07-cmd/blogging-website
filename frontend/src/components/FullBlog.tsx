import type { BlogType } from "../hooks";
import { Appbar } from "./AppBar";
import { Avatar } from "./BlogCard";

export const FullBlog = ({ blog }: { blog: BlogType }) => {
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 w-full max-w-screen-2xl pt-12">
          <div className="col-span-8">
            <div className="text-5xl font-extrabold">{blog.title}</div>
            <div className="text-slate-500 pt-2">Post on 30th March 2025</div>
            <div className="pt-4">{blog.content}</div>
          </div>
          <div className="col-span-4">
            <div className="text-slate-600 text-lg">Avatar</div>
            <div className="flex ">
              <div className="pr-4 flex flex-col justify-center">
                <Avatar
                  size="small"
                  name={blog.author.name || "Unknown Author"}
                />
              </div>
              <div className="text-xl font-bold">
                {blog.author.name || "Unknown Author"}
              </div>
              <div className="pt-2 text-slate-500">
                Random catch phrase about the author's ability to grab the
                user's attention
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
