import React from 'react';
import { Link } from "react-router-dom";
const Plan = () => {
    return (
        <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
            {/* Left Side */}
            <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
                <img
                    className='row-span-3 object-cover w-full h-full p-2'
                    src='https://images.pexels.com/photos/3943727/pexels-photo-3943727.jpeg?auto=compress&cs=tinysrgb&w=800'
                    alt='/'
                />
                <img
                    className='row-span-2 object-cover w-full h-full p-2'
                    src='https://images.pexels.com/photos/14751157/pexels-photo-14751157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                    alt='/'
                />
                <img
                    className='row-span-2 object-cover w-full h-full p-2'
                    src='https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=800'
                    alt='/'
                />
                <img
                    className='row-span-3 object-cover w-full h-full p-2'
                    src='https://images.pexels.com/photos/4386476/pexels-photo-4386476.jpeg?auto=compress&cs=tinysrgb&w=800'
                    alt='/'
                />
                <img
                    className='row-span-2 object-cover w-full h-full p-2'
                    src='https://images.pexels.com/photos/3823493/pexels-photo-3823493.jpeg?auto=compress&cs=tinysrgb&w=800'
                    alt='/'
                />
            </div>
            {/* Right Side */}
            <div className='flex flex-col h-full justify-center'>
                <h3 className='text-5xl md:text-6xl font-bold'>Plan Your Retirement </h3>
                <p className='text-2xl py-6'>
                    RetireWise: Empowering Gen Z for Financial Success
                </p>
                <p className='pb-6'>
                    Amid growing misinformation and financial apathy, many young people, particularly Gen Z, lack the necessary knowledge and tools to secure their financial future. To address this challenge, we're introducing RetireWise, an interactive app that educates and empowers the youth to make informed financial decisions. RetireWise offers a personalized, engaging, and fun learning experience, bridging the gap between financial education and the younger generation's mindset. Our goal is to foster financial literacy and help young individuals plan for a secure future.
                </p>
                <div>
                    <Link className="" to={'/learning'}>
                        <button className='border-black mr-4 hover:shadow-xl'>
                            Learn More
                        </button>
                    </Link>
                    <Link className="" to={'/bot'}>
                        <button className='border-black mr-4 hover:shadow-xl'>
                            Ask WealthWizz
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Plan;