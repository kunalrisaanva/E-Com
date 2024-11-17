import React from "react";
import Image from "next/image";
import EcomLogo from "/public/images/EcomLogo.png";
import FaceBookLogo from "/public/images/facebook.png";
import TwitterLogo from "/public/images/twitter.png";
import BrandsLogo from "/public/images/Brands.png";

const Footer = () => {
  return (
    <footer className="h-[719px] bg-customFooterColor text-fontCustomColor mt-[75px]">
      {/* upper section  */}

      <div className="flex  pl-[134px] pt-[149px] font-semibold ">
        <div className="">
          <div className="flex items-center">
            <Image src={EcomLogo} alt="Footer-image" width={39} height={39} />
            <span className="text-[18px] font-extrabold pl-[7.11px]">
              E-Comm
            </span>
          </div>

          <div className=" flex pt-[16px]  pt-[16px] font-semibold">
            <p className=" text-wrap text-[12px] w-[221px] h-[75px] ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the standard dummy text ever.Since
              the 1500s, when an unknown printer.
            </p>
          </div>
        </div>

        <div className=" pl-[399px] ">
          <span className="font-bold ">Follow Us</span>
          <p className="text-wrap text-[12px] pt-[19px]  w-[198px] ">
            Since the 1500s, when an unknown printer took a galley of type and
            scrambled.
          </p>

          <div className="flex pt-[22px]">
            <Image src={FaceBookLogo} width={7} height={15} alt="social-icon" />
            {/* <div className="pl-[2px]> */}
            <Image
              src={TwitterLogo}
              width={14}
              height={11}
              alt="social-icon"
              className="ml-[39px]"
            />
            {/* </div> */}
          </div>
        </div>

        <div className=" pl-[259px] ">
          <span className="font-bold ">Contact Us</span>
          <p className="text-wrap text-[14px] pt-[19px]  w-[148px] h-[63px] font-semibold">
            E-Comm , 4578 Marmora Road, Glasgow D04 89GR
          </p>
        </div>
      </div>

      {/* middle section  */}

      <div className="flex">
        <div className="pl-[134px] pt-[80px] font-semibold">
          <h3 className="text-[18px]">Infomation</h3>

          <ul className=" items-center pt-[29px] text-[14px]">
            <li>About Us</li>
            <li>Infomation </li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="pl-[134px] pt-[80px] font-semibold">
          <h3 className="text-[18px]">Service</h3>

          <ul className=" items-center pt-[29px] text-[14px]  ">
            <li>About Us</li>
            <li>Infomation </li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="pl-[134px] pt-[80px]  font-semibold">
          <h3 className="text-[18px]">My Account</h3>

          <ul className=" items-center pt-[29px] text-[14px]">
            <li>About Us</li>
            <li>Infomation </li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="pl-[134px] pt-[80px]  font-semibold">
          <h3 className="text-[18px]">Our Offers</h3>

          <ul className=" items-center pt-[29px] text-[14px] ">
            <li>About Us</li>
            <li>Infomation </li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>
      {/*  bottom section */}

      <div className="  ">
        <div className="w-[1180px] h-[1px] bg-white mx-auto mt-[63px]">
          {/* line */}
        </div>

        <div className="flex items-center justify-between px-[149px]">
          <div>
            <p className=" text-gray-500 text-sm mt-4 pt-[33px]  font-semibold ">
              © 2018 Ecommerce theme by{" "}
              <a
                href="https://www.bisenbaev.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
                font-semibold
              >
                www.bisenbaev.com
              </a>
            </p>
          </div>

          <div className="pt-[30px]">
            <Image src={BrandsLogo} alt="brand-icons" width={212} height={25} />
          </div>
        </div>

        {/* brand icons */}
      </div>
    </footer>
  );
};

export default Footer;
