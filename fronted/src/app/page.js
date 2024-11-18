import Header from "../components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import PromotionImage from "/public/images/PromotionImage.png";
import Shoes from "/public/images/shoes-shoe-png-transparent-shoe-images-pluspng-17 1.png";
import WhyUs from "/public/images/WHY US.png";
import NikeLogo from "/public/images/Nike_logo_emblem_logotype 1.png";
import FigmaLogo from "/public/images/figma-1-logo 1.png";
import KronosLogo from "/public/images/kronos-logo-1-1 1.png";
import Reacangle from "/public/images/Rectangle 1 copy 25.png";
import Rating from "/public/images/rate.png";
// import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <div className="mb-[15rem]">
        {/* landing page image  */}

        {/* <div className="mt-[3rem]" > */}

        <div className="bg-[url('/images/PromotionImage.png')] bg-cover bg-center h-[653px] w-full">
          <h1 className="text-white text-[64px] font-bold pt-[258px] pl-[100px]">
            Super Flash Sale <br /> 50% off
          </h1>

          {/* */}
          <div className="flex">
            <div className="pl-[105px] pt-[43px]">
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

            <div className="pt-[43px]">
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

            <div className="pt-[43px]">
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
        <h4 className="text-[35px] font-semibold text-center">BEST SELLER</h4>

        <ul className="pt-[20px] flex text-[22px] text-black text-center items-center justify-center gap-10">
          <li>
            <a
              href=""
              className="text-productFontColorBlue underline underline-offset-8 "
            >
              All
            </a>
          </li>
          <li>
            <a href="">Bags</a>
          </li>
          <li>
            <a href="">Sneakers</a>
          </li>
          <li>
            <a href="">Belt</a>
          </li>
          <li>
            <a href="">Sunglasses</a>
          </li>
        </ul>
        {/* products */}

        <div className="px-[83px] pt-[23px] flex flex-wrap gap-8">
          <div className="bg-[url('/images/image_Product.png')] bg-cover bg-center h-[272px] w-[299px] ">
            <h4 className="text-black text-[20px] pt-[29px] font-semibold pl-[52px] tracking-[0.5px] leading-[150%]">
              FS - QUILTED MAXI <span className="block">CROSS BAG</span>
              <div className="flex pt-[180px]">
                <span className="text-[18px]">$534,33</span>
                <span className="text-[18px] pl-[8px] text-[#FB7181]">
                  24% Off
                </span>
                <span className="text-[20px] font-bold pl-[28px] pt-[2px] text-[#40BFFF]">
                  $299,43
                </span>
              </div>
            </h4>
          </div>

          <div className="bg-[url('/images/image_Product.png')] bg-cover bg-center h-[272px] w-[299px]">
            <h4 className="text-black text-[20px] pt-[29px] font-semibold pl-[52px] tracking-[0.5px] leading-[150%]">
              FS - QUILTED MAXI <span className="block">CROSS BAG</span>
              <div className="flex pt-[180px]">
                <span className="text-[18px]">$534,33</span>
                <span className="text-[18px] pl-[8px] text-[#FB7181]">
                  24% Off
                </span>
                <span className="text-[20px] font-bold pl-[28px] pt-[2px] text-[#40BFFF]">
                  $299,43
                </span>
              </div>
            </h4>
          </div>

          <div className="bg-[url('/images/image_Product.png')] bg-cover bg-center h-[272px] w-[299px]">
            <h4 className="text-black text-[20px] pt-[29px] font-semibold pl-[52px] tracking-[0.5px] leading-[150%]">
              FS - QUILTED MAXI <span className="block">CROSS BAG</span>
              <div className="flex pt-[180px]">
                <span className="text-[18px]">$534,33</span>
                <span className="text-[18px] pl-[8px] text-[#FB7181]">
                  24% Off
                </span>
                <span className="text-[20px] font-bold pl-[28px] pt-[2px] text-[#40BFFF]">
                  $299,43
                </span>
              </div>
            </h4>
          </div>

          <div className="bg-[url('/images/image_Product.png')] bg-cover bg-center h-[272px] w-[299px]">
            <h4 className="text-black text-[20px] pt-[29px] font-semibold pl-[52px] tracking-[0.5px] leading-[150%]">
              FS - QUILTED MAXI <span className="block">CROSS BAG</span>
              <div className="flex pt-[180px]">
                <span className="text-[18px]">$534,33</span>
                <span className="text-[18px] pl-[8px] text-[#FB7181]">
                  24% Off
                </span>
                <span className="text-[20px] font-bold pl-[28px] pt-[2px] text-[#40BFFF]">
                  $299,43
                </span>
              </div>
            </h4>
          </div>

          <div className="bg-[url('/images/image_Product.png')] bg-cover bg-center h-[272px] w-[299px]">
            <h4 className="text-black text-[20px] pt-[29px] font-semibold pl-[52px] tracking-[0.5px] leading-[150%]">
              FS - QUILTED MAXI <span className="block">CROSS BAG</span>
              <div className="flex pt-[180px]">
                <span className="text-[18px]">$534,33</span>
                <span className="text-[18px] pl-[8px] text-[#FB7181]">
                  24% Off
                </span>
                <span className="text-[20px] font-bold pl-[28px] pt-[2px] text-[#40BFFF]">
                  $299,43
                </span>
              </div>
            </h4>
          </div>

          <div className="bg-[url('/images/image_Product.png')] bg-cover bg-center h-[272px] w-[299px]">
            <h4 className="text-black text-[20px] pt-[29px] font-semibold pl-[52px] tracking-[0.5px] leading-[150%]">
              FS - QUILTED MAXI <span className="block">CROSS BAG</span>
              <div className="flex pt-[180px]">
                <span className="text-[18px]">$534,33</span>
                <span className="text-[18px] pl-[8px] text-[#FB7181]">
                  24% Off
                </span>
                <span className="text-[20px] font-bold pl-[28px] pt-[2px] text-[#40BFFF]">
                  $299,43
                </span>
              </div>
            </h4>
          </div>

          <div className="bg-[url('/images/image_Product.png')] bg-cover bg-center h-[272px] w-[299px]">
            <h4 className="text-black text-[20px] pt-[29px] font-semibold pl-[52px] tracking-[0.5px] leading-[150%]">
              FS - QUILTED MAXI <span className="block">CROSS BAG</span>
              <div className="flex pt-[180px]">
                <span className="text-[18px]">$534,33</span>
                <span className="text-[18px] pl-[8px] text-[#FB7181]">
                  24% Off
                </span>
                <span className="text-[20px] font-bold pl-[28px] pt-[2px] text-[#40BFFF]">
                  $299,43
                </span>
              </div>
            </h4>
          </div>

          <div className="bg-[url('/images/image_Product.png')] bg-cover bg-center h-[272px] w-[299px]">
            <h4 className="text-black text-[20px] pt-[29px] font-semibold pl-[52px] tracking-[0.5px] leading-[150%]">
              FS - QUILTED MAXI <span className="block">CROSS BAG</span>
              <div className="flex pt-[180px]">
                <span className="text-[18px]">$534,33</span>
                <span className="text-[18px] pl-[8px] text-[#FB7181]">
                  24% Off
                </span>
                <span className="text-[20px] font-bold pl-[28px] pt-[2px] text-[#40BFFF]">
                  $299,43
                </span>
              </div>
            </h4>
          </div>
        </div>
      </div>

      <div className="w-64 mx-auto text-center p-4">
        <h4 className="text-[20px] my-[4rem] cursor-pointer font-semibold text-productFontColorBlue underline underline-offset-8 ">
          Load more
        </h4>
      </div>

      <div className="bg-imageBgColor h-[600px] w-auto flex">
        {/* <img src="/images/shoes-shoe-png-transparent-shoe-images-pluspng-17 1.png" alt="shoes-image" /> */}

        <div className="pt-[162px] pl-[80px]">
          <h1 className="text-[55px] font-medium text-white ">
            Adidas Men Running Sneakers
          </h1>
        </div>
        <Image
          className=""
          src={Shoes}
          alt="shoes-image"
          height={598}
          width={794}
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

      {/* <div className=" flex pt-[71px] ">
      <Image className="" alt="product-image" src={NikeLogo} height={52} width={144}/>
        <div>
        <span className="text-[18px] text-[#C1C8CE] font-medium">01 Jan, 2015</span>
        {/* <span className="pl-[293px]">01 Jan, 2015</span> */}
      {/* <span className="pl-[293px]">01 Jan, 2015</span> */}
      {/* <h4 className="font-semibold text-[22px] ">Fashion Industry</h4>
      <p className="">Lorem Ipsum is simply <br /> dummy text of the <br /> printing and typesetting <br />industry.</p>
      </div> */}
      {/* </div>  */}

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
            <h4 className="text-[22px] font-light">
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
            <span className="text-[#FF4858] font-medium text-[20px] pt-[17px]">
              $499
            </span>
            <span className="text-[#5D656B] font-medium text-[20px] pt-[17px] pl-[4px]">
              $499
            </span>
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
            <h4 className="text-[22px] font-light">
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
            <span className="text-[#FF4858] font-medium text-[20px] pt-[17px]">
              $499
            </span>
            <span className="text-[#5D656B] font-medium text-[20px] pt-[17px] pl-[4px]">
              $499
            </span>
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
            <h4 className="text-[22px] font-light">
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
            <span className="text-[#FF4858] font-medium text-[20px] pt-[17px]">
              $499
            </span>
            <span className="text-[#5D656B] font-medium text-[20px] pt-[17px] pl-[4px]">
              $499
            </span>
          </div>
        </div>
      </div>


      {/* search box */}

      <div className="flex pt-[110px]">
        <div className="mx-auto bg-black ">
        <input className="border-2 h-[64px]  w-[635px]" type="text" />

        </div>
      </div>

      <Footer />
    </>
  );
}
