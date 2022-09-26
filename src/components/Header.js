import React from "react";
import { GiCoins, GiHamburgerMenu } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";


function Header() {
  const location = useLocation();
  console.log(location);
  

  return (
    <header className="flex justify-between h-20 text-3xl md:text-4xl font-lobster p-4">
      <Link to="/">
        <div className="flex justify-center items-center">
          <GiCoins /> <span className="text-slate-400">my</span>
          Crypto.App
        </div>
      </Link>
      
      <div className="flex justify-between items-center w-20">
        <GiHamburgerMenu />
        {location.pathname === "/" && <BsSearch />}
      </div>
    </header>
  );
}

export default Header;
