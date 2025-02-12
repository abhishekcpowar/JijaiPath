import React from "react";
import about1 from "../../assets/images/fd.jpg";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { Link } from "react-router-dom";
const FixedDeposite = () => {
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
                Fixed Deposite
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
                मुदत ठेव योजना
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
                  मुदत ठेव योजना
                </h1>
                <p className="text-lg  mb-3">
                  आपल्या गुंतवणुकीवर योग्य मोबदला आणि केलेली गुंतवणूक सुरक्षित
                  ठेवणे आम्ही आमची जबाबदारी मानतो. मुदत ठेवीवर जास्तीत जास्त
                  परताव देत ठेवींना सुरक्षितता ही देतो. व्यवसाय असो अथवा नोकरी
                  अनेकदा पैसे येतात आणि मुठीतल्या वाळू सारखे हातातून कधी निघून
                  जातात तेच कळत नाही. त्यामुळे आपले पैसे एका सुरक्षित ठिकाणी
                  गुंतवुन ठेवायला हवे. त्यासाठी जिजाई अर्बन बँकेची मुदत ठेव/
                  पेन्शन ठेव योजना आपल्या सेवेत आहे. रक्कम सुरक्षित ही राहते व
                  आकर्षक व्याज ही मिळतो.
                </p>
                <table className="w-full border border-gray-200">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-2 text-left text-lg  text-gray-600">
                        मुदत
                      </th>
                      <th className="p-2 text-left text-lg text-gray-600">
                        व्याजदर
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2 text-lg border-t border-gray-200">
                        ४६ दिवस ते ३ महिने
                      </td>
                      <td className="p-2 border-t text-lg border-gray-200">
                        ५ %
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 border-t text-lg border-gray-200">
                        ३ महिने ते ६ महिने
                      </td>
                      <td className="p-2 border-t text-lg border-gray-200">
                        ६ %
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 border-t text-lg border-gray-200">
                        ६ महिने ते १ वर्ष
                      </td>
                      <td className="p-2 border-t text-lg border-gray-200">
                        ७ %
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 border-t text-lg border-gray-200">
                        १३ महिने १ दिवस ते पुढे
                      </td>
                      <td className="p-2 border-t text-lg border-gray-200">
                        १२ %
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Right Section */}
              {/* Right Section */}

              {/* <div className="flex flex-col space-y-4">
                <ul className="space-y-4">
                  <li className="flex items-start space-x-2">
                    <IoIosCheckmarkCircle className="text-blue-500  mt-1" />
                    <span className="text-lg">
                      ज्येष्ठ नागरिकांना ०.५ % जास्त व्याजदर
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <IoIosCheckmarkCircle className="text-blue-500 mt-1" />
                    <span className="text-lg">
                      मासिक व्याज मिळण्यासाठी २ वर्षपुढे गुंतवणूक असावी
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <IoIosCheckmarkCircle className="text-blue-500 mt-1" />
                    <span className="text-lg">आवश्यक कागदपत्रे</span>
                  </li>
                  <ul className="pl-8 text-lg list-disc text-gray-700 space-y-1">
                    <li>पॅनकार्ड</li>
                    <li>आधारकार्ड</li>
                    <li>३ फोटो</li>
                  </ul>
                  <li className="flex items-start space-x-2">
                    <IoIosCheckmarkCircle className="text-blue-500 mt-1" />
                    <span className="text-lg">
                      किमान ठेव ₹ १०००/- पासून पुढे करण्यात येईल
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <IoIosCheckmarkCircle className="text-blue-500 mt-1" />
                    <span className="text-lg">
                      मुदतपूर्व पैसे काढल्यास प्रचलित व्याजदराप्रमाणे २ % कपात
                      करून व्याज मिळेल
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <IoIosCheckmarkCircle className="text-blue-500 mt-1" />
                    <span className="text-lg">
                      मुदत पूर्ण झाल्यानंतर १४ दिवसांच्या आत पावती नूतनीकरण करणे
                      आवश्यक आहे
                    </span>
                  </li>
                </ul>
              </div> */}

              <div className="flex flex-col space-y-4">
                <ul className="space-y-4">
                  <li className="flex items-start space-x-2">
                    <IoIosCheckmarkCircle className="text-blue-500 mt-1 flex-shrink-0 w-5 h-5" />
                    <span className="text-lg">
                      ज्येष्ठ नागरिकांना ०.५ % जास्त व्याजदर
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <IoIosCheckmarkCircle className="text-blue-500 mt-1 flex-shrink-0 w-5 h-5" />
                    <span className="text-lg">
                      मासिक व्याज मिळण्यासाठी १३ महिन्यांच्यापुढे गुंतवणूक असावी
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
                      किमान ठेव ₹ १०००/- पासून पुढे करण्यात येईल
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <IoIosCheckmarkCircle className="text-blue-500 mt-1 flex-shrink-0 w-5 h-5" />
                    <span className="text-lg">
                      मुदतपूर्व पैसे काढल्यास प्रचलित व्याजदराप्रमाणे २ % कपात
                      करून व्याज मिळेल
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <IoIosCheckmarkCircle className="text-blue-500 mt-1 flex-shrink-0 w-5 h-5" />
                    <span className="text-lg">
                      मुदत पूर्ण झाल्यानंतर १४ दिवसांच्या आत पावती नूतनीकरण करणे
                      आवश्यक आहे
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

export default FixedDeposite;
