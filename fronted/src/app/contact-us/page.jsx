"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/Input.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Textarea } from "@/components/ui/textarea.jsx";
import { toast } from "sonner";
import CotactUsImage from "../../../public/images/call 1.png";
import UpperLine from "@/components/UpperLine.jsx";
import axios from "axios";

const ContactUs = () => {
  const [userDetails, setUserDetails] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userDetails.email || !userDetails.fullName || !userDetails.message) {
      toast.error("Please fill all the fields");
      return;
    }

    try {
      setLoading(true);
      toast.loading("Please wait, sending message...");

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/send-mail`,
        {
          type: "contact",
          to: userDetails.email,
          fullName: userDetails.fullName,
          message: userDetails.message,
        }
      );

      if (response.status === 200) {
        toast.dismiss();
        toast.success("Message sent successfully!");
        setUserDetails({ fullName: "", email: "", message: "" });
      }
    } catch (error) {
      toast.dismiss();
      toast.error(
        error.response?.data?.message || "Message failed! Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <UpperLine />
      <div className="relative w-full h-screen flex flex-col md:flex-row items-center justify-center bg-white">
        <div className="relative w-full md:w-1/2 h-full">
          <Image src={CotactUsImage} height={718.27} width={718.27} alt="E-commerce Contact" />
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-center justify-center ">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">Contact Us</h1>
          <p className="text-gray-500 text-center mb-6">Have questions? We’d love to hear from you!</p>

          <form onSubmit={handleSubmit} className="w-full max-w-md">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold">Full Name</label>
              <Input
                type="text"
                onChange={(e) => setUserDetails({ ...userDetails, fullName: e.target.value })}
                value={userDetails.fullName}
                placeholder="Enter your name"
                className="w-full border-gray-300 focus:outline-none"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold">Email</label>
              <Input
                type="email"
                onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
                value={userDetails.email}
                placeholder="Enter your email"
                className="w-full border-gray-300 focus:outline-none"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold">Message</label>
              <Textarea
                placeholder="Write your message here..."
                onChange={(e) => setUserDetails({ ...userDetails, message: e.target.value })}
                value={userDetails.message}
                className="w-full border-gray-300 focus:border-red-500"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-[#FF4858] hover:bg-red-600 text-white font-semibold rounded-md h-[45px] mt-4 transition-all"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;