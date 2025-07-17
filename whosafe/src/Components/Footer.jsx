// import React, { useState } from 'react';
// import LeftImage from '../assets/Leaf.png';
// import RightImage from '../assets/Lady.png';
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaInstagram,
//   FaLinkedinIn,
// } from 'react-icons/fa';
// import QR from '../assets/QrCode.png';
// import { API } from '../constant';
// import Play from '../assets/Google.png';
// import AppStore from '../assets/AppStore.png';
// import toast from "react-hot-toast";
// import axios from "axios";
// import { Link } from 'react-router-dom';

// const Footer = () => {
//   const [subscriberEmail, setSubscriberEmail] = useState("");

//   const handleSubscribe = async () => {
//     if (!subscriberEmail) return toast.error("Email is required!");
//     try {
//       const res = await axios.post(`${API}/subscribe`, {
//         email: subscriberEmail
//       });
//       if (res.data.success) {
//         toast.success(res.data.message);
//         setSubscriberEmail("");
//       } else {
//         toast.error(res.data.message);
//       }
//     } catch (err) {
//       toast.error(err?.response?.data?.message || "Subscription failed");
//     }
//   };

//   return (
//     <>
//       {/* Join Us Section */}
//       <div className="bg-[#ED0E641A] py-12 px-4 font-[Nunito Sans]">
//         <div className="text-center font-semibold text-2xl mb-3">Join Us</div>
//         <div className="text-center text-[#474747] font-normal text-lg mb-10 max-w-3xl mx-auto">
//           We’re more than a team — we’re a community driven by purpose, passion, and progress.
//         </div>

//         <div className="relative max-w-4xl mx-auto flex items-center justify-center px-4">
//           <div className="absolute md:-left-25 xl:-left-100 -mt-45">
//             <img src={LeftImage} alt="Left" className="w-50 md:block hidden h-auto object-contain" />
//           </div>

//           <div className="flex flex-col sm:flex-row items-center gap-4 z-10">
//             <input
//               type="email"
//               value={subscriberEmail}
//               onChange={(e) => setSubscriberEmail(e.target.value)}
//               placeholder="Your Email"
//               className="bg-white border border-gray-300 rounded-lg px-6 py-2 placeholder-gray-400 outline-none w-72"
//             />
//             <button
//               type="button"
//               onClick={handleSubscribe}
//               className="bg-[#ED0E64] text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition"
//             >
//               SUBSCRIBE
//             </button>
//           </div>

//           <div className="absolute bottom-0 md:-right-0 xl:-right-50">
//             <img src={RightImage} alt="Right" className="w-50 md:block hidden h-auto object-contain" />
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-black text-white pt-12 pb-6 px-6">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto text-center items-center">

//           {/* Support */}
//           <div>
//             <h3 className="text-md font-semibold mb-3">Support</h3>
//             <p className="text-sm mb-2">111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.</p>
//             <p className="text-sm mb-2">exclusive@gmail.com</p>
//             <p className="text-sm">+88015-88888-9999</p>
//           </div>

//           {/* Quick Link */}
//           <div>
//             <h3 className="text-md font-semibold mb-3">Quick Links</h3>
//             <ul className="space-y-2 text-sm">
//               <li><Link to="/privacy-policy" className="hover:text-pink-500 transition">Privacy Policy</Link></li>
//               <li><Link to="/return-policy" className="hover:text-pink-500 transition">Return Policy</Link></li>
//               <li><Link to="/shipping-policy" className="hover:text-pink-500 transition">Shipping Policy</Link></li>
//               <li><Link to="/terms-and-conditions" className="hover:text-pink-500 transition">Terms & Conditions</Link></li>
//             </ul>
//           </div>

//           {/* Download App */}
//           <div>
//             <h3 className="text-md font-semibold mb-3">Download App</h3>
//             <p className="text-xs text-gray-400 mb-2">Save ₹250 with App – New User Only</p>
//             <div className="flex flex-col items-center gap-2 mb-4">
//               <img src={QR} alt="QR" className="w-16 h-16" />
//               <img src={Play} alt="Google Play" className="w-24" />
//               <img src={AppStore} alt="App Store" className="w-24" />
//             </div>
//             <div className="flex justify-center gap-4 text-white text-lg">
//               <FaFacebookF />
//               <FaTwitter />
//               <FaInstagram />
//               <FaLinkedinIn />
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-gray-800 mt-10 pt-4 text-center text-gray-500 text-sm">
//           © Copyright WhoSafe 2025. All rights reserved
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;





import React, { useState } from 'react';
import LeftImage from '../assets/Leaf.png';
import RightImage from '../assets/Lady.png';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
import QR from '../assets/QrCode.png';
import Play from '../assets/Google.png';
import AppStore from '../assets/AppStore.png';
import toast from "react-hot-toast";
import axios from "axios";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { API } from '../constant';

const Footer = () => {
  const [subscriberEmail, setSubscriberEmail] = useState("");

  const handleSubscribe = async () => {
    if (!subscriberEmail) return toast.error("Email is required!");
    try {
      const res = await axios.post(`${API}/subscribe`, {
        email: subscriberEmail
      });
      if (res.data.success) {
        toast.success(res.data.message);
        setSubscriberEmail("");
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      toast.error(err?.response?.data?.message || "Subscription failed");
    }
  };

  return (
    <>
      {/* Join Us Section */}
      <motion.div
        initial={{ rotateX: 90, opacity: 0 }}
        whileInView={{ rotateX: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        viewport={{ once: false, amount: 0.2 }}
        className="bg-[#ED0E641A] py-12 px-4 font-[Nunito Sans]"
      >
        <div className="text-center font-semibold text-2xl mb-3">Join Us</div>
        <div className="text-center text-[#474747] font-normal text-lg mb-10 max-w-3xl mx-auto">
          We’re more than a team — we’re a community driven by purpose, passion, and progress.
        </div>

        <div className="relative max-w-4xl mx-auto flex items-center justify-center px-4">
          <div className="absolute md:-left-25 xl:-left-50 -mt-48">
            <img src={LeftImage} alt="Left" className="w-50 md:block hidden h-auto object-contain select-none pointer-events-none"
              draggable={false} />
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 z-10">
            <input
              type="email"
              value={subscriberEmail}
              onChange={(e) => setSubscriberEmail(e.target.value)}
              placeholder="Your Email"
              className="bg-white border border-gray-300 rounded-lg px-6 py-2 placeholder-gray-400 outline-none w-72"
            />
            <button
              type="button"
              onClick={handleSubscribe}
              className="bg-[#ED0E64] text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition"
            >
              SUBSCRIBE
            </button>
          </div>

          <div className="absolute bottom-0 md:-right-0 xl:-right-50">
            <img src={RightImage} alt="Right" className="w-50 md:block hidden h-auto object-contain select-none pointer-events-none"
              draggable={false} />
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        viewport={{ once: false, amount: 0.2 }}
        className="bg-black text-white pt-12 pb-6 px-6 relative"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto text-center items-center">
          {/* Support */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <h3 className="text-md font-semibold mb-3">Support</h3>
            <p className="text-sm mb-2">111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.</p>
            <p className="text-sm mb-2">exclusive@gmail.com</p>
            <p className="text-sm">+88015-88888-9999</p>
          </motion.div>

          {/* Quick Link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-md font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy-policy" className="hover:text-pink-500 transition">Privacy Policy</Link></li>
              <li><Link to="/return-policy" className="hover:text-pink-500 transition">Return Policy</Link></li>
              <li><Link to="/shipping-policy" className="hover:text-pink-500 transition">Shipping Policy</Link></li>
              <li><Link to="/terms-and-conditions" className="hover:text-pink-500 transition">Terms & Conditions</Link></li>
            </ul>
          </motion.div>


          {/* Download App */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-md font-semibold mb-3">Download App</h3>
            <p className="text-xs text-gray-400 mb-2">Save ₹250 with App – New User Only</p>
            <div className="flex flex-col items-center gap-2 mb-4">
              <img src={QR} alt="QR" className="w-16 h-16" />
              <img src={Play} alt="Google Play" className="w-24" />
              <img src={AppStore} alt="App Store" className="w-24" />
            </div>
            <div className="flex justify-center gap-4 text-white text-lg">
              <a
                href="https://www.facebook.com/profile.php?id=61577096438164&mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="hover:text-pink-600 hover:rotate-[360deg] transition-transform duration-500 cursor-pointer" />
              </a>

              <a
                href="https://www.instagram.com/whosafe.india/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="hover:text-pink-600 hover:rotate-[360deg] transition-transform duration-500 cursor-pointer" />
              </a>

              <a
                href="https://www.linkedin.com/company/who-safe/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="hover:text-pink-600 hover:rotate-[360deg] transition-transform duration-500 cursor-pointer" />
              </a>
            </div>

          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-10 pt-4 text-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, ease: 'easeInOut', delay: 0.5 }}
            className="text-gray-500 text-sm bg-gradient-to-r from-transparent via-pink-500/20 to-transparent inline-block px-3 py-1 rounded"
          >
            © Copyright WhoSafe 2025. All rights reserved
          </motion.p>
        </motion.div>
      </motion.footer>
    </>
  );
};

export default Footer;

