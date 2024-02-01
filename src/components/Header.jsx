import { SearchIcon } from "./icon&logo/Search";
import { Logo } from "./icon&logo/Logo";

export const Header = () => {
  return (
    <div className="flex w-[100vw] h-fit container   items-start flex-row py-[32px] ">
      <nav className="flex   w-full ">
        <div className="flex container justify-between ">
          <div>
            <Logo></Logo>
          </div>
          <div className="flex justify-between items-center w-[50%]">
            <div>
              <div className="flex  justify-center items-center gap-[40px] *:text-sm">
                <div>Home</div>
                <div>Blog</div>
                <div>Contact</div>
              </div>
            </div>
            <div className="flex justify-center items-center bg-gray-200 py-[8px] pl-[16px] pb-[8px] min-w-[166px] gap-[12px] rounded-[5px]">
              <input
                className="bg-gray-200 w-full text-sm"
                type="text"
                placeholder="Search"
                name="Search"
              />
              <SearchIcon></SearchIcon>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
