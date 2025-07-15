import React from "react";
import { Star, StarHalf } from "lucide-react";
import WomanTest from "../assets/WomanTest.jpg";

// ⭐️ Testimonial Card Component
const TestimonialCard = ({ name, image, rating, text }) => {
  return (
    <div className="bg-[#EAEAEA] rounded-2xl shadow-md flex gap-4 max-w-[600px] min-w-[300px] h-[216px] flex-shrink-0">
      <img
        src={image}
        alt={name}
        className="w-[164px] h-full rounded-xl object-cover"
      />
      <div className="flex flex-col justify-between p-5">
        <h4 className="text-[#ED0E64] text-[16px] text-left mt-10 font-semibold">{name}</h4>
        <div className="flex text-yellow-500 -mt-10">
          {[...Array(Math.floor(rating))].map((_, i) => (
            <Star key={i} size={20} fill="currentColor" stroke="none" />
          ))}
          {rating % 1 !== 0 && (
            <StarHalf size={20} fill="currentColor" stroke="none" />
          )}
        </div>
        <p className="text-[14px] mb-5 -mt-5 text-[#474747] font-[400] text-left">
          {text}
        </p>
      </div>
    </div>
  );
};

// ⭐️ Testimonial Section Component
const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Meythli Odex",
      image: WomanTest,
      rating: 4.5,
      text: `Once you've filled in all your details, click the 'Submit' button to complete your registration. You're now ready to explore and enjoy all our features!`,
    },
    {
      name: "Alex Johnson",
      image: WomanTest,
      rating: 4.5,
      text: `This platform exceeded my expectations. Super intuitive and helpful!`,
    },
    {
      name: "Sarah Lee",
      image: WomanTest,
      rating: 4.5,
      text: `Fantastic support and seamless experience. Highly recommended!`,
    },
  ];

  // Duplicate for infinite loop effect
  const scrollingTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-12 text-center relative overflow-hidden">
      {/* Embedded CSS animation */}
      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .scrolling-track {
          display: flex;
          animation: scrollLeft 10s linear infinite;
          width: fit-content;
        }

        .scrolling-wrapper {
          overflow: hidden;
          width: 100%;
        }
      `}</style>

      <h2 className="text-2xl font-semibold">Client Testimonial</h2>
      <p className="text-gray-600 mx-auto mt-2 max-w-xl">
        Real feedback from satisfied clients, sharing their genuine experiences
        and the value they received from our product.
      </p>

      <div className="scrolling-wrapper mt-8">
        <div className="scrolling-track gap-6">
          {scrollingTestimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
