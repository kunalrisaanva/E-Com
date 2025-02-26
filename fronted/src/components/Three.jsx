"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/Card";
import Link from "next/link";
import TestingImage from "../../public/images/Product Image.png"

function Three({image,title,category,currentPrice,offPrrice,previousPrice}) {

  return (
    (<CardContainer className="inter-var">
      <CardBody className={ `${image} bg-cover bg-center h-[358px] w-[417px] `}>
      <CardItem
            translateZ={40}
            as="h4"
            className="text-black text-[20px] pt-[29px] font-semibold pl-[52px] tracking-[0.5px] leading-[150%]">
           {title} <CardItem as="span" translateZ={20} className="block">{category}</CardItem>
            <div className="flex pt-[180px]">
      <span className="text-[18px]">{previousPrice}</span>
      <CardItem translateX={10} as="span"  className="text-[18px] pl-[8px] text-[#FB7181]">
       {offPrrice}
      </CardItem>
      <CardItem translatez={20}  as="h5" className="text-[30px] font-bold pl-[68px] pt-[32px] text-[#40BFFF]">
        {currentPrice}
      </CardItem>
    </div>
            
        </CardItem>

      </CardBody>
    </CardContainer>)
  );
}


export default Three


