import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomeView } from './view/Home/home';
import AboutView from './view/About/AboutSection'; // Example additional view
import FixedDeposite from './view/DepositSchemes/FixedDeposit';
import DepositDouble from './view/DepositSchemes/DepositDouble';
import SavingsAccount from './view/Accounts/SavingsAccount';
// import CurrentAccount from './view/Accounts/CurrentAccount';
import DirectorMessage from './view/About/DirectorsMessage';
import HomeLoan from './view/Loan/HomeLoan';
import VehicleLoan from './view/Loan/VehicleLoan';
import MortgageLoan from './view/Loan/MortgageLoan';
import CouncilorLoan from './view/Loan/CouncilorLoan';
import GoldLoan from './view/Loan/GoldLoan';
import Photosgalary from './view/About/Photogalary';
// import ContactView from './view/contact/contact'; // Example additional view

export const App = () => {
  return (
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/about" element={<AboutView />} />
        <Route path="/about/directors-message" element={<DirectorMessage />} />
        <Route path="/about/photo-galary" element={<Photosgalary />} />
        <Route path="/accounts/savings-account" element={<SavingsAccount />} />
        {/* <Route path="/accounts/current-account" element={<CurrentAccount />} /> */}
        <Route path="/deposit-schemes/fixed-deposit" element={<FixedDeposite />} />
        <Route path="/deposit-schemes/deposit-double" element={<DepositDouble />} />
        <Route path="/loan/home-loan" element={<HomeLoan />} />
        <Route path="/loan/vehicle-loan" element={<VehicleLoan />} />
        <Route path="/loan/mortgage-loan" element={<MortgageLoan />} />
        <Route path="/loan/gold-loan" element={<GoldLoan/>} />
        <Route path="/loan/councilor-loan" element={<CouncilorLoan />} />







      </Routes>
  );
};
