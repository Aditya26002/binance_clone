import React from "react";

const Service = () => {
  return (
    <div className="flex flex-col gap-1">
      <p className="hover:text-yellow-500 hover:cursor-pointer">Affiliate</p>
      <p className="hover:text-yellow-500 hover:cursor-pointer">Referral</p>
      <p className="hover:text-yellow-500 hover:cursor-pointer">OTC Trading</p>
      <p className="hover:text-yellow-500 hover:cursor-pointer">
        Historical Market Data
      </p>
      <p className="hover:text-yellow-500 hover:cursor-pointer">
        Proof of Reserves
      </p>
    </div>
  );
};

export default Service;
