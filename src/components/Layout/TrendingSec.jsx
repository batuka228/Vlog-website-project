import { TrendingCard } from "../TrendingCard";

export const TrendingSec = ({}) => {
  return (
    <div className="flex w-full h-fit  items-center container    ">
      <div className="flex flex-col gap-[30px] items-start   ">
        <div className="flex text-[24px] ">Trending</div>
        <TrendingCard></TrendingCard>
      </div>
    </div>
  );
};
