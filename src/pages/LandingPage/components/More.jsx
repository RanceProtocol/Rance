import React from "react";
import Illustration from "../../../assets/Illustrations.png";
import Icon from "../../../assets/Icon.png";
import Icon2 from "../../../assets/Icon2.png";
import Icon3 from "../../../assets/Icon3.png";
import Table from "../../../assets/Table.png";
import Chart from "../../../assets/Chart.png";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const More = () => {
  return (
    <>
      <div className="container flex flex-col-reverse justify-between items-center py-10 px-10 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
        {/* Image */}
        <div>
          <img src={Illustration} alt="illustration" />
        </div>

        <div className="px-20">
          <BsArrowRightCircleFill className="text-black" size={30} />
        </div>

        {/* Content */}
        <div className="flex flex-col mt-5 mb-32 space-y-5 md:w-1/2">
          <h1 className="text-white max-w-lg text-3xl font-bold text-center md:text-6xl md:text-left">
            Key your Assets Secure
          </h1>

          <p className="max-w-sm text-center text-white space-y-1 md:text-left">
            We provide reliable, robust, and secure insurance service to DeFi
            users, allowing them to secure investment assets against various
            risks.
          </p>

          <div className="flex space-x-4">
            <BsArrowRightCircleFill className="text-primaryColor mt-1" />
            <p className="text-white">Smart Contract Vulnerability</p>
          </div>

          <div className="flex space-x-4">
            <BsArrowRightCircleFill className="text-primaryColor mt-1" />
            <p className="text-white">Custodian Risk</p>
          </div>

          <div className="flex space-x-4">
            <BsArrowRightCircleFill className="text-primaryColor mt-1" />
            <p className="text-white">IDO Event Risk</p>
          </div>

          <div className="flex space-x-4">
            <BsArrowRightCircleFill className="text-primaryColor mt-1" />
            <p className="text-white">Stablecoin Depeg Risk</p>
          </div>

          <div className="py-6">
            <a
              href="/test"
              className="p-5 bg-primaryColor text-white rounded-full px-6"
            >
              Get Covered
            </a>
          </div>
        </div>
      </div>

      {/* Stake to Earn */}
      <div id="about" className="flex items-center flex-col py-20">
        <h3 className="text-white max-w-lg text-3xl font-bold text-center md:text-4xl md:text-left">
          Stake to Earn
        </h3>

        <p className="max-w-xl text-center text-white text-lg space-y-1 mt-10">
          We reward users who provide capital to underwrite insurance risks in
          the underwriting pool with $INSUR tokens.
        </p>
      </div>

      {/* Gain Investment Return */}
      <div className="container flex flex-col-reverse items-center px-40  py-17 mx-auto space-y-0 md:space-y-0 md:flex-row">
        {/* Left Content */}
        <div className="flex flex-col mt-5 mb-32 space-y-5 md:w-1/2">
          <h1 className="text-white max-w-sm text-3xl font-bold text-center md:leading-snug md:text-4xl md:text-left">
            Gain Investment Returns
          </h1>

          <p className="max-w-sm text-center text-white space-y-1 md:text-left">
            We offer investment services to generate sustainable returns for
            investors who invest directly via the Investment Portal.
          </p>

          <div className="flex flex-col justify-center space-x-5 md:justify-start md:flex-row">
            <a
              href="/get-started"
              className="flex items-center space-x-1 py-4 px-7 mt-5 bg-primarySecondary text-white rounded-full baseline hover:bg-brightRedLight md:mt-0"
            >
              Get Started{" "}
            </a>
          </div>
        </div>

        {/* Right Content */}
        <div>
          <img src={Table} alt="table-img" />
        </div>
      </div>

      {/* Trade Securely */}
      <div>
        <div className="flex flex-col items-center py-20">
          <h3 className="text-white max-w-4xl text-3xl font-bold text-center md:leading-snug md:text-5xl md:text-center">
            Trade securely and market the high growth cryptocurrencies.
          </h3>
        </div>

        <div className="flex flex-col items-center px-20 space-x-12 md:flex-row">
          {/* Item One */}
          <div className="flex flex-col items-center p-6 py-6 rounded-2xl bg-gray-300 bg-opacity-25">
            <div>
              <img src={Icon} alt="bitcoin-icon" />
            </div>

            <div className="flex items-center space-x-3">
              <h1 className="text-white max-w-sm text-3xl font-bold text-center py-10 md:leading-snug md:text-3xl md:text-left">
                Bitcoin
              </h1>
              <strong className="text-gray-300 text-md">BTC</strong>
            </div>

            <p className="max-w-xs text-center text-white space-y-1 md:text-center">
              Digital currency in which a record of transactions is maintained.
            </p>

            <div className="py-10">
              <a
                href="/get-started"
                className="flex items-center space-x-1 py-5 px-8 bg-primaryColor text-white font-bold rounded-full baseline hover:bg-brightRedLight md:mt-0"
              >
                Get $RANCE{" "}
                <MdOutlineKeyboardArrowRight
                  className="bg-white text-primarySecondary rounded-full ml-5 text-lg"
                  style={{ fontSize: "30px" }}
                />
              </a>
            </div>
          </div>

          {/* Item Two */}
          <div className="flex flex-col items-center p-6 py-6 rounded-2xl bg-gray-300 bg-opacity-25">
            <div>
              <img src={Icon2} alt="bitcoin-icon" />
            </div>

            <div className="flex items-center space-x-3">
              <h1 className="text-white max-w-sm text-3xl font-bold text-center py-10 md:leading-snug md:text-3xl md:text-left">
                Bitcoin
              </h1>
              <strong className="text-gray-300 text-md">BTC</strong>
            </div>

            <p className="max-w-xs text-center text-white space-y-1 md:text-center">
              Digital currency in which a record of transactions is maintained.
            </p>

            <div className="py-10">
              <a
                href="/get-started"
                className="flex items-center space-x-1 p-5 bg-gray-500 bg-opacity-25 text-base border-2 font-bold rounded-full baseline md:mt-0"
              >
                <MdOutlineKeyboardArrowRight
                  className="text-primarySecondary"
                  style={{ fontSize: "30px" }}
                />
              </a>
            </div>
          </div>

          {/* Item Three */}
          <div className="flex flex-col items-center p-6 py-6 rounded-2xl bg-gray-300 bg-opacity-25">
            <div>
              <img src={Icon3} alt="bitcoin-icon" />
            </div>

            <div className="flex items-center space-x-3">
              <h1 className="text-white max-w-sm text-3xl font-bold text-center py-10 md:leading-snug md:text-3xl md:text-left">
                Bitcoin
              </h1>
              <strong className="text-gray-300 text-md">BTC</strong>
            </div>

            <p className="max-w-xs text-center text-white space-y-1 md:text-center">
              Digital currency in which a record of transactions is maintained.
            </p>

            <div className="py-10">
              <a
                href="/get-started"
                className="flex items-center space-x-1 p-5 bg-gray-500 bg-opacity-25 text-base border-2 font-bold rounded-full baseline md:mt-0"
              >
                <MdOutlineKeyboardArrowRight
                  className="text-primarySecondary"
                  style={{ fontSize: "30px" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Market Sentiment */}
      <div id="about">
        <div className="flex flex-col items-center py-20">
          <h3 className="text-white max-w-4xl text-3xl font-bold text-center md:leading-snug md:text-5xl md:text-center">
            Market sentiments, portfolio, and run the infrastructure of your
            choice
          </h3>
        </div>

        {/* Invest Smart */}
        <div className="container flex flex-col-reverse items-center px-40  py-17 mx-auto space-y-0 md:space-y-0 md:flex-row">
          {/* Left Content */}
          <div className="flex flex-col mt-5 mb-32 space-y-5 md:w-1/2">
            <h1 className="text-white max-w-sm text-3xl font-bold text-center md:leading-snug md:text-4xl md:text-left">
              Invest Smart
            </h1>

            <p className="max-w-sm text-center text-white space-y-1 md:text-left">
              Get full statistic information about the behaviour of buyers and
              sellers will help you to make the decision.
            </p>

            <div className="flex flex-col justify-center space-x-5 md:justify-start md:flex-row">
              <a
                href="/get-started"
                className="flex items-center space-x-1 py-4 px-7 mt-5 bg-lightBlue text-white rounded-full baseline hover:bg-brightRedLight md:mt-0"
              >
                Learn More{" "}
              </a>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <img src={Chart} alt="chart-img" />
          </div>
        </div>
      </div>
      
      {/* Partners */}
      <div>
        <div className="flex flex-col items-center py-20">
          <h3 className="text-white max-w-4xl text-3xl font-bold text-center md:leading-snug md:text-5xl md:text-center">
            Partners
          </h3>
        </div>

      
      </div>
    </>
  );
};

export default More;
