// import React, { useState } from 'react';
// import CalendarImage from '../assets/customization.png';
// import { FaArrowRight } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom'; // ← import
// import { ChevronRight } from 'lucide-react';

// const CustomizationDesign = () => {
//     const [activeButton, setActiveButton] = useState(null);
//     const navigate = useNavigate(); // ← hook for navigation

//     const buttons = [
//         { label: "ABOUT US", path: "/" },
//         { label: "COLLECTION", path: "/collection" },
//         { label: "OUR BLOG & NEWS", path: "/blogs" },
//         { label: "CONTACT US", path: "/contact" },
//     ];

//     const handleClick = (index, path) => {
//         setActiveButton(index);
//         navigate(path);
//         window.scrollTo(0, 0);
//     };

//     return (
//         <>
//             <br /><br /><br />
//             <section className="py-16 px-4 text-center max-w-4xl mx-auto">
//                 <h2 className="text-2xl md:text-4xl font-semibold mb-2" style={{fontFamily:'Abhaya Libre'}}>Customization Design</h2>
//                 <p className="text-gray-600 text-sm md:text-base mb-10">
//                     Your customization design is currently in progress and awaiting final approval or completion.
//                 </p>

//                 {/* Image */}
//                 <div className="mb-10 flex justify-center">
//                     <img src={CalendarImage} alt="Customization Illustration" className="max-w-sm w-full" />
//                 </div>

//                 {/* Buttons */}
//                 <div className="flex flex-wrap justify-center gap-4">
//                     {buttons.map((btn, index) => (
//                         <button
//                             key={index}
//                             onClick={() => handleClick(index, btn.path)}
//                             className={`flex items-center gap-2 px-5 cursor-pointer py-2 rounded-xl text-sm transition-colors duration-200
//                                 ${activeButton === index
//                                     ? 'bg-[#ED0E64] text-white'
//                                     : 'bg-[#F0F0F0] text-gray-700 '}
//                             `}
//                         >
//                             {btn.label} <ChevronRight />
//                         </button>
//                     ))}
//                 </div>
//             </section>
//         </>
//     );
// };

// export default CustomizationDesign;




import React, { useState } from 'react';
import CalendarImage from '../assets/customization.png';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Helmet } from 'react-helmet'; // ⬅️ Helmet for SEO

const CustomizationDesign = () => {
    const [activeButton, setActiveButton] = useState(null);
    const navigate = useNavigate();

    const buttons = [
        { label: "ABOUT US", path: "/" },
        { label: "COLLECTION", path: "/collection" },
        { label: "OUR BLOG & NEWS", path: "/blogs" },
        { label: "CONTACT US", path: "/contact" },
    ];

    const handleClick = (index, path) => {
        setActiveButton(index);
        navigate(path);
        window.scrollTo(0, 0);
    };

    return (
        <>
            {/* ✅ SEO Helmet */}
            <Helmet>
                <title>WhoSafe | Customize Your Design</title>
                <meta name="description" content="Create your personalized WhoSafe pendant. Choose your design and make it uniquely yours." />
                <meta name="keywords" content="custom pendant, WhoSafe customization, smart jewelry design, personalized safety pendant" />

                {/* Open Graph */}
                <meta property="og:title" content="Customize Your Pendant | WhoSafe" />
                <meta property="og:description" content="Design your unique WhoSafe smart pendant. Safe, stylish, and personalized." />
                <meta property="og:image" content="https://whosafe.vercel.app/assets/customization.png" />
                <meta property="og:url" content="https://whosafe.vercel.app/customization" />
                <meta property="og:type" content="website" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Customize Your Pendant | WhoSafe" />
                <meta name="twitter:description" content="Make your WhoSafe smart pendant reflect your style with custom design options." />
                <meta name="twitter:image" content="https://whosafe.vercel.app/assets/customization.png" />
            </Helmet>

            <br /><br /><br />
            <section className="py-16 px-4 text-center max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-4xl font-semibold mb-2" style={{ fontFamily: 'Abhaya Libre' }}>
                    Customization Design
                </h2>
                <p className="text-gray-600 text-sm md:text-base mb-10">
                    Your customization design is currently in progress and awaiting final approval or completion.
                </p>

                <div className="mb-10 flex justify-center">
                    <img src={CalendarImage} alt="Customization Illustration" className="max-w-sm w-full" />
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                    {buttons.map((btn, index) => (
                        <button
                            key={index}
                            onClick={() => handleClick(index, btn.path)}
                            className={`flex items-center gap-2 px-5 cursor-pointer py-2 rounded-xl text-sm transition-colors duration-200
                                ${activeButton === index
                                    ? 'bg-[#ED0E64] text-white'
                                    : 'bg-[#F0F0F0] text-gray-700 '}
                            `}
                        >
                            {btn.label} <ChevronRight />
                        </button>
                    ))}
                </div>
            </section>
        </>
    );
};

export default CustomizationDesign;
