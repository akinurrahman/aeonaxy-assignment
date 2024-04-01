import React from "react";
import Button from "./Button";

const HamburgerMenu = () => {
  return (
    <div className="nav mx-6">
      <ul className="font-montserrat    space-y-6 text-2xl font-medium ">
        <li className="cursor-pointer"></li>
        <hr />
        <li className="cursor-pointer">Individuals</li>
        <hr />
        <li className="cursor-pointer">Teams</li>
        <hr />
        <li className="cursor-pointer">Enterprice</li>
        <hr />
        <li className="cursor-pointer">Product</li>
        <hr />
        <li className="cursor-pointer">Price</li>
        <hr />
        <li className="cursor-pointer">Resources</li>
        <hr />
      </ul>

      <div className="auth mr-3 flex flex-col space-y-3">
        <Button value="Log In" bg={false} border={true} />
        <Button value="Get Started" bg={true} />
      </div>
    </div>
  );
};

export default HamburgerMenu;
