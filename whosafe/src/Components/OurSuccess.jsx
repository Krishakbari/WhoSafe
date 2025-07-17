// import React from 'react';
// import { FaUsers, FaChartLine } from 'react-icons/fa';
// import User from "../assets/Users.png"
// import Success from "../assets/Success.png"
// const OurSuccess = () => {
//     return (
//         <section className="bg-[#474747] text-white py-16 px-4">
//             <div className="max-w-5xl mx-auto text-center">
//                 <h2 className="text-2xl font-semibold mb-4">Our Success</h2>
//                 <p className="text-[16px] sm:text-base text-gray-300 mb-12">
//                     Our success is built on a foundation of trust, innovation, and relentless commitment to excellence.
//                 </p>

//                 <div className="flex flex-col sm:flex-row justify-center items-center gap-12">
//                     {/* Stat 1 */}
//                     <div className="flex flex-col items-center">
//                         <img src={User} alt="" />
//                         <p className="text-2xl font-bold mt-5">15K+</p>
//                         <p className="text-sm mt-2 text-gray-300 mt-2">Number Of Customers</p>
//                     </div>

//                     {/* Stat 2 */}
//                     <div className="flex flex-col items-center">
//                         <img src={Success} alt="" />
//                         <p className="text-2xl font-bold mt-5">75%</p>
//                         <p className="text-sm mt-2 text-gray-300 mt-2">Percentage Of Success</p>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default OurSuccess;


import React from 'react';
import { motion } from 'framer-motion';
import User from "../assets/Users.png";
import Success from "../assets/Success.png";

// Success stats
const stats = [
  {
    image: User,
    number: "25K+",
    label: "Happy Customers",
  },
  {
    image: Success,
    number: "85%",
    label: "Customer Retention Rate",
  },
  {
    image: User,
    number: "10K+",
    label: "Watching in Shop",
  },
  {
    image: Success,
    number: "98%",
    label: "On-Time Delivery",
  },
  {
    image: User,
    number: "4.9/5",
    label: "Average User Rating",
  },
  {
    image: Success,
    number: "120+",
    label: "Countries Served",
  },
  {
    image: User,
    number: "60%",
    label: "Monthly Active Users",
  },
  {
    image: Success,
    number: "30K+",
    label: "Total Orders",
  },
  {
    image: User,
    number: "40%",
    label: "Revenue Growth (YoY)",
  },
  {
    image: Success,
    number: "100+",
    label: "Team Members Worldwide",
  },
];

const OurSuccess = () => {
  const loopStats = [...stats, ...stats, ...stats];

  return (
    <section className="bg-[#474747] text-white py-20 overflow-hidden relative">
      {/* Keyframes for infinite sliding */}
      <style>{`
        @keyframes slideLoop {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>

      <div className="text-center">
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          Our Success
        </motion.h2>

        <motion.p
          className="text-base text-gray-300 mb-12 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Our success is built on a foundation of trust, innovation, and relentless commitment to excellence.
        </motion.p>

        {/* Looping Carousel */}
        <div className="relative overflow-hidden w-full">
          <div
            className="flex gap-8 w-max"
            style={{
              animation: 'slideLoop 50s linear infinite',
            }}
          >
            {loopStats.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.07,
                  boxShadow: "0px 8px 20px rgba(255, 255, 255, 0.3)"
                }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center bg-[#5A5A5A] px-10 py-8 rounded-2xl shadow-xl min-w-[280px] cursor-pointer"
              >
                <img
                  src={item.image}
                  alt="stat icon"
                  className="w-16 h-16 mb-4 select-none pointer-events-none"
                  style={{
                    userSelect: "none",
                    WebkitUserDrag: "none",
                  }}
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />

                <p className="text-3xl font-bold">{item.number}</p>
                <p className="text-sm mt-2 text-gray-300">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSuccess;
