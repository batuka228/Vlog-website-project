export const TrendingCard = ({ data }) => {
  return (
    <div className="flex gap-[24px] scroll-smooth snap-x">
      {data.map((el) => {
        return (
          <div className="w-[298px] h-[320px]">
            <div className="flex relative  w-full h-full">
              <img
                className="rounded-[12px] w-full h-full"
                src={el.social_image}
                alt=""
              />
              <div className="w-[230px] h-[120px]  py-[8px] px-[8px]  flex flex-col gap-[20px] absolute bottom-[28px] left-[28px]">
                <div className="flex flex-col gap-[16px]">
                  <div className=" text-[12px] bg-blue-600 rounded-[12px] text-white w-fit h-fit flex items-center   py-[4px] px-[10px]">
                    Technology
                  </div>
                  <div className="text-[18px] h-[80px] text-white">
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
