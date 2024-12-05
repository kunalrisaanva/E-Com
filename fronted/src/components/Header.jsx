import React from "react";
import { Search as SearchIcom } from "@mui/icons-material";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button } from "@mui/material";
import Link from "next/link";

const Header = () => {
  const language = ["ENG", "HIN"];
  const currency = ["USD", "IND"];
  return (
    <div className="flex font-normal bg-white pt-[27px] px-[104px] justify-between items-center mb-[26px]">
      <div className="flex justify-around ">
        <div className="mr-2">
          <select
            id="language"
            name="language"
            required
            className="text-textgrayColor text-xl border-none"
          >
            <option value="" disabled>
              ENG
            </option>
            {language.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>{" "}
        </div>
        <div className="size-1">
          <select
            id="language"
            name="language"
            required
            className="text-textgrayColor text-xl border-none"
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
      <div className=" flex justify-between font-normal ">
        <div className=" flex">
          <Link href='profile'>
          <Button>
            <PermIdentityIcon style={{ color: "black" }} />
            <h1 className="text-[20px] text-textgrayColor">my profile</h1>
          </Button>
          </Link>
          
        </div>
        <div className=" flex ">
          <Link href="cart">
          <Button>
            <ShoppingCartIcon style={{ color: "black" }} />

            <h1 className="text-[20px] text-textgrayColor">Items $0.00</h1>
          </Button>
          </Link>
         
        </div>
        <div className="flex items-center">
          <Button>
            <SearchIcom style={{ color: "black" }} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
