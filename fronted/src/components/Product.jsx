"use client";
import React, { useEffect, useState } from "react";
import Shoes from "/public/images/shoes-shoe-png-transparent-shoe-images-pluspng-171.png";
import ImageProduct from "/public/images/image_Product.png";
import Rating from "/public/images/rate.png";
import Image from "next/image";
import UpperLine from "@/components/UpperLine.";
import Pegination from "@/components/Pegination";
import GridImage from "/public/images/switch.png";
import ListImage from "/public/images/switch (1).png";
import Example from "@/components/RangeSlider";
import axios from "axios";


const Product = ({ category }) => {

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [showItemsType, setShowItemsType] = useState("list");



  // Fetch data on component mount
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/products/product?q=${category}`
        );
        const { data } = response;
        if (data.statusCode === 200) {
          setProducts(data?.data); // Set the fetched product data
          setIsLoading(false);
        } else {
          setError("Error fetching data");
        }
      } catch (err) {
        setError(`Error fetching data${err}`);
      }
    })();
  }, [category]);

  if (error) return <div>{error}</div>;

  return (
    <>
      <UpperLine />

      {/* New sections start */}

      <div className="flex px-[102px]">
        <div className=" ">
          <div className=" bg-[#F6F7F8] h-[371px] w-[270px] mt-[49px]">
            <h4 className="text-[18px] text-[#22262A] font-medium pt-[19px] pl-[20px] ">
              Hot Deals
            </h4>

            {/* Adjusted alignment */}

            <div className=" px-[20px] pt-[25px] ">
              <div className="flex justify-between">
                <span>Nike </span>
                <span>2 </span>
              </div>
              <div className="flex justify-between pt-[20px] text-[#33A0FF] ">
                <span className="">Airmax </span>
                <span>42 </span>
              </div>
              <div className="flex justify-between pt-[20px]">
                <span>Nike </span>
                <span>14 </span>
              </div>

              <div className="flex justify-between pt-[20px]">
                <span>Adidas </span>
                <span>2 </span>
              </div>

              <div className="flex justify-between pt-[20px]">
                <span>Vans </span>
                <span>2 </span>
              </div>

              <div className="flex justify-between pt-[20px]">
                <span>All Stars </span>
                <span>2 </span>
              </div>

              <div className="flex justify-between pt-[20px]">
                <span>Adidas </span>
                <span>2 </span>
                {/* <Example/> */}
              </div>
            </div>
          </div>

          <div className="h-[144px] w-[270px] bg-[#F6F7F8] mt-[30px]">
            <h4 className="text-[18px] text-[#22262A] font-medium pt-[19px] pl-[20px]">
              Prices
            </h4>
            <div>
              <span className="pl-[20px]">Ranger:</span>
              <span className="">$13.99 - $25.99 </span>
            </div>
            {/* <div> slider will come</div> */}
          </div>

          <div className="h-[123px] w-[270px] bg-[#F6F7F8] mt-[30px]">
            <h3 className="text-[18px] text-[#22262A] font-medium pt-[19px] pl-[20px]">
              COLOR
            </h3>
            <div className="flex gap-4 justify-center pt-[21px]  ">
              <button className="w-[20.76px] h-[21.27px] bg-[#006CFF] rounded-full border-2 border-transparent hover:border-[#006CFF]"></button>
              <button className="w-[20.76px] h-[21.27px] bg-[#FC3E39] rounded-full border-2 border-transparent hover:border-gray-800"></button>
              <button className="w-[20.76px] h-[21.27px] bg-[#171717] rounded-full border-2 border-transparent hover:border-gray-800"></button>
              <button className="w-[20.76px] h-[21.27px] bg-[#FFF600] rounded-full border-2 border-transparent hover:border-gray-800"></button>
              <button className="w-[20.76px] h-[21.27px] bg-[#EFDFDF] rounded-full border-2 border-transparent hover:border-gray-800"></button>
              <button className="w-[20.76px] h-[21.27px] bg-[#FF00B4] rounded-full border-2 border-transparent hover:border-gray-800"></button>
            </div>
          </div>

          <div className=" bg-[#F6F7F8] h-[245px] w-[270px] mt-[49px]">
            <h4 className="text-[18px] text-[#22262A] font-medium pt-[19px] pl-[20px] ">
              BRAND
            </h4>
            <div className=" px-[20px] pt-[25px] ">
              <div className="flex justify-between">
                <span>Nike </span>
                <span>2 </span>
              </div>
              <div className="flex justify-between pt-[20px]  ">
                <span className="">Airmax </span>
                <span>42 </span>
              </div>

              <div className="flex justify-between pt-[20px]">
                <span>Adidas </span>
                <span>2 </span>
              </div>

              <div className="flex justify-between pt-[20px]">
                <span>Siemens </span>
                <span>2 </span>
                {/* <Example/> */}
              </div>
            </div>
          </div>

          <div className="flex w-[270px] h-[56px] bg-[#F6F7F8] mt-[30px]">
            <span className="text-center text-[14px] font-medium text-[#262626] mx-auto pt-[19px]">
              MORE
            </span>
          </div>
        </div>

        {/* image */}
        <div className="pt-[51px] pl-[31px]">
          <div className="bg-imageBgColor h-[297px] w-[961px] flex relative overflow-visible ">
            <div className="pt-[57px] pl-[31px] z-10">
              <h1 className="text-[55px] font-medium text-white ">
                Adidas Men Running <br /> Sneakers
              </h1>
              <p className="text-white text-[24px] pt-[13px]">
                Performance and design. Taken right to the edge.
              </p>
            </div>
            <Image
              src={Shoes}
              alt="shoes-image"
              height={297}
              width={397}
              className="absolute right-[10px] top-[-40px] z-0"
            />
          </div>

          {/* line */}
          <div className="flex">
            <div className="flex mt-[47px] bg-[#F6F7F8] justify-center h-[56px] w-full pt-[14px] gap-12">
              <span className="text-[16px]">{[products.length]} items</span>
              <div className="flex itmes-center">
                <span>Sort By</span>
                <span>Name</span>
                <span>Show</span>
                <span>12 </span>
                <div className="flex cursor-pointer pl-2 pb-3">
                  <Image
                    src={ListImage}
                    height={58}
                    width={55.26}
                    alt="list-image-option"
                    onClick={() => setShowItemsType("grid")}
                  />
                  <Image
                    src={ListImage}
                    height={58}
                    width={55.26}
                    alt="list-image-option"
                    onClick={() => setShowItemsType("list")}
                  />
                </div>
              </div>
            </div>
          </div>

          {isLoading && <p> Loading ... </p>}
          {products.length === 0 && <p> No Products available</p>}
          {showItemsType === "grid" ? (
            // <p className="text=black">No products available</p>
            products?.map((product, index) => (
              <div className="mt-[20px] flex" key={index}>
                <Image
                  src={product?.productImageUrl}
                  width={299}
                  height={272.5}
                  alt="product-image"
                />

                <div className="pl-[15.52px]">
                  <h1 className="text-[18px] font-bold text-[#223263] ">
                   {product?.productName}
                  </h1>
                  <div className="flex items-center pt-[10px]">
                    <Image
                      src={Rating}
                      height={10.63}
                      width={76.95}
                      alt="rating"
                    />
                    <span className="text-[#C1C8CE] text-[16px] px-[16px]">
                      0 reviews
                    </span>
                    <h4 className="text-[#33A0FF] text-[16px]">
                      Submit a review
                    </h4>
                  </div>
                  <div className="w-[499.49px] h-[2.13px] bg-[#F6F7F8] mt-[18.53px]"></div>
                  {/* <div className="text-[#40BFFF]">$299,43</div> */}
                  <div className="pt-[17px]">
                    <span className="text-[20px] font-bold text-[#40BFFF]">
                    {product?.productCurrentPrice}
                    </span>
                    <span className="text-[14px] text-[#9098B1] pl-[9px]">
                      {product?.productPreviousPrice}
                    </span>
                    <span className="text-[14px] font-bold pl-[8px] text-[#FB7181]">
                      {product?.productOf}
                    </span>
                  </div>
{/* text product details */}
                  <div className="text-[#262626] text-[14px]">
                        <span className="">Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor ...</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            // <ul>
            <div className="grid grid-cols-3 gap-[34px]  pt-[23px] gap-y-[34px]">
              {products?.map((product, index) => (
                <div
                  key={index}
                  className="h-[388px] w-[301px] border-[#F6F7F8] border-b-4 border-l-4 border-r-4 rounded-md"
                >
                  {/* Image Section */}
                  <Image
                    src={product.productImageUrl}
                    width={299}
                    height={272.5}
                    alt="product-image"
                  />

                  {/* { Details Section */}
                  <div className="pt-[14px]">
                    <h1 className="text-[18px] font-bold text-[#223263] text-center">
                      {product.productName}
                    </h1>
                    <Image
                      className="mx-auto pt-[6px]"
                      src={Rating}
                      width={123}
                      height={15}
                      alt="rating-image"
                    />
                    <div className="flex items-center pt-[6px] justify-center">
                      <h3 className="text-imageBgColor text-[18px] font-bold ">
                        $299.43
                      </h3>
                      <div className="flex justify-center pl-[13px] items-center">
                        <h3 className="text-textLighGrayColor text-[14px]">
                          $534.33
                        </h3>
                        <h3 className="text-textRedColor text-[14px] font-bold pl-[8px]">
                          24% off
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}{" "}
            </div>
            // </ul>
          )}

          {/* <div>kuanl</div> */}
          <Pegination />
        </div>
      </div>
    </>
  );
};

export default Product;
