import React from "react";
import Logo from "../../../assets/logorance.png";
import Vector1 from "../../../assets/Vector1.png";
import Vector2 from "../../../assets/Vector2.png";
import Vector3 from "../../../assets/Vector3.png";
import Vector4 from "../../../assets/Vector4.png";
import Vector from "../../../assets/Vector.png";

const Footer1 = () => {
  return (
    <div className="w-full bg-lightBrown">
      <div className="container mx-auto py-12">
        <div className="flex md:flex justify-between pt-6 space-x-10 px-20">
          <div className="mx-auto lg:mx-0 xl:mx-0">
            <div className="flex items-center mb-6 xl:mb-0 lg:mb-0">
              <img src={Logo} alt="logorance" />
            </div>
          </div>

          <div className="w-11/12 xl:w-1/6 lg:w-2/5 mx-auto lg:mx-0 xl:mx-0 pt-3 xl:flex xl:justify-end pl-3 sm:pl-0">
            <ul>
              <li className="text-white font-bold text-xl mb-6">Quick Link</li>

              <li className="text-base text-white hover:text-gray-700 mb-5">
                <a href="/home">Product</a>
              </li>

              <li className="text-base text-white hover:text-gray-700 mb-5">
                <a href="/product">Product</a>
              </li>

              <li className="text-base text-white hover:text-gray-700 mb-5">
                <a href="about">About</a>
              </li>

              <li className="text-base text-white hover:text-gray-700 mb-5">
                <a href="/features">Features</a>
              </li>

              <li className="text-base text-white hover:text-gray-700 mb-5">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="w-11/12 xl:w-1/6 lg:w-2/5 mx-auto lg:mx-0 xl:mx-0 pt-3 xl:flex xl:justify-end pl-3 sm:pl-0">
            <ul>
              <li className="text-white font-bold text-xl mb-6">Resource</li>

              <li className="text-base text-white hover:text-gray-700 mb-5">
                <a href="/download">Download Whitepaper</a>
              </li>

              <li className="text-base text-white hover:text-gray-700 mb-5">
                <a href="/smart-token">Smart Token</a>
              </li>

              <li className="text-base text-white hover:text-gray-700 mb-5">
                <a href="/blockchain-explorer">Blockchain Explorer</a>
              </li>

              <li className="text-base text-white hover:text-gray-700 mb-5">
                <a href="/crypto-api">Crypto API</a>
              </li>

              <li className="text-base text-white hover:text-gray-700 mb-5">
                <a href="/interest">Interest</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap justify-between px-20 xl:mt-24 mt-16 pb-6 pl-3 sm:pl-0">
          <div className="mx-auto px-20 lg:mx-0 xl:mx-0 mb-6 xl:mb-0">
            <p className="text-white text-base">
              ©2022 RANCE PROTOCOL. All rights reserved
            </p>
          </div>

          <div className="w-11/12 xl:w-1/6 lg:w-1/6 sm:w-11/12 mx-auto lg:mx-0 xl:mx-0 mb-6 lg:mb-0 xl:mb-0 mt-8 lg:mt-8 xl:mt-0">
            <div className="flex justify-start sm:justify-start xl:justify-end space-x-6 pr-2 xl:pr-0 lg:pr-0 md:pr-0 sm:pr-0">
              <div>
                <a href="/facebook">
                  <img src={Vector} alt="facebook-icon" />
                </a>
              </div>

              <div>
                <a href="/instagram">
                  <img src={Vector1} alt="instagram-icon" />
                </a>
              </div>

              <div>
                <a href="/youtube">
                  <img src={Vector2} alt="youtube-icon" />
                </a>
              </div>

              <div>
                <a href="/twitter">
                  <img src={Vector3} alt="twitter-icon" />
                </a>
              </div>
              
              <div>
                <a href="/linkedin">
                  <img src={Vector4} alt="linkedin-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
