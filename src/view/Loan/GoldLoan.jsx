// import React from "react";
// import { Link } from "react-router-dom";
// import { IoIosCheckmarkCircle } from "react-icons/io";
// import about1 from "../../assets/images/gold-loan.jpg";

// const GoldLoan = () => {
//   const handleApplyNow = () => {
//     window.open("https://docs.google.com/forms/d/e/1FAIpQLSeKGZUJhyv0jzlyJBAUr7iN1kF6h9MFGPB6Ye8WlSmTzlLNTA/viewform?embedded=true", "_blank");
//   };

//   return (
//     <div className="bg-gray-100">
//       {/* Header Section */}
//       <div className="bg-cover bg-center bg-[url(../src/assets/images/page-header.jpg)] py-10 px-6 md:px-10 lg:px-[175px]">
//         <div>
//           <div className="container mx-auto">
//             <div className="flex flex-col md:flex-row items-center justify-between">
//               <div className="flex items-center space-x-2">
//                 <Link to="/" className="text-blue-500 font-semibold text-sm">
//                   Home / Loan
//                 </Link>
//                 <span className="text-gray-500">/</span>
//                 <span className="text-white font-semibold text-sm">
//                   सोने तारण कर्ज
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Page Title Section */}
//         <div className="py-14 -mt-10">
//           <div className="container bg-white mx-auto px-4 md:px-8 lg:px-10 py-8">
//             <div className="flex flex-col md:flex-row gap-2 sm:gap-0 justify-between items-center">
//               <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-red-600">
//                 सोने तारण कर्ज
//               </h1>
//               <button
//                 onClick={handleApplyNow}
//                 className="px-5 py-2 sm:px-10 sm:py-4 bg-blue-800 hover:bg-blue-600 text-base text-white font-semibold"
//               >
//                 Apply Now
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Content Section */}
//       <div className="container mx-auto px-4 -mt-20 md:px-12 lg:px-24 py-8">
//         <div className="bg-white shadow-sm overflow-hidden">
//           <img src={about1} alt="Header" className="w-full h-auto" />
//           <div className="py-8 px-4 md:py-12 md:px-6 lg:px-12">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {/* Left Section */}
//               <div>
//                 <h1 className="text-2xl font-bold text-gray-600 mb-3">
//                   सोने तारण कर्ज
//                 </h1>
//                 <p className="text-lg mb-3">
//                   सोनं ही तुमचं कर्जही तुमचं. पैशाची गरज ही कधी सांगून येत नसते पण
//                   अशा अचानक ओढवलेल्या अडचणीत पैशाच सोंग आणता येत. जिजाई अर्बन
//                   मध्ये सोने तारण ठेवा आणि कर्ज मिळवा कमी व्याजदरात व नाममात्र
//                   प्रोसेसिंग फी सोबत कारण आम्ही ओळखतो तुमची गरज.
//                 </p>
//               </div>

//               {/* Right Section */}
//               <div className="flex flex-col space-y-4">
//                 <ul className="space-y-4">
//                   <li className="flex items-start space-x-2">
//                     <IoIosCheckmarkCircle className="text-blue-500 mt-1 flex-shrink-0 w-5 h-5" />
//                     <span className="text-lg">व्याजदर - 12%</span>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GoldLoan;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosCheckmarkCircle } from "react-icons/io";
import about1 from "../../assets/images/gold-loan.jpg";

const GoldLoan = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-gray-100">
      {/* Header Section */}
      <div className="bg-cover bg-center bg-[url(../src/assets/images/page-header.jpg)] py-10 px-6 md:px-10 lg:px-[175px]">
        <div>
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center space-x-2">
                <Link to="/" className="text-blue-500 font-semibold text-sm">
                  Home / Loan
                </Link>
                <span className="text-gray-500">/</span>
                <span className="text-white font-semibold text-sm">
                  सोने तारण कर्ज
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
                सोने तारण कर्ज
              </h1>
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-5 py-2 sm:px-10 sm:py-4 bg-blue-800 hover:bg-blue-600 text-base text-white font-semibold"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-3xl max-h-[90vh] overflow-hidden relative">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-xl font-semibold">Apply for Gold Loan</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="h-[70vh]">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSeKGZUJhyv0jzlyJBAUr7iN1kF6h9MFGPB6Ye8WlSmTzlLNTA/viewform?embedded=true"
                className="w-full h-full"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
              >
                Loading...
              </iframe>
            </div>
          </div>
        </div>
      )}

      {/* Content Section */}
      <div className="container mx-auto px-4 -mt-20 md:px-12 lg:px-24 py-8">
        <div className="bg-white shadow-sm overflow-hidden">
          <img src={about1} alt="Header" className="w-full h-auto" />
          <div className="py-8 px-4 md:py-12 md:px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Left Section */}
              <div>
                <h1 className="text-2xl font-bold text-gray-600 mb-3">
                  सोने तारण कर्ज
                </h1>
                <p className="text-lg mb-3">
                  सोनं ही तुमचं कर्जही तुमचं. पैशाची गरज ही कधी सांगून येत नसते पण
                  अशा अचानक ओढवलेल्या अडचणीत पैशाच सोंग आणता येत. जिजाई अर्बन
                  मध्ये सोने तारण ठेवा आणि कर्ज मिळवा कमी व्याजदरात व नाममात्र
                  प्रोसेसिंग फी सोबत कारण आम्ही ओळखतो तुमची गरज.
                </p>
              </div>

              {/* Right Section */}
              <div className="flex flex-col space-y-4">
                <ul className="space-y-4">
                  <li className="flex items-start space-x-2">
                    <IoIosCheckmarkCircle className="text-blue-500 mt-1 flex-shrink-0 w-5 h-5" />
                    <span className="text-lg">व्याजदर - 12%</span>
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

export default GoldLoan;