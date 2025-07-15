// import React from 'react';

// const Shipping = () => {
//   return (
//     <section className="min-h-screen px-6 py-16 bg-pink-50 font-[Nunito Sans]">
//       <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
//         <h1 className="text-3xl font-bold text-center text-pink-600 mb-4">Who Safe – Shipping & Delivery Policy</h1>
//         <p className="text-sm text-center text-gray-500 mb-8">
//           📅 Effective Date: 09/07/2025 | 📧 Email: whosafeindia@gmail.com | 📱 Platform: Website & Android App
//         </p>

//         <div className="space-y-6 text-gray-700 text-sm leading-relaxed">
//           <div>
//             <h2 className="text-lg font-semibold text-pink-500 mb-2">1. Pre-Booking & Payment Terms</h2>
//             <ul className="list-disc list-inside space-y-1">
//               <li>All Who Safe products are available through pre-booking only.</li>
//               <li>Customers must pay 100% of the product price in advance to confirm the booking.</li>
//               <li>Payment is accepted through secure gateways available on our website/app.</li>
//             </ul>
//           </div>

//           <div>
//             <h2 className="text-lg font-semibold text-pink-500 mb-2">2. Delivery Timeline</h2>
//             <ul className="list-disc list-inside space-y-1">
//               <li>Delivery will be initiated within 45 to 60 days from the date of confirmed booking.</li>
//               <li>This timeline accounts for product manufacturing, quality checks, and shipping.</li>
//               <li>Delivery timelines may vary depending on location, courier services, and public holidays.</li>
//             </ul>
//           </div>

//           <div>
//             <h2 className="text-lg font-semibold text-pink-500 mb-2">3. Shipping Areas</h2>
//             <ul className="list-disc list-inside space-y-1">
//               <li>We currently ship across India. For remote locations, delivery time may be slightly longer.</li>
//               <li>You will be notified by email or SMS once your product has been shipped.</li>
//             </ul>
//           </div>

//           <div>
//             <h2 className="text-lg font-semibold text-pink-500 mb-2">4. Delivery Confirmation</h2>
//             <ul className="list-disc list-inside space-y-1">
//               <li>Customers will receive tracking details once the order is dispatched.</li>
//               <li>A confirmation message will be sent after successful delivery.</li>
//             </ul>
//           </div>

//           <div>
//             <h2 className="text-lg font-semibold text-pink-500 mb-2">5. Shipping Charges</h2>
//             <ul className="list-disc list-inside space-y-1">
//               <li>Unless stated otherwise, shipping charges are included in the product price.</li>
//               <li>For bulk or special orders, additional shipping costs may apply and will be communicated in advance.</li>
//             </ul>
//           </div>

//           <div>
//             <h2 className="text-lg font-semibold text-pink-500 mb-2">6. Delays & Liability</h2>
//             <ul className="list-disc list-inside space-y-1">
//               <li>While we aim to meet delivery timelines, Who Safe is not liable for delays caused by:</li>
//               <ul className="list-disc ml-5 space-y-1">
//                 <li>Natural disasters, strikes, or force majeure</li>
//                 <li>Delays from third-party courier services</li>
//                 <li>Incomplete or incorrect delivery addresses</li>
//               </ul>
//             </ul>
//           </div>

//           <div>
//             <h2 className="text-lg font-semibold text-pink-500 mb-2">7. Contact Us</h2>
//             <p>📧 Email: <a href="mailto:whosafeindia@gmail.com" className="text-pink-600">whosafeindia@gmail.com</a></p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Shipping;




import React from 'react';
import { Helmet } from 'react-helmet';

const Shipping = () => {
  return (
    <>
      <Helmet>
        <title>WhoSafe | Shipping & Delivery Policy</title>
        <meta
          name="description"
          content="Review Who Safe's shipping and delivery policy including pre-booking terms, delivery timelines, shipping coverage, and contact details."
        />
        <meta
          name="keywords"
          content="Who Safe shipping policy, delivery timeline, pre-booking terms, courier policy, shipping charges"
        />
        <meta property="og:title" content="Shipping & Delivery Policy | Who Safe" />
        <meta
          property="og:description"
          content="Explore our pre-booking and shipping policy. Delivery starts within 45–60 days from confirmed order."
        />
        <meta property="og:url" content="https://whosafe.vercel.app/shipping" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Who Safe" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Shipping & Delivery Policy | Who Safe" />
        <meta
          name="twitter:description"
          content="Shipping & delivery details for Who Safe products across India, including timelines, charges, and courier info."
        />
      </Helmet>
      <section className="min-h-screen px-6 py-16 bg-pink-50 font-[Nunito Sans]">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
          <h1 className="text-3xl font-bold text-center text-pink-600 mb-4">Who Safe – Shipping & Delivery Policy</h1>
          <p className="text-sm text-center text-gray-500 mb-8">
            📅 Effective Date: 09/07/2025 | 📧 Email: whosafeindia@gmail.com | 📱 Platform: Website & Android App
          </p>

          <div className="space-y-6 text-gray-700 text-sm leading-relaxed">
            <div>
              <h2 className="text-lg font-semibold text-pink-500 mb-2">1. Pre-Booking & Payment Terms</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>All Who Safe products are available through pre-booking only.</li>
                <li>Customers must pay 100% of the product price in advance to confirm the booking.</li>
                <li>Payment is accepted through secure gateways available on our website/app.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-pink-500 mb-2">2. Delivery Timeline</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Delivery will be initiated within 45 to 60 days from the date of confirmed booking.</li>
                <li>This timeline accounts for product manufacturing, quality checks, and shipping.</li>
                <li>Delivery timelines may vary depending on location, courier services, and public holidays.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-pink-500 mb-2">3. Shipping Areas</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>We currently ship across India. For remote locations, delivery time may be slightly longer.</li>
                <li>You will be notified by email or SMS once your product has been shipped.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-pink-500 mb-2">4. Delivery Confirmation</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Customers will receive tracking details once the order is dispatched.</li>
                <li>A confirmation message will be sent after successful delivery.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-pink-500 mb-2">5. Shipping Charges</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Unless stated otherwise, shipping charges are included in the product price.</li>
                <li>For bulk or special orders, additional shipping costs may apply and will be communicated in advance.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-pink-500 mb-2">6. Delays & Liability</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>While we aim to meet delivery timelines, Who Safe is not liable for delays caused by:</li>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Natural disasters, strikes, or force majeure</li>
                  <li>Delays from third-party courier services</li>
                  <li>Incomplete or incorrect delivery addresses</li>
                </ul>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-pink-500 mb-2">7. Contact Us</h2>
              <p>📧 Email: <a href="mailto:whosafeindia@gmail.com" className="text-pink-600">whosafeindia@gmail.com</a></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shipping;
