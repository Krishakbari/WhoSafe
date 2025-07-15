// import React from 'react';

// const PrivacyPolicy = () => {
//   return (
//     <section className="min-h-screen px-6 py-16 bg-pink-50 font-[Nunito Sans]">
//       <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
//         <h1 className="text-3xl font-bold text-center text-pink-600 mb-4">Who Safe – Privacy Policy</h1>
//         <p className="text-sm text-center text-gray-500 mb-8">
//           📅 Effective Date: 09/07/2025 | 📧 Email: whosafeindia@gmail.com | 📱 Applies To: Website & Android App
//         </p>

//         <div className="space-y-6 text-gray-700 text-sm leading-relaxed">
//           <div>
//             <h2 className="text-lg font-semibold text-pink-500 mb-2">1. Introduction</h2>
//             <p>Who Safe is committed to protecting the privacy of its users. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you use our mobile app, website, and safety devices.</p>
//           </div>

//           <div>
//             <h2 className="text-lg font-semibold text-pink-500 mb-2">2. Information We Collect</h2>
//             <ul className="list-disc list-inside space-y-1">
//               <li>Name, phone number, email address, and residential address</li>
//               <li>Emergency contact details (as added by the user)</li>
//               <li>Device info: IP address, device ID, operating system version</li>
//               <li>Location data, used during emergencies or GPS-based features</li>
//               <li>Usage data: Interactions within the app (e.g., alert history, feedback)</li>
//             </ul>
//           </div>

//           <div>
//             <h2 className="text-lg font-semibold text-pink-500 mb-2">3. Purpose of Data Collection</h2>
//             <ul className="list-disc list-inside space-y-1">
//               <li>Send emergency alerts and share real-time location</li>
//               <li>Improve app features, stability, and safety responses</li>
//               <li>Comply with legal and regulatory frameworks</li>
//               <li>Provide customer service and technical support</li>
//             </ul>
//           </div>

//           <div>
//             <h2 className="text-lg font-semibold text-pink-500 mb-2">4. Data Sharing & Disclosure</h2>
//             <p>We do not sell or rent your data. Your data may be shared:</p>
//             <ul className="list-disc list-inside space-y-1">
//               <li>With emergency contacts (as designated by you)</li>
//               <li>With trusted APIs (e.g., Google Maps, SMS gateways)</li>
//               <li>With law enforcement or courts if required legally</li>
//             </ul>
//           </div>

//           <div>
//             <h2 className="text-lg font-semibold text-pink-500 mb-2">5. Data Security</h2>
//             <p>We use secure servers, encryption, and authentication to protect your data. Despite our efforts, no platform is 100% secure. We recommend keeping your app updated and using secure device settings.</p>
//           </div>

//           <div>
//             <h2 className="text-lg font-semibold text-pink-500 mb-2">6. Your Rights</h2>
//             <ul className="list-disc list-inside space-y-1">
//               <li>Request access or correction to your data</li>
//               <li>Delete your personal information</li>
//               <li>Withdraw consent (may disable some features)</li>
//             </ul>
//             <p>To exercise these rights, email us at <a href="mailto:whosafeindia@gmail.com" className="text-pink-600">whosafeindia@gmail.com</a>.</p>
//           </div>

//           <div>
//             <h2 className="text-lg font-semibold text-pink-500 mb-2">7. Data Retention</h2>
//             <p>We retain your data only as long as needed for safety and compliance. If you close your account, your data will be deleted within 30 days.</p>
//           </div>

//           <div>
//             <h2 className="text-lg font-semibold text-pink-500 mb-2">8. Children's Privacy</h2>
//             <p>Who Safe is not intended for children under 13 years. Users below 18 years must use the app with parental or guardian supervision.</p>
//           </div>

//           <div>
//             <h2 className="text-lg font-semibold text-pink-500 mb-2">9. Changes to This Policy</h2>
//             <p>We may revise this policy to reflect changes in legal or technical requirements. Updates will be shared via email or in-app notification. Continued use implies your acceptance.</p>
//           </div>

//           <div>
//             <h2 className="text-lg font-semibold text-pink-500 mb-2">10. Contact Us</h2>
//             <p>📧 Email: <a href="mailto:whosafeindia@gmail.com" className="text-pink-600">whosafeindia@gmail.com</a></p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
// export default PrivacyPolicy;




import React from 'react';
import { Helmet } from 'react-helmet';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>WhoSafe | Privacy Policy </title>
        <meta
          name="description"
          content="Read Who Safe's privacy policy to understand how we collect, use, and protect your personal data through our website and mobile app."
        />
        <meta
          name="keywords"
          content="privacy policy, Who Safe, data protection, user rights, safety app, emergency contacts, user data, GDPR"
        />
        <meta property="og:title" content="Privacy Policy | Who Safe" />
        <meta
          property="og:description"
          content="Learn how Who Safe collects, uses, and protects your data. Effective as of July 9, 2025."
        />
        <meta property="og:url" content="https://whosafe.vercel.app/privacy-policy" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Who Safe" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Privacy Policy | Who Safe" />
        <meta
          name="twitter:description"
          content="Find out how we handle your data responsibly and securely on the Who Safe platform."
        />
      </Helmet>
      <section className="min-h-screen px-6 py-16 bg-pink-50 font-[Nunito Sans]">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
          <h1 className="text-3xl font-bold text-center text-pink-600 mb-4">Who Safe – Privacy Policy</h1>
          <p className="text-sm text-center text-gray-500 mb-8">
            📅 Effective Date: 09/07/2025 | 📧 Email: whosafeindia@gmail.com | 📱 Applies To: Website & Android App
          </p>

          <div className="space-y-6 text-gray-700 text-sm leading-relaxed">
            <div>
              <h2 className="text-lg font-semibold text-pink-500 mb-2">1. Introduction</h2>
              <p>Who Safe is committed to protecting the privacy of its users. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you use our mobile app, website, and safety devices.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-pink-500 mb-2">2. Information We Collect</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Name, phone number, email address, and residential address</li>
                <li>Emergency contact details (as added by the user)</li>
                <li>Device info: IP address, device ID, operating system version</li>
                <li>Location data, used during emergencies or GPS-based features</li>
                <li>Usage data: Interactions within the app (e.g., alert history, feedback)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-pink-500 mb-2">3. Purpose of Data Collection</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Send emergency alerts and share real-time location</li>
                <li>Improve app features, stability, and safety responses</li>
                <li>Comply with legal and regulatory frameworks</li>
                <li>Provide customer service and technical support</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-pink-500 mb-2">4. Data Sharing & Disclosure</h2>
              <p>We do not sell or rent your data. Your data may be shared:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>With emergency contacts (as designated by you)</li>
                <li>With trusted APIs (e.g., Google Maps, SMS gateways)</li>
                <li>With law enforcement or courts if required legally</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-pink-500 mb-2">5. Data Security</h2>
              <p>We use secure servers, encryption, and authentication to protect your data. Despite our efforts, no platform is 100% secure. We recommend keeping your app updated and using secure device settings.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-pink-500 mb-2">6. Your Rights</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Request access or correction to your data</li>
                <li>Delete your personal information</li>
                <li>Withdraw consent (may disable some features)</li>
              </ul>
              <p>To exercise these rights, email us at <a href="mailto:whosafeindia@gmail.com" className="text-pink-600">whosafeindia@gmail.com</a>.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-pink-500 mb-2">7. Data Retention</h2>
              <p>We retain your data only as long as needed for safety and compliance. If you close your account, your data will be deleted within 30 days.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-pink-500 mb-2">8. Children's Privacy</h2>
              <p>Who Safe is not intended for children under 13 years. Users below 18 years must use the app with parental or guardian supervision.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-pink-500 mb-2">9. Changes to This Policy</h2>
              <p>We may revise this policy to reflect changes in legal or technical requirements. Updates will be shared via email or in-app notification. Continued use implies your acceptance.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-pink-500 mb-2">10. Contact Us</h2>
              <p>📧 Email: <a href="mailto:whosafeindia@gmail.com" className="text-pink-600">whosafeindia@gmail.com</a></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;



