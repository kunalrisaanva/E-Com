'use client';
import Header from "../components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
// import PromotionImage from "/public/images/PromotionImage.png";
import Shoes from "/public/images/shoes.png";
import WhyUs from "/public/images/WHY US.png";
import NikeLogo from "/public/images/Nike_logo_emblem_logotype 1.png";
import FigmaLogo from "/public/images/figma-1-logo 1.png";
import KronosLogo from "/public/images/kronos-logo-1-1 1.png";
import Reacangle from "/public/images/Rectangle 1 copy 25.png";
import Rating from "/public/images/rate.png";
import ImageProduct from "../../public/images/image_Product.png";
import { useState,useEffect } from "react";
// import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";
import Link from "next/link";
// import Footer from "./components/Footer";

// async function getProductData() {
//   const res = await fetch(
//     "http://localhost:3333/api/v1/products/home-screen/products"
//   );
//   if (!res.ok) {
//     return <p className="text-black"> No product available </p>;
//   }
//   return res.json();
// }


// async function getProducts(category = "all") {
//   const res = await fetch(
//     `http://localhost:3333/api/v1/products/home-screen/products`
//   );

//   if (!res.ok) {
//     throw new Error("Failed to fetch products");
//   }

//   const data = await res.json();
//   return data.data || [];
// }

export default  function Home() {

  // const category = searchParams?.category || "all"; // Default to "all"
  // const data = await getProducts();
  // console.log(data);

  const [products, setProducts] = useState([]); // All products from the API
  const [filteredProducts, setFilteredProducts] = useState([]); // Filtered products
  const [category, setCategory] = useState("all"); // Current category filter


  const pathname = usePathname();

  useEffect(() => {
    // Fetch products from the API
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3333/api/v1/products/home-screen/products");
        const data = await response.json();
        // console.log(data);
        setProducts(data?.data);
        // console.log(data.data);
        setFilteredProducts(data?.data); // Initially show all products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
// console.log(products.data);

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
  }, [category, products]);

  // console.log(filteredProducts);


  // console.log("filter product --->>",filteredProducts);
  // const [allProducts, setAllProducts] = useState([]);
  // const [filteredProducts, setFilteredProducts] = useState([]);

  // useEffect(() => {
  //   async function fetchProducts() {
  //     const data = await getProductData();
  //     // console.log('data---->',data.data);
  //     setAllProducts(data.data || []);
  //     setFilteredProducts(data.data || []);
  //   }
  //   fetchProducts();
  // },[])


// console.log(allProducts[0]?.category);
  // const filterByCategory = (category) => {
  //   if (category === "All") {
  //     setFilteredProducts(allProducts);
  //   } else {
  //     const filtered = allProducts.filter(
  //       (product) => product.category.toLowerCase() === category.toLowerCase()
  //     );
  //     setFilteredProducts(filtered);
  //   }
  // };


  return (
    <>
      <div className="mb-[15rem] pt-[30px]">
        {/* landing page image  */}

        {/* <div className="mt-[3rem]" > */}

        <div className="bg-[url('/images/PromotionImage.png')] bg-no-repeat bg-contain bg-center h-[653px] w-full">
          <h1 className="text-white text-[64px] font-bold pt-[258px] pl-[100px] ">
            Super Flash Sale <br /> 50% off
          </h1>

          {/* */}
          <div className="flex pt-[110px]">
            <div className="pl-[105px] ">
              <div className="bg-[url('/images/imageProduct.png')] bg-cover bg-center h-[358px] w-[417px]">
                <h4 className="text-black text-[20px] pt-[29px] font-semibold pl-[52px] tracking-[0.5px] leading-[150%]">
                  FS - QUILTED MAXI <span className="block">CROSS BAG</span>
                  <div className="flex pt-[180px]">
                    <span className="text-[18px]">$534,33</span>
                    <span className="text-[18px] pl-[8px] text-[#FB7181]">
                      24% Off
                    </span>
                    <span className="text-[30px] font-bold pl-[68px] pt-[32px] text-[#40BFFF]">
                      $299,43
                    </span>
                  </div>
                </h4>
              </div>
            </div>

            <div className="">
              <div className="bg-[url('/images/imageProduct2.png')] bg-cover bg-center h-[358px] w-[417px]">
                <h4 className="text-black text-[20px] pt-[29px] font-semibold pl-[52px] tracking-[0.5px] leading-[150%]">
                  FS - QUILTED MAXI <span className="block">CROSS BAG</span>
                  <div className="flex pt-[180px]">
                    <span className="text-[18px]">$534,33</span>
                    <span className="text-[18px] pl-[8px] text-[#FB7181]">
                      24% Off
                    </span>
                    <span className="text-[30px] font-bold pl-[68px] pt-[32px] text-[#40BFFF]">
                      $299,43
                    </span>
                  </div>
                </h4>
              </div>
            </div>

            <div className="">
              <div className="bg-[url('/images/imageProduct3.png')] bg-cover bg-center h-[358px] w-[417px]">
                <h4 className="text-black text-[20px] pt-[29px] font-semibold pl-[52px] tracking-[0.5px] leading-[150%]">
                  FS - QUILTED MAXI <span className="block">CROSS BAG</span>
                  <div className="flex pt-[180px]">
                    <span className="text-[18px]">$534,33</span>
                    <span className="text-[18px] pl-[8px] text-[#FB7181]">
                      24% Off
                    </span>
                    <span className="text-[30px] font-bold pl-[68px] pt-[32px] text-[#40BFFF]">
                      $299,43
                    </span>
                  </div>
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* <Image src={PromotionImage} alt="Promition-image" height={653} width={1918} objectFit="cover" */}

        {/* /> */}
        {/* <h2 className=" text-white text-[64px] font-bold"> Super Flash Sale 50% off </h2> */}

        {/* </div> */}

        {/*  3 products image  */}

        {/* <h1 className="text-white text-5xl"> Kunal </h1> */}
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
        category === "all" ? "text-productFontColorBlue underline underline-offset-8" : ""
      }`}
    >
      All
    </button>
  </li>
  <li>
    <button
      onClick={() => setCategory("bags")}
      className={`${
        category === "bags" ? "text-productFontColorBlue underline underline-offset-8" : ""
      }`}
    >
      Bags
    </button>
  </li>
  <li>
    <button
      onClick={() => setCategory("shoes")}
      className={`${
        category === "shoes" ? "text-productFontColorBlue underline underline-offset-8" : ""
      }`}
    >
      Sneakers
    </button>
  </li>
  <li>
    <button
      onClick={() => setCategory("belt")}
      className={`${
        category === "belt" ? "text-productFontColorBlue underline underline-offset-8" : ""
      }`}
    >
      Belt
    </button>
  </li>
  <li>
    <button
      onClick={() => setCategory("sunglasses")}
      className={`${
        category === "sunglasses" ? "text-productFontColorBlue underline underline-offset-8" : ""
      }`}
    >
      Sunglasses
    </button>
  </li>
</ul>

        {/* products */}

        {/* <Link href={`/product`}>  */}
        <div className="grid grid-cols-4 gap-4 px-[83px] pt-[23px] gap-y-[34px]">
          {filteredProducts?.length === 0 ? (
            <p className="text=black">No products available</p>
          ) : (
            filteredProducts?.map((product, index) => (
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
                        {product.productCurrentPrice}
                      </h3>
                      <div className="flex justify-center pl-[13px] items-center">
                        <h3 className="text-textLighGrayColor text-[14px]">
                          {product.productPreviousPrice}
                        </h3>
                        <h3 className="text-textRedColor text-[14px] font-bold pl-[8px]">
                          {product.productOf}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>

        {/* </Link> */}
      </div>

      <div className="w-64 mx-auto text-center p-4">
        <h4 className="text-[20px] my-[4rem] cursor-pointer font-semibold text-productFontColorBlue underline underline-offset-8 ">
         {/* <button onClick={() => {}}> Load more </button> */}
         Load more
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
        </div>
        <Image
          src={Shoes}
          alt="shoes-image"
          height={598}
          width={794}
          className="absolute right-[10px] top-[-90px] z-0"
        />
      </div>

      <div className=" pt-[97px] flex">
        <Image
          className="mx-auto"
          src={WhyUs}
          height={865}
          width={1000}
          alt="why-us-image"
        />
      </div>

      <div className="flex items-center pl-[231px]">
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
      <div className="flex pt-[121px]">
        <h4 className="text-[34px] font-semibold mx-auto">LATEST NEWS</h4>
      </div>

      <div className="flex items-start gap-4 pt-[71px] pl-[141px]">
        {/* Image Section */}
        <Image
          className="object-contain pt-[18px]"
          alt="product-image"
          src={NikeLogo}
          height={52}
          width={144}
        />

        {/* Text Content Section */}
        <div className="">
          <span className="text-[18px] text-[#C1C8CE] font-medium">
            01 Jan, 2015
          </span>
          <h4 className="font-semibold text-[22px] pt-[2px]">
            Fashion Industry
          </h4>
          <p className="pt-[2px]">
            Lorem Ipsum is simply <br /> dummy text of the <br /> printing and
            typesetting <br />
            industry.
          </p>
        </div>

        <Image
          className="object-contain pt-[18px]"
          alt="product-image"
          src={FigmaLogo}
          height={52}
          width={144}
        />

        {/* Text Content Section */}
        <div className="">
          <span className="text-[18px] text-[#C1C8CE] font-medium">
            01 Jan, 2015
          </span>
          <h4 className="font-semibold text-[22px] pt-[2px]">
            Fashion Industry
          </h4>
          <p className="pt-[2px]">
            Lorem Ipsum is simply <br /> dummy text of the <br /> printing and
            typesetting <br />
            industry.
          </p>
        </div>

        <Image
          className="object-contain pt-[18px]"
          alt="product-image"
          src={KronosLogo}
          height={52}
          width={144}
        />

        {/* Text Content Section */}
        <div className="">
          <span className="text-[18px] text-[#C1C8CE] font-medium">
            01 Jan, 2015
          </span>
          <h4 className="font-semibold text-[22px] pt-[2px]">
            Fashion Industry
          </h4>
          <p className="pt-[2px]">
            Lorem Ipsum is simply <br /> dummy text of the <br /> printing and
            typesetting <br />
            industry.
          </p>
        </div>
      </div>

      <div className="flex pt-[110px]">
        <h3 className="mx-auto text-[#22262A] font-semibold text-[35px]">
          FEATURED PRODUCTS
        </h3>
      </div>

      <div className="flex pl-[112px] pt-[73px] items-center gap-16">
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

      {/* search box */}

      {/* <div className="flex pt-[110px] items-center justify-center">
        <div className="flex w-[635px] relative">
          <input
            className="h-[64px] w-full pl-4 pr-[80px] rounded-sm border-[2px] border-[#40BFFF]"
            type="text"
            placeholder="Search query"
          />
          <button className="absolute w-[127px] right-0 top-0 h-full px-4 bg-[#40BFFF] text-white rounded-sm font-semibold text-[20px]">
            Search
          </button>
        </div>
      </div> */}

      <div className="flex pt-[110px]   items-center justify-center">
        <div className="flex w-[635px] ">
          <input
            className="rounded-l-md h-[64px] w-full pl-4 pr-[80px] rounded-sm border-[2px] border-[#40BFFF]"
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

/*    */
