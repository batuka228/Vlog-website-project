import { BlogCard } from "@/components/BlogCard";
export const AllBlogSec = ({ data, articlesNumber }) => {
  return (
    <div className="w-full h-fit flex justify-center items-center ">
      <div className="flex flex-col gap-[32px] ">
        <div className="flex container flex-col gap-[32px] items-start">
          <div className="text-[24px]">All Blog Post</div>
          <div className="flex justify-between w-full">
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
        <div className="flex justify-center items-center">
          <BlogCard data={data}></BlogCard>
        </div>
        <div className="flex justify-center items-center">
          <button
            onClick={articlesNumber + 6}
            className="rounded-[6px] w-[123px] h-[48px] border-[1px] border-solid border-gray-200 text-center flex justify-center items-center py-[12px] px-[20px]"
          >
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};
