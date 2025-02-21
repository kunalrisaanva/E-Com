import React, { useState } from "react";
import { Search as SearchIcon } from "@mui/icons-material";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Button, Badge } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import Link from "next/link";
import { useSelector } from "react-redux";

const Header = () => {
  const language = ["ENG", "HIN"];
  const currency = ["USD", "IND"];

  const authcheck = useSelector((state) => state.auth.isAuthenticated);
  const cartItems = useSelector((state) => state.cart.items);

  const [isAuthenticated, setIsAuthenticated] = useState(authcheck);
  const cartItemCount = cartItems.length;

  return (
    <div className="flex font-normal bg-white pt-[27px] px-[104px] justify-between items-center mb-[26px]">
      <div className="flex justify-around">
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
          </select>
        </div>
        <div className="size-1">
          <select
            id="currency"
            name="currency"
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

      <div className="flex justify-between font-normal items-center gap-6">
        {/* Profile / Login */}
        <div className="flex">
          {isAuthenticated ? (
            <Link href="/profile">
              <Button className="flex items-center">
                <PermIdentityIcon style={{ color: "black" }} />
                <h1 className="text-[20px] text-textgrayColor pl-[6.53px]">
                  My Profile
                </h1>
              </Button>
            </Link>
          ) : (
            <Link href="/login">
              <Button className="flex items-center">
                <LoginIcon style={{ color: "black" }} />
                <h1 className="text-[20px] text-textgrayColor pl-[6.53px]">
                  Login
                </h1>
              </Button>
            </Link>
          )}
        </div>

        {/* Cart with Custom Badge Color */}
        <div className="flex items-center">
        <Link href="/cart">
  <Button className="flex items-center gap-8">
    <Badge
      badgeContent={cartItemCount}
      sx={{
        "& .MuiBadge-badge": {
          backgroundColor: "#FB7181",
          color: "white", // Makes the text inside the badge white
          fontWeight: "bold",
        },
      }}
    >
      <ShoppingCartOutlinedIcon style={{ color: "black" }} />
    </Badge>
    <h1 className="text-[20px] text-textgrayColor ">Items</h1>
  </Button>
</Link>

        </div>

        {/* Search and Price */}
        <div className="flex items-center gap-2">
          <h1 className="text-[20px] text-textgrayColor">$0.00</h1>
          <Button>
            <SearchIcon style={{ color: "black" }} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
