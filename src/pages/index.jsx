import Image from "next/image";
import { Header } from "@/components/Header";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { TrendingSec } from "@/components/Layout/TrendingSec";
import { AllBlogSec } from "@/components/Layout/AllBlog";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [articlesTrending, setarticlesTrending] = useState([]);
  const [articles, setarticles] = useState([]);
  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://dev.to/api/articles?state=rising&per_page=4"
      );
      const data = await res.json();
      setarticlesTrending(data);
    } catch (error) {
      console.error();
    }
  };

  const articlesData = async () => {
    let articlesNumber = 9;
    try {
      const res = await fetch(
        `https://dev.to/api/articles?per_page=${articlesNumber}`
      );
      const data = await res.json();
      setarticles(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
    articlesData();
  }, []);
  return (
    <div>
      <Header></Header>
      <AllBlogSec data={articles}></AllBlogSec>
    </div>
  );
}
{
  /* <TrendingSec data={articlesTrending}></TrendingSec> */
}
