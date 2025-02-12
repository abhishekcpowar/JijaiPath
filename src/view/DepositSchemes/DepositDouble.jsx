import React from "react";
import about1 from "../../assets/images/dd.jpg";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { Link } from "react-router-dom";
const DepositDouble = () => {
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
                  Home / Accounts
                </Link>
                <span className="text-gray-500">/</span>
                <span className="text-white font-semibold text-sm">
                Deposit Double
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
                दाम दुप्पट ठेव योजना
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
                  दाम दुप्पट ठेव योजना
                </h1>
                <p className="text-lg  mb-3">
                  आपण केलेल्या कष्टांचा फायदा तर आपल्याला होतोच. पण दुप्पट
                  फायदा??? विश्वास नाही बसत ना? काहीतरी गडबड आहे असच वाटते. पण
                  जर, योग्य नियोजन करून बनवलेल्या 'दाम दुप्पट योजनेमध्ये' पैसे
                  गुंतवले तर मात्र आपल्या कष्टाची कमाई दुप्पट होऊन मिळणे नक्कीच
                  शक्य होते.
                </p>
              </div>

              {/* Right Section */}
              <div className="flex flex-col space-y-4">
                <ul className="space-y-4">
                  <li className="flex items-start space-x-2">
                    <IoIosCheckmarkCircle className="text-blue-500 mt-1 flex-shrink-0 w-5 h-5" />
                    <span className="text-lg">
                    5000 रुपयेचा गोल्डन बॉण्ड घ्या 76 महिन्यानंतर दहा हजार रुपये मिळवा.
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <IoIosCheckmarkCircle className="text-blue-500 mt-1 flex-shrink-0 w-5 h-5" />
                    <span className="text-lg">
                    संस्थेच्या जिजाई गोल्डन बॉण्ड योजनेत सहभागी होऊन जिंका सोन्याची नाणी व इतर विविध आकर्षक बक्षिसे.
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <IoIosCheckmarkCircle className="text-blue-500 mt-1 flex-shrink-0 w-5 h-5" />
                    <span className="text-lg">आवश्यक कागदपत्रे</span>
                  </li>
                  <ul className="pl-8 text-lg list-disc text-gray-700 space-y-1">
                    <li>पॅनकार्ड</li>
                    <li>आधारकार्ड</li>
                    <li>३ फोटो</li>
                  </ul>
                  <li className="flex items-start space-x-2">
                    <IoIosCheckmarkCircle className="text-blue-500 mt-1 flex-shrink-0 w-5 h-5" />
                    <span className="text-lg">
                    सेव्हिंग ठेवीवर व्याजदर - 6% प्रति वर्ष 
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <IoIosCheckmarkCircle className="text-blue-500 mt-1 flex-shrink-0 w-5 h-5" />
                    <span className="text-lg">
                    ⁠पिग्मी ठेवीवर व्याजदर - 6% प्रति वर्ष
                    </span>
                  </li>
                 
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepositDouble;
