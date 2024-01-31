import { SearchIcon } from "./icon&logo/Search";
import { Logo } from "./icon&logo/Logo";

export const Header = () => {
  return (
    <div className="flex ">
      <header className="w-[100vw] h-fit flex justify-center items-center flex-row py-[32px]">
        <nav className="flex justify-center items-center w-[80%] ">
          <div className="flex w-full justify-between ">
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
              <div className="flex justify-center items-center bg-gray-200 py-[8px] pl-[16px] pb-[8px] w-[166px] gap-[12px] rounded-[5px]">
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
      </header>
    </div>
  );
};
