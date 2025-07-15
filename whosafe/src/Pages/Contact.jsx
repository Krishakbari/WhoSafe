// import React from 'react';
// import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
// import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
// import { useState } from 'react';
// import axios from 'axios';
// import toast from 'react-hot-toast';

// const Contact = () => {
//     const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const res = await axios.post("${API}/contact`, formData);
//             if (res.data.success) {
//                 toast.success("Message sent!");
//                 setFormData({ name: "", email: "", phone: "", message: "" });
//             } else {
//                 toast.error(res.data.message);
//             }
//         } catch (err) {
//             toast.error("Failed to send message");
//         }
//     };

//     return (
//         <section className="py-12 px-6 max-w-7xl mx-auto font-[Nunito Sans]">
//             <div className="text-center mb-10"><br /><br />
//                 <h2 className="text-3xl font-semibold mb-2">Get in touch</h2>
//                 <p className="text-gray-500 text-sm">
//                     Reach out to us anytime—our team is ready to assist you with anything you need.
//                 </p>
//             </div>

//             <div className="w-full flex md:flex-row flex-col gap-8">
//                 {/* Left Contact Info */}
//                 <div className="bg-[#f3f3f3] rounded-lg p-6 space-y-6">
//                     <div className="flex items-start gap-4">
//                         <div className="text-pink-600 text-xl bg-white p-3 rounded-full shadow">
//                             <FaPhoneAlt />
//                         </div>
//                         <div>
//                             <h4 className="font-semibold text-lg">Call To Us</h4>
//                             <p className="text-sm text-gray-600">We are available 24/7, 7 days a week.</p>
//                             <p className="text-sm mt-1">Phone: +8801611112222</p>
//                         </div>
//                     </div>

//                     <hr className="border-gray-300" />

//                     <div className="flex items-start gap-4">
//                         <div className="text-pink-600 text-xl bg-white p-3 rounded-full shadow">
//                             <FaEnvelope />
//                         </div>
//                         <div>
//                             <h4 className="font-semibold text-lg">Write To US</h4>
//                             <p className="text-sm text-gray-600">
//                                 Fill out our form and we will contact you within 24 hours.
//                             </p>
//                             <p className="text-sm mt-1">Emails: customer@exclusive.com</p>
//                             <p className="text-sm">Emails: support@exclusive.com</p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Right Form */}
//                 <form onSubmit={handleSubmit} className="bg-[#f3f3f3] rounded-lg p-6 space-y-4">
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                         <input
//                             type="text"
//                             name="name" value={formData.name} onChange={handleChange}
//                             placeholder="Your Name *"
//                             className="px-4 py-2 rounded-md bg-white outline-none"
//                             required
//                         />
//                         <input
//                             type="email"
//                             name="email" value={formData.email} onChange={handleChange}
//                             placeholder="Your Email *"
//                             className="px-4 py-2 rounded-md bg-white outline-none"
//                             required
//                         />
//                         <input
//                             type="tel"
//                             name="phone" value={formData.phone} onChange={handleChange}
//                             placeholder="Your Phone *"
//                             className="px-4 py-2 rounded-md bg-white outline-none"
//                             required
//                         />
//                     </div>

//                     <textarea
//                         placeholder="Your Message"
//                         name="message" value={formData.message} onChange={handleChange}
//                         rows="5"
//                         className="w-full px-4 py-2 rounded-md bg-white outline-none"
//                         required
//                     ></textarea>

//                     <div className="text-right">
//                         <button className="bg-[#ED0E64] cursor-pointer text-white px-6 py-3 rounded-lg font-[600] hover:bg-pink-700 transition mb-6 flex items-center gap-2">
//                             SEND MESSAGE <MdKeyboardDoubleArrowRight />

//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </section>
//     );
// };

// export default Contact;




import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet'; // ✅ Helmet for SEO
import { API } from '../constant';

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API}/contact`, formData);
      if (res.data.success) {
        toast.success("Message sent!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      toast.error("Failed to send message");
    }
  };

  return (
    <>
      {/* ✅ SEO Helmet */}
      <Helmet>
        <title>WhoSafe | Contact Us</title>
        <meta name="description" content="Reach out to WhoSafe support for any queries or assistance. We're here to help 24/7." />
        <meta name="keywords" content="WhoSafe contact, support, help, customer service, email, phone, get in touch" />

        {/* Open Graph */}
        <meta property="og:title" content="Contact Us | WhoSafe Support" />
        <meta property="og:description" content="Contact the WhoSafe team for any support or questions. We respond within 24 hours." />
        <meta property="og:image" content="https://whosafe.vercel.app/assets/contact-og.jpg" />
        <meta property="og:url" content="https://whosafe.vercel.app/contact" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | WhoSafe Support" />
        <meta name="twitter:description" content="Get in touch with the WhoSafe team for help, support, or feedback." />
        <meta name="twitter:image" content="https://whosafe.vercel.app/assets/contact-og.jpg" />
      </Helmet>

      {/* Page Content */}
      <section className="py-12 px-6 max-w-7xl mx-auto font-[Nunito Sans]">
        <div className="text-center mb-10"><br /><br />
          <h2 className="text-3xl font-semibold mb-2">Get in touch</h2>
          <p className="text-gray-500 text-sm">
            Reach out to us anytime—our team is ready to assist you with anything you need.
          </p>
        </div>

        <div className="w-full flex md:flex-row flex-col gap-8">
          {/* Left Contact Info */}
          <div className="bg-[#f3f3f3] rounded-lg p-6 space-y-6">
            <div className="flex items-start gap-4">
              <div className="text-pink-600 text-xl bg-white p-3 rounded-full shadow">
                <FaPhoneAlt />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Call To Us</h4>
                <p className="text-sm text-gray-600">We are available 24/7, 7 days a week.</p>
                <p className="text-sm mt-1">Phone: +8801611112222</p>
              </div>
            </div>

            <hr className="border-gray-300" />

            <div className="flex items-start gap-4">
              <div className="text-pink-600 text-xl bg-white p-3 rounded-full shadow">
                <FaEnvelope />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Write To US</h4>
                <p className="text-sm text-gray-600">
                  Fill out our form and we will contact you within 24 hours.
                </p>
                <p className="text-sm mt-1">Emails: customer@exclusive.com</p>
                <p className="text-sm">Emails: support@exclusive.com</p>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <form onSubmit={handleSubmit} className="bg-[#f3f3f3] rounded-lg p-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name *"
                className="px-4 py-2 rounded-md bg-white outline-none"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email *"
                className="px-4 py-2 rounded-md bg-white outline-none"
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone *"
                className="px-4 py-2 rounded-md bg-white outline-none"
                required
              />
            </div>

            <textarea
              placeholder="Your Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full px-4 py-2 rounded-md bg-white outline-none"
              required
            ></textarea>

            <div className="text-right">
              <button className="bg-[#ED0E64] cursor-pointer text-white px-6 py-3 rounded-lg font-[600] hover:bg-pink-700 transition mb-6 flex items-center gap-2">
                SEND MESSAGE <MdKeyboardDoubleArrowRight />
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
