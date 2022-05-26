import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import HeroGif from '../../../assets/hero-gif.gif';

const Hero = () => {
  return (
    <div
      className="container flex flex-col-reverse items-center px-20 py-20 mx-auto space-y-0 md:space-y-0 md:flex-row"
      id="hero"
    >
      {/* Left Content */}
      <div className="flex flex-col mt-5 mb-32 space-y-5 md:w-1/2">
        <h1 className="text-white max-w-lg text-3xl font-bold text-center md:leading-snug md:text-6xl md:text-left">
          Fastest & secure platform to insure your crypto
        </h1>

        <p className="max-w-lg text-center text-white space-y-1 py-1 md:text-left">
        Rance Protocol is a decentralized price shield insurance provider offering long-term crypto holders the insurance of the major price swing of their holdings.
        </p>

        <div className="flex flex-col justify-center space-x-5 md:justify-start md:flex-row">
          <a
            href="/get-started"
            className="flex items-center space-x-1 py-4 px-7 mt-5 bg-primaryColor text-white rounded-full baseline hover:bg-brightRedLight md:mt-0"
          >
            Buy Insurance{" "}
            <MdOutlineKeyboardArrowRight className="bg-white text-primaryColor rounded-full ml-5 text-lg" style={{fontSize: '30px'}}/>
          </a>

          <a
            href="/get-started"
            className="flex items-center space-x-1 py-4 px-7 mt-5 border-solid border-2 border-primaryColor text-white rounded-full baseline hover:bg-brightRedLight md:mt-0"
          >
            Get $RANCE <MdOutlineKeyboardArrowRight className="bg-primaryColor text-white rounded-full ml-5 text-lg" style={{fontSize: '30px'}}/>
          </a>
        </div>
      </div>

      {/* Right Content -> Image */}
      <div>
        <img src={HeroGif} alt="coin-gif" />
      </div>
    </div>
  );
};

export default Hero;
