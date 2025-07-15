import React from 'react';
import Money from "../assets/Money.png";
import Fast from "../assets/Fast.png";
import H247 from "../assets/H247.png";

const steps = [
    {
        icon: Fast,
        title: 'Free And Fast Deliveries',
        description: 'Free delivery for all orders over $140',
    },
    {
        icon: H247,
        title: '24/7 Customer Service',
        description: 'Friendly 24/7 customer support',
    },
    {
        icon: Money,
        title: 'Money Back Guarantee',
        description: 'We return money within 30 days',
    },
];

const Delivery = () => {
    return (
        <section className="bg-white text-white py-12 px-4 text-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                {steps.map((step, index) => (
                    <div key={index} className="flex flex-col items-center text-center px-4">
                        <div className="bg-[#ED0E64] p-4 rounded-full mb-4">
                            <img src={step.icon} alt={step.title} className="w-10 h-10 object-contain" />
                        </div>
                        <h3 className="text-lg text-black font-semibold mb-2">{step.title}</h3>
                        <p className="text-sm text-[#474747]">{step.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Delivery;
