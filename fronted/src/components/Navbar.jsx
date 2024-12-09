"use client"

import { usePathname }  from "next/navigation";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const Navbar = () => {

  const pathname = usePathname();


  return (
    <div className="flex justify-between px-[104px] items-center">
      <div className=" flex items-center">
        <Link href="/">
          <Image
            src={"/favicon.ico"}
            alt="E-com"
            width={44}
            height={44}
            className=""
          />
        </Link>

        <h1 className="text-[18px] text-[#22262A] font-extrabold pl-[7.11px]">
          E-comm
        </h1>
      </div>
      <div className="flex w-[815.49px] h-[36px] font-medium">
        <div className=" text-[24px]  pr-24 hover:text-customBlu text-productFontColorBlue">
          <Link
            href="/"
            id="dropdownHoverButton"
            // className={`${ pathName === "/" ? : `text-productFontColorBlue` }`}
            className={`${
              pathname === '/' ? 'text-productFontColorBlue' : 'text-black'
            } `}
            data-dropdown-toggle="dropdownHover"
            data-dropdown-trigger="hover"
          >
            HOME
          </Link>

          {/* drop down menu  */}

          <div
            id="dropdownHover"
            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownHoverButton"
            >
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Dashboard
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className=" text-2xl pr-24  hover:text-customBlue">
          <Link href="/begs"   className={`${
              pathname === '/begs' ? 'text-productFontColorBlue' : 'text-black'
            } `}> BEGS</Link>
        </div>
        <div className=" text-2xl  pr-24  hover:text-customBlue">
          <Link href="sneaker"   className={`${
              pathname === '/sneaker' ? 'text-productFontColorBlue' : 'text-black'
            } `}>SNEAKERS</Link>
        </div>
        <div className="text-2xl  pr-24  hover:text-customBlue">
          <Link href="belt" className={`${
              pathname === '/belt' ? 'text-productFontColorBlue' : 'text-black'
            } `}>BELT</Link>
        </div>
        <div className=" text-2xl  hover:text-customBlue  ">
          <Link href="contact-us" className={`${
              pathname === '/contact-us' ? 'text-productFontColorBlue' : 'text-black'
            } `}  >CONTACT</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
