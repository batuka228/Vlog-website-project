import { SearchIcon } from "./icon&logo/Search";
import Link from "next/link";
import { Logo } from "./icon&logo/Logo";
import { FirstContext } from "./context";
import { useContext, useState } from "react";

export const Header = () => {
  const { handleSearch } = useContext(FirstContext);
  return (
    <div className="flex h-fit w-full   items-center flex-row py-[32px] sticky top-0 bg-white z-[2] ">
      <nav className="flex  container m-auto ">
        <div className="flex container justify-between ">
          <Link href={"/"}>
            <Logo></Logo>
          </Link>
          <div className="sm:flex hidden justify-between items-center w-[50%]">
            <div>
              <div className="flex  justify-center items-center gap-[40px] *:text-sm">
                <Link href={"/"}>
                  <div>Home</div>
                </Link>
                <Link href={"/Blog"}>
                  <div>Blog</div>
                </Link>
                <Link href={"/contactPage"}>
                  <div>Contact</div>
                </Link>
              </div>
            </div>
            <div className="flex justify-center items-center bg-gray-200 py-[8px] pl-[16px] pb-[8px] min-w-[166px] gap-[12px] rounded-[5px]">
              <input
                onChange={handleSearch}
                className="bg-gray-200 w-full text-sm"
                type="text"
                placeholder="Search"
                name="Search"
              />
              <SearchIcon></SearchIcon>
            </div>
          </div>
          <div className="*:w-[24px] *:h-[6px] flex *:bg-gray-300 gap-[4px] flex-col mr-[40px] *:rounded-[8px] sm:hidden">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </nav>
    </div>
  );
};
