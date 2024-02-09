import { BlogCard } from "@/components/BlogCard";
import { useContext } from "react";
import { FirstContext } from "../context";
import Link from "next/link";
export const AllBlogSec = ({}) => {
  const { PlusData } = useContext(FirstContext);
  return (
    <div className="flex  w-full flex-col  container  gap-[24px]  ">
      <div className="">
        <div className="flex  flex-col  justify-between   gap-[31px] ">
          <div className="text-[24px] ">All Blog Post</div>
          <div className="sm:flex justify-between hidden  ">
            <div className="*:text-black *:text-xs  flex flex-row gap-[10px] flex-between">
              <div>All</div>
              <div>Design</div>
              <div>Travel</div>
              <div>Fashion </div>
              <div>Technology</div>
              <div>Branding</div>
            </div>
            <Link href="/Blog">
              <div className="text-black text-xs">View All</div>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center sm:px-[0px] px-[20px]  ">
        <BlogCard></BlogCard>
      </div>
      <div className="flex justify-center items-center">
        <button
          onClick={PlusData}
          className="rounded-[6px] w-[123px] h-[48px] border-[1px] border-solid border-gray-200 text-center flex justify-center items-center py-[12px] px-[20px]"
        >
          Load More
        </button>
      </div>
    </div>
  );
};
