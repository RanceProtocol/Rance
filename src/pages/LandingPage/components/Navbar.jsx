import React from "react";
import logorance from '../../../assets/logorance.png'

const Navbar = () => {
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
          <a href="/products" className="not-italic font-normal text-base leading-7 text-white pt-3">
            Product
          </a>
          <a href="/features" className="not-italic font-normal text-base leading-7 text-white pt-3">
            Features
          </a>
          <a href="/about" className="not-italic font-normal text-base leading-7 text-white pt-3">
            About
          </a>
          <a href="/partners" className="not-italic font-normal text-base leading-7 text-white pt-3">
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
      </div>
    </div>
  );
};

export default Navbar;
