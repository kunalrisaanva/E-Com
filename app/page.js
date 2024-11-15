import {Poppins} from "next/font/google"
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const poppins=Poppins({
  weight:"100",
  subsets:["latin"],
  display:"swap"
})

export default function Home() {
  return (
    <div className={poppins.className} >
      <Header/>
      <main>


      </main>
    <Footer className="text-black "/>


    </div>
  );
}
