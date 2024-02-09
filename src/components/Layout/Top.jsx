import { TopCard } from "../TopCard";
import { createContext, useContext } from "react";
import { FirstContextProvider } from "@/components/context";

export const TopSec = ({}) => {
  return (
    <div className=" flex  px-[10%] flex-col gap-[16px] ">
      <div className="flex relative container h-[500px] overflow-hidden">
        <TopCard></TopCard>
      </div>
      <div className="flex justify-end  gap-[16px] *:rounded-[8px] *:border-solid *:border-gray-950 *:border-[1px] *:w-[40px]">
        <button>{"<"}</button>
        <button>{">"}</button>
      </div>
    </div>
  );
};
