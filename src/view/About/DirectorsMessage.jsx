// import React from "react";
// import about1 from "../../assets/images/pg9.jpg";
// import logo from "../../assets/icons/logo.png";
// import { Link } from "react-router-dom";
// const DirectorMessage = () => {
//   return (
//     <div className="bg-gray-100">
//       {/* Header Section */}
//       <div className="bg-cover bg-center bg-[url(../src/assets/images/page-header.jpg)] py-10 px-6 md:px-10 lg:px-[175px]">
//         <div>
//           <div className="container mx-auto">
//             <div className="flex flex-col md:flex-row items-center justify-between">
//               <div className="flex items-center space-x-2">
//                 <Link to="/" className="text-blue-500 font-semibold text-sm">
//                   Home / About
//                 </Link>
//                 <span className="text-gray-500">/</span>
//                 <span className="text-white font-semibold text-sm">
//                   Directors Message
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
//                 अध्यक्षांचे मनोगत
//               </h1>
//               {/* <button className="px-5 py-2 sm:px-10 sm:py-4 bg-blue-800 hover:bg-blue-600 text-base text-white font-semibold">
//                 Apply Now
//               </button> */}
//               {""}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Content Section */}
//       <div className="container mx-auto px-4 -mt-20 md:px-12 lg:px-24 py-8">
//         <div className="bg-white shadow-sm overflow-hidden">
//           <img src={about1} alt="Header" className="w-full h-auto" />
//           <div className="py-8 px-4 md:py-12 md:px-6 lg:px-12">
//             <div className="text-center mb-6">
//               <div className="flex items-center justify-center space-x-4">
//                 <img
//                   src={logo}
//                   alt="Logo"
//                   className="w-26 h-26 sm:w-28 sm:h-28"
//                 />
//                 <div className="hidden md:block border-l-2 border-black h-18"></div>
//                 <div className="text-start sm:text-center md:text-left">
//                   <h1 className="text-3xl sm:text-5xl font-bold text-blue-900">
//                     जिजाई अर्बन
//                   </h1>
//                   <p className="text-sm sm:text-lg sm:mt-2 text-gray-700">
//                     को-ऑप. क्रेडिट सोसायटी लि. जत
//                   </p>
//                 </div>
//               </div>
//               <div className="space-y-6 text-justify px-4 sm:px-10 md:px-20">
//               <p className="text-gray-700 text-base md:text-lg leading-relaxed">
//               विशेष म्हणजे जिजाई महिला सबलीकरण योजना ही संस्था राबवत आहे. या योजनेअंतर्गत बचत गटांचे आयोजन करून महिला मेळाव्यांना उदंड प्रतिसाद मिळाला आहे.
//               महिलांच्या व्यक्तिमत्व विकासासाठी व व्यवसाय मार्गदर्शनासाठी शिबिरांचे आयोजन केले जाते, ज्यामुळे महिलांच्या सबलीकरणाला चालना मिळत आहे.
//               </p>
              

//               <p className="text-gray-700 text-base md:text-lg leading-relaxed">
//                 सहकाराला शिस्त आणि आधुनिक तंत्रज्ञानाची साथ मिळाली तर सर्वांगीण
//                 विकास सहज शक्य आहे. गॅलेक्सी या संस्थेमध्ये याचा सुरेख संगम
//                 सर्वांना अनुभवायला मिळतोय. त्याचीच पावती म्हणून दिवसेंदिवस
//                 गतिशील होत असलेल्या संस्थेच्या प्रगतीतून मिळतेय. येणाऱ्या काळात
//                 बँकिंग मध्ये नवनवीन मानदंड प्रस्थापित करून ग्राहकाभिमुख सेवा
//                 देण्याकरिता आम्ही सज्ज आहोत आणि तुम्हीही अशाच विश्वासाने व
//                 प्रेमाने साथ द्याल हीच अपेक्षा.
//               </p>
//               <p className="text-gray-700 text-base md:text-lg leading-relaxed">
//                 ग्राहकांना तत्पर सेवा देण्याकरिता सर्व कर्मचारी अहोरात्र कार्यरत
//                 आहे. तत्पर आणि ग्राहकाभिमुख सेवा देण्याकरिता आधुनिक
//                 तंत्रज्ञानाचा योग्य वापर केला जातो. 
//               </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DirectorMessage;


import React from "react";
import about1 from "../../assets/images/pg10.jpg";
import logo from "../../assets/icons/logo.png";
import { Link } from "react-router-dom";

const DirectorMessage = () => {
  return (
    <div className="bg-gray-100">
      {/* Header Section */}
      <div className="bg-cover bg-center bg-[url(../src/assets/images/page-header.jpg)] py-10 px-6 md:px-10 lg:px-[175px]">
        <div>
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center space-x-2">
                <Link to="/" className="text-blue-500 font-semibold text-sm">
                  Home / About
                </Link>
                <span className="text-gray-500">/</span>
                <span className="text-white font-semibold text-sm">
                  Directors Message
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
                अध्यक्षांचे मनोगत
              </h1>
              {""}
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 -mt-20 md:px-12 lg:px-24 py-8">
        <div className="bg-white shadow-sm overflow-hidden">
          <div className="w-full h-full object-cover object-center ">
            <img 
              src={about1} 
              alt="Header" 
              className="w-auto h-auto object-contain  shadow-md max-h-[400px]  :" 
            />
          </div>
          <div className="py-8 px-4 md:py-12 md:px-6 lg:px-12">
            <div className="text-center mb-6">
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-26 h-26 sm:w-28 sm:h-28"
                />
                <div className="hidden md:block border-l-2 border-black h-18"></div>
                <div className="text-start sm:text-center md:text-left">
                  <h1 className="text-3xl sm:text-5xl font-bold text-blue-900">
                    जिजाई अर्बन
                  </h1>
                  <p className="text-sm sm:text-lg sm:mt-2 text-gray-700">
                    को-ऑप. क्रेडिट सोसायटी लि. जत
                  </p>
                </div>
              </div>
              <div className="space-y-6 text-justify px-4 sm:px-10 md:px-20">
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  विशेष म्हणजे जिजाई महिला सबलीकरण योजना ही संस्था राबवत आहे. या योजनेअंतर्गत बचत गटांचे आयोजन करून महिला मेळाव्यांना उदंड प्रतिसाद मिळाला आहे.
                  महिलांच्या व्यक्तिमत्व विकासासाठी व व्यवसाय मार्गदर्शनासाठी शिबिरांचे आयोजन केले जाते, ज्यामुळे महिलांच्या सबलीकरणाला चालना मिळत आहे.
                </p>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  सहकाराला शिस्त आणि आधुनिक तंत्रज्ञानाची साथ मिळाली तर सर्वांगीण
                  विकास सहज शक्य आहे. गॅलेक्सी या संस्थेमध्ये याचा सुरेख संगम
                  सर्वांना अनुभवायला मिळतोय. त्याचीच पावती म्हणून दिवसेंदिवस
                  गतिशील होत असलेल्या संस्थेच्या प्रगतीतून मिळतेय. येणाऱ्या काळात
                  बँकिंग मध्ये नवनवीन मानदंड प्रस्थापित करून ग्राहकाभिमुख सेवा
                  देण्याकरिता आम्ही सज्ज आहोत आणि तुम्हीही अशाच विश्वासाने व
                  प्रेमाने साथ द्याल हीच अपेक्षा.
                </p>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  ग्राहकांना तत्पर सेवा देण्याकरिता सर्व कर्मचारी अहोरात्र कार्यरत
                  आहे. तत्पर आणि ग्राहकाभिमुख सेवा देण्याकरिता आधुनिक
                  तंत्रज्ञानाचा योग्य वापर केला जातो.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectorMessage;