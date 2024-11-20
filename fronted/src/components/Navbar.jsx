import Link from 'next/link'
import React from 'react'
import Image from "next/image"

const Navbar = () => {
  return (
    <div className='flex justify-between pt-2'>
      <div className=' flex pl-10 pt-2' >
      <Image
        src={"/favicon.ico"}
        alt="E-com"
        width={54}
        height={46}
        className='pt-0 mt-[-14px] ml-3'
        />

        <h1 className='text-black text-xl    pl-1 '>E-comm</h1>
      </div>
      <div className='flex w-[815.49px] h-[36px] l-[549.11px] top-[99px]'>
       
        
      
      <div className=' text-2xl  pr-24 hover:text-customBlue'>
        <Link href="#" className=''>HOME</Link>
      </div>
      <div className=' text-2xl pr-24  hover:text-customBlue'>
        <Link href="#"> BPGS</Link>
      </div>
      <div className=' text-2xl  pr-24  hover:text-customBlue'>
        <Link href="#">SNEAKERS</Link>
      </div>
      <div className='text-2xl  pr-24  hover:text-customBlue'>
        <Link  href="#">BELT</Link>
      </div>
      <div className=' text-2xl  hover:text-customBlue  '>
        <Link  href="#">CONTECT</Link>
      </div>
      </div>
    </div>
  )
}

export default Navbar