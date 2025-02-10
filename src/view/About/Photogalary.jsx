import React from 'react';
import pg1 from "../../assets/images/pg1.jpg";
import pg2 from "../../assets/images/pg2.jpg";
import pg3 from "../../assets/images/pg3.jpg";
import pg4 from "../../assets/images/pg4.jpg";
import pg5 from "../../assets/images/pg5.jpg";
import pg6 from "../../assets/images/pg6.jpg";
import pg7 from "../../assets/images/pg7.jpg";
import pg8 from "../../assets/images/pg8.jpg";




const Photosgalary = () => {
  const images = [
    {
      src: pg1,
      alt: "Gallery Image 1",
      title: "Community Event"
    },
    {
      src: pg2,
      alt: "Gallery Image 2",
      title: "Annual Meeting"
    },
    {
      src: pg3,
      alt: "Gallery Image 3",
      title: "Awards Ceremony"
    },
    {
      src: pg4,
      alt: "Gallery Image 4",
      title: "Team Building"
    },
    {
      src: pg5,
      alt: "Gallery Image 5",
      title: "Office Opening"
    },
    {
      src: pg6,
      alt: "Gallery Image 6",
      title: "Cultural Program"
    },
    {
      src: pg7,
      alt: "Gallery Image 7",
      title: "Training Session"
    },
    {
      src: pg8,
      alt: "Gallery Image 8",
      title: "Corporate Event"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Photo Gallery</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photosgalary;