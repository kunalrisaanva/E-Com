"use client";

import React, { useState } from "react";
import rightImage from "/public/images/c392ba101244345 1.png";
import Image from "next/image";
import Link from "next/link";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleResetPassword = async (e) => {
    try {
      e.preventDefault();
      console.log("Reset password request for:", email);
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
            Forgot Password?
          </h4>
          <p className="text-gray-500 text-[14px] text-center mt-2">
            Enter your email to reset your password.
          </p>

          <form onSubmit={handleResetPassword} className="mt-6 space-y-4">
            <div>
              <label className="text-[14px] font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="h-[45px] w-full rounded-md border border-gray-300 px-3 mt-2 focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>

            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md h-[45px] w-full mt-4 transition-all"
            >
              Reset Password
            </button>
          </form>

          <p className="text-[14px] font-medium mt-4 text-center text-gray-700">
            Remember your password?
            <Link href="/login">
              <span className="text-red-500 cursor-pointer ml-1 hover:underline">
                Sign in
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

export default ForgotPassword;
