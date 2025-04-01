"use client";
import React, { useEffect, useState } from "react";
import UpperLine from "@/components/UpperLine";
import DelImage from "../../../public/images/del.png";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/cartSlice";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Tooltip } from "@mui/material";
import { Stepper, Step, StepLabel } from '@mui/material';

const Page = () => {
  const [amount, setAmount] = useState(1);
  const [coupon, setCoupon] = useState("No");
  const [subtotal, setSubtotal] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [isOpened, setIsOpened] = useState(true);
  const dispatch = useDispatch();

  // Get cart items from Redux store
  const cartItems = useSelector((state) => state.cart.items);

  // Remove item from cart
  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };
  const steps = ['Step 1', 'Step 2', 'Step 3'];
  // Decrease item quantity
  const decreaseAmount = () => {
    if (amount > 1) setAmount(amount - 1);
  };

  // Calculate subtotal dynamically
  useEffect(() => {
    const total = cartItems.reduce(
      (acc, item) => acc + Number(item.productCurrentPrice),
      0
    );
    setSubtotal(total);
  }, [cartItems]);

  return (
    <>
      <UpperLine />

      <div className="text-[#22262A] text-[20px] font-medium flex items-center pl-[154px] pt-[46.94px] ">
        <span>PRODUCT</span>
        <div className="pl-[605.51px] flex gap-[115px]">
          <span>PRICE</span>
          <span>QTY</span>
          <span>UNIT PRICE</span>
        </div>
      </div>

      {/* Cart Items */}
      {cartItems.length > 0 && (
        <div className="w-[1256.11px] h-[2.13px] bg-[#F6F7F8] mt-[23px] ml-[104px]"></div>
      )}

      {cartItems.length === 0 ? (
        <>
          <div className="w-[1256.11px] h-[2.13px] bg-[#F6F7F8] mt-[23px] ml-[104px]"></div>
          <div className="text-3xl pl-[100px] my-4 flex justify-center">
            Oops! Your cart feels lonely. Add some products! 👜
          </div>
          <div className="w-[1256.11px] h-[2.13px] bg-[#F6F7F8] mt-[23px] ml-[104px]"></div>
        </>
      ) : (
        cartItems.map((cartProduct) => (
          <React.Fragment key={cartProduct._id}>
            <div className="mt-[22.63px] flex items-center text-[18px] text-darkText">
              <div className="flex items-center">
                <div className="pl-[90px]">
                  <Image
                    src={DelImage}
                    width={23.62}
                    height={22}
                    alt="Delete"
                    onClick={() => removeFromCartHandler(cartProduct._id)}
                    className="cursor-pointer"
                  />
                </div>
                <div className="pl-[61.41px]">
                  <Image
                    src={cartProduct.productImageUrl}
                    alt="Product"
                    width={137.85}
                    height={94}
                  />
                </div>
                <span className="pl-[28.7px]">{cartProduct.productName}</span>
                <span className="pl-[322.38px]">
                  ${cartProduct.productPreviousPrice}
                </span>
              </div>

              <div>
                <div className="bg-[#F6F7F8] w-[123.28px] h-[48.91px] flex items-center justify-center gap-8 ml-[120.68px]">
                  <button
                    onClick={decreaseAmount}
                    className="text-productFontColorBlue"
                  >
                    -
                  </button>
                  <span>{amount}</span>
                  <button
                    onClick={() => setAmount(amount + 1)}
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

            <div className="w-[1256.11px] h-[2.13px] bg-[#F6F7F8] mt-[23px] ml-[104px]"></div>
          </React.Fragment>
        ))
      )}

      {/* Voucher Input & Checkout Section */}
      {cartItems.length > 0 && (
        <div className="flex flex-row items-center w-full mt-[90px] justify-evenly gap-[260px]">
          {/* Voucher Code */}
          <div className="flex">
            <input
              type="text"
              placeholder="Voucher code"
              className="text-[#262626] placeholder:italic text-[16px] text-center rounded w-[369px] h-[60px] border-2 border-[#F1F3F4] focus:outline-none"
            />
            <button className="bg-[#33A0FF] w-[118px] h-[60px] text-white text-[18px] font-medium transition-all duration-300 ease-in-out transform hover:bg-[#1E8AEF] hover:scale-105">
              Redeem
            </button>
          </div>

          {/* Cart Summary */}
          <div className="text-[#262626] text-right">
            <div className="flex gap-[255px] justify-between">
              <span>Subtotal</span>
              <span>${subtotal || 998}</span>
            </div>

            <div className="flex gap-[255px] justify-between mt-[23px]">
              <span>Shipping</span>
              <span>${shipping}</span>
            </div>

            <div className="flex gap-[265px] justify-between mt-[23px]">
              <span>Coupon</span>
              <span>{coupon}</span>
            </div>

            <div className="bg-[#F6F7F8] w-[370px] h-[2px] mt-[24px]"></div>

            <div className="font-medium text-[30px] text-[#22262A] flex justify-between my-[22px]">
              <h3>TOTAL</h3>
              <h4>${subtotal}</h4>
            </div>

            <button className="mb-8 w-[374px] h-[60px] bg-[#33A0FF] text-[18px] font-medium text-white py-[16px]">
              Check out
            </button>
          </div>
        </div>
      )}

      {isOpened === true && (
        <div
          // id="popupBackground"
          className=" text-2xl text-black text-center h-[792.84px] bg-red-50  w-[1021.5px] flex flex-col mx-auto           "
        >

          {/* MUI icons  */}
          <div className="flex justify-between items-center px-5 py-8">
            <Tooltip title="Go-Back">
            

              <ArrowBackIcon className="text-productFontColorBlue cursor-pointer" sx={{ height:"25px",width:"25px" }}/>
            
            </Tooltip>

            <Tooltip title="Close">
            

            <CloseIcon
                onClick={() => setIsOpened(false)}
                className="text-productFontColorBlue cursor-pointer"
                titleAccess="close"
                sx={{fontSize:25}}

              />

             
            </Tooltip>
          </div>
          {/* heading */}
          <h1 className="text-productFontColorBlue text-[32px] font-semibold text-center">Make Payment</h1>
          {/*  setpper of payment */}

            <div className="flex flex-row itmes-center justify-center  mt-[43px]">
              <div className="bg-[#40BFFF] text-white text-[18px] font-bold w-[36px] h-[36px] rounded-full
              flex items-center justify-center">1</div>
              {/* connecting lines */}
              <div className="bg-[#DFDEDE] w-[3rem] h-[3px] flex flex-row justify-center items-center mt-4">

              </div>


              <div className="bg-[#40BFFF] text-white text-[18px] font-bold w-[36px] h-[36px] rounded-full
              flex items-center justify-center">2</div>
               {/* connecting lines */}
               <div className="bg-[#DFDEDE] w-[3rem] h-[3px] mt-4">

</div>
              <div className="bg-[#DFDEDE] text-white text-[18px] font-bold w-[36px] h-[36px] rounded-full
              flex items-center justify-center">3</div>
            
            </div>
        </div>
      )}
    </>
  );
};

export default Page;
