import React from "react";
import car from "../../assets/images/car.svg";
import loan from "../../assets/images/loan.svg";
import piggybank from "../../assets/images/piggy-bank.svg";
import rich from "../../assets/images/rich.svg";

const InterestRates = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 bg-[#FBF6EE]">
      {/* Fixed Deposit */}
      <div className="flex flex-row justify-center items-center gap-4 text-center p-5  border-2 border-white">
        <img src={rich} alt="Fixed Deposit Icon" className="w-12 sm:w-16 h-12 sm:h-16 mb-2" />
        <div>
          <h2 className="text-base sm:text-3xl font-bold ">12%</h2>
          <p className="text-[#E21C55] text-base sm:text-xl font-semibold">मुदत ठेवी</p>
        </div>
      </div>

      {/* Savings Account */}
      <div className="flex flex-row items-center justify-center gap-4 text-center p-5  border-2 border-white">
        <img src={piggybank} alt="Savings Icon" className="w-12 sm:w-16 h-12 sm:h-16 mb-2" />
        <div>
          <h2 className="text-base sm:text-3xl font-bold">6%</h2>
          <p className="text-[#E21C55] text-base sm:text-xl font-semibold">बचत खाते</p>
        </div>
      </div>

      {/* Gold Loan */}
      <div className="flex flex-row items-center text-center justify-center gap-4 p-5   border-2 border-white">
        <img src={loan} alt="Gold Loan Icon" className="w-12 sm:w-16 h-12 sm:h-16 mb-2" />
       <div>
       <h2 className="text-base sm:text-3xl font-bold">12%</h2>
       <p className="text-[#E21C55] text-base sm:text-xl font-semibold">सोने तारण</p>
       </div>
      </div>

      {/* Vehicle Loan */}
      <div className="flex flex-row items-center justify-center gap-4 text-center p-5 border-2 border-white">
        <img src={car} alt="Vehicle Loan Icon" className="w-12 sm:w-16 h-12 sm:h-16 mb-2" />
      <div>
      <h2 className="text-base sm:text-3xl font-bold">16%</h2>
      <p className="text-[#E21C55] text-base sm:text-xl font-semibold">वाहन कर्ज</p>
      </div>
      </div>
    </div>
  );
};

export default InterestRates;
