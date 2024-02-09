import Image from "next/image";
import { Header } from "@/components/Header";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { TrendingSec } from "@/components/Layout/TrendingSec";
import { AllBlogSec } from "@/components/Layout/AllBlog";
import { TopSec } from "@/components/Layout/Top";
import { FooterSec } from "@/components/Layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const [articlesTrending, setarticlesTrending] = useState([]);
  // const [articles, setarticles] = useState([]);
  // const [Top, setTop] = useState([]);
  // const [plusData, setPlusData] = useState(9);
  // const PlusData = () => {
  //   setPlusData(plusData + 3);
  // };

  // const fetchData = async () => {
  //   try {
  //     const res1 = await fetch(
  //       "https://dev.to/api/articles?state=rising&per_page=4"
  //     );
  //     const res2 = await fetch(
  //       `https://dev.to/api/articles?per_page=${plusData}`
  //     );
  //     const res3 = await fetch("https://dev.to/api/articles?top=1&per_page=5");
  //     const data1 = await res1.json();
  //     setarticlesTrending(data1);
  //     const data2 = await res2.json();
  //     setarticles(data2);
  //     const data3 = await res3.json();
  //     setTop(data3);
  //   } catch (error) {
  //     console.error();
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, [plusData]);
  return (
    <div className="flex  justify-center items-center flex-col gap-[100px] mb-[100px] ">
      <div className="container gap-[100px] flex flex-col ">
        <TopSec></TopSec>
        <TrendingSec></TrendingSec>
        <AllBlogSec></AllBlogSec>
      </div>
    </div>
  );
}
{
  /* <TrendingSec data={articlesTrending}></TrendingSec>
      <AllBlogSec data={articles}></AllBlogSec> */
}
