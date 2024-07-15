'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };




    return (
        <nav className="bg-red-600 text-white sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center  py-5">

                    <div className="flex justify-between items-center  w-full">
                        <div className="text-xl font-bold w-28"><Image
                            width={10000}
                            height={100}
                            src="/images/npp-logo2.png"
                            alt="logo"
                        /></div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4 font-semibold">
                                <a href="#home" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm ">Home</a>
                                <a href="#about" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm ">About</a>
                                <a href="#donate" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm ">Donate</a>
                                <a href="#campaign" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm ">Campaign</a>
                            </div>
                        </div>
                        <a href="#donate">
                            <button className='h-fit px-6 py-3 bg-blue-900 rounded-lg mr-4 sm:mr-0'>Donate</button>
                        </a>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            )}
                        </button>
                    </div>

                </div>
            </div>

            <div className={`${isOpen ? 'block opacity-100 transition-opacity ' : 'hidden'} md:hidden fixed top-23 opacity-0   right-0 bg-white/50 backdrop-blur-2xl  z-50 w-[50%] h-[100vh]`} id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-blue-900">
                    <a href="#home" className="hover:bg-gray-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
                    <a href="#about" className="hover:bg-gray-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</a>
                    <a href="#donate" className="hover:bg-gray-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Donate</a>
                    <a href="#campaign" className="hover:bg-gray-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Campaign</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
