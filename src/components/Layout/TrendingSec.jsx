import { TrendingCard } from "../TrendingCard";

export const TrendingSec = ({}) => {
  return (
    <div className="flex w-full h-fit  items-center container justify-center    ">
      <div className="flex flex-col gap-[30px] sm:items-start  items-center   ">
        <div className="flex text-[24px] ">Trending</div>
        <TrendingCard></TrendingCard>
      </div>
    </div>
  );
};
