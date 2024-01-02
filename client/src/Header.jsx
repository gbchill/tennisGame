// Import necessary dependencies and components from React and other modules
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";


// Define the Header component responsible for the site's top navigation
export default function Header() {
    // Access the user data from the UserContext using useContext
    const { user } = useContext(UserContext);

    return (
       
        <header className="flex p-5 font-semibold justify-between">
            {/* Logo and site title */}
            <div className="text-2xl flex">
                <Link to={'/'} className="flex items-center gap-1">
                    <div className="text-primary font-semibold ">
                        {/* Logo SVG */}

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                        </svg>

                    </div>
                    RetireWise
                </Link>
            </div>

            {/* Search and filter options */}
            <div className="  h-12 flex border border-gray-300 rounded-full px-20  gap-10 shadow-md shadow-gray-350">
                {/* Display search and filter options */}
                <div className=" flex items-center font-semibold "><Link className="" to={'/games'}> Game</Link></div>
                <div className="border-l border-gray-300"></div>
            </div>

            {/* User profile and notification */}
            <Link to={'/account'} className=" h-12 flex items-center border border-gray-300 rounded-full py-2 px-2 gap-3 ">
                {/* Icon for user profile and notification */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <div className="bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden">
                    {/* Icon for user profile image */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 relative top-1">
                        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                    </svg>
                </div>
                {/* Display user name if user is logged in */}
                {!!user && (
                    <div className="font-semibold">
                        {user.name}
                    </div>
                )}
            </Link>
        </header>
    )
}
