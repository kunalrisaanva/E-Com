"use client";

import React, { useEffect, useState } from "react";
import rightImage from "/public/images/c392ba101244345 1.png";
import Image from "next/image";
import axios from "axios";
import { toast } from "sonner";
import { useSearchParams, useRouter } from "next/navigation";

const Page = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const searchParams = useSearchParams();
  const router = useRouter();
  
  useEffect(() => {
    const token = searchParams.get("token");
    if (!token) {
      toast.error("Invalid or expired link!");
      router.push("/");
    }
  }, [token, router]);

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      toast.error("Please enter both password fields.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/user/reset-password`, {
        token,
        newPassword: password,
      });

      if (response.status === 200) {
          setPassword("");
          setConfirmPassword("");
          toast.success("Password changed successfully!");
        router.push("/login");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Failed to reset password");
    }
  };

  return (
    <div className="h-screen flex bg-gray-100">
      {/* Left Side - Form */}
      <div className="w-1/2 flex flex-col justify-center items-center p-6 bg-white shadow-lg rounded-lg">
        <div className="w-[350px]">
          <h4 className="text-[34px] text-gray-800 font-semibold text-center">
            Change Password
          </h4>
          <p className="text-gray-500 text-[14px] text-center mt-2">
            Enter your new password to reset your account.
          </p>

          <form onSubmit={handleResetPassword} className="mt-6 space-y-4">
            <div>
              <label className="text-[14px] font-medium text-gray-700">New Password</label>
              <input
                type="password"
                placeholder="Enter new password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="h-[45px] w-full rounded-md border border-gray-300 px-3 mt-2 focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>

            <div>
              <label className="text-[14px] font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm new password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                className="h-[45px] w-full rounded-md border border-gray-300 px-3 mt-2 focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>

            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md h-[45px] w-full mt-4 transition-all"
            >
              Change Password
            </button>
          </form>
        </div>
      </div>

      {/* Right Side - Image */}
       <div className="relative h-screen w-1/2">
              <Image src={rightImage} alt="Background" layout="fill" objectFit="fit" priority />
            </div>
    </div>
  );
};

export default Page;
