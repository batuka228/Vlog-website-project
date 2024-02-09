import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { FooterSec } from "@/components/Layout/Footer";

export default function AllBlog() {
  const [blogData, setBlogData] = useState([]);
  const router = useRouter();
  console.log(router);
  const id = router.query.id;
  console.log(id);
  const fetchData = async () => {
    try {
      if (id) {
        const res1 = await fetch(`https://dev.to/api/articles/${id}`);
        console.log(res1);
        const data = await res1.json();
        setBlogData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [id]);
  console.log(blogData);
  return (
    <div className="flex justify-center items-center flex-col ">
      <div className="container flex flex-col justify-center items-center h-[80vh]">
        <div>{blogData.title}</div>
        <div>
          <img src={blogData.cover_image} alt="" />
        </div>
        <div>{blogData.description}</div>
      </div>
    </div>
  );
}
