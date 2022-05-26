import React from "react";
import { FaUser } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { GrGraphQl } from "react-icons/gr";

const About = () => {
  return (
    <div>
      <div className="container flex flex-col-reverse items-center justify-between mx-auto py-5 space-y-10 px-6 md:py-10 md:space-y-0 md:flex-row">
        {/* First Item */}
        <div className="flex items-center space-x-4">
          <GrGraphQl
            className="bg-gray-300 bg-opacity-25 text-primaryColor p-3 rounded-full"
            size={60}
          />

          <div className="flex flex-col">
            <h1 className="text-white text-3xl font-extrabold">130</h1>
            <p className="text-white">Protocols Protected</p>
          </div>
        </div>

        {/* Second Item */}
        <div className="flex items-center space-x-4">
          <FaUser
            className="bg-gray-300 bg-opacity-25 text-primaryColor p-3 rounded-full"
            size={60}
          />

          <div className="flex flex-col">
            <h1 className="text-white text-3xl font-extrabold">1M0+</h1>
            <p className="text-white">Trusted Wallet Investor</p>
          </div>
        </div>

        {/* Third Item */}
        <div className="flex items-center space-x-4">
          <BiWorld
            className="bg-gray-300 bg-opacity-25 text-primaryColor p-3 rounded-full"
            size={60}
          />

          <div className="flex flex-col">
            <h1 className="text-white text-3xl font-extrabold">195</h1>
            <p className="text-white">Public Chain Covered</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
