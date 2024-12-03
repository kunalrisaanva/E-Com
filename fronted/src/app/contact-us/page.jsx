"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Call from "../../../public/images/call 1.png";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// import Call from "../../../public/images/Call.jpg"

const page = () => {
  return (
    <>
      <div className="flex-col ">
        <div className="flex absolute left-[_0.03%] right-[0%] top-[15.12%] bottom-[88.46%] justify-center bg-[#F6F7F8] opacity-[0.5] ">
          <div className=" text-2xl  text-black  hover:text-customBlue left-[_0.03%] right-[0%] top-[15.12%] bottom-[88.46%]">
            <Link href="#" className="">
              Home
            </Link>
          </div>
          <div className=" text-2xl  hover:text-customBlue pl-3  left-[_0.03%] right-[0%] top-[15.12%] bottom-[88.46%] h-[715.62px]  ">
            <Link href="#">Contact Us</Link>
          </div>
        </div>
        <div className="flex absolute left-[6.8%] right-[7.33%] top-[24.2%] bottom-[11.1%] mt-3 bg-[#FFFFFF] shadow-[0px 2px 4px ]">
          <div className=" flex bg-[#40BFFF] w-[50%] h-[100%]">
            <Image
              src={Call}
              alt="call"
              width={50}
              height={46}
              className="pt-0 mt-[-14px] ml-3 w-[50%] h-[100%]"
            />
            <div>
              <div className="absolute left-[27.34%] right-[60.25%] top-[7.15%] bottom-[71.32%] w-[156.2px] h-[137.56px]">
                <h1 className="font-[Raleway] font-[400]  leading-[47px] text-5xl lowercase text-[#FFFFFF] ">
                  {" "}
                  Get in touch
                </h1>
              </div>
              <div className="flex-col absolute left-[ 29.44%] right-[ 61.96%] top-[38.99%] bottom-[65.9%] flex-wrap ">
                <h1 className="font-[Raleway] font-[400]  leading-[16px] text-xl  lowercase text-[#FFFFFF] items-end mt-7">
                  contact@e-comm.ng
                </h1>
                <h1 className="font-[Raleway] font-[400]  leading-[16px] text-xl  lowercase text-[#FFFFFF] items-end mt-8 ml-2 ">
                  +234 4556 6665 34{" "}
                </h1>
                <h1 className="font-[Raleway] font-[400]  leading-[16px] text-xl  lowercase text-[#FFFFFF] items-end mt-8 ml-2 ">
                  20 Prince Hakerem Lekki Phase 1, Lagos.
                </h1>
              </div>
            </div>
            <div></div>
          </div>
          <div></div>
        </div>
        <div className="items-end pt-[54.5rem] px-[27.75rem] ">
          <form
            className="flex items-center"
            onChange={() => console.log("runnig")}
          >

<div className="flex pt-[110px]   items-center justify-center">
        <div className="flex w-[635px] ">
          <input
            className="rounded-l-md h-[64px] w-full pl-4 pr-[80px] rounded-sm border-[2px] border-[#40BFFF]"
            type="text"
            placeholder="Search query"
          />

          <button className="rounded-r-md w-[127px] text-white bg-[#40BFFF] font-semibold text-[20px]">
            Search
          </button>
        </div>
      </div>
            {/* <input
              type="text"
              value={""}
              // onChange={(e) => setQuery(e.target.value)}
              placeholder="Search query..."
              className="w-full px-4 py-2 border border-blue-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-20"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 h-20 text-2xl"
            >
              Search
            </button> */}
          </form>
        </div>
      </div>
     
    </>
  );
};

export default page;
/* +234 4556 6665 34 */

// position: absolute;
// left: 29.34%;
// right: 59.77%;
// top: 35.21%;
// bottom: 63.68%;

// font-family: 'Raleway';
// font-style: normal;
// font-weight: 500;
// font-size: 14px;
// line-height: 16px;
// display: flex;
// align-items: flex-end;
// text-transform: capitalize;

// co
// 20 Prince Hakerem Lekki
// Phase 1, Lagos.
