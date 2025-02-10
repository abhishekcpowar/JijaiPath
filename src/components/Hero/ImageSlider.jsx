// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import slider1 from "../../assets/images/slider1.jpg";
// import slider2 from "../../assets/images/slider2.jpg";
// import slider3 from "../../assets/images/slider3.jpg";
// import notice1 from "../../assets/images/notice1.jpeg"; 
// import notice2 from "../../assets/images/notice2.jpeg"; 
// const ImageSlider = () => {
//   const settings = {
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: true,
//   };

//   const images = [
//     { src: slider1, text: "वाहन तारण कर्ज" },
//     { src: slider2, text: "घर तारण कर्ज" },
//     { src: slider3, text: "सोने तारण कर्ज" },
//   ];

//   return (
//     <div className="p-4">
//       <div className="flex flex-col md:flex-row gap-6">
//         {/* Slider Section */}
//         <div className="md:w-2/3">
//           <Slider {...settings}>
//             {images.map((image, index) => (
//               <div key={index} className="relative">
//                 <img
//                   src={image.src}
//                   alt={`Slide ${index + 1}`}
//                   className="w-full h-auto"
//                 />
//                 <div className="absolute bottom-5 right-5 bg-white border-1 border-[#E21C55] p-2 sm:p-4 rounded-tl-3xl rounded-br-3xl shadow-lg">
//                   <p className="text-[#E21C55] text-[12px] sm:text-lg font-bold">
//                     {image.text}
//                   </p>
//                 </div>
              
//               </div>
//             ))}
//           </Slider>
//         </div>

//         {/* Notice Section */}
//         <div className="md:w-1/3">
//           <div className="space-y-4">
//             <img src={notice1} alt="Notice 1" className="w-full h-auto" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ImageSlider;



import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from "../../assets/images/slider1.jpg";
import slider2 from "../../assets/images/slider2.jpg";
import slider3 from "../../assets/images/slider3.jpg";
import notice1 from "../../assets/images/notice1.jpeg";

const ImageSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const images = [
    { src: slider1, text: "वाहन तारण कर्ज" },
    { src: slider2, text: "घर तारण कर्ज" },
    { src: slider3, text: "सोने तारण कर्ज" },
  ];

  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Slider Section */}
        <div className="md:w-2/3">
          <div className="relative max-w-full overflow-hidden">
            <Slider {...settings}>
              {images.map((image, index) => (
                <div key={index} className="relative">
                  <img
                    src={image.src}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-auto"
                  />
                  <div className="absolute bottom-5 right-5 bg-white border-1 border-[#E21C55] p-2 sm:p-4 rounded-tl-3xl rounded-br-3xl shadow-lg">
                    <p className="text-[#E21C55] text-[12px] sm:text-lg font-bold">
                      {image.text}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Notice Section */}
        <div className="md:w-1/3">
          <div className="space-y-4">
            <img src={notice1} alt="Notice 1" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
