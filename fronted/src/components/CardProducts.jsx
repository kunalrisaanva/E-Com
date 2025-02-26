"use client";
import React from "react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "./ui/Card";

const CardProducts = ({
  image,
  productName,
  ratingImage,
  productCurrentPrice,
  productPreviousPrice,
  productOf,
}) => {
  return (
    <CardContainer className="inter-var">
    <CardBody
      className="group relative h-[388px] w-[301px] border-[#F6F7F8] border-b-4 border-l-4 border-r-4 rounded-md overflow-hidden bg-white shadow-md 
      transition-all duration-700 ease-out hover:shadow-2xl hover:shadow-gray-400/[0.3] 
      hover:rotate-[4deg] hover:scale-[1.08]"
    >
      {/* ✅ Image Section (Max 3D Lift) */}
      <CardItem
        translateZ="300"
        className="group-hover:translate-y-[-30px] group-hover:translate-x-[15px] 
        group-hover:rotate-x-[12deg] group-hover:rotate-y-[12deg] 
        group-hover:scale-125 transition-transform duration-700 ease-out"
      >
        <Image
          src={image}
          height={272}
          width={299}
          className="rounded-md object-cover shadow-lg group-hover:shadow-3xl"
          alt="product-image"
        />
      </CardItem>

      {/* ✅ Product Name (Floating Effect) */}
      <CardItem
        translateZ="150"
        as="h1"
        className="text-[18px] items-center font-bold text-[#223263] text-center mt-2 transition-transform duration-700 
        group-hover:translate-y-[-6px] group-hover:translate-x-[-5px] group-hover:rotate-[3deg]"
      >
        {productName}
      </CardItem>

      {/* ✅ Rating Section (Floats Slightly Up) */}
      <CardItem
        translateZ="130"
        className="flex justify-center mt-1 transition-transform duration-700 
        group-hover:translate-y-[-6px] group-hover:translate-x-[5px] group-hover:rotate-[2deg]"
      >
        <Image
          src={ratingImage}
          height={15}
          width={123}
          className="mx-auto"
          alt="rating-image"
        />
      </CardItem>

      {/* ✅ Price Section (More Depth & Left-Right Motion) */}
      <div className="flex justify-between items-center mt-3 px-4">
        <CardItem
          translateZ="120"
          className="text-imageBgColor text-[18px] font-bold transition-transform duration-700 
          group-hover:translate-y-[-4px] group-hover:translate-x-[8px] group-hover:rotate-[3deg]"
        >
          {productCurrentPrice}
        </CardItem>
        <div className="flex items-center">
          <CardItem
            translateZ="100"
            className="text-textLighGrayColor text-[14px] text-center line-through transition-transform duration-700 
            group-hover:translate-y-[-3px] group-hover:translate-x-[-8px] group-hover:rotate-[-3deg]"
          >
            {productPreviousPrice}
          </CardItem>
          <CardItem
            translateZ="100"
            className="text-textRedColor text-[14px] font-bold pl-[8px] transition-transform duration-700 
            group-hover:translate-y-[-3px] group-hover:translate-x-[8px] group-hover:rotate-[3deg]"
          >
            {productOf}
          </CardItem>
        </div>
      </div>
    </CardBody>
  </CardContainer>

  );
};

export default CardProducts;
