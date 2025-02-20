"use client"
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { usePathname } from "next/navigation";
import Development from "@/components/Development";
import MobileWarning from "@/components/MobileWarning";
import { Toaster,toast } from "sonner";
import ForgotPassword from "./forget-password/page";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata = {
//   title: "E-com",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {

  const pathname = usePathname();

  const hidelayout = ["/login","/register","/forget-password"].includes(pathname);


  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <Provider store={store}>
        <Toaster position="bottom-center"/>
          {!hidelayout && <Header/>}
          {!hidelayout && <Navbar/>}
          {/* {!hidelayout && <ForgotPassword/>} */}
          {/* <Header />
          <Navbar /> */}
           <MobileWarning />
          {children}
         {!hidelayout && <Footer />}
         {/* {<Development/>} */}
        </Provider>
      </body>
    </html>
  );
}
