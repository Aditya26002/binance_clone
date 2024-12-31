import React from "react";
import Community from "./Community";
import AboutUs from "./AboutUs";
import Products from "./Products";
import Business from "./Business";
import Learn from "./Learn";
import Service from "./Service";
import Support from "./Support";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-14 items-center py-16">
      <div className="flex justify-center gap-16">
        {/* COMMUNITY */}
        <div className="flex flex-col gap-8">
          <p className="font-semibold text-lg">Community</p>
          <Community />
        </div>
        {/* ABOUT US */}
        <div className="flex flex-col gap-4">
          <p className="font-semibold text-lg">About Us</p>
          <AboutUs />
        </div>
        {/* PRODUCTS */}
        <div className="flex flex-col gap-4">
          <p className="font-semibold text-lg">Products</p>
          <Products />
        </div>
        <div className="flex flex-col gap-10">
          {/* BUSINESS */}
          <div className="flex flex-col gap-4">
            <p className="font-semibold text-lg">Business</p>
            <Business />
          </div>
          {/* LEARN */}
          <div className="flex flex-col gap-4">
            <p className="font-semibold text-lg">Learn</p>
            <Learn />
          </div>
        </div>
        <div className="flex flex-col gap-10">
          {/* SERVICE */}
          <div className="flex flex-col gap-4">
            <p className="font-semibold text-lg">Service</p>
            <Service />
          </div>
          {/* SUPPORT */}
          <div className="flex flex-col gap-4">
            <p className="font-semibold text-lg">Support</p>
            <Support />
          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col items-center gap-2">
        <div className="h-[1px] w-[80vw] bg-gray-500" />
        <div className="w-full flex items-center justify-center gap-3">
          <p>Binance© 2024</p>
          <p>Cookie Preferences</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
