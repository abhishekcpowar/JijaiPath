import React from "react";
import about1 from "../../assets/images/about img.png";
import logo from "../../assets/images/logo2.png";
import finaltable from "../../assets/images/table3.png";
import { Link } from "react-router-dom";

const AboutView = () => {
  return (
    <div className="bg-gray-100">
      {/* Header Section */}
      <div className="bg-cover bg-center bg-[url(../src/assets/images/page-header.jpg)] py-10 px-6 md:px-10 lg:px-[175px]">
        <div>
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center space-x-2">
                <Link to="/" className="text-blue-500 font-semibold text-sm">
                  Home
                </Link>
                <span className="text-gray-500">/</span>
                <span className="text-white font-semibold text-sm">About</span>
              </div>
            </div>
          </div>
        </div>

        {/* Page Title Section */}
        <div className="py-14 -mt-10">
          <div className="container bg-white mx-auto px-4 md:px-8 lg:px-10 py-8">
            <div className="flex flex-col md:flex-row gap-2 sm:gap-0 justify-between items-center">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-red-600">
                संस्थेबद्दल
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
            <div className="mb-6">
              {/* Logo and Title Section */}
              <div className="flex items-center justify-center space-x-4 p-4">
      <img
        src={logo}
        alt="Logo"
        className="w-16 h-16 sm:w-20 sm:h-20"
      />
      <div className="hidden sm:block border-l-2 border-black h-16"></div>
      <div className="text-left">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-blue-900">
          जिजाई अर्बन
        </h1>
        <p className="text-xs sm:text-sm md:text-lg mt-1 sm:mt-2 text-gray-700">
          को-ऑप. क्रेडिट सोसायटी लि. जत
        </p>
      </div>
    </div>

              {/* Main Content Section */}
              <div className="space-y-6 text-justify px-4 sm:px-10 md:px-20">
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  जिजाई महिला बचत गटातुन जिजाई अर्बन को-ऑप. क्रेडिट सोसा. लि. जत
                  या पतसंस्थेची निर्मिती झाली. दि. 05/02/2024 रोजी संस्थापक
                  श्री सुरेश एम. सायगांव साहेब व चेअरमनसो सौ सुप्रिया गणेश
                  काळे (कोळी) यांनी 550000/- भांडवल आणि 500 सभासदांसह याची सुरुवात केली.
                  यशस्वी उद्योजक घडवणे महिला सशक्तिकरण करणे, महिला उद्योजक घडवणे
                  असे अनेक संकल्प ठेऊन आम्ही कार्यरत आहोत. आपली प्रगती व आर्थिक पत
                  वाढवण्यासाठी आम्ही सदैव आपल्या सेवेत आहोत. अतिशय छोट्या स्वरूपात
                  असलेल्या या रोपट्याच आज वटवृक्षात रुपांतर झालेले आहे. आपुलकीची
                  सेवा आणि खूप मोठी विश्वासाची थाप या जोरावर संस्थेने नुकताच 3
                  कोटीच्या एकत्रित व्यवसायाचा टप्पा पार केला आहे. तसेच या संपूर्ण प्रवासामधे संस्थेला श्री.गणेश काळे (कोळी) व 
                  श्री. यल्लेश कोळी यांचे मार्गदर्शन लाभले व मॅनेजर वीरतय्या गुंडय्या मठ यांचेही खूप मोठे योगदान आहे. सर्वोत्तम
                  व्यवस्थापन, विश्वासार्हता, नवीनतम-तंत्रज्ञान आणि सामाजिक
                  बांधिलकी हे सर्व जिजाई अर्बनच्या यशमागील रहस्य आहेत. तुमच्यासाठी
                  सर्वोत्तम साध्य करण्यासाठी आम्ही आमचे सर्वोत्तम देणे सुरू ठेवू.
                </p>

                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  समाजातील प्रत्येक घटकाला आर्थिक स्वातंत्र्य मिळवून देण्याच्या
                  उद्देशाने सुरु करण्यात आलेली संस्था महाराष्ट्र शासन अंतर्गत
                  रजिस्टर्ड आहे (रजि.क्र.एस.ए.एन/जे.ए.टी/आर.एस.आर./सी.आर./२१२५/२०२४ दि.०५/०२/२०२४) दिलेल्या सर्व
                  नियम व अटींचे येथे काटेकोरपणे पालन केले जाते. तुमच्या कष्टाच्या
                  कमाईला सुरक्षित ठेऊन त्यावर जास्तीत जास्त परतावा मिळण्याच्या
                  हेतूने संस्थेमध्ये अनेक लाभदायी ठेव योजना उपलब्ध आहेत.
                </p>

                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  ग्राहकांना तत्पर सेवा देण्याकरिता सर्व कर्मचारी अहोरात्र कार्यरत
                  आहे. तत्पर आणि ग्राहकाभिमुख सेवा देण्याकरिता आधुनिक
                  तंत्रज्ञानाचा योग्य वापर केला जातो. ग्राहकांना QR Code, NEFT/RTGS/IMPS इ.
                  सेवा उपलब्ध आहेत. खालील यादीमधे आमचे आपुलकीने वागणारे संचालक मंडळ व कर्मचारी वृंद
                  आहेत.
                </p>
              </div>

              {/* Table Image Section */}
              <div className="flex justify-right items-start mt-8">
                <img 
                  src={finaltable} 
                  alt="Table" 
                  className="w-auto max-w-full px-4 sm:px-20" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutView;