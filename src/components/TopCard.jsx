export const TopCard = ({ data }) => {
  return (
    <div className=" flex   ">
      {data.map((el) => {
        return (
          <div className="  ">
            <div className="max-w-[1500px] h-fit relative bg-black rounded-[16px]  ">
              <img
                className=" opacity-70 max-w-screen-xl h-fit rounded-[16px]"
                src={el.social_image}
                alt=""
              />
              <div className="w-[230px] h-[120px]  py-[8px] px-[8px]  flex flex-col gap-[20px] absolute bottom-[28px] left-[28px]">
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
          </div>
        );
      })}
    </div>
  );
};
