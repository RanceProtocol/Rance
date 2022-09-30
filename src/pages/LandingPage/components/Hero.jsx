import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import HeroGif from "../../../assets/heroanime.gif";
import BNBChainIcon from "../../../assets/bnbchain.png";
import CronoChainIcon from "../../../assets/cronosicon.png";
import PolygonIcon from "../../../assets/Polygon.png";
import CoinsZoom from "../../../assets/coinszoom.gif";

function Hero() {
  return (
    <div
      className="container flex flex-col-reverse items-center px-10 mx-auto space-y-0 md:px-20 md:py-10 md:space-y-0 md:flex-row"
      id="hero"
    >
      {/* Left Content */}
      <div className="flex flex-col mt-5 mb-10 space-y-5 md:w-1/2">
        <h1 className="text-white max-w-lg text-3xl font-bold text-center md:leading-snug md:text-6xl md:text-left">
          Fastest & secure platform to insure your crypto
        </h1>

        <p className="max-w-lg text-center text-white space-y-1 py-1 md:text-left">
          Rance Protocol is a decentralized price shield insurance provider
          offering long-term crypto holders the insurance of the major price
          swing of their holdings.
        </p>
        {/* bnb chain */}
        <div className="flex flex-col justify-center space-y-5 md:space-x-4 md:space-y-0 md:justify-start md:flex-row">
          <a
            href="https://bnbchain.ranceprotocol.com/"
            className="flex items-center justify-around px-2 py-4 bg-primaryColor text-white rounded-full baseline md:justify-evenly md:px-7 md:space-x-1 md:mt-0"
          >
            Insure on BNBChain &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;{" "}
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <img
              src={BNBChainIcon}
              className="bg-white text-primaryColor rounded-full ml-5 text-lg"
              style={{ fontSize: "30px" }}
            />
          </a>
        </div>

        {/* Polygon */}
        <div className="flex flex-col justify-center space-y-5 md:space-x-4 md:space-y-0 md:justify-start md:flex-row">
          {/* eslint-disable-nextline */}
          <a
            href="https://polygon.ranceprotocol.com/"
            className="flex items-center justify-around px-2 py-4 bg-primaryColor text-white rounded-full baseline md:justify-evenly md:px-7 md:space-x-1 md:mt-0"
          >
            Insure on Polygon
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
            <img
              src={PolygonIcon}
              className="bg-white text-primaryColor rounded-full ml-5 text-lg"
              style={{ fontSize: "30px" }}
              alt=""
            />
          </a>
        </div>

        {/* Cronos */}
        <div className="flex flex-col justify-center space-y-5 md:space-x-4 md:space-y-0 md:justify-start md:flex-row">
          {/* eslint-disable-nextline */}
          <a
            href="https://cronos.ranceprotocol.com/"
            className="flex items-center justify-around px-2 py-4 bg-primaryColor text-white rounded-full baseline md:justify-evenly md:px-7 md:space-x-1 md:mt-0"
          >
            Insure on Cronos
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
            <img
              src={CronoChainIcon}
              className="bg-white text-primaryColor rounded-full ml-5 text-lg"
              style={{ fontSize: "30px" }}
              alt=""
            />
          </a>

          <a
            href="#/"
            className="flex items-center justify-around px-2 py-4 border-solid border-2 border-primaryColor text-white rounded-full baseline md:justify-evenly md:px-7 md:space-x-1 md:mt-0"
          >
            Get $RANCE
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <MdOutlineKeyboardArrowRight
              className="bg-primaryColor text-white rounded-full ml-5 text-lg md:ml-28"
              style={{ fontSize: "30px" }}
            />
          </a>
        </div>

        <div>
          <img src={CoinsZoom} alt="coin-zoom" />
        </div>
      </div>

      {/* Right Content -> Image */}
      <div>
        <img src={HeroGif} alt="coin-gif" className="zoom-in-zoom-out" />
      </div>
    </div>
  );
}

export default Hero;
