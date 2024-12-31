import React from "react";
import { FaApple, FaGoogle, FaQrcode } from "react-icons/fa";
import Bitcoin from "../../public/bitcoin.png";
import Ethereum from "../../public/ethereum.png";
import BNB from "../../public/currency.png";
import XRP from "../../public/xrp.png";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="">
      <div className="px-6 py-8 md:py-12 lg:py-12 xl:py-10 flex justify-between">
        {/* LEFT / TOP */}
        <div className="flex flex-col gap-20 justify-between">
          <div className="flex flex-col gap-10">
            <div className="">
              <h1 className="font-bold text-7xl text-yellow-500">
                249,675,300
              </h1>
              <h1 className="font-bold text-7xl">
                USERS <span className="hidden">TRUST US</span>
              </h1>
              <h1 className="font-bold text-7xl">TRUST US</h1>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="text"
                className="bg-white dark:bg-gray-900 py-3 pl-3 pr-20 rounded-lg border border-gray-500"
                placeholder="Email/Phone number"
              />
              <button className="bg-yellow-500 px-8 py-3 rounded-lg text-black hover:bg-yellow-600">
                Sign Up
              </button>
            </div>
          </div>
          <div className="flex gap-10">
            <div className="flex flex-col gap-3">
              <p className="text-sm text-gray-500">Or Continue With</p>
              <div className="flex gap-2">
                <div className="hover:bg-gray-800 p-2 border rounded-lg border-gray-500">
                  <FaGoogle size={30} />
                </div>
                <div className="hover:bg-gray-800 p-2 border rounded-lg border-gray-500">
                  <FaApple size={30} />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-sm text-gray-500">Download App</p>
              <div className="hover:bg-gray-800 p-2 border rounded-lg border-gray-500 flex items-center justify-center">
                <FaQrcode size={30} className="" />
              </div>
            </div>
          </div>
        </div>
        {/* RIGHT / BOTTOM */}
        <div className="flex flex-col gap-5">
          <div className="bg-gray-800 p-4 rounded-2xl">
            <div className="flex justify-between">
              <div className="flex gap-2">
                <p className=" hover:text-gray-200 font-bold cursor-pointer">
                  Popular
                </p>
                <p className="text-gray-500 hover:text-gray-200 font-bold cursor-pointer">
                  New Listing
                </p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-gray-500 hover:text-gray-300 text-sm">
                  View All 350+ Coins
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-3"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div className="flex justify-between pt-4 gap-20">
              <div className="flex flex-col gap-5">
                <div className="flex gap-1 hover:cursor-pointer items-center">
                  <Image src={Bitcoin} alt="Bitcoin" width={27} height={20} />
                  <p className="font-semibold">BTC</p>
                  <p className="text-sm text-gray-500">Bitcoin</p>
                </div>
                <div className="flex gap-1 hover:cursor-pointer items-center">
                  <Image src={Ethereum} alt="Ethereum" width={27} height={20} />
                  <p className="font-semibold">ETH</p>
                  <p className="text-sm text-gray-500">Ethereum</p>
                </div>
                <div className="flex gap-1 hover:cursor-pointer items-center">
                  <Image src={BNB} alt="BNB" width={27} height={20} />
                  <p className="font-semibold">BNB</p>
                  <p className="text-sm text-gray-500">BNB</p>
                </div>
                <div className="flex gap-1 hover:cursor-pointer items-center">
                  <Image src={XRP} alt="XRP" width={27} height={20} />
                  <p className="font-semibold">XRP</p>
                  <p className="text-sm text-gray-500">XRP</p>
                </div>
              </div>
              <div className="flex flex-col text-right gap-5">
                <div className="">$94,030.31</div>
                <div className="">$3,345.25</div>
                <div className="">$704.58</div>
                <div className="">$2.07</div>
              </div>
              <div className="flex flex-col text-right gap-5">
                <div className="text-green-600 font-semibold">+0.10%</div>
                <div className="text-red-600 font-semibold">-1.00%</div>
                <div className="text-green-600 font-semibold">+1.49%</div>
                <div className="text-red-600 font-semibold">-0.14%</div>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 p-4 rounded-2xl flex flex-col gap-5">
            <div className="flex justify-between">
              <p className="">News</p>
              <div className="flex items-center gap-2">
                <p className="text-gray-500 hover:text-gray-300 text-sm">
                  View All News
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-3"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="cursor-pointer hover:text-gray-300">
                AI Agents Poised To Transform Industries By 2025
              </p>
              <p className="cursor-pointer hover:text-gray-300">
                AI And Meme Coins Lead 2024 Cryptocurrency Market Gains
              </p>
              <p className="cursor-pointer hover:text-gray-300">
                Tron Network Sees Significant Revenue Growth in 2024
              </p>
            </div>
          </div>
          <div className="bg-gray-800 p-4 rounded-2xl flex flex-col gap-2">
            <div className="flex gap-4">
              <p className="font-semibold">Launchpool</p>
              <div className="">
                <p className="font-semibold">BIO</p>
              </div>
              <div className="flex items-center gap-2 ">
                <p className="text-xs bg-green-600 bg-opacity-15 p-1 rounded text-green-500">
                  Ongoing
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-3"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex items-baseline gap-1">
                <p className="text-lg font-semibold">02</p>
                <p className="text-sm">D</p>
              </div>
              <div className="flex items-baseline gap-1">
                <p className="text-lg font-semibold">13</p>
                <p className="text-sm">H</p>
              </div>
              <div className="flex items-baseline gap-1">
                <p className="text-lg font-semibold">38</p>
                <p className="text-sm">M</p>
              </div>
              <div className="flex items-baseline gap-1">
                <p className="text-lg font-semibold">00</p>
                <p className="text-sm">S</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
