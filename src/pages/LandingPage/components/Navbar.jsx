import React, { useState } from "react";
import logorance from "../../../assets/logorance.png";

const Navbar = () => {
  const [isToggle, setIsToggle] = useState(true);

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <div className="relative container max-auto p-6 pt-10">
      {/* Navbar Flex Container */}
      <div className="flex items-center justify-between">
        {/* Logo Container */}
        <div className="pt-2">
          <img src={logorance} alt="logorance" />
        </div>

        {/* Navbar Links Container */}
        <div className="hidden md:flex space-x-6">
          <a
            href="#product"
            className="not-italic font-normal text-base leading-7 text-white pt-3"
          >
            Product
          </a>
          <a
            href="#features"
            className="not-italic font-normal text-base leading-7 text-white pt-3"
          >
            Features
          </a>
          <a
            href="#/"
            className="not-italic font-normal text-base leading-7 text-white pt-3"
          >
            About
          </a>
          <a
            href="#partners"
            className="not-italic font-normal text-base leading-7 text-white pt-3"
          >
            Partners
          </a>

          {/* Button */}
          <a
            href="/buy-insurance"
            className="hidden md:block p-4 px-10 bg-primaryColor text-white rounded-full baseline"
          >
            Buy Insurance
          </a>
        </div>

        {/* Hamburger Icon */}
        <button
          onClick={handleToggle}
          className="block hamburger md:hidden focus:outline-none"
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <div
            id="menu"
            className={`absolute flex flex-col items-center self-end ${
              isToggle ? "hidden" : ""
            } py-8 mt-10 space-y-6 rounded-xl font-bold bg-lightBrown sm:w-auto sm:self-center left-6 right-6 drop-shadow-md`}
          >
            <a href="#product" className="text-white hover:text-darkGrayisBlue" onClick={handleToggle}>
              Product
            </a>

            <a href="#features" className="text-white hover:text-darkGrayisBlue" onClick={handleToggle}>
              Features
            </a>

            <a href="#/" className="text-white hover:text-darkGrayisBlue" onClick={handleToggle}>
              About
            </a>
    
            <a
              href="#partners"
              className="text-white hover:text-darkGrayisBlue"
              onClick={handleToggle}
            >
              Partners
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
