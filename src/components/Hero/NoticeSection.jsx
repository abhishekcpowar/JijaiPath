// import React, { useState, useRef, useEffect } from "react";
// import { FaCheck } from "react-icons/fa";

// const NoticeSection = () => {
//   const [showPopup, setShowPopup] = useState(false);
//   const popupRef = useRef(null);

//   // Handle scroll lock
//   useEffect(() => {
//     if (showPopup) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }

//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, [showPopup]);

//   // Handle click outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (popupRef.current && !popupRef.current.contains(event.target)) {
//         setShowPopup(false);
//       }
//     };

//     if (showPopup) {
//       document.addEventListener('mousedown', handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [showPopup]);

//   return (
//     <div className="font-sans text-gray-800 p-4 md:p-8 relative">
//       {/* Main content with conditional blur */}
//       <div className={`${showPopup ? 'blur-sm' : ''} transition-all duration-300`}>
//         {/* Header */}
//         <div className="bg-yellow-200 text-center p-4 rounded-md">
//           <h1 className="text-[#E21C55] font-bold text-xl md:text-2xl mb-2">
//             वेळापत्रक सूचना
//           </h1>
//           <p className="text-sm md:text-base">
//             दर शुक्रवारी संस्था बंद राहील आणि ⁠दर गुरुवारी 10.30 ते 3.30 पर्यंत
//             चालू राहील.
//           </p>
//           <div className="mt-4 bg-[#E21C55] text-white py-2 px-4 inline-block rounded">
//             <button onClick={() => setShowPopup(true)} className="font-semibold">
//               अधिक सूचना पाहण्यासाठी येथे क्लिक करा.
//             </button>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="mt-8 sm:px-28 grid grid-cols-1 md:grid-cols-3 gap-6">
//           {/* Left Section */}
//           <div className="md:col-span-2">
//             <h2 className="text-[#E21C55] font-bold text-xl mb-4">
//               पतसंस्थेबद्दल
//             </h2>
//             <p className="text-sm md:text-lg leading-relaxed">
//               ⁠जिजाई महिला बचत गटातुन जिजाई अर्बन को-ऑप. क्रेडिट सोसा. लि. जत या
//               पतसंस्थेची निर्मिती झाली. दि. 05/02/2024 रोजी संस्थापक श्री
//               सुरेश एम. सायगांव साहेब व चेअरमनसो सौ सुप्रिया गणेश काळे (कोळी) यांनी
//               550000/- भांडवल आणि 500 सभासदांसह याची सुरुवात केली. यशस्वी उद्योजक
//               घडवणे महिला सशक्तिकरण करणे, महिला उद्योजक घडवणे असे अनेक संकल्प ठेऊन
//               आम्ही कार्यरत आहोत. आपली प्रगती व आर्थिक पत वाढवण्यासाठी आम्ही सदैव
//               आपल्या सेवेत आहोत. अतिशय छोट्या स्वरूपात असलेला या रोपट्याच आज
//               वटवृक्षात रुपांतर झालेले आहे. आपुलकीची सेवा आणि खूप मोठी विश्वासाची
//               थाप या जोरावर संस्थेने नुकताच 3 कोटीच्या एकत्रित व्यवसायाचा टप्पा
//               पार केला आहे. तसेच या संपूर्ण प्रवासामधे संस्थेला श्री.गणेश काळे (कोळी) व 
//               श्री. यल्लेश कोळी यांचे मार्गदर्शन लाभले व मॅनेजर वीरतय्या गुंडय्या मठ यांचेही खूप मोठे योगदान आहे. सर्वोत्तम व्यवस्थापन, विश्वासार्हता, नवीनतम-तंत्रज्ञान
//               आणि सामाजिक बांधिलकी हे सर्व जिजाई अर्बनच्या यशमागील रहस्य आहेत.
//               तुमच्यासाठी सर्वोत्तम साध्य करण्यासाठी आम्ही आमचे सर्वोत्तम देणे
//               सुरू ठेवू.{" "}
//               <a href="#" className="text-blue-600 underline font-semibold">
//                 अधिक माहिती
//               </a>
//             </p>
//           </div>

//           {/* Right Section */}
//           <div>
//             <h2 className="text-[#E21C55] font-bold text-xl mb-4">
//               संस्थेची ठळक वैशिष्ट्ये
//             </h2>
//             <ul className="text-sm md:text-lg space-y-2">
//               {[
//                 "⁠पहिल्याच वर्षापासून सर्व सभासदांना शेअर्स वरती 15% डिव्हीडंट देण्याचा माणस.",
//                 "संपूर्ण संगणकीकृत बँकिंग प्रणाली.",
//                 "दर शनिवारी व रविवारी ही बँक आपल्या सेवेत उपलब्ध आहे.",
//                 "RTGS/NEFT/IMPS सेवा उपलब्ध.",
//                 "QR Code सेवा उपलब्ध.",
//                 "2500+ समाधानी ग्राहक.",
//                 "अल्पवधीत 3 कोटी ठेवीकडे यशस्वी वाटचाल.",
//                 "जिजाई महिला सबलीकरण योजना- जिजाई महिला सबलीकरण योजने अंतर्गत (बचत गट) आयोजित महिला  मेळाव्यास उदंड प्रतिसाद. महिलांचा व्यक्तिमत्व विकास व व्यवसाय मार्गदर्शन शिबिर आयोजन.",
//               ].map((feature, index) => (
//                 <li key={index} className="flex items-start gap-2">
//                   <FaCheck className="text-green-500 mt-1" />
//                   <span className="flex-1">{feature}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Popup */}
//       {showPopup && (
//         <div className="fixed inset-0 flex items-center justify-center">
//           <div ref={popupRef} className="bg-white p-8 rounded-lg shadow-lg max-w-xl w-full mx-4 relative">
//             {/* Close Button */}
//             <button
//               onClick={() => setShowPopup(false)}
//               className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl"
//             >
//               ×
//             </button>
            
//             {/* Popup Content */}
//             <div className="space-y-6">
//               <h2 className="text-red-500 text-2xl font-bold">सूचना</h2>
              
//               <div className="space-y-6">
//                 <h3 className="text-lg font-semibold">आपली थकबाकी वेळेवर भरल्याने:</h3>
                
//                 <ul className="space-y-4">
//                   <li className="flex items-start">
//                     <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
//                     <span className="text-gray-700 text-lg">आपला सिबिल स्कोर वाढेल.</span>
//                   </li>
//                   <li className="flex items-start">
//                     <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
//                     <span className="text-gray-700 text-lg">आयुष्यात ज्या बँकेने अडचणीच्या वेळी आपणास मदत केली, त्या बँकेची थकबाकी वेळेवर भरून सहकार्य करा.</span>
//                   </li>
//                   <li className="flex items-start">
//                     <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
//                     <span className="text-gray-700 text-lg">आपली थकबाकी वेळेवर भरा. भविष्यात नक्कीच बँक आपल्याला सहकार्य करेल.</span>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default NoticeSection;

import React, { useState, useRef, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const NoticeSection = () => {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showPopup]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    };

    if (showPopup) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showPopup]);

  return (
    <div className="font-sans text-gray-800 p-4 md:p-8 relative">
      <div className={`${showPopup ? 'blur-sm' : ''} transition-all duration-300`}>
        <div className="bg-yellow-200 text-center p-4 rounded-md">
          <h1 className="text-[#E21C55] font-bold text-xl md:text-2xl mb-2">
            वेळापत्रक सूचना
          </h1>
          <p className="text-sm md:text-base">
            दर शुक्रवारी संस्था बंद राहील आणि ⁠दर गुरुवारी 10.30 ते 3.30 पर्यंत
            चालू राहील.
          </p>
          <div className="mt-4 bg-[#E21C55] text-white py-2 px-4 inline-block rounded">
            <button onClick={() => setShowPopup(true)} className="font-semibold">
              अधिक सूचना पाहण्यासाठी येथे क्लिक करा.
            </button>
          </div>
        </div>

        <div className="mt-8 sm:px-28 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <h2 className="text-[#E21C55] font-bold text-xl mb-4">
              पतसंस्थेबद्दल
            </h2>
            <p className="text-sm md:text-lg leading-relaxed">
              ⁠जिजाई महिला बचत गटातुन जिजाई अर्बन को-ऑप. क्रेडिट सोसा. लि. जत या
              पतसंस्थेची निर्मिती झाली. दि. 05/02/2024 रोजी संस्थापक श्री
              सुरेश एम. सायगांव साहेब व चेअरमनसो सौ सुप्रिया गणेश काळे (कोळी) यांनी
              550000/- भांडवल आणि 500 सभासदांसह याची सुरुवात केली. यशस्वी उद्योजक
              घडवणे महिला सशक्तिकरण करणे, महिला उद्योजक घडवणे असे अनेक संकल्प ठेऊन
              आम्ही कार्यरत आहोत. आपली प्रगती व आर्थिक पत वाढवण्यासाठी आम्ही सदैव
              आपल्या सेवेत आहोत. अतिशय छोट्या स्वरूपात असलेला या रोपट्याच आज
              वटवृक्षात रुपांतर झालेले आहे. आपुलकीची सेवा आणि खूप मोठी विश्वासाची
              थाप या जोरावर संस्थेने नुकताच 3 कोटीच्या एकत्रित व्यवसायाचा टप्पा
              पार केला आहे. तसेच या संपूर्ण प्रवासामधे संस्थेला श्री.गणेश काळे (कोळी) व 
              श्री. यल्लेश कोळी यांचे मार्गदर्शन लाभले व मॅनेजर वीरतय्या गुंडय्या मठ यांचेही खूप मोठे योगदान आहे.{" "}
              <Link to="/about" className="text-blue-600 underline font-semibold">
                अधिक माहिती
              </Link>
            </p>
          </div>

          <div>
            <h2 className="text-[#E21C55] font-bold text-xl mb-4">
              संस्थेची ठळक वैशिष्ट्ये
            </h2>
            <ul className="text-sm md:text-lg space-y-2">
              {[
                "⁠पहिल्याच वर्षापासून सर्व सभासदांना शेअर्स वरती 15% डिव्हीडंट देण्याचा माणस.",
                "संपूर्ण संगणकीकृत बँकिंग प्रणाली.",
                "दर शनिवारी व रविवारी ही बँक आपल्या सेवेत उपलब्ध आहे.",
                "RTGS/NEFT/IMPS सेवा उपलब्ध.",
                "QR Code सेवा उपलब्ध.",
                "2500+ समाधानी ग्राहक.",
                "अल्पवधीत 3 कोटी ठेवीकडे यशस्वी वाटचाल.",
                "जिजाई महिला सबलीकरण योजना- जिजाई महिला सबलीकरण योजने अंतर्गत (बचत गट) आयोजित महिला  मेळाव्यास उदंड प्रतिसाद. महिलांचा व्यक्तिमत्व विकास व व्यवसाय मार्गदर्शन शिबिर आयोजन.",
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <FaCheck className="text-green-500 mt-1" />
                  <span className="flex-1">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div ref={popupRef} className="bg-white p-8 rounded-lg shadow-lg max-w-xl w-full mx-4 relative">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl"
            >
              ×
            </button>
            
            <div className="space-y-6">
              <h2 className="text-red-500 text-2xl font-bold">सूचना</h2>
              
              <div className="space-y-6">
                <h3 className="text-lg font-semibold">आपली थकबाकी वेळेवर भरल्याने:</h3>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">आपला सिबिल स्कोर वाढेल.</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">आयुष्यात ज्या बँकेने अडचणीच्या वेळी आपणास मदत केली, त्या बँकेची थकबाकी वेळेवर भरून सहकार्य करा.</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">आपली थकबाकी वेळेवर भरा. भविष्यात नक्कीच बँक आपल्याला सहकार्य करेल.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NoticeSection;