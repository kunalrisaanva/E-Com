"use client";
import React, { useState, useEffect } from "react";
import UpperLine from "@/components/UpperLine.";
import Image from "next/image";
import NikeShoes from "../../../../public/images/imageProduct3.png";
import Rating from "../../../../public/images/rate.png";
import ProductImage from "../../../../public/images/image_Product.png";
import ProductPicture from "../../../../public/images/Product Picture.png";
import FaceBookPicture from "../../../../public/images/facebook (1).png";
import TwitterPicture from "../../../../public/images/twitter.png";
import HeartPicture from "../../../../public/images/hearts.png";
import CartPicture from "../../../../public/images/cart_2.png";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cartSlice";

const ProductPage = ({ params }) => {
  const { id } = params;
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);
  const [products, setProducts] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3333/api/v1/products/product/${id}`);
        const result = await response.json();
        if (result.success) {
          setProducts(result.data);
        } else {
          setError("Error fetching data");
        }
      } catch {
        setError("Error fetching data");
      }
    };
    fetchData();
  }, [id]);

  if (error) return <div>{error}</div>;

  const minusAmount = () => {
    if (amount > 0) setAmount(amount - 1);
  };

  return (
    <>
      <UpperLine />
      <div className="pl-[125px] mt-[42px] flex">
        <div>
          <Image
            src={products?.productImageUrl || NikeShoes}
            width={375}
            height={271}
            alt="product-image"
          />
          <div className="pt-[134.33px]">
            <Image
              src={ProductPicture}
              height={86.25}
              width={388.75}
              alt="product-images"
            />
          </div>
        </div>
        <div className="pl-[53px]">
          <h2 className="text-[24px] font-medium text-[#22262A]">
            {products.productName}
          </h2>
          <div className="flex items-center pt-[10px]">
            <Image src={Rating} height={10.63} width={76.95} alt="rating" />
            <span className="text-[#C1C8CE] text-[16px] px-[16px]">0 reviews</span>
            <h4 className="text-[#33A0FF] text-[16px]">Submit a review</h4>
          </div>
          <div className="w-[499.49px] h-[2.13px] bg-[#F6F7F8] mt-[18.53px]"></div>
          <div className="pt-[17px]">
            <span className="text-[20px] font-bold text-[#40BFFF]">
              {products.productCurrentPrice}
            </span>
            <span className="text-[14px] text-[#9098B1] pl-[9px]">
              {products.productPreviousPrice}
            </span>
            <span className="text-[14px] font-bold pl-[8px] text-[#FB7181]">
              {products.productOf}
            </span>
          </div>
          <div>
            <div className="pt-[17.82px]">
              <span>Availability:</span>
              <span className="pl-[69.72px]">In stock</span>
            </div>
            <div className="pt-[15.95px]">
              <span>Category:</span>
              <span className="pl-[80.02px]">Accessories</span>
            </div>
            <div className="pt-[15.95px]">
              <span>Free shipping</span>
            </div>
          </div>
          <div className="w-[499.49px] h-[2.13px] bg-[#F6F7F8] mt-[22.76px]"></div>
          <div className="flex items-center">
            <span className="text-[16px] text-[#262626] pt-[24.46px]">Select Color:</span>
            <div className="flex gap-4 pl-[24px] pt-[21px]">
              <button className="w-[20.76px] h-[21.27px] bg-[#006CFF] rounded-full border-2 border-transparent hover:border-[#006CFF]"></button>
              <button className="w-[20.76px] h-[21.27px] bg-[#FC3E39] rounded-full border-2 border-transparent hover:border-gray-800"></button>
              <button className="w-[20.76px] h-[21.27px] bg-[#171717] rounded-full border-2 border-transparent hover:border-gray-800"></button>
              <button className="w-[20.76px] h-[21.27px] bg-[#FFF600] rounded-full border-2 border-transparent hover:border-gray-800"></button>
            </div>
          </div>
          <div className="pt-[21.27px]">
            <span className="text-[16px] text-[#262626]">Size</span>
          </div>
          <div className="w-[499.49px] h-[2.13px] bg-[#F6F7F8] mt-[21.27px]"></div>
          <div className="mt-[20px] flex items-center justify-between">
            <div className="bg-[#F6F7F8] w-[123.28px] h-[48.91px] flex items-center justify-center gap-8 rounded-sm">
              <button onClick={minusAmount} className="text-productFontColorBlue">-</button>
              <span>{amount}</span>
              <button onClick={() => setAmount(amount + 1)} className="text-productFontColorBlue">+</button>
            </div>
            <div className="flex items-center gap-3">
              <button
                className="flex gap-4 items-center justify-center h-[48.91px] w-[159.41px] bg-[#33A0FF] bg-opacity-[10%]"
                onClick={() => dispatch(addToCart(products))}
              >
                <Image
                  src={CartPicture}
                  alt="cart-picture"
                  height={17.01}
                  width={16.95}
                />
                <span className="text-[18px] text-[#33A0FF]">Add To Cart</span>
              </button>
              <button className="flex gap-4 items-center justify-center h-[48.91px] w-[48.89px] bg-[#33A0FF] bg-opacity-[10%]">
                <Image
                  src={HeartPicture}
                  alt="cart-picture"
                  height={17.01}
                  width={16.95}
                />
              </button>
            </div>
          </div>
          <div className="w-[499.49px] h-[2.13px] bg-[#F6F7F8] mt-[22.27px]"></div>
          <div className="mt-[20.02px]">
            <div className="flex bg-[#385C8E] h-[48.91px] w-[244.43px] text-center text-white">
              <Image
                className="bg-white"
                src={FaceBookPicture}
                alt="fblogo"
                width={8.13}
                height={16.09}
              />
              <a href="#">Share on Facebook</a>
            </div>
          </div>
        </div>
        <div className="pl-[31.88px]">
          <span className="text-[#C1C8CE]">BEST SELLER</span>
          <div className="border-[#F6F7F8] border-b-4 border-l-4 border-r-4 rounded-md h-[371.1px] w-[286.94px] mt-[34.98px]">
            <Image
              src={ProductImage}
              width={283.75}
              height={239.68}
              alt="product-image"
            />
            <div className="pt-[14px]">
              <Image
                className="mx-auto pt-[52.59px]"
                src={Rating}
                width={76.95}
                height={10.63}
                alt="rating-image"
              />
              <div className="flex items-center pt-[6px] justify-center">
                <span className="text-[14px] text-[#33A0FF]">Add To Wish List</span>
                <span className="text-[14px] text-[#33A0FF]">Add To Compare</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
