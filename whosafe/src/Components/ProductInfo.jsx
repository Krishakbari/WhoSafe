// import React from 'react';
// import Woman from '../assets/WomanWhite.png';
// import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

// const ProductInfo = () => {
//   return (
//     <section className="w-full px-6 py-12 bg-white">
//       <div className="flex flex-col lg:flex-row w-full gap-10">
//         {/* Left - Image Grid */}
//         <div className="w-full lg:w-1/2 flex gap-5 md:ml-10">
//           <div className="flex flex-col gap-5">
//             <img src={Woman} alt="Woman" className="w-[295px] h-[295px] object-cover rounded-lg" />
//             <img src={Woman} alt="Woman" className="w-[295px] h-[383px] object-cover rounded-lg" />
//           </div>
//           <div className="flex flex-col gap-5">
//             <img src={Woman} alt="Woman" className="w-[295px] h-[383px] object-cover rounded-lg" />
//             <img src={Woman} alt="Woman" className="w-[295px] h-[295px] object-cover rounded-lg" />
//           </div>
//         </div>

//         {/* Right - Text Content */}
//         <div className="w-full md:-ml-15 lg:w-1/2 flex flex-col justify-center">
//           <h2 className="text-3xl font-bold text-gray-900 mb-4">Product Information</h2>
//           <p className="text-gray-700 mb-4">
//             Get all the essential details you need — features, benefits, usage, and specifications — to make informed decisions about the product.
//           </p>
//           <p className="text-gray-700 md:w-2/3 mb-6">
//             The core purpose of the device is to provide women with a discreet and efficient way to seek help in dangerous or uncomfortable situations.
//             With just a double-click, the device shares the live location of the user to nearby police stations and pre-selected family members, offering
//             instant support without requiring access to a mobile phone.
//           </p>
//           {/* <button className="bg-[#ED0E64] text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700 transition flex items-center gap-2 w-fit">
//             VIEW COLLECTION <MdKeyboardDoubleArrowRight className="text-xl" />
//           </button> */}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductInfo;



import React from 'react';
import Woman from '../assets/WomanWhite.png';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { motion } from 'framer-motion'; // ✅ Import

const ProductInfo = () => {
  return (
    <section className="w-full px-6 py-12 bg-white overflow-hidden">
      <div className="flex flex-col lg:flex-row w-full gap-10">
        {/* Left - Image Grid (slide from right) */}
        <motion.div
          initial={{ x: 500, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 flex gap-5 md:ml-10"
        >
          <div className="flex flex-col gap-5">
            <img src={Woman} alt="Woman" className="w-[200px] h-[200px] md:w-[240px] md:h-[240px] object-cover rounded-lg" />
            <img src={Woman} alt="Woman" className="w-[200px] h-[300px] md:w-[240px] md:h-[320px] object-cover rounded-lg" />
          </div>
          <div className="flex flex-col gap-5">
            <img src={Woman} alt="Woman" className="w-[200px] h-[300px] md:w-[240px] md:h-[320px] object-cover rounded-lg" />
            <img src={Woman} alt="Woman" className="w-[200px] h-[200px] md:w-[240px] md:h-[240px] object-cover rounded-lg" />
          </div>

        </motion.div>

        {/* Right - Text Content (slide from left) */}
        <motion.div
          initial={{ x: -500, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
          className="w-full md:-ml-15 lg:w-1/2 flex flex-col justify-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Product Information</h2>
          <p className="text-gray-700 mb-4">
            Get all the essential details you need — features, benefits, usage, and specifications — to make informed decisions about the product.
          </p>
          <p className="text-gray-700 md:w-2/3 mb-6">
            The core purpose of the device is to provide women with a discreet and efficient way to seek help in dangerous or uncomfortable situations.
            With just a double-click, the device shares the live location of the user to nearby police stations and pre-selected family members, offering
            instant support without requiring access to a mobile phone.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductInfo;
