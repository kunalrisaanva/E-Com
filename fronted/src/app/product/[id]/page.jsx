"use client";
import React, { useState, useEffect } from "react";
import UpperLine from "@/components/UpperLine.";
import Image from "next/image";
import NikeShoes from "../../../../public/images/imageProduct3.png";
import Rating from "../../../../public/images/rate.png";
import ProductImage from "../../../../public/images/image_Product.png";
import ProductPicture from "../../../../public/images/Product Picture.png";
import FaceBookPicture from "../../../../public/images/facebook (1).png";
import TwitterPicture from "../../../../public/images/twitter 2.png";
import HeartPicture from "../../../../public/images/hearts.png";
import CartPicture from "../../../../public/images/cart_2.png";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cartSlice";
import { useParams } from "next/navigation";
// import { usePathname } from "next/navigation";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";
import axios from "axios";
import { Toaster,toast } from "sonner";


const ProductPage = () => {
  const { id } = useParams();
  // console.log(id);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);
  const [products, setProducts] = useState({});
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [relatedProduct,setRelatedProduct] = useState([]);

  const [activeTab, setActiveTab] = useState("product-info");
  

  // const navigate = usePathname();
  const router = useRouter();

  const addToCartHandler = (products) => {
    toast.success("Product added to cart");
    dispatch(addToCart(products));
    // Link("/cart")
    // router.push("/cart")
  };

  useEffect(() => {
    (async () => {
      try {
        setError(false);
        setIsLoading(true);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/products/product/${id}`
        );
        const result = await response.json();
        if (result.success) {
          setProducts(result.data);
          setIsLoading(false);
        } else {
          setError(false);
        }
      } catch {
        setError(true);
      }
    })();
  }, [id]);


  useEffect(() => {

  ;(async() => {

    
    try {
      setError(false);
     setIsLoading(true);
     const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/products/related/${id}`);
      // console.log('responst -------_>',response);
    const {data} = response;

    if(response.status !== 200){
        setError(true)
    }
    setRelatedProduct(data?.data)
    setIsLoading(false)
    // console.log(response.status === 200);
   } catch (error) {
    console.log(error);
    setError(true)
   }



  })()


  },[]);



  if (error) return <div>{error}</div>;

  if (isLoading) return <div> Loading ...</div>;


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
            priority={true}
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
          <div className="mt-[20.02px] flex items-center gap-2">
            <Link href="">
              <div className="flex bg-[#385C8E] h-[48.91px] w-[244.43px] text-center text-white rounded-md">
                <div className="mx-auto justify-center items-center flex gap-2">
                  <Image
                    className=""
                    src={FaceBookPicture}
                    alt="fblogo"
                    width={8.13}
                    height={16.09}
                  />
                  <button className="text-[16px] font-medium">
                    Share on Facebook
                  </button>
                </div>
              </div>
            </Link>
            <Link href="">
              <div className="flex bg-[#03A9F4] h-[48.91px] w-[244.43px] text-center text-white rounded-md">
                <div className="mx-auto justify-center items-center flex gap-2">
                  <Image
                    className=""
                    src={TwitterPicture}
                    alt="fblogo"
                    width={17.28}
                    height={12.65}
                  />
                  <button className="text-[16px] font-medium">
                    Share on Twitter
                  </button>
                </div>
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

      <div className="bg-[#FAFAFB] h-[382.8px] w-[940.58px] mt-[48.91px] ml-[125px] rounded-md">
      {/* Tabs */}
      <div className="text-[18px] flex gap-[78px] pt-[34.29px] px-[31.88px] relative">
        {["product-info", "review", "another"].map((tab) => (
          <button
            key={tab}
            className={`cursor-pointer pb-2 ${
              activeTab === tab ? "text-productFontColorBlue" : "text-[#262626]"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === "product-info" && "Product Information"}
            {tab === "review" && "Reviews 0"}
            {tab === "another" && "Another Tab"}
          </button>
        ))}
      </div>

      {/* Underline */}
      <div className="relative w-[924.58px] h-[4.25px] bg-[#E5E8EA] mt-[27.58px] mb-[21.08px]">
        <div
          className={`absolute h-[4.25px] bg-[#2E90E5] transition-all duration-300`}
          style={{
            width: "150.91px", // Width of the underline
            left: activeTab === "product-info" ? "32.94px" :
                  activeTab === "review" ? "260px" : "420px", // Adjust based on tab position
          }}
        ></div>
      </div>

      {/* Tab Content */}
      <div className="text-[#9098B1] text-[12px] pl-[30.95px] pt-[21px]">
        {activeTab === "product-info" && (
          <p>

            <div>
            Air Max are always very comfortable fit, clean and just perfect in every way. Just the box was too small and 
            <br />
            scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one <br /> of my favorites. 
            </div>

            <div className="mt-[15px]">
            Air Max are always very comfortable fit, clean and just perfect in every way. Just the box was too small and 
            <br />
            scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of <br /> my favorites. 
            </div>

            <div className="mt-[15px]">
            Air Max are always very comfortable fit, clean and just perfect in every way. Just the box was too small and 
            <br />
            scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one <br /> of my favorites. 
            </div>
           
           
            
          </p>
          
        )}
        {activeTab === "review" && (
          <p>No reviews yet. Be the first to review this product!</p>
        )}
        {activeTab === "another" && (
          <p>This is another tab content. You can add more details here.</p>
        )}
      </div>
    </div>





      <div className="flex mt-[77.51px]">
        {/* <h4 className="mx-auto text-[35px] text-[#22262A] font-semibold">RELATED PRODUCTS</h4> */}

        <h4 className="mx-auto text-[35px] text-[#22262A] font-semibold">
          RELATED PRODUCTS
        </h4>
      </div>

      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong</p>}
      <div className="grid grid-cols-4 gap-4 mt-[83px] px-[109px]">
        {relatedProduct
          .map((relatedProduct, index) => (
            <Link href={`/product/${relatedProduct._id}`} >
            <div
              key={index}
              className="h-[388px] w-[301px]  border-[#F6F7F8] border-b-4 border-l-4 border-r-4 rounded-md "
            >
              {/* Image Section */}
              <Image
                src={relatedProduct?.productImageUrl}
                width={299}
                height={272.5}
                alt="product-image"
              />

              {/* Details Section */}
              <div className="pt-[14px]">
                <h1 className="text-[18px] font-bold text-[#223263] text-center">
                {relatedProduct?.productName}
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
                   {products?.productCurrentPrice}
                  </h3>
                  <div className="flex justify-center pl-[13px] items-center">
                    <h3 className="text-textLighGrayColor text-[14px]">
                      {relatedProduct?.productPreviousPrice}
                    </h3>
                    <h3 className="text-textRedColor text-[14px] font-bold pl-[8px]">
                      {relatedProduct?.productOf}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            </Link>
          ))}
      </div>
    </>
  );
};

export default ProductPage;
