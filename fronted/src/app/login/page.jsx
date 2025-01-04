"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Visibility, VisibilityOff, Mail, Lock } from "@mui/icons-material";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen my-20">
      <div className="mx-auto min-h-screen w-full max-w-[450px] bg-white px-4 py-8 sm:px-8 sm:py-12">
        <div className="flex flex-col items-center">
          <div className="mb-6 h-[72px] w-[72px]">
            <Image
              src="/favicon.ico"
              alt="Logo"
              width={72}
              height={72}
              className="h-auto max-w-full rounded-2xl bg-[#40bfff]"
              priority
            />
          </div>

          <h1 className="mb-1 text-2xl font-semibold text-gray-900">
            Welcome to E-com
          </h1>
          <p className="mb-8 text-sm text-gray-500">Sign in to continue</p>

          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm outline-none focus:border-[#40bfff] focus:ring-1 focus:ring-[#40bfff]"
                required
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-200 bg-white py-3 pl-10 pr-10 text-sm outline-none focus:border-[#40bfff] focus:ring-1 focus:ring-[#40bfff]"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? (
                  <VisibilityOff className="h-5 w-5" />
                ) : (
                  <Visibility className="h-5 w-5" />
                )}
              </button>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-[#40bfff] py-3 text-sm font-medium text-white transition-colors hover:bg-[#0095ff] focus:outline-none focus:ring-2 focus:ring-[#40bfff] focus:ring-offset-2"
            >
              Sign In
            </button>

            <div className="relative flex items-center py-4">
              <div className="flex-grow border-t border-gray-200"></div>
              <span className="mx-4 flex-shrink text-sm text-gray-500">OR</span>
              <div className="flex-grow border-t border-gray-200"></div>
            </div>

            <button
              type="button"
              className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-200 bg-white py-3 text-sm text-gray-700 transition-colors hover:bg-gray-50"
            >
              <Image
                src="/google.svg"
                alt="Google"
                width={24}
                height={24}
                className="h-6 w-6"
              />
              Login with Google
            </button>

            <button
              type="button"
              className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-200 bg-white py-3 text-sm text-gray-700 transition-colors hover:bg-gray-50"
            >
              <Image
                src="/facebook.svg"
                alt="Facebook"
                width={24}
                height={24}
                className="h-6 w-6"
              />
              Login with Facebook
            </button>

            <div className="pt-4 text-center">
              <Link
                href="/forgot-password"
                className="text-sm text-[#40bfff] hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-500">
                Don't have an account?{" "}
                <Link
                  href="/register"
                  className="text-[#40bfff] hover:underline"
                >
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
