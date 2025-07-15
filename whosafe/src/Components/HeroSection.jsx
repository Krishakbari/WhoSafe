// import React from 'react';
// import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
// import Woman from '../assets/Woman.png';
// import TransWoman from "../assets/TransWoman.png";
// import { MdKeyboardDoubleArrowRight } from "react-icons/md";

// const Hero = ({ scrollToRef }) => {
//   const handleScroll = () => {
//     if (scrollToRef && scrollToRef.current) {
//       scrollToRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <section className="w-full min-h-screen flex flex-col lg:flex-row items-center pt-20 relative z-10">
//       <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start px-6 lg:px-20 text-center lg:text-left">
//         <h1 className="text-3xl md:text-[40px] xl:text-[60px] font-[500] text-gray-900 mb-6 leading-tight">
//           Freedom Without <br />
//           <span className="text-pink-600">Fear</span>
//         </h1>
//         <p className="text-gray-600 text-base md:text-lg mb-6 max-w-md">
//           Every woman has the right to live, work, travel, and thrive without fear.
//         </p>

//         {/* Explore Button */}
//         <button
//           onClick={handleScroll}
//           className="bg-[#ED0E64] cursor-pointer text-white px-6 py-3 rounded-lg font-[600] hover:bg-pink-700 transition mb-6 flex items-center gap-2"
//         >
//           Explore <MdKeyboardDoubleArrowRight />
//         </button>

//         <div className="flex justify-center lg:justify-start space-x-4 text-xl text-pink-600">
//           <FaFacebookF className="cursor-pointer" />
//           <FaLinkedinIn className="cursor-pointer" />
//           <FaInstagram className="cursor-pointer" />
//         </div>
//       </div>

//       <div className="w-full lg:w-1/2 relative mt-10 lg:mt-0 flex justify-center lg:justify-end items-end pr-6 lg:pr-16">
//         <img
//           src={TransWoman}
//           alt="Background Shape"
//           className="absolute bottom-0 left-1/2 transform -translate-x-1/2 lg:-translate-x-0 lg:left-auto lg:right-5 w-[400px] sm:w-[500px] lg:w-[600px] xl:w-[500px] z-0 pointer-events-none"
//         />
//         <img
//           src={Woman}
//           alt="Woman"
//           className="w-[300px] sm:w-[400px] md:-left-10 md:w-[500px] lg:w-[650px] xl:w-[900px] object-contain relative z-10"
//         />
//       </div>
//     </section>
//   );
// };

// export default Hero;




// this is with only onw time 
// import React, { useEffect, useState } from 'react';
// import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
// import { MdKeyboardDoubleArrowRight } from "react-icons/md";
// import { motion, useAnimation } from 'framer-motion';
// import Woman from '../assets/Woman.png';
// import TransWoman from "../assets/TransWoman.png";

// const Hero = ({ scrollToRef }) => {
//   const controls = useAnimation();
//   const [buttonVisible, setButtonVisible] = useState(false);

//   useEffect(() => {
//     controls.start({
//       x: ["-100vw", "50vw", "0"],
//       scale: [1.5, 1.2, 1],
//       boxShadow: [
//         "0px 0px 0px rgba(0,0,0,0)",
//         "0px 0px 30px rgba(237, 14, 100, 0.8)",
//         "0px 5px 15px rgba(237, 14, 100, 0.5)"
//       ],
//       transition: {
//         duration: 1,
//         ease: "easeOut"
//       },
//     });
//     setButtonVisible(true);
//   }, [controls]);

//   const handleScroll = () => {
//     if (scrollToRef && scrollToRef.current) {
//       scrollToRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <section className="w-full min-h-screen flex flex-col lg:flex-row items-center pt-20 relative z-10 overflow-hidden">
//       {/* LEFT Content Animation */}
//       <motion.div
//         initial={{ x: -200, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ duration: 1 }}
//         className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start px-6 lg:px-20 text-center lg:text-left"
//       >
//         <h1 className="text-3xl md:text-[40px] xl:text-[60px] font-[500] text-gray-900 mb-6 leading-tight">
//           Freedom Without <br />
//           <span className="text-pink-600">Fear</span>
//         </h1>
//         <p className="text-gray-600 text-base md:text-lg mb-6 max-w-md">
//           Every woman has the right to live, work, travel, and thrive without fear.
//         </p>

//         <div className="relative w-full flex justify-center lg:justify-start">
//           <motion.button
//             onClick={handleScroll}
//             className="relative z-20 bg-[#ED0E64] cursor-pointer text-white px-6 py-3 rounded-lg font-[600] hover:bg-pink-700 transition mb-6 flex items-center gap-2 shadow-lg"
//             animate={controls}
//             initial={{ x: "-100vw" }}
//           >
//             Explore <MdKeyboardDoubleArrowRight />
//           </motion.button>

//           {/* Rocket Cloud Trail */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.6 }}
//             animate={buttonVisible ? {
//               opacity: [0.6, 0.4, 0.1, 0],
//               scale: [1, 1.5, 2],
//               y: [0, -10, -20]
//             } : {}}
//             transition={{ duration: 1.1, ease: "easeOut" }}
//             className="absolute top-[58%] left-1/2 -translate-x-1/2 w-32 h-32 bg-pink-300 blur-3xl rounded-full z-10"
//           />

//           {/* Smoke trails */}
//           {buttonVisible && [1, 2, 3].map((_, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0 }}
//               animate={{
//                 opacity: [0.4, 0.2, 0],
//                 scale: [1, 1.4, 2],
//                 y: [0, -10 - i * 5, -20 - i * 5]
//               }}
//               transition={{ delay: i * 0.1, duration: 1, ease: "easeOut" }}
//               className="absolute top-[58%] left-1/2 -translate-x-1/2 w-20 h-20 bg-pink-200 blur-2xl rounded-full z-0"
//             />
//           ))}
//         </div>

//         <div className="flex justify-center lg:justify-start space-x-4 text-xl text-pink-600">
//           <FaFacebookF className="cursor-pointer" />
//           <FaLinkedinIn className="cursor-pointer" />
//           <FaInstagram className="cursor-pointer" />
//         </div>
//       </motion.div>

//       {/* RIGHT Image Animation */}
//       <motion.div
//         initial={{ x: 200, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ duration: 1 }}
//         className="w-full lg:w-1/2 relative mt-10 lg:mt-0 flex justify-center lg:justify-end items-end pr-6 lg:pr-16"
//       >
//         <img
//           src={TransWoman}
//           alt="Background Shape"
//           className="absolute bottom-0 left-1/2 transform -translate-x-1/2 lg:-translate-x-0 lg:left-auto lg:right-5 w-[400px] sm:w-[500px] lg:w-[600px] xl:w-[500px] z-0 pointer-events-none"
//         />
//         <img
//           src={Woman}
//           alt="Woman"
//           className="w-[300px] sm:w-[400px] md:-left-10 md:w-[500px] lg:w-[650px] xl:w-[900px] object-contain relative z-10"
//         />
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;




// this is with when i see that page
import React, { useEffect, useState, useRef } from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { motion, useAnimation, useInView } from 'framer-motion';
import Woman from '../assets/Woman.png';
import TransWoman from "../assets/TransWoman.png";

const Hero = ({ scrollToRef }) => {
  const controls = useAnimation();
  const [buttonVisible, setButtonVisible] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start({
        x: ["-100vw", "50vw", "0"],
        scale: [1.5, 1.2, 1],
        boxShadow: [
          "0px 0px 0px rgba(0,0,0,0)",
          "0px 0px 30px rgba(237, 14, 100, 0.8)",
          "0px 5px 15px rgba(237, 14, 100, 0.5)"
        ],
        transition: {
          duration: 1,
          ease: "easeOut"
        },
      });
      setButtonVisible(true);
    }
  }, [controls, isInView]);

  const handleScroll = () => {
    if (scrollToRef && scrollToRef.current) {
      scrollToRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={sectionRef} className="w-full min-h-screen flex flex-col lg:flex-row items-center pt-20 relative z-10 overflow-hidden">
      {/* LEFT Content Animation */}
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start px-6 lg:px-20 text-center lg:text-left"
      >
        <h1 className="text-3xl md:text-[40px] xl:text-[60px] font-[500] text-gray-900 mb-6 leading-tight">
          Freedom Without <br />
          <span className="text-pink-600">Fear</span>
        </h1>
        <p className="text-gray-600 text-base md:text-lg mb-6 max-w-md">
          Every woman has the right to live, work, travel, and thrive without fear.
        </p>

        <div className="relative w-full flex justify-center lg:justify-start">
          <motion.button
            onClick={handleScroll}
            className="relative z-20 bg-[#ED0E64] cursor-pointer text-white px-6 py-3 rounded-lg font-[600] hover:bg-pink-700 transition mb-6 flex items-center gap-2 shadow-lg"
            animate={controls}
            initial={false}
          >
            Explore <MdKeyboardDoubleArrowRight />
          </motion.button>

          {/* Rocket Cloud Trail */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={buttonVisible ? {
              opacity: [0.6, 0.4, 0.1, 0],
              scale: [1, 1.5, 2],
              y: [0, -10, -20]
            } : {}}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="absolute top-[58%] left-1/2 -translate-x-1/2 w-32 h-32 bg-pink-300 blur-3xl rounded-full z-10"
          />

          {/* Smoke trails */}
          {buttonVisible && [1, 2, 3].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.4, 0.2, 0],
                scale: [1, 1.4, 2],
                y: [0, -10 - i * 5, -20 - i * 5]
              }}
              transition={{ delay: i * 0.1, duration: 1, ease: "easeOut" }}
              className="absolute top-[58%] left-1/2 -translate-x-1/2 w-20 h-20 bg-pink-200 blur-2xl rounded-full z-0"
            />
          ))}
        </div>

        <div className="flex justify-center lg:justify-start space-x-4 text-xl text-pink-600 mt-4">
          {[
            { Icon: FaFacebookF, link: "https://www.facebook.com/profile.php?id=61577096438164&mibextid=ZbWKwL" },
            { Icon: FaLinkedinIn, link: "https://www.linkedin.com/company/who-safe/?viewAsMember=true" },
            { Icon: FaInstagram, link: "https://www.instagram.com/whosafe.india/" }
          ].map(({ Icon, link }, index) => (
            <motion.a
              key={index}
              href={link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.4, ease: "linear" }}
              className="cursor-pointer"
            >
              <Icon />
            </motion.a>
          ))}
        </div>

      </motion.div>

      {/* RIGHT Image Animation */}
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        className="w-full lg:w-1/2 relative mt-10 lg:mt-0 flex justify-center lg:justify-end items-end pr-6 lg:pr-16"
      >
        <img
          src={TransWoman}
          alt="Background Shape"
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 lg:-translate-x-0 lg:left-auto lg:right-5 w-[400px] sm:w-[500px] lg:w-[600px] xl:w-[500px] z-0 pointer-events-none"
        />
        <img
          src={Woman}
          alt="Woman"
          className="w-[300px] sm:w-[400px] md:-left-10 md:w-[500px] lg:w-[650px] xl:w-[900px] object-contain relative z-10"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
