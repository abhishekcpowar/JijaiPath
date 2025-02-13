// import React, { useEffect, useState } from "react";
// import { FiMenu, FiChevronDown, FiChevronUp,FiPhone,FiMail } from "react-icons/fi";
// import logo from "../../assets/images/logo2.png";
// import { Link } from "react-router-dom";
// import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState({});
//   const [hoverDropdown, setHoverDropdown] = useState(null);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 768);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleDropdownToggle = (key) => {
//     if (isMobile) {
//       setDropdownOpen((prev) => ({
//         ...prev,
//         [key]: !prev[key],
//       }));
//     }
//   };

//   const submenus = {
//     "खाते": [
//       { label: "बचत खाते", link: "accounts/savings-account" },
//       // { label: "चालू खाते", link: "accounts/current-account" },
//     ],
//     "ठेवी योजना": [
//       { label: "मुदत ठेव योजना", link: "/deposit-schemes/fixed-deposit" },
//       { label: "दाम दुप्पट ठेव योजना", link: "/deposit-schemes/deposit-double" },
//     ],
//     "कर्ज योजना": [
//       { label: "सोने तारण कर्ज", link: "/loan/gold-loan" },
//       { label: "वाहन तारण कर्ज", link: "/loan/vehicle-loan" },
//       { label: "मॉर्गेज तारण कर्ज", link: "/loan/mortgage-loan" },
//       { label: "गृह कर्ज", link: "/loan/home-loan" },
//       { label: "सभासद कर्ज", link: "/loan/councilor-loan" },
//     ],
//     // "सेवा": [
//     //   { label: "ऑनलाइन बँकिंग", link: "/online-banking" },
//     //   { label: "मोबाईल अ‍ॅप", link: "/mobile-app" },
//     // ],
//     "पतसंस्थेबद्दल": [
//       { label: "संस्थेबद्दल", link: "/about" },
//       { label: "अध्यक्षांचे मनोगत", link: "/about/directors-message" },
//       { label: "फोटो गॅलरी", link: "/about/photo-galary" },

//     ],
//   };

//   return (
//     <header className="bg-[#FFB534]">
//     <div className="px-2 py-4 text-center text-sm  md:text-left text-[#fff] font-[poppins] font-bold">
//   Reg. No.: SAN/JAT/RSR/(CR)2125/2024 Dt. 05/02/2024
// </div>

//       {/* Main Section */}
//       <div className="bg-gradient-to-b from-white to-blue-50 shadow-lg">
//         <div className="container mx-auto p-4 flex flex-col md:flex-row md:items-center md:justify-between border-yellow-500">
//           <div className="flex items-center justify-center space-x-4 p-4">
//       <img
//         src={logo}
//         alt="Logo"
//         className="w-18 h-18 sm:w-22 sm:h-22"
//       />
//       <div className="hidden sm:block border-l-2 border-yellow-500 h-16"></div>
//       <div className="text-left">
//         <h1 className="text-4xl sm:text-5xl md:text-5xl font-[poppins] font-bold text-blue-900 ">
//           जिजाई अर्बन
//         </h1>
//         <p className="text-xs sm:text-sm md:text-lg mt-1 sm:mt-2 text-gray-700 font-[poppins] ">
//           को-ऑप. क्रेडिट सोसायटी लि. जत
//         </p>
//       </div>
//     </div>

//           {/* Contact Info */}
//           <div className="sm:mt-4 md:mt-0 flex flex-row  gap-4 sm:gap-2 sm:flex-col items-center md:items-end">
            
//             <Link
//               to="tel:+919960227840"
//               className="text-sm  text-blue-900 flex items-center space-x-2 font-[poppins] font-bold"
//             >
//               <span>+91 9960227840</span>
//               <FiPhone size={16} className="text-yellow-500" />
//             </Link> 
//             {/* <Link
//               to="tel:0234 4796395"
//               className="text-sm  font-bold text-blue-900 font-[poppins] flex items-center space-x-2"
//             >
//               <span>0234 4796395</span>
//               <FiPhone size={16} className="text-yellow-500" />
//             </Link> */}
//             <Link
//               to="mailto:jijaijurbanpat@gmail.com"
//               className="flex text-sm font-[poppins] font-bold text-blue-900 items-center space-x-2"
//             >
//               <span>jijaiurbanpat@gmail.com</span>
//               <FiMail size={16} className="text-yellow-500" />
//             </Link>
//           </div>
//         </div>
//       </div>
     
//       <nav className="bg-[#E21C55] text-white">
//         <div className="md:hidden p-2">
//           <button onClick={() => setMenuOpen(!menuOpen)}>
//             <FiMenu size={24} />
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         <div className={`${menuOpen ? "block" : "hidden"} md:hidden`}>
//           <Link to="/" className="py-2 px-8 block hover:bg-white hover:text-[#E21C55] font-[poppins] font-bold ">मुख्यपान</Link>
//           {Object.keys(submenus).map((menu) => (
//             <div key={menu} className="relative font-bold">
//               <button
//                 onClick={() => handleDropdownToggle(menu)}
//                 className="py-2 px-8  hover:bg-white hover:text-[#E21C55] flex justify-between w-full"
//               >
//                 <span>{menu}</span>
//                 <span>{dropdownOpen[menu] ? <CiSquareMinus size={20} /> : <CiSquarePlus size={20} />}</span>
//               </button>
//               {dropdownOpen[menu] && (
//                 <div className="bg-white text-gray-500 shadow-md font-bold">
//                   {submenus[menu].map((submenu) => (
//                     <Link key={submenu.label} to={submenu.link} className="block px-4 py-2 hover:bg-gray-100 font-bold">
//                       {submenu.label}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex md:justify-center md:space-x-10 relative z-50 font-bold">
//   <Link to="/" className="py-3 px-6 hover:bg-white font-[poppins] font-bold hover:text-[#E21C55] transition-all duration-300">
//     मुख्यपान
//   </Link>
//   {Object.keys(submenus).map((menu) => (
//     <div
//       key={menu}
//       className="relative inline-block group"
//       onMouseEnter={() => setHoverDropdown(menu)}
//       onMouseLeave={() => setHoverDropdown(null)}
//     >
//       <button className="py-3 px-6 flex items-center space-x-2 hover:bg-white hover:text-[#E21C55] transition-all duration-300 w-full">
//         <span>{menu}</span>
//         <span>
//           {hoverDropdown === menu ? <FiChevronUp size={16} /> : <FiChevronDown size={16} />}
//         </span>
//       </button>
//       {hoverDropdown === menu && (
//         <div className="absolute left-0 w-auto min-w-full bg-white text-gray-700 shadow-lg p-2 whitespace-normal break-words">
//           {submenus[menu].map((submenu) => (
//             <Link
//               key={submenu.label}
//               to={submenu.link}
//               className="block px-4 py-2 hover:bg-gray-200 transition-all duration-200"
//             >
//               {submenu.label}
//             </Link>
//           ))}
//         </div>
//       )}
//     </div>
//   ))}
// </div>



//       </nav>
//     </header>
//   );
// };

// export default Header;

import React, { useEffect, useState } from "react";
import { FiMenu, FiChevronDown, FiChevronUp, FiPhone, FiMail } from "react-icons/fi";
import logo from "../../assets/images/logo2.png";
import { Link, useLocation } from "react-router-dom";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({});
  const [hoverDropdown, setHoverDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const location = useLocation(); // Get the current route location

  // Close the mobile menu when the route changes
  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen({}); // Reset all dropdowns
  }, [location]); // Trigger when the route changes

  // Handle window resize for mobile view
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Toggle dropdown for mobile view
  const handleDropdownToggle = (key) => {
    if (isMobile) {
      setDropdownOpen((prev) => ({
        ...prev,
        [key]: !prev[key],
      }));
    }
  };

  // Close the mobile menu when a link is clicked
  const handleLinkClick = () => {
    if (isMobile) {
      setMenuOpen(false);
      setDropdownOpen({}); // Reset all dropdowns
    }
  };

  const submenus = {
    खाते: [
      { label: "बचत खाते", link: "accounts/savings-account" },
      // { label: "चालू खाते", link: "accounts/current-account" },
    ],
    "ठेवी योजना": [
      { label: "मुदत ठेव योजना", link: "/deposit-schemes/fixed-deposit" },
      { label: "दाम दुप्पट ठेव योजना", link: "/deposit-schemes/deposit-double" },
    ],
    "कर्ज योजना": [
      { label: "सोने तारण कर्ज", link: "/loan/gold-loan" },
      { label: "वाहन तारण कर्ज", link: "/loan/vehicle-loan" },
      { label: "मॉर्गेज तारण कर्ज", link: "/loan/mortgage-loan" },
      { label: "गृह कर्ज", link: "/loan/home-loan" },
      { label: "सभासद कर्ज", link: "/loan/councilor-loan" },
    ],
    पतसंस्थेबद्दल: [
      { label: "संस्थेबद्दल", link: "/about" },
      { label: "अध्यक्षांचे मनोगत", link: "/about/directors-message" },
      { label: "फोटो गॅलरी", link: "/about/photo-galary" },
    ],
  };

  return (
    <header className="bg-[#FFB534]">
      <div className="px-2 py-4 text-center text-sm md:text-left text-[#fff] font-[poppins] font-bold">
        Reg. No.: SAN/JAT/RSR/(CR)2125/2024 Dt. 05/02/2024
      </div>

      {/* Main Section */}
      <div className="bg-gradient-to-b from-white to-blue-50 shadow-lg">
        <div className="container mx-auto p-4 flex flex-col md:flex-row md:items-center md:justify-between border-yellow-500">
          <div className="flex items-center justify-center space-x-4 p-4">
            <img src={logo} alt="Logo" className="w-18 h-18 sm:w-22 sm:h-22" />
            <div className="hidden sm:block border-l-2 border-yellow-500 h-16"></div>
            <div className="text-left">
              <h1 className="text-4xl sm:text-5xl md:text-5xl font-[poppins] font-bold text-blue-900">
                जिजाई अर्बन
              </h1>
              <p className="text-xs sm:text-sm md:text-lg mt-1 sm:mt-2 text-gray-700 font-[poppins]">
                को-ऑप. क्रेडिट सोसायटी लि. जत
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="sm:mt-4 md:mt-0 flex flex-row gap-4 sm:gap-2 sm:flex-col items-center md:items-end">
            <Link
              to="tel:+919960227840"
              className="text-sm text-blue-900 flex items-center space-x-2 font-[poppins] font-bold"
            >
              <span>+91 9960227840</span>
              <FiPhone size={16} className="text-yellow-500" />
            </Link>
            <Link
              to="mailto:jijaijurbanpat@gmail.com"
              className="flex text-sm font-[poppins] font-bold text-blue-900 items-center space-x-2"
            >
              <span>jijaiurbanpat@gmail.com</span>
              <FiMail size={16} className="text-yellow-500" />
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-[#E21C55] text-white">
        <div className="md:hidden p-2">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <FiMenu size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`${menuOpen ? "block" : "hidden"} md:hidden`}>
          <Link
            to="/"
            className="py-2 px-8 block hover:bg-white hover:text-[#E21C55] font-[poppins] font-bold"
            onClick={handleLinkClick}
          >
            मुख्यपान
          </Link>
          {Object.keys(submenus).map((menu) => (
            <div key={menu} className="relative font-bold">
              <button
                onClick={() => handleDropdownToggle(menu)}
                className="py-2 px-8 hover:bg-white hover:text-[#E21C55] flex justify-between w-full"
              >
                <span>{menu}</span>
                <span>{dropdownOpen[menu] ? <CiSquareMinus size={20} /> : <CiSquarePlus size={20} />}</span>
              </button>
              {dropdownOpen[menu] && (
                <div className="bg-white text-gray-500 shadow-md font-bold">
                  {submenus[menu].map((submenu) => (
                    <Link
                      key={submenu.label}
                      to={submenu.link}
                      className="block px-4 py-2 hover:bg-gray-100 font-bold"
                      onClick={handleLinkClick}
                    >
                      {submenu.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:justify-center md:space-x-10 relative z-50 font-bold">
          <Link
            to="/"
            className="py-3 px-6 hover:bg-white font-[poppins] font-bold hover:text-[#E21C55] transition-all duration-300"
          >
            मुख्यपान
          </Link>
          {Object.keys(submenus).map((menu) => (
            <div
              key={menu}
              className="relative inline-block group"
              onMouseEnter={() => setHoverDropdown(menu)}
              onMouseLeave={() => setHoverDropdown(null)}
            >
              <button className="py-3 px-6 flex items-center space-x-2 hover:bg-white hover:text-[#E21C55] transition-all duration-300 w-full">
                <span>{menu}</span>
                <span>
                  {hoverDropdown === menu ? <FiChevronUp size={16} /> : <FiChevronDown size={16} />}
                </span>
              </button>
              {hoverDropdown === menu && (
                <div className="absolute left-0 w-auto min-w-full bg-white text-gray-700 shadow-lg p-2 whitespace-normal break-words">
                  {submenus[menu].map((submenu) => (
                    <Link
                      key={submenu.label}
                      to={submenu.link}
                      className="block px-4 py-2 hover:bg-gray-200 transition-all duration-200"
                    >
                      {submenu.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;