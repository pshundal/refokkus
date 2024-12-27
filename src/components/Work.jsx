import React, { useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

function Work() {
  const [images, setImages] = useState([
    { 
      url: "https://tse2.mm.bing.net/th?id=OIP.J1XSAaGxuqxFeL_16dCBQQHaHa&pid=Api&P=0&h=180", 
      top: "10%", 
      left: "40%", 
      isActive: false 
    },
    { 
      url: "https://tse3.mm.bing.net/th?id=OIP.HkZqZQwf2vxCK8IHRLLJjQHaHa&pid=Api&P=0&h=180", 
      top: "26%", 
      left: "54%", 
      isActive: false 
    },
    { 
      url: "https://tse1.mm.bing.net/th?id=OIP.iRngxvq4v5ubtu5qKMWiPQHaFj&pid=Api&P=0&h=180", 
      top: "25%", 
      left: "26%", 
      isActive: false 
    },
    { 
      url: "https://tse4.mm.bing.net/th?id=OIP.0T4OrnM-ZN8iG4DNkfpv-gHaFR&pid=Api&P=0&h=180", 
      top: "60%", 
      left: "33%", 
      isActive: false 
    }
  ]);

  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (data) => {
    function imagesShow(arr) {
      setImages((prev) =>
        prev.map((item, index) =>
          arr.indexOf(index) === -1
            ? { ...item, isActive: false }
            : { ...item, isActive: true }
        )
      );
    }

    switch (Math.floor(data * 100)) {
      case 0:
        imagesShow([]);
        break;
      case 1:
        imagesShow([0]);
        break;
      case 2:
        imagesShow([0, 1]);
        break;
      case 3:
        imagesShow([0, 1, 2]);
        break;
      case 4:
        imagesShow([0, 1, 2, 3]);
        break;
      default:
        imagesShow([]);
        break;
    }
  });

  return (
    <div className="w-full mt-15 ">
      <div className="relative max-w-screen-xl mx-auto text-center  transition duration-300 transform hover:scale-105">
        <h1 className="text-[30vw] leading-none font-medium select-none tracking-tight ">
          work
        </h1>

        <div className="absolute top-0 w-full h-full">
          {images.map((elem, index) =>
            elem.isActive && (
              <motion.img
                key={index}
                className="absolute w-60 rounded-lg -translate-x-[50%] -translate-y-[50%]"
                src={elem.url}
                style={{
                  top: elem.top,
                  left: elem.left,
                  transition: {ease: [0.76, 0, 0.24, 1], duration: .6,},
                  opacity: elem.isActive ? 1 : 0.6,
                  transform: elem.isActive ? "scale(1)" : "scale(0.8)"
                }}
                alt={`Image ${index}`}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Work;
