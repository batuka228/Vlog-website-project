import { Header } from "@/components/Header";
import { AllBlogSec } from "@/components/Layout/AllBlog";
import { FooterSec } from "@/components/Layout/Footer";
import { useState, useEffect } from "react";
import { BlogCard } from "@/components/BlogCard";

export default function Blog() {
  const [blogData, setBlogData] = useState([]);
  const [blogPlusData, setblogPlusData] = useState(30);
  const fetchData = async () => {
    try {
      const data = await fetch(
        `https://dev.to/api/articles?per_page=${blogPlusData}`
      );
      const res1 = await data.json();
      setBlogData(res1);
    } catch (error) {
      console.error();
    }
  };
  const PlusData = () => {
    setblogPlusData(blogPlusData + 3);
  };
  useEffect(() => {
    fetchData();
  }, [blogPlusData]);
  return (
    <div className="flex justify-center items-center flex-col mb-[100px]">
      <div className="flex  w-full flex-col  container  gap-[24px] ">
        <div className="">
          <div className="flex  flex-col  justify-between  gap-[31px] ">
            <div className="text-[24px] ">All Blog Post</div>
          </div>
        </div>
        <div className="flex  ">
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
    </div>
  );
}
