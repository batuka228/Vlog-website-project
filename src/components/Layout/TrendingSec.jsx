import { TrendingCard } from "../TrendingCard";

export const TrendingSec = ({ data }) => {
  return (
    <div className="flex w-full h-fit  items-center   justify-center  ">
      <div className="flex flex-col gap-[30px] items-start container   ">
        <div className="flex text-[24px] ">Trending</div>
        <TrendingCard data={data}></TrendingCard>
      </div>
    </div>
  );
};
