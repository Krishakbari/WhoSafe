// import { useState } from "react";
// import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
// import A from "../assets/A.jpg";
// import H from "../assets/H.jpg";

// export default function FounderFAQ() {
//     const [openIndex, setOpenIndex] = useState(0);

//     const faqs = [
//         {
//             question: "Why Do You Charge A Verification Fee?",
//             answer:
//                 "You can find a wide variety of AI tools on this page, covering all application areas, such as text generation, automatic translation, image recognition, and much more.",
//         },
//         ...Array(5).fill({
//             question: "Are All Websites Accepted?",
//             answer: "Answer to the repeated question about website acceptance.",
//         }),
//     ];

//     return (
//         <div className="w-full py-10 px-4 text-center">
//             {/* Founders Section */}
//             <div className="max-w-5xl mx-auto">
//                 <h2 className="text-xl font-semibold mb-1">Our Founder</h2>
//                 <p className="text-sm text-gray-500 mb-8">
//                     Our success is built on a foundation of trust, innovation, and relentless commitment to excellence.
//                 </p>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
//                     {[
//                         {
//                             name: "Harmeet Godhani",
//                             role: "Founder & CEO",
//                             img: H,
//                             linkedin: 'https://www.linkedin.com/in/harmeet-godhani-78a129245/'
//                         },
//                         {
//                             name: "Ved Sanghani",
//                             role: "Co-founder & CTO",
//                             img: A,
//                         },
//                     ].map((person, i) => (
//                         <div key={i} className="flex flex-col items-center space-y-3">
//                             <img
//                                 src={person.img}
//                                 alt={person.name}
//                                 className="w-[350px] h-[350px] rounded-full object-cover"
//                             />
//                             <div>
//                                 <h3 className="text-base font-medium">{person.name}</h3>
//                                 <p className="text-xs text-gray-500">{person.role}</p>
//                             </div>
//                             <div className="flex space-x-3 text-pink-500">
//                                 <div className="bg-[#EDEDED] rounded-full p-2">
//                                     <FaFacebookF className="cursor-pointer hover:text-pink-600" />
//                                 </div>
//                                 <div className="bg-[#EDEDED] rounded-full p-2">
//                                     <FaInstagram className="cursor-pointer hover:text-pink-600" />
//                                 </div>
//                                 <div className="bg-[#EDEDED] rounded-full p-2">
//                                     <a href={person.linkedin}><FaLinkedinIn className="cursor-pointer hover:text-pink-600" /></a>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* FAQ Section - Full Width */}
//             <div className="w-full bg-white">
//                 <h2 className="text-2xl font-semibold mb-2">Our FAQ</h2>
//                 <p className="text-sm text-gray-500 mb-6">
//                     Find quick answers to common questions about our products, services, and policies.
//                 </p>

//                 <div className="space-y-2 w-full">
//                     {faqs.map((faq, i) => (
//                         <div key={i} className="bg-[#EDEDED] rounded-md text-left w-[90%] mx-auto">
//                             <button
//                                 className={`w-full p-4 flex justify-between items-center ${i === openIndex
//                                         ? "text-pink-600 font-semibold"
//                                         : "text-gray-700"
//                                     }`}
//                                 onClick={() => setOpenIndex(i === openIndex ? null : i)}
//                             >
//                                 <span className="font-[500]">{i + 1}. {faq.question}</span>
//                                 <span>{i === openIndex ? "▲" : "▼"}</span>
//                             </button>
//                             {i === openIndex && (
//                                 <div className="px-4 pb-4 text-sm text-gray-600">
//                                     {faq.answer}
//                                 </div>
//                             )}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }



// import { useState } from "react";
// import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
// import A from "../assets/A.jpg";
// import H from "../assets/H.jpg";
// import { motion } from "framer-motion";
// import { AnimatePresence } from "framer-motion";


// export default function FounderFAQ() {
//     const [openIndex, setOpenIndex] = useState(0);

//     const faqs = [
//         {
//             question: "Why Do You Charge A Verification Fee?",
//             answer:
//                 "You can find a wide variety of AI tools on this page, covering all application areas, such as text generation, automatic translation, image recognition, and much more.",
//         },
//         ...Array(5).fill({
//             question: "Are All Websites Accepted?",
//             answer: "Answer to the repeated question about website acceptance.",
//         }),
//     ];

//     return (
//         <div className="w-full py-10 px-4 text-center overflow-hidden font-[Nunito Sans]">
//             {/* Founders Section */}
//             <motion.div
//                 className="max-w-5xl mx-auto"
//                 initial={{ opacity: 0, y: 100 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 1.2, type: "spring" }}
//                 viewport={{ once: true }}
//             >
//                 <h2 className="text-xl font-semibold mb-1">Our Founder</h2>
//                 <p className="text-sm text-gray-500 mb-8">
//                     Our success is built on a foundation of trust, innovation, and relentless commitment to excellence.
//                 </p>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
//                     {[
//                         {
//                             name: "Harmeet Godhani",
//                             role: "Founder & CEO",
//                             img: H,
//                             linkedin: "https://www.linkedin.com/in/harmeet-godhani-78a129245/",
//                         },
//                         {
//                             name: "Ved Sanghani",
//                             role: "Co-founder & CTO",
//                             img: A,
//                         },
//                     ].map((person, i) => (
//                         <motion.div
//                             key={i}
//                             className="flex flex-col items-center space-y-3"
//                             initial={{ scale: 0.3, rotateY: 180, opacity: 0 }}
//                             whileInView={{ scale: 1, rotateY: 0, opacity: 1 }}
//                             transition={{
//                                 duration: 2,
//                                 delay: i * 0.6,
//                                 type: "spring",
//                                 stiffness: 50,
//                                 damping: 15
//                             }}

//                             viewport={{ once: true }}
//                         >
//                             <motion.img
//                                 src={person.img}
//                                 alt={person.name}
//                                 className="w-[350px] h-[350px] rounded-full object-cover shadow-2xl"
//                                 whileHover={{ scale: 1.05, rotate: 2 }}
//                             />
//                             <div>
//                                 <h3 className="text-base font-medium">{person.name}</h3>
//                                 <p className="text-xs text-gray-500">{person.role}</p>
//                             </div>
//                             <div className="flex space-x-3 text-pink-500">
//                                 <motion.div
//                                     whileHover={{ rotate: 360 }}
//                                     transition={{ duration: 0.5, ease: "linear" }}
//                                     className="bg-[#EDEDED] rounded-full p-2"
//                                 >
//                                     <FaFacebookF className="cursor-pointer hover:text-pink-600" />
//                                 </motion.div>

//                                 <motion.div
//                                     whileHover={{ rotate: 360 }}
//                                     transition={{ duration: 0.5, ease: "linear" }}
//                                     className="bg-[#EDEDED] rounded-full p-2"
//                                 >
//                                     <FaInstagram className="cursor-pointer hover:text-pink-600" />
//                                 </motion.div>

//                                 <motion.div
//                                     whileHover={{ rotate: 360 }}
//                                     transition={{ duration: 0.5, ease: "linear" }}
//                                     className="bg-[#EDEDED] rounded-full p-2"
//                                 >
//                                     <a href={person.linkedin} target="_blank" rel="noreferrer">
//                                         <FaLinkedinIn className="cursor-pointer hover:text-pink-600" />
//                                     </a>
//                                 </motion.div>
//                             </div>

//                         </motion.div>
//                     ))}
//                 </div>
//             </motion.div>

//             {/* FAQ Section */}
//             {/* FAQ Section */}
//             <motion.div
//                 className="w-full bg-white"
//                 initial={{ opacity: 0, y: 100 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 1, delay: 0.5 }}
//                 viewport={{ once: true }}
//             >
//                 <h2 className="text-2xl font-semibold mb-2">Our FAQ</h2>
//                 <p className="text-sm text-gray-500 mb-6">
//                     Find quick answers to common questions about our products, services, and policies.
//                 </p>

//                 <div className="space-y-2 w-full">
//                     {faqs.map((faq, i) => (
//                         <motion.div
//                             key={i}
//                             className="bg-[#EDEDED] rounded-md text-left w-[90%] mx-auto overflow-hidden"
//                             initial={{ x: -50, opacity: 0 }}
//                             whileInView={{ x: 0, opacity: 1 }}
//                             transition={{ duration: 0.5, delay: i * 0.1 }}
//                             viewport={{ once: true }}
//                         >
//                             <button
//                                 className={`w-full p-4 flex justify-between items-center transition-colors duration-200 ${i === openIndex ? "text-pink-600 font-semibold" : "text-gray-700"
//                                     }`}
//                                 onClick={() => setOpenIndex(i === openIndex ? null : i)}
//                             >
//                                 <span className="font-[500]">{i + 1}. {faq.question}</span>
//                                 <span>{i === openIndex ? "▲" : "▼"}</span>
//                             </button>

//                             {/* Animate presence around the content */}
//                             <AnimatePresence mode="wait" initial={false}>
//                                 {i === openIndex && (
//                                     <motion.div
//                                         key={`faq-${i}`}
//                                         className="px-4 pb-4 text-sm text-gray-600 origin-top"
//                                         initial={{ opacity: 0, scaleY: 0 }}
//                                         animate={{ opacity: 1, scaleY: 1 }}
//                                         exit={{ opacity: 0, scaleY: 0 }}
//                                         transition={{ duration: 0.35, ease: "easeInOut" }}
//                                         style={{ transformOrigin: "top" }}
//                                     >
//                                         {faq.answer}
//                                     </motion.div>
//                                 )}
//                             </AnimatePresence>
//                         </motion.div>
//                     ))}
//                 </div>
//             </motion.div>

//         </div>
//     );
// }



import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FounderFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Why Do You Charge A Verification Fee?",
      answer:
        "You can find a wide variety of AI tools on this page, covering all application areas, such as text generation, automatic translation, image recognition, and much more.",
    },
    ...Array(5).fill({
      question: "Are All Websites Accepted?",
      answer: "Answer to the repeated question about website acceptance.",
    }),
  ];

  return (
    <div className="w-full py-10 px-4 text-center overflow-hidden font-[Nunito Sans] mt-10">
      {/* FAQ Section */}
      <motion.div
        className="w-full bg-white"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0 }}
        viewport={{ once: false }} // ← so it animates every scroll
      >
        <h2 className="text-2xl font-semibold mb-2">Our FAQ</h2>
        <p className="text-sm text-gray-500 mb-6">
          Find quick answers to common questions about our products, services, and policies.
        </p>

        <div className="space-y-2 w-full">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className="bg-[#EDEDED] rounded-md text-left w-[90%] mx-auto overflow-hidden"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: false }}
            >
              <button
                className={`w-full p-4 flex justify-between items-center transition-colors duration-200 ${
                  i === openIndex ? "text-pink-600 font-semibold" : "text-gray-700"
                }`}
                onClick={() => setOpenIndex(i === openIndex ? null : i)}
              >
                <span className="font-[500]">
                  {i + 1}. {faq.question}
                </span>
                <span>{i === openIndex ? "▲" : "▼"}</span>
              </button>

              <AnimatePresence mode="wait" initial={false}>
                {i === openIndex && (
                  <motion.div
                    key={`faq-${i}`}
                    className="px-4 pb-4 text-sm text-gray-600 origin-top"
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    exit={{ opacity: 0, scaleY: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    style={{ transformOrigin: "top" }}
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
