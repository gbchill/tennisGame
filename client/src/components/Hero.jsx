import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="w-full h-screen relative">
            <img
                className="w-full h-screen object-cover shadow-lg"
                src="https://media.istockphoto.com/id/511284689/vector/vector-realistic-textured-tennis-court-illustration.jpg?s=612x612&w=0&k=20&c=XOZTo0qLle6KpAkYO8CBk6Y4ES8cGInCHvApS9IKsxg="
                alt="/"
            />
            <div className="bg-black/40 absolute top-0 left-0 w-full h-full" />
            <div className="absolute top-0 w-full h-full flex flex-col  justify-center text-white">
                <div className='md:left-[10%] max-w-[1200px] m-auto absolute p-4'>
                    <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>
                       Play Tennis Winner
                    </h1>
                    <p className='max-w-[600px] drop-shadow-2xl pt-5 pb-5 text-xl'>
                     
                    </p>
                    <Link className="" to={'/game'}>
                        <button className='bg-white text-black '>Play now</button>
                    </Link>
                </div>
            </div>
        </div >

    )
}

export default Hero