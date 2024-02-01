import { BlogCard } from "@/components/BlogCard";
export const AllBlogSec = ({ data, DataPlus }) => {
  return (
    <div className="flex  w-full flex-col  container  gap-[24px] ">
      <div className="w-[80%]">
        <div className="flex  flex-col  justify-center  gap-[31px] ">
          <div className="text-[24px] ">All Blog Post</div>
          <div className="flex justify-between  container">
            <div className="*:text-black *:text-xs  flex flex-row gap-[10px] flex-between">
              <div>All</div>
              <div>Design</div>
              <div>Travel</div>
              <div>Fashion </div>
              <div>Technology</div>
              <div>Branding</div>
            </div>
            <div className="text-black text-xs">View All</div>
          </div>
        </div>
      </div>
      <div className="flex  ">
        <BlogCard data={data}></BlogCard>
      </div>
      <div className="flex justify-center items-center">
        <button
          onClick={DataPlus}
          className="rounded-[6px] w-[123px] h-[48px] border-[1px] border-solid border-gray-200 text-center flex justify-center items-center py-[12px] px-[20px]"
        >
          Load More
        </button>
      </div>
    </div>
  );
};
