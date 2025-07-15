// import React, { useRef } from 'react';
// import Hero from '../Components/HeroSection';
// import OurSuccess from "../Components/OurSuccess";
// import ProductInfo from '../Components/ProductInfo';
// import ProductGrid from '../Components/ProductGrid';
// import HowItWorks from '../Components/HowItWorks';
// import HowToRegister from '../Components/HowToRegister';
// import TestimonialSection from '../Components/TestimonialSection';
// import JewelryHeroSection from '../Components/JewelryHeroSection';
// import FounderFAQ from '../Components/FounderFAQ';

// const Home = () => {
//   const productGridRef = useRef(null);

//   return (
//     <>
//       <div className="relative w-full h-screen overflow-hidden">
//         <div className="absolute inset-0 flex">
//           <div className="w-1/2 bg-white"></div>
//           <div className="w-1/2 bg-pink-50"></div>
//         </div>
//         <Hero scrollToRef={productGridRef} />
//       </div>

//       <OurSuccess />
//       <ProductInfo />

//       {/* 👇 Attach the ref to ProductGrid section */}
//       <div ref={productGridRef}>
//         <ProductGrid />
//       </div>

//       <HowItWorks />
//       <HowToRegister />
//       <TestimonialSection />
//       <JewelryHeroSection />
//       <FounderFAQ />
//     </>
//   );
// };

// export default Home;



import React, { useRef } from 'react';
import { Helmet } from "react-helmet"; // ← Import Helmet
import Hero from '../Components/HeroSection';
import OurSuccess from "../Components/OurSuccess";
import ProductInfo from '../Components/ProductInfo';
import ProductGrid from '../Components/ProductGrid';
import HowItWorks from '../Components/HowItWorks';
import HowToRegister from '../Components/HowToRegister';
import TestimonialSection from '../Components/TestimonialSection';
import JewelryHeroSection from '../Components/JewelryHeroSection';
import FounderFAQ from '../Components/FounderFAQ';

const Home = () => {
  const productGridRef = useRef(null);

  return (
    <>
      {/* ✅ Helmet for SEO */}
      <Helmet>
        <title>WhoSafe | Smart Safety Pendant for Women</title>
        <meta name="description" content="WhoSafe is a GPS-enabled smart safety pendant for real-time tracking, alerts, and peace of mind. Empower your safety today." />
        <meta name="keywords" content="WhoSafe, safety pendant, women's safety, GPS tracker, personal safety device" />

        {/* Open Graph for Facebook, LinkedIn, etc. */}
        <meta property="og:title" content="WhoSafe | Smart Safety Pendant for Women" />
        <meta property="og:description" content="Empower your safety with WhoSafe – smart GPS-enabled wearable for real-time location tracking and emergency alerts." />
        <meta property="og:image" content="https://whosafe.vercel.app/assets/og-banner.jpg" />
        <meta property="og:url" content="https://whosafe.vercel.app/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="WhoSafe | Smart Safety Pendant for Women" />
        <meta name="twitter:description" content="Real-time tracking and alert system in a wearable pendant. Stay protected, stay connected." />
        <meta name="twitter:image" content="https://whosafe.vercel.app/assets/twitter-banner.jpg" />
      </Helmet>

      <div className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0 flex">
          <div className="w-1/2 bg-white"></div>
          <div className="w-1/2 bg-pink-50"></div>
        </div>
        <Hero scrollToRef={productGridRef} />
      </div>

      <OurSuccess />
      <ProductInfo />
      <div ref={productGridRef}>
        <ProductGrid />
      </div>
      <HowItWorks />
      <HowToRegister />
      <TestimonialSection />
      <JewelryHeroSection />
      <FounderFAQ />
    </>
  );
};

export default Home;
