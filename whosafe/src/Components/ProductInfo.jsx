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





import React, { useEffect, useRef, useState } from 'react';
import Woman from '../assets/WomanWhite.png';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

const ProductInfo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="w-full px-4 sm:px-6 py-12 bg-white overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row items-center lg:items-start w-full gap-6 lg:gap-10">
        {/* Left - Image Grid */}
        <div
          className={`w-full lg:w-1/2 flex justify-center gap-3 sm:gap-4 transition-all duration-1000 ease-out ${
            isVisible 
              ? 'translate-x-0 opacity-100' 
              : 'translate-x-full opacity-0'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          <div className="flex flex-col gap-3 sm:gap-4">
            <img
              src={Woman}
              draggable="false"
              alt="Woman"
              className="w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px] object-cover rounded-lg shadow-md"
            />
            <img
              src={Woman}
              draggable="false"
              alt="Woman"
              className="w-[120px] h-[160px] sm:w-[140px] sm:h-[200px] md:w-[180px] md:h-[240px] lg:w-[200px] lg:h-[300px] object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="flex flex-col gap-3 sm:gap-4">
            <img
              src={Woman}
              draggable="false"
              alt="Woman"
              className="w-[120px] h-[160px] sm:w-[140px] sm:h-[200px] md:w-[180px] md:h-[240px] lg:w-[200px] lg:h-[300px] object-cover rounded-lg shadow-md"
            />
            <img
              src={Woman}
              draggable="false"
              alt="Woman"
              className="w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px] object-cover rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Right - Text Content */}
        <div
          className={`w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left px-2 transition-all duration-1000 ease-out ${
            isVisible 
              ? 'translate-x-0 opacity-100' 
              : '-translate-x-full opacity-0'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Product Information
          </h2>
          <p className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">
            Get all the essential details you need — features, benefits, usage, and specifications — to make informed decisions about the product.
          </p>
          <p className="text-sm sm:text-base text-gray-700 lg:w-2/3 mx-auto lg:mx-0 mb-6 leading-relaxed">
            The core purpose of the device is to provide women with a discreet and efficient way to seek help in dangerous or uncomfortable situations.
            With just a double-click, the device shares the live location of the user to nearby police stations and pre-selected family members, offering
            instant support without requiring access to a mobile phone.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;