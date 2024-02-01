export const BlogCard = ({ data }) => {
  return (
    <div className="flex w-full container flex-wrap gap-[20px]">
      {data.map((el) => {
        return (
          <div className="py-[16px] px-[16px] flex justify-center items-center flex-col gap-[16px] rounded-[12px] bg-white border-solid border-[1px] w-[392px]">
            <div>
              <img
                className="flex rounded-[6px] w-[360px] h-[240px]"
                src={el.cover_image}
                alt=""
              />
            </div>
            <div className="py-[8px] px-[8px]  flex flex-col gap-[20px]">
              <div className="flex flex-col gap-[16px]">
                <div className="flex items-center   py-[4px] px-[10px]">
                  Technology
                </div>
                <div className="text-lg w-full h-[84px] overflow-hidden">
                  {el.description}
                </div>
              </div>
              <div>
                <div className="flex  items-center gap-[16px]">
                  <div className="w-[36px] h-[36px]  ">
                    <img
                      className="w-[36px] h-[36px] rounded-[50%] "
                      src={el.user.profile_image}
                      alt=""
                    />
                  </div>
                  <div>{el.user.name}</div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
