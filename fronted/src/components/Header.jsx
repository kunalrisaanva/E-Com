import React from 'react'
import {Search as SearchIcom,} from "@mui/icons-material"
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button } from '@mui/material';

const Header = () => {
    const language=["ENG","HIN"]
    const currency=["USD","IND"]
  return (
    <div className='flex font-semibold bg-white p-6 justify-between '>
        <div className='flex justify-around '>
            <div className='mr-2'>

            <select
            id="language"
            name="language"
          
            required
            className='text-black text-xl border-none'
          >
            <option value="" disabled>
              ENG
            </option>
            {language.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>            </div>
         <div className='size-1'>


         <select
            id="language"
            name="language"
          
            required
            className='text-black text-xl border-none'
          >
            <option value="" disabled>
              USD
            </option>
            {currency.map((cur) => (
              <option key={cur} value={cur}>
                {cur}
              </option>
            ))}
          </select> 
         </div>
        </div>
        <div className=' flex justify-between'>
            <div  className=' flex mr-2'>
                <Button >

                <PermIdentityIcon  style={{color:"black"}}/>
            <h1 className='text-xl text-black'>My Profile</h1>
                </Button>
             
            </div>
            <div  className=' flex mr-2'>
                <Button>
                <ShoppingCartIcon style={{color:"black"}}/>

            <h1 className='text-xl text-black'>Items $0.00</h1>
                </Button>

            </div>
            <div  className='mr-2'>

                <Button>


           <SearchIcom style={{color:"black"}}/>
                </Button>
            </div>
      
       
        </div>
      
    </div>
  )
}

export default Header
