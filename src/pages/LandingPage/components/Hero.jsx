import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import HeroGif from "../../../assets/heroanime.gif";
import BNBChainIcon from "../../../assets/bnbchain.png";
import CronoChainIcon from "../../../assets/cronosicon.png";

const Hero = () => {
  return (
    <div
      className="container flex flex-col-reverse items-center px-10 mx-auto space-y-0 md:px-20 md:py-20 md:space-y-0 md:flex-row"
      id="hero"
    >
      {/* Left Content */}
      <div className="flex flex-col mt-5 mb-32 space-y-5 md:w-1/2">
        <h1 className="text-white max-w-lg text-3xl font-bold text-center md:leading-snug md:text-6xl md:text-left">
          Fastest & secure platform to insure your crypto
        </h1>

        <p className="max-w-lg text-center text-white space-y-1 py-1 md:text-left">
          Rance Protocol is a decentralized price shield insurance provider
          offering long-term crypto holders the insurance of the major price
          swing of their holdings.
        </p>

        <div className="flex flex-col justify-center space-y-3 md:space-x-1 md:space-y-0 md:justify-start md:flex-row">
          <a
            //eslint-disable-nextline
            href="#"
            className="flex items-center justify-around px-0 py-4 bg-primaryColor text-white rounded-full baseline md:justify-evenly md:px-7 md:space-x-1 md:mt-0"
          >
            Buy Insurance on Cronos Chain{" "}
            <img
              src={CronoChainIcon}
              className="bg-white text-primaryColor rounded-full ml-5 text-lg"
              style={{ fontSize: "30px" }}
            />
          </a>

          <a
            //eslint-disable-nextline
            href="#"
            className="flex items-center justify-around px-0 py-4 bg-primaryColor text-white rounded-full baseline md:justify-evenly md:px-7 md:space-x-1 md:mt-0"
          >
            Buy Insurance on BNBChain{" "}
            <img
              src={BNBChainIcon}
              className="bg-white text-primaryColor rounded-full ml-5 text-lg"
              style={{ fontSize: "30px" }}
            />
          </a>
        </div>

        <a
          href="#"
          className="flex items-center justify-between w-96 px-8 py-4 border-solid border-2 border-primaryColor text-white rounded-full baseline"
        >
          Get $RANCE{" "}
          <MdOutlineKeyboardArrowRight
            className="bg-primaryColor text-white rounded-full ml-5 text-lg md:ml-0"
            style={{ fontSize: "30px" }}
          />
        </a>
      </div>

      {/* Right Content -> Image */}
      <div>
        <img src={HeroGif} alt="coin-gif" />
      </div>
    </div>
  );
};

export default Hero;
