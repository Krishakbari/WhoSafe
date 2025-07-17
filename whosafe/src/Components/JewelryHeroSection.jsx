// import React from "react";
// import MainNecklace from "../assets/necklace.png";
// import GirlIllustration from "../assets/girl.png";
// import Product1 from "../assets/necklace.png";
// import Product2 from "../assets/necklace.png";
// import Product3 from "../assets/necklace.png";
// import { useNavigate } from "react-router-dom";
// import { MdKeyboardDoubleArrowRight } from "react-icons/md";

// const JewelryHeroSection = () => {
//   const navigate = useNavigate()
//   const handleViewCollection = () => {
//     navigate(`/single/Gt-4`);
//   };
//   return (
//     <section className="bg-pink-100 max-w-7xl mx-auto rounded-3xl px-4 py-10 md:py-16 flex flex-col md:flex-row items-center justify-between overflow-hidden relative">
//       {/* Left Side */}
//       <div className="relative w-full md:w-1/2 flex justify-center items-center mb-10 md:mb-0">
//         <img
//           src={GirlIllustration}
//           alt="Girl"
//           className="absolute bottom-0 md:-bottom-16 -left-10 md:left-0 w-40 xs:w-24 sm:w-50 md:w-40 lg:w-[225px] z-10"
//         />
//         <img
//           src={MainNecklace}
//           alt="Main Necklace"
//           className="relative z-20 w-40 sm:w-56 md:w-[287px] -top-15"
//         />
//       </div>

//       {/* Right Side */}
//       <div className="w-full md:w-1/2 text-center md:text-left relative px-2 sm:px-4">
//         {/* Large Background Text */}
//         <span className="absolute text-[60px] sm:text-[100px] md:text-[160px] lg:text-[250px] font-extrabold text-[#A4A0A01A] opacity-80 -bottom-16 md:-bottom-24 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 leading-none pointer-events-none select-none whitespace-nowrap" style={{ fontFamily: 'Poppins' }}>

//         </span>

//         <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900" style={{ fontFamily: 'Abhaya Libre' }}>
//           Are you ready <br /> to lead the way
//         </h2>

//         <p className="text-gray-600 mt-4 text-sm sm:text-base md:max-w-[80%]">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
//         </p>

//         <button onClick={handleViewCollection} className="bg-[#ED0E64] text-white px-6 py-3 rounded-lg font-semibold mt-5 hover:bg-pink-700 transition flex items-center justify-center gap-2 mx-auto md:mx-0">
//           One Step Closer To Make It Yours :) <MdKeyboardDoubleArrowRight />
//         </button>

//         {/* Thumbnails */}
//         <div className="flex justify-center md:justify-start items-center gap-6 mt-8 flex-wrap">
//           {/* Left */}
//           <div className="w-16 h-16 bg-white opacity-90 scale-90 flex items-center justify-center rounded-lg shadow-sm">
//             <img
//               src={Product1}
//               alt="Product 1"
//               className="w-14 h-20 object-contain rounded-lg"
//             />
//           </div>

//           {/* Center */}
//           <div className="w-24 h-24 bg-white scale-100 flex items-center justify-center rounded-lg shadow-md">
//             <img
//               src={Product2}
//               alt="Product 2"
//               className="w-18 h-24 object-contain rounded-lg"
//             />
//           </div>

//           {/* Right */}
//           <div className="w-16 h-16 bg-white opacity-90 scale-90 flex items-center justify-center rounded-lg shadow-sm">
//             <img
//               src={Product3}
//               alt="Product 3"
//               className="w-14 h-20 object-contain rounded-lg"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default JewelryHeroSection;




import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { motion } from "framer-motion";

import MainNecklace from "../assets/necklace.png";
import GirlIllustration from "../assets/girl.png";
import Product1 from "../assets/necklace.png";
import Product2 from "../assets/necklace.png";
import Product3 from "../assets/necklace.png";

const JewelryHeroSection = () => {
  const navigate = useNavigate();
  const handleViewCollection = () => navigate(`/single/Gt-4`);

  const thumbnails = [Product1, Product2, Product3];
  const [selectedIndex, setSelectedIndex] = useState(1);

  return (
    <section className="bg-pink-100 max-w-7xl mx-auto rounded-3xl px-4 py-10 md:py-16 flex flex-col md:flex-row items-center justify-between overflow-hidden relative font-[Nunito Sans]">

      {/* Left Side - Floating Necklace */}
      <div className="relative w-full md:w-1/2 flex justify-center items-center mb-10 md:mb-0">
        <motion.img
          src={GirlIllustration}
          alt="Girl"
          className="absolute bottom-0 md:-bottom-16 -left-10 md:left-0 w-40 xs:w-24 sm:w-50 md:w-40 lg:w-[225px] z-10 select-none pointer-events-none"
          draggable={false}
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, type: "spring", stiffness: 80 }}
        />
        <motion.img
          src={thumbnails[selectedIndex]}
          alt="Main Necklace"
          className="relative z-20 w-40 sm:w-56 md:w-[287px] -top-15 select-none pointer-events-none"
          draggable={false}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        />
      </div>

      {/* Right Side - Text + Button + Thumbnails */}
      <motion.div
        className="w-full md:w-1/2 text-center md:text-left relative px-2 sm:px-4"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2, type: "spring" }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Abhaya Libre' }}>
          Are you ready <br /> to lead the way
        </h2>

        <p className="text-gray-600 text-sm sm:text-base md:max-w-[80%]">
          Every piece tells a story. Discover yours among the timeless elegance of our collection.
        </p>

        <motion.button
          onClick={handleViewCollection}
          className="bg-[#ED0E64] text-white px-6 py-3 rounded-lg font-semibold mt-5 hover:bg-pink-700 transition flex items-center justify-center gap-2 mx-auto md:mx-0 shadow-lg"
          whileHover={{ scale: 1.05 }}
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          One Step Closer To Make It Yours :) <MdKeyboardDoubleArrowRight />
        </motion.button>

        {/* Thumbnails */}
        <motion.div
          className="flex justify-center md:justify-start items-center gap-6 mt-8 flex-wrap"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {[Product1, Product2, Product3].map((prod, i) => (
            <motion.div
              key={i}
              className={`bg-white flex items-center justify-center rounded-lg shadow-md ${i === 1 ? "w-24 h-24" : "w-16 h-16"
                }`}
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <img
                src={prod}
                alt={`Product ${i + 1}`}
                className={`${i === 1 ? "w-18 h-24" : "w-14 h-20"} object-contain rounded-lg select-none pointer-events-none`}
                draggable={false}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default JewelryHeroSection;
