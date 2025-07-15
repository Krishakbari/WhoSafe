import React from 'react'
import Hero from '../Components/HeroSection'
import LimitedEditionSection from '../Components/LimitedEditionSection'
import Delivery from '../Components/Delivery'
import HowItWorks from "../Components/HowItWorks"
const Collection = () => {
    return (
        <>
            <div className="relative w-full h-screen overflow-hidden">
                {/* Background split behind header & hero */}
                <div className="absolute inset-0 flex">
                    <div className="w-1/2 bg-white"></div>
                    <div className="w-1/2 bg-pink-50"></div>
                </div>
                <Hero/>
            </div>
            <LimitedEditionSection/>
            <HowItWorks/>
            <Delivery/>
        </>
    )
}

export default Collection
