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
import { useParams } from "next/navigation";
// import { usePathname } from "next/navigation";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);
  const [products, setProducts] = useState({});
  const [error, setError] = useState(null);
  // const navigate = usePathname();
  const router = useRouter();

  const addToCartHandler = (products) => {
    dispatch(addToCart(products));
    // Link("/cart")
    // router.push("/cart")
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3333/api/v1/products/product/${id}`
        );
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
            src={products?.productImageUrl}
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
            <span className="text-[#C1C8CE] text-[16px] px-[16px]">
              0 reviews
            </span>
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
            <span className="text-[16px] text-[#262626] pt-[24.46px]">
              Select Color:
            </span>
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
              <button
                onClick={minusAmount}
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
            <div className="flex items-center gap-3">
              <button
                className="flex gap-4 items-center justify-center h-[48.91px] w-[159.41px] bg-[#33A0FF] bg-opacity-[10%]"
                onClick={() => addToCartHandler(products)}
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
          <Link href="">
            <div className="flex bg-[#385C8E] h-[48.91px] w-[244.43px] text-center text-white">
             
              
              <Image
                className=""
                src={FaceBookPicture }
                alt="fblogo"
                width={8}
                height={16}
              />
              <button>Share on Facebook</button>
             
            
             
            </div>
              </Link>
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
                <span className="text-[14px] text-[#33A0FF]">
                  Add To Wish List
                </span>
                <span className="text-[14px] text-[#33A0FF]">
                  Add To Compare
                </span>
              </div>
            </div>
          </div>
        </div>
       
      </div>
   

      <div className="bg-[#FAFAFB] h-[382.8px] w-[924.58px] mt-[48.91px] ml-[125px] rounded-md">
        <div className="text-[18px] flex gap-[78px] pt-[34.29px] px-[31.88px]">
          <span className="text-productFontColorBlue ">Product Infomation</span>
         
          <span className="text-[#262626]">Reviews 0</span>
          <span className="text-[#262626]">Another tab</span>
          </div>
          <div className="w-[924.58] h-[4.25px] bg-[#E5E8EA] mt-[27.58px] mb-[21.08px]">

          <div className="bg-[#2E90E5] w-[150.91px] h-[4.25px] ml-[32.94px]"></div>
            <div className="text-[#9098B1] text-[12px] pl-[30.95px] pt-[21px]">air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and <br />scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one <br />of my favorites.</div>
            <div className="text-[#9098B1] text-[12px] pl-[30.95px] pt-[21px]">air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and <br />scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one <br />of my favorites.</div>
            <div className="text-[#9098B1] text-[12px] pl-[30.95px] pt-[21px]">air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and <br />scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one <br />of my favorites.</div>
          </div>
        </div>


     
        <div className="flex mt-[77.51px]">
        {/* <h4 className="mx-auto text-[35px] text-[#22262A] font-semibold">RELATED PRODUCTS</h4> */}
       
        <h4 className="mx-auto text-[35px] text-[#22262A] font-semibold">
          RELATED PRODUCTS
        </h4>
      </div>

      <div className="grid grid-cols-4 gap-4 mt-[83px] px-[109px]">
      {Array(4)
          .fill()
          .map((_, index) => (
           

           <div
              // key={index}
              className="h-[388px] w-[301px]  border-[#F6F7F8] border-b-4 border-l-4 border-r-4 rounded-md "
            >
              {/* Image Section */}
              <Image
                src={ProductImage}
                width={299}
                height={272.5}
                alt="product-image"
              />

              {/* Details Section */}
              <div className="pt-[14px]">
                <h1 className="text-[18px] font-bold text-[#223263] text-center">
                  Nike Air Max 270 React
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








))} 
</div>


 

         
     
    </>
  );
};

export default ProductPage;
