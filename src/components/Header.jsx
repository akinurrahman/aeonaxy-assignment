import React, { useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import Button from "./Button";
import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="mx-auto mt-4 flex max-w-[1200px] items-center justify-between">
      {/* Logo */}
      <div className="logo z-50 ml-4">
        <img src="/assets/logo.svg" alt="logo" className="w-40" />
      </div>

      {/* Navigation */}
      <nav className="nav hidden lg:block">
        <ul className="font-montserrat flex space-x-3 text-lg font-medium ">
          <li className="cursor-pointer">Individuals</li>
          <li className="cursor-pointer">Teams</li>
          <li className="cursor-pointer">Enterprice</li>
          <li className="cursor-pointer">Product</li>
          <li className="cursor-pointer">Price</li>
          <li className="cursor-pointer">Resources</li>
        </ul>
      </nav>

      {/* Authentication and hamburger menu */}
      <div className="flex ">
        <div className="auth mr-3 hidden md:block">
          <Button value="Log In" bg={false} border={false} />
          <Button value="Get Started" bg={true} />
        </div>

        {/* Hamburger menu for mobile */}
        <div
          className="hamburger z-50 mr-4 cursor-pointer lg:hidden"
          onClick={() => setShowMenu((prev) => !prev)}
        >
          {showMenu ? <MdClose size={40} /> : <RiMenu2Line size={40} />}
        </div>
      </div>

      {showMenu && (
        <div className="fixed inset-0 top-16  lg:hidden ">
          <HamburgerMenu />
        </div>
      )}
    </header>
  );
};

export default Header;
