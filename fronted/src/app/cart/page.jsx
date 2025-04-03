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
import PayPalImage from "../../../public/images/Paypal.png";
import BankImage from "../../../public/images/Bank.png";
import CreditCardImage from "../../../public/images/Credit Card.png";
import { Stepper, Step, StepLabel } from "@mui/material";

const Page = () => {
  const [amount, setAmount] = useState(1);
  const [coupon, setCoupon] = useState("No");
  const [subtotal, setSubtotal] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [isOpened, setIsOpened] = useState(false);
  const dispatch = useDispatch();

  // Get cart items from Redux store
  const cartItems = useSelector((state) => state.cart.items);

  // Remove item from cart
  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };
  const steps = ["Step 1", "Step 2", "Step 3"];
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
  }, [cartItems, isOpened]);

  return (
    <>
      <UpperLine />
      {/* Background overlay when popup is open */}
      {isOpened && (
        <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
      )}

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
              <span className="ml-[74.08px]">
                ${cartProduct.productCurrentPrice}
              </span>
            </div>
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

            <button
              onClick={() => setIsOpened(true)}
              className="mb-8 w-[374px] h-[60px] bg-[#33A0FF] text-[18px] font-medium text-white py-[16px] transition-all duration-300 ease-in-out transform hover:bg-[#1E8AEF] hover:scale-105"
            >
              Check out
            </button>
          </div>
        </div>
      )}

      {isOpened && (
        <div className="fixed  items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white z-50 w-[1021.5px] h-[792.84px] ]">
          <div className="flex justify-between items-center px-5 py-8">
            <Tooltip title="Go-Back">
              <ArrowBackIcon
                className="text-productFontColorBlue cursor-pointer"
                sx={{ height: "25px", width: "25px" }}
              />
            </Tooltip>
            <Tooltip title="Close">
              <CloseIcon
                onClick={() => setIsOpened(false)}
                className="text-productFontColorBlue cursor-pointer"
                titleAccess="close"
                sx={{ fontSize: 25 }}
              />
            </Tooltip>
          </div>
          <h1 className="text-productFontColorBlue text-[32px] font-semibold text-center">
            Make Payment
          </h1>
          <div className="flex flex-row items-center justify-center mt-[43px]">
            <div className="bg-[#40BFFF] text-white text-[18px] font-bold w-[36px] h-[36px] rounded-full flex items-center justify-center">
              1
            </div>
            <div className="bg-[#DFDEDE] w-[3rem] h-[3px] "></div>
            <div className="bg-[#DFDEDE] text-white text-[18px] font-bold w-[36px] h-[36px] rounded-full flex items-center justify-center">
              2
            </div>
            <div className="bg-[#DFDEDE] w-[3rem] h-[3px] "></div>
            <div className="bg-[#DFDEDE] text-white text-[18px] font-bold w-[36px] h-[36px] rounded-full flex items-center justify-center">
              3
            </div>
          </div>


          {/* form section */}

          <form className="mt-[40px] flex justify-center">
            <div className="grid grid-cols-2 gap-x-8">
              {/* Left Side */}
              <div className="flex flex-col ">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-[336px] h-[50px] rounded-md bg-[#DFDEDE] bg-opacity-50 text-[#222] placeholder:text-[#999999] p-2 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-[336px] h-[50px] rounded-md bg-[#DFDEDE] bg-opacity-50 text-[#999999] p-2 focus:outline-none mt-[32px]"
                />

                <h3 className="text-[#40BFFF] text-[20px] font-semibold mt-[24px]">
                  Select Method of Payment
                </h3>

                {/* Payment Method */}
                <div className="flex items-center justify-between bg-[#EBF0FF] h-[56px] mt-[14px] px-4 rounded-md">
                  <div className="flex items-center">
                    <Image
                      src={CreditCardImage}
                      alt="bank-image"
                      height={24}
                      width={24}
                    />
                    <p className="text-[12px] font-bold pl-[16px]">
                      Credit Card Or Debit
                    </p>
                  </div>
                  <input type="checkbox" className="w-5 h-5 cursor-pointer" />
                </div>
                {/* paypal payment option */}
                <div className="flex items-center justify-between  h-[56px] px-4 rounded-md">
                  <div className="flex items-center">
                    <Image
                      src={PayPalImage}
                      alt="Paypal-image"
                      height={24}
                      width={24}
                    />
                    <p className="text-[12px] font-bold pl-[16px]">
                      Credit Card Or Debit
                    </p>
                  </div>
                  <input type="checkbox" className="w-5 h-5 cursor-pointer" />
                </div>
                {/* bank payment option */}
                <div className="flex items-center justify-between  h-[56px] px-4 rounded-md">
                  <div className="flex items-center">
                    <Image
                      src={BankImage}
                      alt="bank-image"
                      height={24}
                      width={24}
                    />
                    <p className="text-[12px] font-bold pl-[16px]">
                      Credit Card Or Debit
                    </p>
                  </div>
                  <input type="checkbox" className="w-5 h-5 cursor-pointer" />
                </div>
              </div>

              {/* Right Side */}
              <div className="flex flex-col gap-y-8">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-[336px] h-[50px] rounded-md bg-[#DFDEDE] bg-opacity-50 text-[#999999] p-2 focus:outline-none"
                />
                <textarea
                  placeholder="Address for Delivery"
                  className="w-[336px] h-[122px] rounded-md bg-[#DFDEDE] bg-opacity-50 text-[#999999] p-2 focus:outline-none placeholder:text-start"
                />

                 <input
                  type="number"
                  placeholder="Mobile nunber"
                  className="w-[336px] h-[50px] rounded-md bg-[#DFDEDE] bg-opacity-50 text-[#999999] p-2 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />

              </div>
            </div>

           
          </form>
           <button className="bg-[#33A0FF] flex justify-center items-center mx-auto mt-[27px] text-white font-extrabold text-[24px] h-[70px] w-[338px] rounded-md transition-all duration-300 ease-in-out transform hover:bg-[#1E8AEF] hover:scale-105">Go to Payment</button>
        </div>
      )}
    </>
  );
};

export default Page;
