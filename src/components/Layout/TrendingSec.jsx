import { TrendingCard } from "../TrendingCard";

export const TrendingSec = ({ data }) => {
  return (
    <div className="flex w-full h-fit  items-center container    ">
      <div className="flex flex-col gap-[30px] items-start   ">
        <div className="flex text-[24px] ">Trending</div>
        <TrendingCard data={data}></TrendingCard>
      </div>
    </div>
  );
};
