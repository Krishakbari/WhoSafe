// import React from 'react';
// import { FaPowerOff, FaMapMarkedAlt, FaPaperPlane, FaHistory } from 'react-icons/fa';
// import GPS from "../assets/GPS.png"
// import Sent from "../assets/Sent.png"
// import DeviceBtn from "../assets/DeviceBtn.png"
// import Track from "../assets/Track.png"
// const steps = [
//     {
//         icon: DeviceBtn,
//         title: 'Device button',
//         description: '1. The user double-clicks the device button to quickly activate the feature or send an emergency alert.',
//     },
//     {
//         icon: GPS,
//         title: 'Activates GPS',
//         description: "2. The device activates GPS to retrieve and share the user's real-time location coordinates.",
//     },
//     {
//         icon: Sent,
//         title: 'Immediately sent',
//         description: '3. Coordinates are immediately sent to nearest Police Station (via secure API).',
//     },
//     {
//         icon: Track,
//         title: 'Emergency tracking',
//         description: '4. Emergency tracking remains live for maximum 3 hours or until deactivated.',
//     },
// ];

// const HowItWorks = () => {
//     return (
//         <section className="bg-[#474747] text-white py-12 px-6 text-center">
//             <h2 className="text-2xl font-[600] mb-2">How it Works</h2>
//             <p className="text-sm text-gray-300 mb-10">Let me know your specific product category</p>

//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
//                 {steps.map((step, index) => (
//                     <div key={index} className="flex flex-col items-center gap-3">
//                         <div className='bg-white p-3 rounded-full'>
//                             <img src={step.icon} alt="" />
//                         </div>
//                         <h3 className="font-semibold text-left text-lg">{step.title}</h3>
//                         <p className="text-sm text-gray-300">{step.description}</p>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default HowItWorks;



import React from 'react';
import { motion } from 'framer-motion';
import GPS from "../assets/GPS.png";
import Sent from "../assets/Sent.png";
import DeviceBtn from "../assets/DeviceBtn.png";
import Track from "../assets/Track.png";

const steps = [
  {
    icon: DeviceBtn,
    title: 'Device button',
    description: '1. The user double-clicks the device button to quickly activate the feature or send an emergency alert.',
  },
  {
    icon: GPS,
    title: 'Activates GPS',
    description: "2. The device activates GPS to retrieve and share the user's real-time location coordinates.",
  },
  {
    icon: Sent,
    title: 'Immediately sent',
    description: '3. Coordinates are immediately sent to nearest Police Station (via secure API).',
  },
  {
    icon: Track,
    title: 'Emergency tracking',
    description: '4. Emergency tracking remains live for maximum 3 hours or until deactivated.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const HowItWorks = () => {
  return (
    <section className="bg-[#474747] text-white py-16 px-6 text-center font-[Nunito Sans]">
      <motion.h2
        className="text-3xl font-bold mb-2"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        How it Works
      </motion.h2>
      <motion.p
        className="text-sm text-gray-300 mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Quick emergency response in 4 simple steps.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center gap-3 bg-[#5a5a5a] rounded-xl px-6 py-8 shadow-lg hover:scale-[1.03] transition-all duration-300"
            variants={stepVariants}
          >
            <motion.div
              className="bg-white p-4 rounded-full shadow-md"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4 + index * 0.2, type: "spring", stiffness: 200 }}
            >
              <img
                src={step.icon}
                alt={step.title}
                className="w-14 h-14"
              />
            </motion.div>
            <h3 className="font-semibold text-lg mt-2">{step.title}</h3>
            <p className="text-sm text-gray-300 mt-1">{step.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default HowItWorks;
