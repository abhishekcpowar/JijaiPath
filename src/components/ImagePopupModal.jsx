// import React, { useState, useEffect } from 'react';
// import popupImage from '../assets/images/popup.jpg';

// const ImagePopupModal = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsOpen(true);
//     }, 500);

//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, [isOpen]);

//   if (!isOpen) return null;

//   return (
//     <div 
//       className="fixed inset-0 z-[9999] flex items-center justify-center animate-fade-in"
//       style={{
//         animation: 'fadeIn 0.3s ease-in-out',
//       }}
//     >
//       {/* Backdrop with blur effect */}
//       <div 
//         className="fixed inset-0 backdrop-blur-sm bg-black/70 transition-opacity"
//         onClick={() => setIsOpen(false)}
//       />
      
//       {/* Modal Container */}
//       <div 
//         className="relative mx-4 animate-scale-in"
//         style={{
//           animation: 'scaleIn 0.3s ease-in-out',
//           maxWidth: '90vw',  // Responsive max width
//           maxHeight: '90vh'  // Responsive max height
//         }}
//       >
//         {/* Close Button */}
//         <button
//           onClick={() => setIsOpen(false)}
//           className="absolute -right-3 -top-3 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5 text-gray-600"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M6 18L18 6M6 6l12 12"
//             />
//           </svg>
//         </button>

//         {/* Image Container */}
//         <div className="relative w-full h-full overflow-hidden rounded-lg">
//           <img
//             src={popupImage}
//             alt="Welcome popup"
//             className="object-contain rounded-lg"
//             style={{
//               width: '600px',      // Fixed width
//               height: '400px',     // Fixed height
//               maxWidth: '90vw',    // Responsive
//               maxHeight: '90vh',   // Responsive
//               display: 'block'
//             }}
//           />
//         </div>
//       </div>

//       <style jsx global>{`
//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }

//         @keyframes scaleIn {
//           from {
//             opacity: 0;
//             transform: scale(0.95);
//           }
//           to {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ImagePopupModal;

// import React, { useState, useEffect } from 'react';
// import popupImage from '../assets/images/popup.jpg';

// const ImagePopupModal = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsOpen(true);
//     }, 500);

//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, [isOpen]);

//   if (!isOpen) return null;

//   return (
//     <div 
//       className="fixed inset-0 z-[9999] flex items-center justify-center animate-fade-in"
//       style={{
//         animation: 'fadeIn 0.3s ease-in-out',
//       }}
//     >
//       {/* Backdrop with blur effect */}
//       <div 
//         className="fixed inset-0 backdrop-blur-sm bg-black/70 transition-opacity"
//         onClick={() => setIsOpen(false)}
//       />
      
//       {/* Modal Container */}
//       <div 
//         className="relative bg-white rounded-lg w-auto p-2 animate-scale-in"
//         style={{
//           animation: 'scaleIn 0.3s ease-in-out',
//         //   maxWidth: '40vw',
//         //   maxHeight: '90vh'
//         }}
//       >
//         {/* Close Button */}
//         <button
//           onClick={() => setIsOpen(false)}
//           className="absolute -right-3 -top-3 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5 text-gray-600"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M6 18L18 6M6 6l12 12"
//             />
//           </svg>
//         </button>

//         {/* Image Container */}
//         <div className="relative overflow-hidden">
//           <img
//             src={popupImage}
//             alt="Welcome popup"
//             className="object-contain rounded-lg"
//             style={{
//               width: '900px',
//               height: '900px',
//               maxWidth: '100%',
//               maxHeight: '80vh',
//               display: 'block'
//             }}
//           />
//         </div>
//       </div>

//       <style jsx global>{`
//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }

//         @keyframes scaleIn {
//           from {
//             opacity: 0;
//             transform: scale(0.95);
//           }
//           to {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ImagePopupModal;



import React, { useState, useEffect } from 'react';
import popupImage from '../assets/images/popup2.jpg';

const ImagePopupModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center animate-fade-in"
      style={{
        animation: 'fadeIn 0.3s ease-in-out',
      }}
    >
      {/* Backdrop with blur effect */}
      <div 
        className="fixed inset-0 backdrop-blur-sm bg-black/70 transition-opacity"
        onClick={() => setIsOpen(false)}
      />
      
      {/* Modal Container */}
      <div 
        className="relative bg-white rounded-lg w-auto p-2 animate-scale-in"
        style={{
          animation: 'scaleIn 0.3s ease-in-out',
        }}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute -right-3 -top-3 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Image Container */}
        <div className="relative overflow-hidden">
          <img
            src={popupImage}
            alt="Welcome popup"
            className="object-contain rounded-lg"
            style={{
              width: '100%',
              height: 'auto',
              maxWidth: '100%',
              maxHeight: '80vh',
              display: 'block'
            }}
          />
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* Responsive Styles */
        @media (max-width: 640px) {
          .animate-scale-in {
            width: 90vw;
          }
        }

        // @media (min-width: 641px) and (max-width: 1024px) {
        //   .animate-scale-in {
        //     width: 70vw;
        //   }
        // }

        // @media (min-width: 1025px) {
        //   .animate-scale-in {
        //     width: 40vw;
        //   }
        // }
      `}</style>
    </div>
  );
};

export default ImagePopupModal;