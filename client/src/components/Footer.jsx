import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { TiSocialPinterest } from 'react-icons/ti';

const Footer = () => {
    return (
        <div className='w-full mt-52 bg-gray-900 text-gray-300 py-2 px-2'>
            <div className='max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8 px-4'>
                <div>
                    <h6 className='font-bold uppercare pt-2'>Retirement Planning</h6>
                    <ul>
                        <li className='py-1'>Investment Options</li>
                        <li className='py-1'>Financial Strategies</li>
                        <li className='py-1'>Retirement Accounts</li>
                        <li className='py-1'>Wealth Management</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-bold uppercare pt-2'>Support</h6>
                    <ul>
                        <li className='py-1'>Pricing for Retirement Plans</li>
                        <li className='py-1'>Retirement Documentation</li>
                        <li className='py-1'>Tours for Retirement Planning</li>
                        <li className='py-1'>Retirement Refunds</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-bold uppercare pt-2'>Company</h6>
                    <ul>
                        <li className='py-1'>About Retirement Services</li>
                        <li className='py-1'>Retirement Blog</li>
                        <li className='py-1'>Jobs in Retirement Planning</li>
                        <li className='py-1'>Press on Retirement</li>
                        <li className='py-1'>Retirement Partnerships</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-bold uppercare pt-2'>Legal</h6>
                    <ul>
                        <li className='py-1'>Retirement Claims</li>
                        <li className='py-1'>Privacy for Retirement</li>
                        <li className='py-1'>Retirement Terms and Conditions</li>
                        <li className='py-1'>Retirement Policies and Agreements</li>
                    </ul>
                </div>

                <div className='col-span-2 py-8 md:pt-2'>
                    <p className='font-bold uppercase'>Subscribe to our newsletters</p>
                    <p className='py-4'>
                        The Latest deals, articles and resources sent to your inbox weekly.
                    </p>
                    <form className='flex flex-col sm:flex-row'>
                        <input className='w-full p-2 mr-4 rounded-md mb-4' type='email' placeholder='Enter email..' />
                        <button className='p-2 mb-4 rounded-md'>Subscribe</button>
                    </form>
                </div>
            </div>

            <div className='flex flex-col max-w-[100px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
                <p className='py-4'>2022 Experiences, LLC. All rights reserved</p>
                <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
                    <FaFacebook />
                    <FaInstagram />
                    <FaTwitter />
                    <TiSocialPinterest size={30} />
                </div>
            </div>
        </div>
    );
};

export default Footer;
// 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
// <h1 className="pt-10 font-semibold">WealthWhizz - Your Retirement Chat Bot</h1>
//                 <p className="pt-5 pb-20">Welcome to <b>WealthWhizz</b>, your personal assistant for retirement planning. Feel free to ask any questions about retirement, savings, and financial planning. I'm here to help!</p>