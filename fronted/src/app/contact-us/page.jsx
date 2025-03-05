"use client";
import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/Input.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Textarea } from "@/components/ui/textarea.jsx";
import { toast } from "sonner";
import CotactUsImage from "../../../public/images/call 1.png";
import UpperLine from "@/components/UpperLine.jsx";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
  };

  return (

    <>
    <UpperLine/>
      <div className="relative w-full h-screen flex flex-col md:flex-row items-center justify-center bg-white">
      {/* Left Side - Image */}
      <div className="relative w-full md:w-1/2 h-full">
        <Image
          src={CotactUsImage}
          // layout="fill"
          // objectFit="cover"
          height={718.27}
          width={718.27}
          alt="E-commerce Contact"
          // className="rounded-lg shadow-xl"
        />
      </div>

      {/* Right Side - Contact Form */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
          Contact Us
        </h1>
        <p className="text-gray-500 text-center mb-6">
          Have questions? We’d love to hear from you!
        </p>

        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold">
              Full Name
            </label>
            <Input
              type="text"
              placeholder="Enter your name"
              className="w-full border-gray-300 focus:border-red-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold">
              Email
            </label>
            <Input
              type="email"
              placeholder="Enter your email"
              className="w-full border-gray-300 focus:border-red-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold">
              Message
            </label>
            <Textarea
              placeholder="Write your message here..."
              className="w-full border-gray-300 focus:border-red-500"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-[#FF4858] hover:bg-red-600 text-white font-semibold rounded-md h-[45px] mt-4 transition-all"
          >
            Send Message
          </Button>
        </form>
      </div>
    </div>
    </>
  );
};

export default ContactUs;
