"use client";
import React, { useEffect, useState } from "react";
import rightImage from "/public/images/c392ba101244345 1.png";
import googleImage from "/public/images/google-logo-9808.png";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { toast } from "sonner";
import { useRouter, useSearchParams } from "next/navigation";
import { loginSuccess } from "@/redux/authSlice";
import { useDispatch } from "react-redux";
import { BackgroundLinesDemo } from "@/components/Background";



const Page = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const searchParams = useSearchParams(); 
  const tokenup = searchParams.get("token"); 

  console.log("Login page -- token coming form backend side send --+>",tokenup);
  

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://localhost:3333/auth/me", {
          headers: {
            Authorization: `Bearer ${tokenup}`,
          },
        });
      
        console.log("🔥 User Data: __->", response.status);

        if (response.status === 200) {
          if (response.data?.user) {
            dispatch(loginSuccess(response?.data?.user));
            localStorage.setItem("token", tokenup);
            router.push("/profile");
            toast.success("Login successful");
          }
        }else{
          router.push("/login")
        }

        // setIsChecking(false);
      } catch (error) {
        console.error("🔥 Error fetching user data:", error);
        router.push("/login");
      }
    };

    fetchUser();
  }, [tokenup, router]);


  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3333/api/v1/user/signin",
        userDetails,
        { withCredentials: true } 
      );

      const { data } = response;
      if (response.status === 200) {
        toast.success("Login successful");
        dispatch(loginSuccess(data?.data?.user));

        if (data.data?.token) {
          localStorage.setItem("token", data.data?.token);
        }

        router.push("/profile"); 
      }
    } catch (error) {
      console.error("Login Error:", error);
      toast.error("Login failed! Please try again.");
    }
  };


  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:3333/auth/google";
  };
 

  return (
    <div className="h-screen flex bg-gray-100">
      {/* {  Left Side } */}
      <div className="relative w-1/2 flex flex-col justify-center items-center p-6 bg-white shadow-lg rounded-lg overflow-hidden">
        
       
        <div className="absolute inset-0 flex justify-center items-center">
          <BackgroundLinesDemo className="w-full h-full opacity-30" />
        </div>

      
        <div className="w-[350px] relative z-10">
          <h4 className="text-[34px] text-gray-800 font-semibold text-center">Welcome Back</h4>
          <p className="text-gray-500 text-[14px] text-center mt-2">
            Login to continue your journey with us.
          </p>

          <form onSubmit={loginHandler} className="mt-6 space-y-4">
            <div>
              <label className="text-[14px] font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
                value={userDetails.email}
                className="h-[45px] w-full rounded-md border border-gray-300 px-3 mt-2 focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>

            <div>
              <label className="text-[14px] font-medium text-gray-700">Password</label>
              <input
                type="password"
                placeholder="*********"
                onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })}
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

          
          <button
            onClick={handleGoogleLogin}
            className="bg-gray-100 hover:bg-gray-200 text-black font-medium rounded-md h-[45px] w-full mt-3 flex items-center justify-center transition-all"
          >
            <Image src={googleImage} alt="Google" width={30} className="mr-2" height={20} />
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

      {/*  Right Side - Image */}
      <div className="relative h-screen w-1/2">
        <Image src={rightImage} alt="Background" layout="fill" objectFit="fit" priority />
      </div>
    </div>
  );
};

export default Page;
