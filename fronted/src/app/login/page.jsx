"use client";

import React, { useState } from "react";
import rightImage from "/public/images/c392ba101244345 1.png";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const loginHandler = async (e) => {
    try {
      e.preventDefault();
      console.log(userDetails);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="h-screen flex bg-gray-100">
      {/* Left Side - Form */}
      <div className="w-1/2 flex flex-col justify-center items-center p-6 bg-white shadow-lg rounded-lg">
        <div className="w-[350px]">
          <h4 className="text-[34px] text-gray-800 font-semibold text-center">
            Welcome Back
          </h4>
          <p className="text-gray-500 text-[14px] text-center mt-2">
            Login to continue your journey with us.
          </p>

          <form onSubmit={loginHandler} className="mt-6 space-y-4">
            <div>
              <label className="text-[14px] font-medium text-gray-700">Email</label>
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
              <label className="text-[14px] font-medium text-gray-700">Password</label>
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
                <label htmlFor="rememberMe" className="text-gray-600 text-[12px] font-medium">
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
              Sign in
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
            Sign in with Google
          </button>

          <p className="text-[14px] font-medium mt-4 text-center text-gray-700">
            Don't have an account?
            <Link href="/register">
              <span className="text-red-500 cursor-pointer ml-1 hover:underline">
                Sign up for free!
              </span>
            </Link>
          </p>

          <p className="text-[14px] font-medium mt-4 text-center text-gray-700">
            <Link href="/">
              <span className="text-productFontColorBlue cursor-pointer hover:underline">
                Continue without login
              </span>
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="relative h-screen w-1/2">
        <Image
          src={rightImage}
          alt="Background"
          layout="fill"
          objectFit="fit"
          priority
        />
      </div>
    </div>
  );
};

export default Page;
