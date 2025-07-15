import React from "react";
import Img1 from "../assets/nechlace1.png";
import Img2 from "../assets/necklace2.png";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const LimitedEditionSection = () => {
    return (
        <>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12 px-4 md:px-8 py-12 max-w-7xl mx-auto">
                {/* Images Section */}
                <div className="flex sm:flex-row gap-6 items-center lg:items-start">
                    {/* First Image */}
                    <div className="relative w-[130px] md:w-[220px] lg:w-[237px] h-[200px] md:h-[420px] lg:h-[439px]">
                        <div className="absolute right-6 inset-0 border-2 border-blue-500 rounded-full z-0"></div>
                        <img
                            src={Img1}
                            alt="Limited Edition 1"
                            className="w-full h-full object-cover rounded-full shadow-lg relative z-10"
                        />
                    </div>

                    {/* Second Image */}
                    <div className="relative w-[130px] md:w-[220px] mt-20 lg:w-[237px] h-[200px] md:h-[420px] lg:h-[439px]">
                        <div className="absolute right-6 inset-0 border-2 border-blue-500 rounded-full z-0"></div>
                        <img
                            src={Img2}
                            alt="Limited Edition 2"
                            className="w-full h-full object-cover rounded-full shadow-lg relative z-10"
                        />
                    </div>
                </div>

                {/* Text Section */}
                <div className="max-w-xl text-left lg:text-left mt-10 lg:mt-0">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4" style={{ fontFamily: 'Nunito Sans' }}>
                        Limited Edition Collection
                    </h2>
                    <p className="text-[#676767] text-[15px] md:text-[16px] mb-4">
                        Discover our carefully curated collection — a blend of quality, style, and functionality.
                    </p>
                    <p className="text-[#676767] text-[15px] md:text-[16px] mb-4" style={{ fontFamily: 'Nunito Sans' }}>
                        Our products are designed with care, crafted for quality, and built to serve real needs. Each item reflects our commitment to innovation, reliability, and customer satisfaction.
                    </p>
                    <p className="text-[#676767] text-[15px] md:text-[16px] mb-4" style={{ fontFamily: 'Nunito Sans' }}>
                        Introducing the Limited Edition Collection—a timeless pairing of elegance and safety that will never be produced again.
                    </p>
                    <p className="text-[#676767] text-[15px] md:text-[16px] mb-6" style={{ fontFamily: 'Nunito Sans' }}>
                        Celebrate resilience and sophistication with a set that embodies empowerment and style. Once these pieces are gone, they're gone for good.
                    </p>

                    <button className="bg-[#ED0E64] text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700 transition flex items-center gap-2 mx-auto lg:mx-0">
                        VIEW COLLECTION <MdKeyboardDoubleArrowRight />
                    </button>
                </div>
            </div>
        </>
    );
};

export default LimitedEditionSection;
