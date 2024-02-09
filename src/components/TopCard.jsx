import { useContext } from "react";
import { FirstContext } from "./context";

export const TopCard = ({}) => {
  const { Top } = useContext(FirstContext);
  return (
    <div className=" flex  absolute top-0 left-0 sliderSec gap-[10px]   max-w-[5120px]relative h-[500px] ">
      {Top.map((el) => {
        return (
          <div className="w-[1200px] h-fit relative  bg-black rounded-[16px]  ">
            <img
              className=" opacity-70 h-[500px] w-full rounded-[16px]"
              src={el.social_image}
              alt=""
            />
            <div className="w-[230px] h-[120px]  py-[8px] px-[8px]  flex flex-col gap-[20px] absolute bottom-[28px]  left-[28px]">
              <div className="flex flex-col gap-[8px]">
                <div className=" text-[16px] bg-blue-600 rounded-[12px] text-white w-fit h-fit flex items-center   py-[4px] px-[10px]">
                  Technology
                </div>
                <div className="text-[18px] h-[80px] text-white overflow-hidden">
                  {el.description}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
