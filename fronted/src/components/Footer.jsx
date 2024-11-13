import React from "react";
import Image from "next/image";
import EcomLogo from "/public/images/EcomLogo.png";

const Footer = () => {
  return (
    <div className="text-white h-[719px] bg-customFooterColor text-gray-800">


      <div className="flex pl-[134px] pt-[149px] ">


        <div className="">

          <div className="flex items-center">

          <Image src={EcomLogo} alt="Footer-image" width={39} height={39} />
          <span className="text-gray-700 font-extrabold pl-[7.11px]">E-Comm</span>

          </div>


          <div className=" flex pt-[16px] w-[221px] text-wrap">

          <p className="text-wrap">
            {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  standard dummy text ever.Since the 1500s, when an unknown printer. */}
          </p>

          </div>
         

          
          
        </div>

        <div className="flex items-center pl-[399px]">
          {/* <Image src={EcomLogo} alt="Footer-image" width={39} height={39} /> */}
          <span className="text-gray-700 font-semibold pl-[7.11px]">Follow Us</span>
          
        </div>


        <div className="flex items-center pl-[303px]">
          {/* <Image src={EcomLogo} alt="Footer-image" width={39} height={39} /> */}
          <span className="text-gray-700 font-semibold pl-[7.11px]">Contact-us</span>
          
        </div>



      </div>



      Footer
    </div>
  );
};

export default Footer;
