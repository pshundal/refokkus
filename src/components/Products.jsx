import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Product from './Product';

function Products() {
  const products = [
    {
      title: "Cula",
      description: "We immersed ourvselves in a 3D world we create to explain how Cula's platform collects data.",
      live: true,
      case: false,
    },
    {
      title: "BCG Platinion",
      description: "We redesigned BCG Platinion's website to be sophisticated and technology driven.",
      live: true,
      case: true,
    },
    {
      title: "Arqitel",
      description: "With a 3D animation, we showcase Arqitel's approach and show migration data translate into real estates.",
      live: true,
      case: true,
    },
    {
      title: "Layout Land",
      description: "An interactive learning game that can educate and entertain you on on the basics of web layouts in Webflow",
      live: true,
      case: false,
    },
    {
      title: "OS",
      description: "We partnered with OS/ to build a sleek,scalable, and user-centric website that stands out with its component-based approach.",
      live: true,
      case: false,
    },
    {
      title: "Cula",
      description: "We immersed ourvselves in a 3D world we create to explain how Cula's platform collects data.",
      live: true,
      case: false,
    },
    {
      title: "BCG ",
      description: "We redesigned BCG Platinion's website to be sophisticated and technology driven.",
      live: true,
      case: true,
    },
    {
      title: "Arqitel",
      description: "With a 3D animation, we showcase Arqitel's approach and show migration data translate into real estates.",
      live: true,
      case: true,
    },
    {
      title: "Layout Land",
      description: "An interactive learning game that can educate and entertain you on on the basics of web layouts in Webflow",
      live: true,
      case: false,
    },
    {
      title: "OS",
      description: "We partnered with OS/ to build a sleek,scalable, and user-centric website that stands out with its component-based approach.",
      live: true,
      case: false,
    },
  ];

  const videoUrls = [
    "https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/cula-169.webm",
    "https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/bcgp-169.webm",
    "https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/arqitel-169.webm",
    "https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/layoutland-169.webm",
    "https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/cula-169.webm",
    "https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/cula-169.webm",
    "https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/bcgp-169.webm",
    "https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/arqitel-169.webm",
    "https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/layoutland-169.webm",
    "https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/cula-169.webm",
  ];

  const [pos, setPos] = useState(0);

  const mover = (val) => {
    setPos(val * 23); // Adjusted for consistent spacing
  };

  return (
    <div className="mt-20 relative">
      {products.map((val, index) => (
        <Product key={index} val={val} mover={mover} count={index} />
      ))}
      <div className="absolute top-0 w-full h-full pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + "rem" }}
          transition={{ type: "spring", stiffness: 100 }}
          className="absolute w-[32rem] h-[23rem] left-[44%] bg-white -translate-x-[50%] overflow-hidden"
        >
          {videoUrls.map((url, idx) => (
            <motion.div
              key={idx}
              animate={{ y: -pos + "rem" }}
              className="w-full h-full"
              transition={{ type: "spring", stiffness: 100 }}
            >
              <video
                src={url}
                autoPlay
                loop
                muted
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
