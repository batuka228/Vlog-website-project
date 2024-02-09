import { Facebook } from "../icon&logo/Facebook";
import { IG } from "../icon&logo/IG";
import { Linkedn } from "../icon&logo/Linkedn";
import { Twitter } from "../icon&logo/Twitter";
import Link from "next/link";

export const FooterSec = () => {
  return (
    <div className="flex justify-center w-full py-[56px] items-center bg-gray-200  bottom-0">
      <div className="container flex">
        <div className="flex justify-between">
          <div className="flex flex-col w-1/3 gap-[56px]">
            <div className="flex flex-col gap-[20px]">
              <div>About</div>
              <div>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Excepturi tempora eveniet eos nihil sed dolorum iste doloremque
                dolores, earum nulla odit deserunt animi explicabo rem harum
                dolorem tenetur laudantium fugit?
              </div>
            </div>
            <div>
              <div>Email:info@jasmintea</div>
              <div>Phone:9969erhiin huruu chigchii huruu </div>
            </div>
          </div>
          <div className="flex gap-[16px] flex-col">
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
          <div className="flex gap-[20px] items-start ">
            <Facebook></Facebook>
            <Twitter></Twitter>
            <IG></IG>
            <Linkedn></Linkedn>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
