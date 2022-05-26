import React from "react";
import Logo from "../../../assets/logorance.png";

const Footer = () => {
  return (
    //   container
    <div className="flex flex-col items-center justify-around bg-lightBrown text-white md:flex-row">
      <div>
        <img src={Logo} alt="logorance" width="100%" height="100%" />
      </div>

      <div className="flex flex-col items-start space-y-3">
        <div>
          <h1 className="font-bold text-lg md:leading-snug">Quick Link</h1>
        </div>

        <p className="text-center">Home</p>
        <p className="text-center">Product</p>
        <p className="text-center">About</p>
        <p className="text-center">Features</p>
        <p className="text-center">Contact</p>
      </div>

      <div className="flex flex-col items-start space-y-3">
        <h1 className="font-bold text-lg md:leading-snug">Quick Link</h1>

        <p className="text-center">Home</p>
        <p className="text-center">Product</p>
        <p className="text-center">About</p>
        <p className="text-center">Features</p>
        <p className="text-center">Contact</p>
      </div>
    </div>
  );
};

export default Footer;
