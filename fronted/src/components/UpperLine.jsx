"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const UpperLine = () => {
  const pathname = usePathname();
  const [routeName, setRouteName] = useState(pathname); 

  useEffect(() => {
    setRouteName(pathname);
  }, [pathname]); 

  return (
    <div className="flex">
      <div className="flex mt-[47px] bg-[#F6F7F8] justify-center h-[51px] w-full pt-[14px]">
        <h4 className="text-[#33A0FF] text-[18px]">Home</h4>
        <span className="text-[18px] text-[#C1C8CE] px-[8px]">/</span>
        <h4 className="text-[18px]">Hot Deal</h4>
        {routeName && routeName !== "/" && (
          <>
            <span className="text-[18px] text-[#C1C8CE] px-[8px]">/</span>
            <h4 className="text-[18px]">{routeName.replace("/", "")}</h4> {/* ✅ Clean Pathname */}
          </>
        )}
      </div>
    </div>
  );
};

export default UpperLine;
