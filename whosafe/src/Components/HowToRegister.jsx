// import React from 'react';
// import { FaCheckCircle } from 'react-icons/fa';
// import Tick from "../assets/Tick.png"
// import Touch from "../assets/Touch.png"
// import Upload from "../assets/Upload.png"
// import File from "../assets/File.png"
// import Register from "../assets/Register.png"
// const steps = [
//   {
//     title: '1. Click on the "Register" or "Sign Up" button.',
//     description:
//       'Click on the “Register” or “Sign Up” button to begin creating your account. This will take you to a simple form where you can enter your details and get started.',
//     image: Touch,

//   },
//   {
//     title: '2. Fill in your basic details: name, email, phone number, and password.',
//     description:
//       'Enter your basic information such as name, email address, phone number, and create a secure password. These details help us set up your account and keep it secure.',
//     image: File
//   },
//   {
//     title: '3. Verify your email or mobile number (if required).',
//     description:
//       'To complete your registration, verify your email or mobile number by entering the OTP (One-Time Password) sent to you. This step ensures your account is secure and accessible only by you.',
//     image: Tick
//   },
//   {
//     title: '4. Submit the form and you’re all set!',
//     description:
//       'Once you’ve filled in all your details, click the “Submit” button to complete your registration. You’re now ready to explore and enjoy all our features!',
//     image: Upload
//   },
// ];

// const HowToRegister = () => {
//   return (
//     <section className="py-16 px-6 bg-gray-100 text-gray-800">
//       <div className="max-w-6xl mx-auto text-center mb-12">
//         <h2 className="text-2xl font-bold mb-2">How to register?</h2>
//         <p className="text-sm text-gray-500">Getting started is easy! Follow these simple steps</p>
//       </div>

//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-20 items-start">

//         <img src={Register} alt="" className='object-cover h-[450px] w-full md:w-1/2 rounded-lg' />


//         {/* Steps */}
//         <div className="space-y-8 w-full md:w-1/2">
//           {steps.map((step, index) => (
//             <div key={index} className="flex gap-4 items-start">
//               <img src={step.image} alt="" />
//               <div>
//                 <h3 className="text-pink-600 font-[500]">{step.title}</h3>
//                 <p className="text-sm text-gray-700 mt-1">{step.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HowToRegister;




import React from 'react';
import { motion } from 'framer-motion';
import Tick from "../assets/Tick.png";
import Touch from "../assets/Touch.png";
import Upload from "../assets/Upload.png";
import File from "../assets/File.png";
import Register from "../assets/Register.png";

const steps = [
  {
    title: '1. Click on the "Register" or "Sign Up" button.',
    description:
      'Click on the “Register” or “Sign Up” button to begin creating your account. This will take you to a simple form where you can enter your details and get started.',
    image: Touch,
  },
  {
    title: '2. Fill in your basic details: name, email, phone number, and password.',
    description:
      'Enter your basic information such as name, email address, phone number, and create a secure password. These details help us set up your account and keep it secure.',
    image: File
  },
  {
    title: '3. Verify your email or mobile number (if required).',
    description:
      'To complete your registration, verify your email or mobile number by entering the OTP (One-Time Password) sent to you. This step ensures your account is secure and accessible only by you.',
    image: Tick
  },
  {
    title: '4. Submit the form and you’re all set!',
    description:
      'Once you’ve filled in all your details, click the “Submit” button to complete your registration. You’re now ready to explore and enjoy all our features!',
    image: Upload
  },
];

const HowToRegister = () => {
  return (
    <section className="py-16 px-6 bg-gray-100 text-gray-800">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          className="text-2xl font-bold mb-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          How to register?
        </motion.h2>
        <motion.p
          className="text-sm text-gray-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Getting started is easy! Follow these simple steps
        </motion.p>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-20 items-start">
        {/* Left image (no animation for performance) */}
        <img
          src={Register}
          alt="Register Illustration"
          className="object-cover h-[450px] w-full md:w-1/2 rounded-lg"
        />

        {/* Steps with animation */}
        <div className="space-y-8 w-full md:w-1/2">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex gap-4 items-start"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.4 }}
            >
              <img src={step.image} alt="" className="w-10 h-10" />
              <div>
                <h3 className="text-pink-600 font-[500]">{step.title}</h3>
                <p className="text-sm text-gray-700 mt-1">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToRegister;
