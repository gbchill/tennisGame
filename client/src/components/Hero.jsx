import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="w-full h-screen relative">
            <img
                className="w-full h-screen object-cover shadow-lg"
                src="https://images.pexels.com/photos/251287/pexels-photo-251287.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="/"
            />
            <div className="bg-black/40 absolute top-0 left-0 w-full h-full" />
            <div className="absolute top-0 w-full h-full flex flex-col  justify-center text-white">
                <div className='md:left-[10%] max-w-[1200px] m-auto absolute p-4'>
                    <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>
                        RetireWise
                    </h1>
                    <p className='max-w-[600px] drop-shadow-2xl pt-5 pb-5 text-xl'>
                        Welcome to RetireWise, where we empower Gen Z to embark on their financial freedom
                        journey and take control of their financial future. It's never too early to start planning
                        for retirement! Explore our interactive tools, educational resources, and expert guidance
                        to secure your retirement dreams."
                    </p>
                    <Link className="" to={'/game'}>
                        <button className='bg-white text-black '>Start now</button>
                    </Link>
                </div>
            </div>
        </div >

    )
}

export default Hero