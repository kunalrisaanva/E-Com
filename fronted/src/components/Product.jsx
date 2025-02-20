"use client";
import React, { useEffect, useState } from "react";
import Shoes from "/public/images/shoes-shoe-png-transparent-shoe-images-pluspng-171.png";
import ImageProduct from "/public/images/image_Product.png";
import Rating from "/public/images/rate.png";
import Image from "next/image";
import UpperLine from "@/components/UpperLine";
import Pegination from "@/components/Pegination";
import GridImage from "/public/images/switch.png";
import ListImage from "/public/images/switch (1).png";
import Example from "@/components/RangeSlider";
import axios from "axios";
import HeartPicture from "/public/images/hearts.png";
import CartPicture from "/public/images/cart_2.png";
import Link from "next/link";
import ListIcon from "@mui/icons-material/List";
import ViewCompactIcon from "@mui/icons-material/ViewCompact";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartSlice";
import { Toaster,toast } from "sonner";


const Product = ({ category }) => {
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [showItemsType, setShowItemsType] = useState("grid");
 
  const addToCartHandler = (product) => {
    console.log(product);
    toast.success("Product added to cart");
    dispatch(addToCart(product));
  };

  // Fetch data on component mount
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/products/product?q=${category}`
        );
        const { data } = response;
        if (data.statusCode === 200) {
          setProducts(data?.data); // Set the fetched product data
          setIsLoading(false);
        } else {
          setError("Error fetching data");
          setIsLoading(false);
        }
      } catch (err) {
        setError(`Error fetching data${err}`);
        setIsLoading(false);
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
        <div className="pt-[51px] pl-[31px] ">
          <div className="bg-imageBgColor h-[297px] w-[961px] flex relative overflow-visible ">
            <div className="pt-[57px] pl-[109px] z-10">
              <h1 className="text-[30px] font-semibold text-white ">
                Adidas Men Running <br /> Sneakers
              </h1>
              <p className="text-white text-[14px] pt-[13px]">
                Performance and design. Taken right to the edge.
              </p>
              <span className="inline-block font-semibold text-white text-[12px] mt-[24px]">
                SHOP NOW
              </span>
              <div className="w-[60px] border border-white mt-1 "></div>
            </div>
            <Image
              src={Shoes}
              alt="shoes-image"
              height={297}
              width={397}
              className="absolute left-[45%] top-[-40px] z-0"
            />
          </div>

          {/* itesm details and category types show type bar */}

          <div className=" mt-[47px] w-full ">
            <div className="flex  justify-between bg-[#F6F7F8] items-center h-[56px]  ">
              <div className="flex items-center gap-10 pl-[22px] ">
                <span className="text-[16px]">{[products.length]} items</span>
                <div className="flex items-center gap-3">
                  <span>Sort By</span>
                  <div className="flex items-center justify-between px-5 h-[38px] w-[128.21px] border-2 border-[#F1F3F4] rounded">
                    <span className="  inline-block">Name</span>
                    <div className="cursor-pointer">
                      <Image
                        src="data:image/png;base64,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"
                        height={10}
                        width={15}
                        alt="dropdown-image"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-center">Show</span>
                  <div className="flex items-center justify-between px-5 h-[38px] w-[128.21px] border-2 border-[F1F3F4] rounded">
                    <span className="  inline-block">8</span>
                    <div className="cursor-pointer">
                      <Image
                        src="data:image/png;base64,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"
                        height={10}
                        width={15}
                        alt="dropdown-image"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* images of list image and grid images options */}
              <div className="flex items-center cursor-pointer gap-2 pr-2 ">
                {/* <Image
                    src={GridImage}
                    height={58}
                    width={55.26}
                    alt="list-image-option"
                    onClick={() => setShowItemsType("grid")}
                  /> */}
                {/* <Image
                    src={ListImage}
                    height={58}
                    width={55.26}
                    alt="list-image-option"
                    onClick={() => setShowItemsType("list")}
                  /> */}
                {/* <ListIcon  onClick={() => setShowItemsType("list")}/> */}
                <div className="bg-[#F1F3F4] ">
                  <ViewCompactIcon
                    sx={{
                      fontSize: 35,

                      color: showItemsType === "grid" ? "#33A0FF" : "#B0B0B0",
                    }}
                    onClick={() => setShowItemsType("grid")}
                  />
                </div>

                <ListIcon
                  sx={{
                    fontSize: 40,
                    color: showItemsType === "list" ? "#33A0FF" : "#B0B0B0",
                  }}
                  onClick={() => setShowItemsType("list")}
                />
              </div>
            </div>
          </div>

          {isLoading &&  <p> Loading ... </p>}
          { products.length === 0 && isLoading === false && <p> No Products available</p>}
          {showItemsType === "list" ? (
            // <p className="text=black">No products available</p>
            products?.slice(0, 4).map((product, index) => (
              <div className="pt-[20px] flex" key={index}>
                <Link href={`/product/${product._id}`} key={index}>
                  <Image
                    src={product?.productImageUrl}
                    width={299}
                    height={272.5}
                    alt="product-image"
                  />
                </Link>

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

                  {/* line */}
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
                    <span className="">
                      Nunc facilisis sagittis ullamcorper. Proin lectus ipsum,
                      gravida et mattis vulputate, tristique ut <br /> lectus.
                      Sed et lectus lorem nunc leifend laorevtr istique et
                      congue. Vivamus adipiscin <br />
                      vulputate g nisl ut dolor ...
                    </span>
                  </div>

                  {/* add to cart button  */}
                  <div className="flex items-center gap-3 pt-[28px]">
                    <button
                      className="flex gap-4 items-center justify-center h-[46px] w-[150px] bg-[#33A0FF] bg-opacity-[10%]"
                      onClick={() => addToCartHandler(product)}
                    >
                      <Image
                        src={CartPicture}
                        alt="cart-picture"
                        height={16}
                        width={15.95}
                      />
                      <span className="text-[18px] text-[#33A0FF]">
                        Add To Cart
                      </span>
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

                  <div className="w-[499.49px] h-[2.13px] bg-[#F6F7F8] mt-[18.53px]"></div>
                </div>
              </div>
            ))
          ) : (
            // <ul>
            <div className="grid grid-cols-3 gap-[34px]  pt-[23px] gap-y-[34px]">
              {products?.map((product, index) => (
                <Link href={`/product/${product._id}`} key={index}>
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
                </Link>
              ))}
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
