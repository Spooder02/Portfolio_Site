"use client"

import Link from "next/link";
import { useState } from "react";

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);
  
    const handleClick = () => {
        setIsOpen((prev) => !prev); // useState에 바로 업데이트를 위해서는 파라미터를 통해 상태 받아온 후 업데이트
    };

    return (
        <div>
            <div className="w-screen flex max-sm:justify-between sm:justify-around p-4 shadow-md opacity-75">
            <Link href="/" className="font-semibold text-lg">Portfolio</Link>
            <Link href="/introduction" className="max-sm:hidden">Introduction</Link>
            <Link href="/works" className="max-sm:hidden">Works</Link>
            <Link href="/contact" className="max-sm:hidden">Contact</Link>
            <button onClick={handleClick}
            className="max-sm:flex flex-col justify-center items-center sm:hidden">
                <span className={`bg-gray-500 block transition-all duration-300 ease-out 
                                h-0.5 w-6 rounded-sm ${isOpen ? 
                                'rotate-45 translate-y-1' : '-translate-y-0.5'
                                }`} >
                </span>
                <span className={`bg-gray-500 block transition-all duration-300 ease-out 
                                h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 
                                'opacity-0' : 'opacity-100'
                                }`}>
                </span>
                <span className={`bg-gray-500 block transition-all duration-300 ease-out 
                                h-0.5 w-6 rounded-sm ${isOpen ? 
                                '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                                }`} >
                </span>
            </button>
            </div>
            <div className={`${isOpen? 'w-11/12 flex flex-col justify-center items-center bg-gray-200 font-medium rounded-md mt-2 m-auto py-4': 'hidden'}`}>
                <Link href="/introduction" className="p-2 rounded hover:bg-indigo-500 hover:text-white hover:translate-y-0.5 duration-300">Introduction</Link>
                <Link href="/works" className="p-2 rounded hover:bg-indigo-500 hover:text-white hover:translate-y-0.5 duration-300">Works</Link>
                <Link href="/contact" className="p-2 rounded hover:bg-indigo-500 hover:text-white hover:translate-y-0.5 duration-300">Contact</Link>
            </div>
        </div>   
    )
}

export default NavBar;