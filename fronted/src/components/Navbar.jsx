"use client"

import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="flex justify-between px-[104px] items-center">
      {/* Logo Section */}
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/favicon.ico"
            alt="E-com"
            width={44}
            height={44}
          />
        </Link>
        <h1 className="text-[18px] text-[#22262A] font-extrabold pl-[7.11px]">
          E-comm
        </h1>
      </div>

      {/* Navigation Links */}
      <div className="flex w-[815.49px] h-[36px] font-medium">
        {/* Home */}
        <div className="text-[24px] pr-24 hover:text-customBlue">
          <Link 
            href="/" 
            className={`${pathname === '/' ? 'text-productFontColorBlue' : 'text-black'}`}
          >
            HOME
          </Link>
        </div>

        {/* Bags */}
        <div className="text-2xl pr-24 hover:text-customBlue">
          <Link 
            href="/begs" 
            className={`${pathname === '/begs' ? 'text-productFontColorBlue' : 'text-black'}`}
          >
            BEGS
          </Link>
        </div>

        {/* Sneakers */}
        <div className="text-2xl pr-24 hover:text-customBlue">
          <Link 
            href="/sneaker" 
            className={`${pathname === '/sneaker' ? 'text-productFontColorBlue' : 'text-black'}`}
          >
            SNEAKERS
          </Link>
        </div>

        {/* Belt */}
        <div className="text-2xl pr-24 hover:text-customBlue">
          <Link 
            href="/belt" 
            className={`${pathname === '/belt' ? 'text-productFontColorBlue' : 'text-black'}`}
          >
            BELT
          </Link>
        </div>

        {/* Contact Us */}
        <div className="text-2xl hover:text-customBlue">
          <Link 
            href="/contact-us" 
            className={`${pathname === '/contact-us' ? 'text-productFontColorBlue' : 'text-black'}`}
          >
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
