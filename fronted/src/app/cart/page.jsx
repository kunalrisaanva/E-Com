"use client";
import React, { useState } from "react";
import UpperLine from "@/components/UpperLine.";
import DelImgae from "../../../public/images/del.png";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/cartSlice"



const Page = () => {
  const [ammount, setAmmount] = useState(0);


  const dispatch = useDispatch();

  // cart products
  const cartItems = useSelector((state) => state.cart.items);
  // console.log("cartItems", cartItems[0]?._id);

  const removeFromCartHander = (id) => {

    dispatch(removeFromCart(id));
  }

  const minusAmmount = () => {
    setAmmount(ammount - 1);
    if (ammount === 0) setAmmount(0);
  };

  return (
    <>
      <UpperLine />

      <div>
        <div className="text-[#22262A] text-[20px] font-medium flex items-center pl-[154px] pt-[46.94px]">
          <div>
            <span>PRODUCT</span>
          </div>
          <div className="pl-[605.51px] flex gap-[115px]">
            <span>PRICE</span>
            <span>QTY</span>
            <span>UNIT PRICE</span>
          </div>
        </div>

        {/* line */}
        <div className="w-[1256.11px] h-[2.13px] bg-[#F6F7F8] mt-[23px] ml-[104px]"></div>
        {/* line end */}

        {cartItems.length === 0 ? (
          <div>No products in the cart...</div>
        ) : (
          cartItems.map((cartProduct, index) => (
            <div
              key={index}
              className="mt-[62.63px] flex items-center text-[18px] text-darkText"
            >
              <div className="flex items-center">
                <div className="pl-[104px]">
                  <Image
                    src={DelImgae}
                    width={23.62}
                    height={22}
                    alt="del-image"
                    onClick={() => removeFromCartHander(cartProduct?._id)}
                    className="cursor-pointer"
                    id={cartItems?._id}
                  />
                </div>
                <div className="pl-[71.41px]">
                  <Image
                    src={cartProduct.productImageUrl}
                    alt="product image"
                    width={137.85}
                    height={94}
                  />
                </div>
                <span className="pl-[28.7px] text-darkText text-[18px]">
                  {cartProduct.productName}
                </span>
                <span className="pl-[322.38px]">
                  ${cartProduct.productPreviousPrice}
                </span>
              </div>
              <div>
                <div className="bg-[#F6F7F8] w-[123.28px] h-[48.91px] flex items-center justify-center gap-8 ml-[126.68px]">
                  <button
                    onClick={minusAmmount}
                    className="text-productFontColorBlue"
                  >
                    -
                  </button>
                  <span>{ammount}</span>
                  <button
                    onClick={() => setAmmount(ammount + 1)}
                    className="text-productFontColorBlue"
                  >
                    +
                  </button>
                </div>
              </div>
              <span className="ml-[74.08px]">
                ${cartProduct.productCurrentPrice}
              </span>
            </div>
          ))
        )}

        {/* additional elements like lines and voucher redeem code */}

        <div className="w-[369px] h-[60px] border-2 border-[#F1F3F4] mt-[90px] ml-[134.48px] flex items-center rounded ">
          <div>
            <input
              type="text"
              placeholder="Voucher code"
              className="text-[#262626] text-[16px] text-center "
            />
          </div>
          <div>
            <button className="bg-[#33A0FF] w-[118px] h-[60px] ml-[118px] text-white text-[18px] font-medium">
              Redeem
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;


