import React, { useState, useEffect } from 'react';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

export default function GamePage() {
    const [bankBalance] = useState(10000);
    const [stockInvested, setStockInvested] = useState(0);
    const [mutualFundInvested, setMutualFundInvested] = useState(0);
    const [bondInvested, setBondInvested] = useState(0);
    const [amountToInvestStock, setAmountToInvestStock] = useState(0);
    const [amountToInvestMutualFund, setAmountToInvestMutualFund] = useState(0);
    const [amountToInvestBond, setAmountToInvestBond] = useState(0);
    const [counter, setCounter] = useState(20); // Initialize the counter to 20
    const [displayedImage, setDisplayedImage] = useState(null);
    const [totalMoneyMade, setTotalMoneyMade] = useState(0);
    const [showNextButton, setShowNextButton] = useState(false);

    const calculateTotalMoneyMade = () => {
        const moneyMade = stockInvested + mutualFundInvested + bondInvested;
        setTotalMoneyMade(moneyMade);
    };

    useEffect(() => {
        if (counter >= 60) {
            if (bankBalance >= 1000000) {
                alert(`You won $${bankBalance - 1000000}!`);
            } else {
                alert(`You were fine since you earned $${bankBalance}.`);
            }
            calculateTotalMoneyMade();
        }
    }, [counter, bankBalance]);

    const loadRandomImage = () => {
        const imageUrls = [
            'https://dwptxtcjzzofa.cloudfront.net/webp/fm48v9f/gs-daily-bar-graph.webp',
            'https://97286c.a2cdn1.secureserver.net/images/2009-01/ohlc_2003_01.png',
            'https://priceactiontoolbar.com/assets/images/2021-03-24-how-to-setup-a-clean-trading-chart/newchart.png',
            'https://www.investopedia.com/thmb/rb9p2S6SIxjDPrBWkNjSx4gf_Xg=/2774x0/filters:no_upscale():max_bytes(150000):strip_icc()/dotdash_Final_Introductio_to_Technical_Analysis_Price_Patterns_Sep_2020-05-437d981a36724a8c9892a7806d2315ec.jpg',
            // Add more image URLs
        ];

        const randomIndex = Math.floor(Math.random() * imageUrls.length);
        const selectedImageUrl = imageUrls[randomIndex];

        const img = new Image();
        img.src = selectedImageUrl;
        img.onload = () => {
            setDisplayedImage(selectedImageUrl);
        };
    };

    const handleInvest = () => {
        const stockReturn = 1.1;
        const mutualFundReturn = 1.2;
        const bondReturn = Math.random() * 0.5 + 1.5;

        setStockInvested(stockInvested + amountToInvestStock);
        setMutualFundInvested(mutualFundInvested + amountToInvestMutualFund);
        setBondInvested(bondInvested + amountToInvestBond);

        const totalInvestment = amountToInvestStock + amountToInvestMutualFund + amountToInvestBond;
        const returnAmount = totalInvestment * ((amountToInvestStock * stockReturn + amountToInvestMutualFund * mutualFundReturn + amountToInvestBond * bondReturn) / totalInvestment);

        const moneyMade = totalMoneyMade + returnAmount;
        setTotalMoneyMade(moneyMade);

        setCounter((prevCounter) => prevCounter + 5); // Increment the counter by 5

        setAmountToInvestStock(0);
        setAmountToInvestMutualFund(0);
        setAmountToInvestBond(0);

        setShowNextButton(true);

        loadRandomImage(); // Load a new random image after investment
    };

    const handleNextButtonClick = () => {
        window.location.href = 'http://localhost:5174/quizzes';
    };

    return (
        <div className='min-h-screen bg-gradient-to-b from-blue-700 to-blue-900 text-white flex flex-col'>
            <NavBar />
            <div className='flex flex-col justify-center items-center'>
                <h1 className="text-white pt-10 font-semibold text-4xl ml-10  ">Life Simulator</h1>
                <p className="text-white pt-5 pb-20">Welcome to <b>Life Simulator</b>! Live your life and make decisions. See how much you can save up by the time you retire!</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h1 className="text-white pb-10 ml-10 text-xl">Investment Options</h1>
                <div className='flex flex-row justify-center items-center gap-5'>
                    <div className="investment-option">
                        <label className=" p-5  " htmlFor="stock">Stock</label>
                        <input className='text-black'
                            type="text"
                            placeholder="Invest in Stock"
                            value={amountToInvestStock}
                            onChange={(e) => setAmountToInvestStock(parseFloat(e.target.value))}
                            style={{ border: '1px solid cyan', padding: '5px' }}
                        />
                        <p>Invest in Stock</p>
                    </div>
                    <div className="investment-option">
                        <label className="text-white m-4" htmlFor="mutualFund">Mutual Fund</label>
                        <input className='text-black'
                            type="text"
                            placeholder="Invest in Mutual Fund"
                            value={amountToInvestMutualFund}
                            onChange={(e) => setAmountToInvestMutualFund(parseFloat(e.target.value))}
                            style={{ border: '1px solid cyan', padding: '5px' }}
                        />
                        <p>Invest in Mutual Fund</p>
                    </div>
                    <div className="investment-option">
                        <label className="text-white p-5 " htmlFor="bond">Bond</label>
                        <input className='text-black'
                            type="text"
                            placeholder="Invest in Bond"
                            value={amountToInvestBond}
                            onChange={(e) => setAmountToInvestBond(parseFloat(e.target.value))}
                            style={{ border: '1px solid cyan', padding: '5px' }}
                        />
                        <p>Invest in Bond</p>
                    </div>
                    <div>
                        <button className='text-white'

                            onClick={handleInvest}
                        >
                            Buy
                        </button>
                    </div>
                </div>
                <div className="pt-10 pl-14 ml-6  text-white flex flex-col items-center">
                    <div className="flex flex-col space-y-1">
                        <p>Bank Balance: ${bankBalance.toFixed(2)}</p>
                        <p>Return from Stock: ${stockInvested.toFixed(2)}</p>
                        <p>Return from Mutual Fund: ${mutualFundInvested.toFixed(2)}</p>
                        <p>Return from Bond: ${bondInvested.toFixed(2)}</p>
                        <p>Total Money Made: ${totalMoneyMade.toFixed(2)}</p>
                        <p>Counter: {counter} Years</p>
                    </div>
                </div>
                <div className='mt-5'>
                    {showNextButton && (
                        <button
                            style={{ color: 'white' }}
                            onClick={handleNextButtonClick}
                        >
                            Next
                        </button>
                    )}
                </div>
                {displayedImage && (
                    <div className='mt-5'>
                        <img
                            src={displayedImage}
                            alt="Displayed Image"
                            width="400"
                            height="300"
                        />
                    </div>
                )}


            </div>
        </div>
    );
}