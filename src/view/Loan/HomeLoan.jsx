import React from "react";
import about1 from "../../assets/images/home-loan.jpg";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { Link } from "react-router-dom";
const HomeLoan = () => {
  return (
    <div className="bg-gray-100">
      {/* Header Section */}
      <div className="bg-cover bg-center bg-[url(../src/assets/images/page-header.jpg)] py-10 px-6 md:px-10 lg:px-[175px]">
        <div>
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center space-x-2">
                <Link
                  to="/"
                  className="text-blue-500 font-semibold text-sm"
                >
                  Home / Loan
                </Link>
                <span className="text-gray-500">/</span>
                <span className="text-white font-semibold text-sm">
                गृह कर्ज
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Page Title Section */}
        <div className="py-14 -mt-10">
          <div className="container bg-white mx-auto px-4 md:px-8 lg:px-10 py-8">
            <div className="flex flex-col md:flex-row gap-2 sm:gap-0 justify-between items-center">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-red-600">
              गृह कर्ज
              </h1>
              <button className="px-5 py-2 sm:px-10 sm:py-4 bg-blue-800 hover:bg-blue-600 text-base text-white font-semibold">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 -mt-20 md:px-12 lg:px-24 py-8">
        <div className="bg-white shadow-sm overflow-hidden">
          <img src={about1} alt="Header" className="w-full h-auto" />
          <div className="py-8 px-4 md:py-12 md:px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Left Section */}
              <div>
                <h1 className="text-2xl font-bold text-gray-600 mb-3">
                गृह कर्ज
                </h1>
                <p className="text-lg  mb-3">
                या व्यवहारी जगात घर घेण्यासाठी मोठी आर्थिक गुंतवणूक आवश्यक असते. अनेकदा घर खरेदीसाठी आयुष्यभराची कमाई पणाला लागते आणि काहींसाठी हे स्वप्नच आवाक्याबाहेरचे वाटते. पण आता नाही!

जिजाई अर्बन तुमचं हे स्वप्न साकार करण्यासाठी घेऊन येत आहे गृहकर्ज योजना –
 त्वरित आणि कमी व्याजदरात! कमीत कमी कागदपत्रांमध्ये, जलद मंजुरीसह तुम्हाला सहज गृहकर्ज उपलब्ध करून देत आहे. 
 त्यामुळे तुमचं घर घेण्याचं स्वप्न आता आणखी सोपं आणि सुलभ!


                </p>
              </div>

              {/* Right Section */}
              <div className="flex flex-col space-y-4">
                                            <ul className="space-y-4">
                                              <li className="flex items-start space-x-2">
                                                <IoIosCheckmarkCircle className="text-blue-500 mt-1 flex-shrink-0 w-5 h-5" />
                                                <span className="text-lg">
                                                व्याजदर - 15%
                                                </span>
                                              </li>
                                              <li className="flex items-start space-x-2">
                                                <IoIosCheckmarkCircle className="text-blue-500 mt-1 flex-shrink-0 w-5 h-5" />
                                                <span className="text-lg">आवश्यक कागदपत्रे</span>
                                              </li>
                                              <ul className="pl-8 text-lg list-disc text-gray-700 space-y-1">
                                                <li>मालमत्तेचा सर्च  रिपोर्ट</li>
                                                <li>मालमत्तेचा मूल्यांकन रिपोर्ट</li>
                                                <li>500 रुपये चे दोन स्टॅम्प पेपर </li>
                                                <li>मालमत्तेचे गहान खत (मोर्गेज)
                                                </li>
                                                <li>इतर संस्थेची (NOC)</li>
                                                <li>पोस्टाचे 4 तिकीट</li>
                                                <li>15 चेक</li>
                                                <li>2 फोटो</li>
                                                <li>दोन जामीनदार व त्यांचे आधार कार्ड (झेरॉक्स) </li>
                                              </ul>
                                              </ul>
                                          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLoan;
