"use client";
import React, { useState } from "react";
import rightImage from "/public/images/c392ba101244345 1.png";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { BackgroundLinesDemo } from "@/components/Background";

const Page = () => {
  const router = useRouter();
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
  });

  const registerHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/user/signup`,
        userDetails
      );

      if (response.status !== 201 || !response) {
        toast.error("Something went wrong while creating the user");
      } else {
        toast.success("User has been created successfully");
        router.push("/login");
      }
    } catch (error) {
      console.error("Axios Error:", error);
      toast.error(
        error.response?.data?.message || "Signup failed! Please try again."
      );
    }
  };

  return (
    <div className="h-screen flex bg-gray-100">
     {/* left side div */}
      <div className="relative w-1/2 flex flex-col justify-center items-center p-6 bg-white shadow-lg rounded-lg overflow-hidden">
        
      
        <div className="absolute inset-0 flex justify-center items-center">
          <BackgroundLinesDemo className="w-full h-full opacity-30" />
        </div>

       
        <div className="w-[350px] relative z-10">
          <h4 className="text-[34px] text-gray-800 font-semibold text-center">
            Create an Account
          </h4>
          <p className="text-gray-500 text-[14px] text-center mt-2">
            Join us today and continue your journey!
          </p>

          <form onSubmit={registerHandler} className="mt-6 space-y-4">
            <div>
              <label className="text-[14px] font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                onChange={(e) =>
                  setUserDetails({ ...userDetails, username: e.target.value })
                }
                value={userDetails.username}
                className="h-[45px] w-full rounded-md border border-gray-300 px-3 mt-2 focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>

            <div>
              <label className="text-[14px] font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                onChange={(e) =>
                  setUserDetails({ ...userDetails, email: e.target.value })
                }
                value={userDetails.email}
                className="h-[45px] w-full rounded-md border border-gray-300 px-3 mt-2 focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>

            <div>
              <label className="text-[14px] font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder="*********"
                onChange={(e) =>
                  setUserDetails({ ...userDetails, password: e.target.value })
                }
                value={userDetails.password}
                className="h-[45px] w-full rounded-md border border-gray-300 px-3 mt-2 focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <input type="checkbox" id="rememberMe" className="cursor-pointer" />
                <label
                  htmlFor="rememberMe"
                  className="text-gray-600 text-[12px] font-medium"
                >
                  Remember me
                </label>
              </div>
              <p className="text-red-500 text-[12px] font-medium cursor-pointer hover:underline">
                <Link href="/forget-password">Forgot Password?</Link>
              </p>
            </div>

            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md h-[45px] w-full mt-4 transition-all"
            >
              Sign up
            </button>
          </form>

          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">OR</span>
            </div>
          </div>

          <button className="bg-gray-100 hover:bg-gray-200 text-black font-medium rounded-md h-[45px] w-full mt-3 flex items-center justify-center transition-all">
            Sign up with Google
          </button>

          <p className="text-[14px] font-medium mt-4 text-center text-gray-700">
            Already have an account?
            <Link href="/login">
              <span className="text-red-500 cursor-pointer ml-1 hover:underline">
                Sign in for free!
              </span>
            </Link>
          </p>
        </div>
      </div>

      {/* right div */}
      <div className="relative h-screen w-1/2">
        <Image
          src={rightImage}
          alt="Background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
    </div>
  );
};

export default Page;
