import Header from "../components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import PromotionImage from "/public/images/PromotionImage.png";

// import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <div className="mb-[20rem]">
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
              <span className="text-[18px] pl-[8px] text-[#FB7181]">24% Off</span>
              <span className="text-[30px] font-bold pl-[68px] pt-[32px] text-[#40BFFF]">$299,43</span>
              </div>
              </h4>
            </div>
          </div>

          <div className="pt-[43px]">
            <div className="bg-[url('/images/imageProduct.png')] bg-cover bg-center h-[358px] w-[417px]">
              <h4 className="text-black text-[20px] pt-[29px] font-semibold pl-[52px] tracking-[0.5px] leading-[150%]">
                FS - QUILTED MAXI <span className="block">CROSS BAG</span>
              <div className="flex pt-[180px]">
              <span className="text-[18px]">$534,33</span>
              <span className="text-[18px] pl-[8px] text-[#FB7181]">24% Off</span>
              <span className="text-[30px] font-bold pl-[68px] pt-[32px] text-[#40BFFF]">$299,43</span>
              </div>
              </h4>
            </div>
          </div>


          <div className="pt-[43px]">
            <div className="bg-[url('/images/imageProduct.png')] bg-cover bg-center h-[358px] w-[417px]">
              <h4 className="text-black text-[20px] pt-[29px] font-semibold pl-[52px] tracking-[0.5px] leading-[150%]">
                FS - QUILTED MAXI <span className="block">CROSS BAG</span>
              <div className="flex pt-[180px]">
              <span className="text-[18px]">$534,33</span>
              <span className="text-[18px] pl-[8px] text-[#FB7181]">24% Off</span>
              <span className="text-[30px] font-bold pl-[68px] pt-[32px] text-[#40BFFF]">$299,43</span>
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
      <Footer />
    </>
  );
}
