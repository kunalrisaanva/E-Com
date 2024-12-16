"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Call from "../../../public/images/call 1.png";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// import Call from "../../../public/images/Call.jpg"

const page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <div className="grid grid-cols-2 max-w-7xl mx-auto my-28 shadow-md">
        <div className="bg-productFontColorBlue flex flex-col items-center">
          <h3 className="text-2xl font-bold text-white mt-10">Contact Us</h3>
          <Image src={Call} className="w-[80%]" />
        </div>
        <div className="flex items-center justify-center">
          <form
            className="flex flex-col w-[80%] mx-auto my-auto h-fit gap-5"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="name">FullName</label>
              <input
                type="text"
                id="name"
                className="border h-10 text-xl px-2"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="border h-10 text-xl px-2"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col my-4 gap-2">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                className="border h-28 text-xl px-2 py-2"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default page;
/* +234 4556 6665 34 */

// position: absolute;
// left: 29.34%;
// right: 59.77%;
// top: 35.21%;
// bottom: 63.68%;

// font-family: 'Raleway';
// font-style: normal;
// font-weight: 500;
// font-size: 14px;
// line-height: 16px;
// display: flex;
// align-items: flex-end;
// text-transform: capitalize;

// co
// 20 Prince Hakerem Lekki
// Phase 1, Lagos.
