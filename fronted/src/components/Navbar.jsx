import Link from "next/link";
import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex justify-between px-[104px] items-center">
      <div className=" flex items-center">
        <Image
          src={"/favicon.ico"}
          alt="E-com"
          width={44}
          height={44}
          className=""
        />

        <h1 className="text-[18px] text-[#22262A] font-extrabold pl-[7.11px]">
          E-comm
        </h1>
      </div>
      <div className="flex w-[815.49px] h-[36px] font-medium">
        <div className=" text-[24px]  pr-24 hover:text-customBlu text-productFontColorBlue">
          <Link href="#" className="">
            HOME
          </Link>
        </div>
        <div className=" text-2xl pr-24  hover:text-customBlue">
          <Link href="#"> BEGS</Link>
        </div>
        <div className=" text-2xl  pr-24  hover:text-customBlue">
          <Link href="#">SNEAKERS</Link>
        </div>
        <div className="text-2xl  pr-24  hover:text-customBlue">
          <Link href="#">BELT</Link>
        </div>
        <div className=" text-2xl  hover:text-customBlue  ">
          <Link href="#">CONTECT</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
