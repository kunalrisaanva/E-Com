"use client";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/Card";

function Three({
  image,
  title,
  category,
  currentPrice,
  offPrrice,
  previousPrice,
  variant = "default",
}) {
  // Define class variations based on the `variant` prop
  const variantStyles = {
    default: {
      title:
        "text-black text-[20px] pt-[29px] font-semibold pl-[52px] tracking-[0.5px] leading-[150%]",
      priceWrapper: "flex pt-[180px]",
      currentPrice: "text-[30px] font-bold pl-[68px] pt-[32px] text-[#40BFFF]",
    },
    variant1: {
      titleWrapper: "flex justify-between items-center px-6 pt-[29px] w-full", // Only for variant1
      title:
        "text-black text-[20px] font-semibold tracking-[0.5px] leading-[150%]",
      currentPrice: "text-[30px] font-bold text-[#40BFFF]",
    },
    variant2: {
      title:
        "text-black text-[20px] pt-[29px] font-semibold pl-[52px] tracking-[0.5px] leading-[150%]",
      priceWrapper: "flex pt-[10px] pl-[5px]",
      currentPrice: "text-[30px] font-bold pl-[60px] pt-[200px] text-[#40BFFF]",
    },
  };

  const styles = variantStyles[variant] || variantStyles.default;

  return (
    <CardContainer className="inter-var">
      <CardBody className={`${image} bg-cover bg-center h-[358px] w-[417px]`}>
        {variant === "variant1" ? (
          <div className="relative flex flex-col px-6 pt-[29px] w-full">
            {/* Title & Category (Stacked, Top Left) */}
            <div className="flex flex-col">
              <CardItem
                translateZ={40}
                as="h4"
                className="text-black text-[20px] font-semibold tracking-[0.5px] leading-[150%]"
              >
                {title}
              </CardItem>
              <CardItem
                translateZ={20}
                as="h5"
                className="text-black text-[20px]  font-semibold  tracking-[0.5px] leading-[150%]"
              >
                {category}
              </CardItem>
            </div>

            {/* Current Price (Same Line, Right-Aligned) */}
            <CardItem
              translateZ={20}
              as="h5"
              className="absolute top-[29px] right-6 text-[30px] font-bold text-[#40BFFF]"
            >
              {currentPrice}
            </CardItem>

            {/* Previous Price & Off Price (Bottom Center with 110px padding) */}

            <div className="absolute left-1/2 -translate-x-1/2 flex items-center space-x-2 pt-[270px]">
              <CardItem
                translateX={20}
                as="h5"
                className=" text-gray-500 text-[18px] line-through"
              >
                {previousPrice}
              </CardItem>
              <CardItem
                translateX={20}
                as="h5"
                className="text-[#FB7181] font-semibold"
              >
                {offPrrice}
              </CardItem>
            </div>
          </div>
        ) : (
          <CardItem translateZ={40} as="h4" className={styles.title}>
            {title}
            <CardItem as="span" translateZ={20} className="block">
              {category}
            </CardItem>
            <div className={styles.priceWrapper}>
              <span className="text-[18px] text-gray-500  line-through">{previousPrice}</span>
              <CardItem
                translateX={10}
                as="span"
                className="text-[18px] pl-[8px] text-[#FB7181]"
              >
                {offPrrice}
              </CardItem>
              <CardItem translateZ={20} as="h5" className={styles.currentPrice}>
                {currentPrice}
              </CardItem>
            </div>
          </CardItem>
        )}
      </CardBody>
    </CardContainer>
  );
}

export default Three;
