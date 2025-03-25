"use client";
import Image from "next/image";
import Shoes from "/public/images/shoes.png";
import WhyUs from "/public/images/WHY US.png";
import NikeLogo from "/public/images/Nike_logo_emblem_logotype 1.png";
import FigmaLogo from "/public/images/figma-1-logo 1.png";
import KronosLogo from "/public/images/kronos-logo-1-1 1.png";
import Reacangle from "/public/images/Rectangle 1 copy 25.png";
import Rating from "/public/images/rate.png";
import { useState, useEffect, use } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import axios from "axios";
// import CartPicture from "/public/images/Group 4.png";
// import HeartPicture from "/public/images/hearts.png";
import Three from "../components/Three"
import CardProducts from "../components/CardProducts";




export default function Home() {
  const [products, setProducts] = useState([]); // All products from the API
  const [filteredProducts, setFilteredProducts] = useState([]); // Filtered products
  const [category, setCategory] = useState("all"); // Current category filter
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [visible, setVisible] = useState(8);

  const pathname = usePathname();

  useEffect(() => {

    const localStorageProducts = localStorage.getItem("productsInLocalStorage")

    if (localStorageProducts) {
      try {
        setIsLoading(true);
        // console.log("products comes from localstore-->",localStorageProducts);
        setProducts(JSON.parse(localStorageProducts));
        setIsLoading(false); 
      } catch (error) {
        console.error("Error parsing localStorage data:", error);
        localStorage.removeItem("productsInLocalStorage");
      }
    }


    (async () => {
      try {
        setIsLoading(true);

        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/products/home-screen/products`
        );
        const { data } = response;
        // console.log(data);
        setProducts(data?.data);
        setIsLoading(false);
        localStorage.setItem("productsInLocalStorage",JSON.stringify(data?.data));
      } catch (error) {
        setError(true);
      }
    })();
  }, []);

  // Filter products when the category changes

  useEffect(() => {
    if (category === "all") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product?.category === category)
        // products.filter(())
      );
    }
  }, [category, products, visible]);

  const handleLoadMore = () => {
    setVisible((prev) => prev + 8);
  };

  const handleShowless = () => {
    setVisible((prev) => prev - 8);
  };


  return (
    <>
    {/* <BackgroundLinesDemo/> */}
      <div className="mb-[15rem] pt-[30px]">
        {/* landing page image  */}

        {/* <div className="mt-[3rem]" > */}

        <div className="bg-[url('/images/PromotionImage.png')] bg-no-repeat bg-cover bg-center h-[653px] sm:h-[500px] md:h-[653px] w-full">
          <h1 className="text-white text-[64px] font-bold pt-[258px] pl-[100px]">
            Super Flash Sale <br /> 50% off
          </h1>

          <div className="flex justify-center items-center">
          <Three title="FS - QUILTED MAXI " category="CROSS BAG"  offPrrice = "24% Off" image="bg-[url('/images/imageProduct.png')]" currentPrice="$299,43" previousPrice="$534,33"/>
          <Three title="FS - Nike Air" category="Max 270 React..."  offPrrice = "24% Off" image="bg-[url('/images/imageProduct2.png')]" currentPrice="$299,43"   previousPrice="$534,33" variant="variant1"/>
          <Three title="FS - Nike Air" category="Max 270 React..."  offPrrice = "24% Off" image="bg-[url('/images/imageProduct3.png')]" currentPrice="$299,43" previousPrice="$534,33" variant="variant2"/>
          </div>
       
        </div>
      </div>

      <div>
        <h4 className="text-[35px] font-semibold pt-[63px] text-center">
          BEST SELLER
        </h4>

        <ul className="pt-[20px] flex text-[22px] text-black text-center items-center justify-center gap-[70px]">
          <li>
            <button
              onClick={() => setCategory("all")}
              className={`${
                category === "all"
                  ? "text-productFontColorBlue underline underline-offset-8"
                  : ""
              }`}
            >
              All
            </button>
          </li>
          <li>
            <button
              onClick={() => setCategory("bags")}
              className={`${
                category === "bags"
                  ? "text-productFontColorBlue underline underline-offset-8"
                  : ""
              }`}
            >
              Bags
            </button>
          </li>
          <li>
            <button
              onClick={() => setCategory("shoes")}
              className={`${
                category === "shoes"
                  ? "text-productFontColorBlue underline underline-offset-8"
                  : ""
              }`}
            >
              Sneakers
            </button>
          </li>
          <li>
            <button
              onClick={() => setCategory("belt")}
              className={`${
                category === "belt"
                  ? "text-productFontColorBlue underline underline-offset-8"
                  : ""
              }`}
            >
              Belt
            </button>
          </li>
          <li>
            <button
              onClick={() => setCategory("sunglasses")}
              className={`${
                category === "sunglasses"
                  ? "text-productFontColorBlue underline underline-offset-8"
                  : ""
              }`}
            >
              Sunglasses
            </button>
          </li>
        </ul>

        {/* products */}
        <div className="mt-[10px] flex flex-wrap justify-center gap-2">
  {/* Error Message */}
  {error && !isLoading && (
    <p className="text-xl text-red-600">Something went wrong while fetching data</p>
  )}

  {/* Loading Message */}
  {isLoading && <p className="text-gray-500">Loading Products...</p>}

  {/* No Products Message */}
  {!isLoading && filteredProducts?.length === 0 ? (
    <p className="text-black">No products available</p>
  ) : (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 ">
      {filteredProducts?.slice(0, visible).map((product, index) => (
      
        <Link href={`/product/${product._id}`} key={index} className="block">
          <CardProducts 
            image={product?.productImageUrl} 
            ratingImage={Rating} 
            productName={product?.productName} 
            productCurrentPrice={product?.productCurrentPrice} 
            productOf={product?.productOf} 
            productPreviousPrice={product?.productPreviousPrice}
          />
        </Link>
      ))}
    </div>
  )}
</div>


     
      </div>

      <div className="w-64 mx-auto text-center p-4">
        <h4 className="text-[20px] my-[4rem] cursor-pointer font-semibold text-productFontColorBlue underline underline-offset-8 ">
          {visible === 16 ? (
            <button
              className="text-productFontColorBlue underline underline-offset-8"
              onClick={handleShowless}
            >
              show less
            </button>
          ) : (
            <button
              className="text-productFontColorBlue underline underline-offset-8"
              onClick={handleLoadMore}
            >
              Load more
            </button>
          )}

          {/* Load more */}
        </h4>
      </div>

      {/* blue image code */}

      <div className="bg-imageBgColor h-[600px] w-auto flex relative overflow-visible ">
        <div className="pt-[162px] pl-[80px] z-10">
          <h1 className="text-[55px] font-medium text-white ">
            Adidas Men Running <br /> Sneakers
          </h1>
          <p className="text-white text-[24px] pt-[23px]">
            Performance and design. Taken right to the edge.
          </p>

          <span className="inline-block font-semibold text-white text-[20px] mt-[16px]">
            SHOP NOW
          </span>
          <div className="w-[100px] border border-white mt-1 "></div>
        </div>
        <Image
          src={Shoes}
          alt="shoes-image"
          height={598}
          width={794}
          className="absolute right-[10px] top-[-90px] z-0"
        />
      </div>

      <div className=" pt-[97px] flex-col">
        <div>
          <Image
            className="mx-auto"
            src={WhyUs}
            height={865}
            width={1000}
            alt="why-us-image"
          />
        </div>

        <div className="flex items-center justify-center ">
          {/* <h3 className="mx-auto text-[27px] font-medium">FREE SHIPPING</h3> */}
          <p className=" text-black">
            Lorem Ipsum is simply <br />
            dummy text of the <br /> printing and typesetting
            <br /> industry.
          </p>
          <p className="pl-[244px] text-black">
            Lorem Ipsum is simply <br />
            dummy text of the <br />
            printing and typesetting <br />
            industry.
          </p>
          <p className="pl-[240px] text-black">
            Lorem Ipsum is simply <br /> dummy text of the <br />
            printing and typesetting <br />
            industry.
          </p>
        </div>
      </div>

      <div className=" pt-[121px]">
        <div className="flex">
          <h4 className="text-[34px] font-semibold mx-auto">LATEST NEWS</h4>
        </div>

        <div className="flex items-start gap-10 pt-[61px] justify-center">
          {/* Image Section */}
          <div className="flex">
            <Image
              className="object-contain pt-[18px]"
              alt="product-image"
              src={NikeLogo}
              height={52}
              width={144}
            />

            <div className="pl-[35px]">
              <span className="text-[18px] text-[#C1C8CE] font-medium">
                01 Jan, 2015
              </span>
              <h4 className="font-semibold text-[22px] pt-[2px]">
                Fashion Industry
              </h4>
              <p className="pt-[2px]">
                Lorem Ipsum is simply <br /> dummy text of the <br /> printing
                and typesetting <br />
                industry.
              </p>
            </div>
          </div>

          {/* Text Content Section */}

          <div className="flex">
            <Image
              className="object-contain pt-[18px]"
              alt="product-image"
              src={FigmaLogo}
              height={52}
              width={144}
            />

            <div className="pl-[35px]">
              <span className="text-[18px] text-[#C1C8CE] font-medium">
                01 Jan, 2015
              </span>
              <h4 className="font-semibold text-[22px] pt-[2px]">
                Best Design Tools
              </h4>
              <p className="pt-[2px]">
                Lorem Ipsum is simply <br /> dummy text of the <br /> printing
                and typesetting <br />
                industry.
              </p>
            </div>
          </div>

          <div className="flex">
            <Image
              className="object-contain pt-[18px]"
              alt="product-image"
              src={KronosLogo}
              height={52}
              width={144}
            />

            <div className="pl-[35px]">
              <span className="text-[18px] text-[#C1C8CE] font-medium">
                01 Jan, 2015
              </span>
              <h4 className="font-semibold text-[22px] pt-[2px]">
                HR Community
              </h4>
              <p className="pt-[2px]">
                Lorem Ipsum is simply <br /> dummy text of the <br /> printing
                and typesetting <br />
                industry.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col pt-[110px]">
        <div className="flex justify-center">
          <h3 className="text-[#22262A] font-semibold text-[35px]">
            FEATURED PRODUCTS
          </h3>
        </div>
        <div className="flex justify-center pt-[73px] items-center gap-16">
          <div className="flex">
            <div>
              <Image
                src={Reacangle}
                alt="product-image"
                height={154}
                width={154}
              />
            </div>
            <div className="pl-[20px]">
              <h4 className="text-[22px] font-light  leading-[1.2]">
                Blue Swade Nike <br />
                Sneakers
              </h4>
              <Image
                className="pt-[16px]"
                src={Rating}
                height={11}
                width={86}
                alt="rating"
              />
              <div className="pt-[17px]">
                <span className="text-[#FF4858] font-medium text-[20px] pt-[17px]">
                  $499
                </span>
                <span className="text-[#C1C8CE] font-medium text-[20px] pt-[17px] pl-[4px]">
                  $499
                </span>
              </div>
            </div>
          </div>

          <div className="flex">
            <div>
              <Image
                src={Reacangle}
                alt="product-image"
                height={154}
                width={154}
              />
            </div>
            <div className="pl-[20px]">
              <h4 className="text-[22px] font-light  leading-[1.2] ">
                Blue Swade Nike <br />
                Sneakers
              </h4>
              <Image
                className="pt-[16px]"
                src={Rating}
                height={11}
                width={86}
                alt="rating"
              />
              <div className="pt-[17px]">
                <span className="text-[#FF4858] font-medium text-[20px] pt-[17px]">
                  $499
                </span>
                <span className="text-[#C1C8CE] font-medium text-[20px] pt-[17px] pl-[4px]">
                  $499
                </span>
              </div>
            </div>
          </div>

          <div className="flex">
            <div>
              <Image
                src={Reacangle}
                alt="product-image"
                height={154}
                width={154}
              />
            </div>
            <div className="pl-[24px]">
              <h4 className="text-[22px] font-light  leading-[1.2]">
                Blue Swade Nike <br />
                Sneakers
              </h4>
              <Image
                className="pt-[16px]"
                src={Rating}
                height={11}
                width={86}
                alt="rating"
              />
              <div className="pt-[17px]">
                <span className="text-[#FF4858] font-medium text-[20px] pt-[17px]">
                  $499
                </span>
                <span className="text-[#C1C8CE] font-medium text-[20px] pt-[17px] pl-[4px]">
                  $499
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex pt-[110px]   items-center justify-center">
        <div className="flex w-[635px] ">
          <input
            className="rounded-l-md h-[64px] w-full pl-4 pr-[80px] rounded-sm border-[2px] border-[#40BFFF] focus:outline-none focus:ring-0"
            type="text"
            placeholder="Search query"
          />

          <button className="rounded-r-md w-[127px] text-white bg-[#40BFFF] font-semibold text-[20px]">
            Search
          </button>
        </div>
      </div>
    </>
  );
}


