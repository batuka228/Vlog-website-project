import { TopCard } from "../TopCard";

export const TopSec = ({ data }) => {
  return (
    <div className="container flex justify-center items-center flex-col gap-[16px] ">
      <div className="flex relative max-w-[1500px] overflow-hidden">
        <TopCard data={data}></TopCard>
      </div>
      <div className="flex  gap-[16px] *:rounded-[8px] *:border-solid *:border-gray-950 *:border-[1px] *:w-[40px]">
        <button>{"<"}</button>
        <button>{">"}</button>
      </div>
    </div>
  );
};
