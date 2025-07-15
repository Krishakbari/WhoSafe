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

// Duplicated items for smooth infinite loop
const stats = [
    {
        image: User,
        number: "15K+",
        label: "Number Of Customers",
    },
    {
        image: Success,
        number: "75%",
        label: "Percentage Of Success",
    },
    {
        image: User,
        number: "8K+",
        label: "Returning Customers",
    },
    {
        image: Success,
        number: "95%",
        label: "Customer Satisfaction",
    },
];

const OurSuccess = () => {
    return (
        <section className="bg-[#474747] text-white py-20 overflow-hidden relative">
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

                <div className="overflow-hidden relative">
                    <motion.div
                        className="flex gap-8 w-max"
                        animate={{ x: ['0%', '-50%'] }}
                        transition={{
                            duration: 20,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                    >
                        {[...stats, ...stats].map((item, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col items-center bg-[#5A5A5A] px-10 py-8 rounded-2xl shadow-xl min-w-[280px]"
                                whileHover={{
                                    scale: 1.02,
                                    boxShadow: '0 0 5px rgba(160, 160, 160, 0.6)', // subtle pink glow
                                }}
                                transition={{ type: "spring", stiffness: 150, damping: 12 }}
                            >
                                <motion.img
                                    src={item.image}
                                    alt="stat icon"
                                    className="w-16 h-16 mb-4"
                                    animate={{ rotate: [0, 5, -5, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                                />
                                <p className="text-3xl font-bold">{item.number}</p>
                                <p className="text-sm mt-2 text-gray-300">{item.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>

    );
};

export default OurSuccess;
