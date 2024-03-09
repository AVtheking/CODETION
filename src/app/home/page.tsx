// pages/index.js
"use client"


import React from 'react';


import logo from "../../../public/logo.svg";
import Image from 'next/image'



export default function HomePage() {
    return (
        <div className="flex justify-center  h-full w-full  bg-headingColor">
            <div className='flex flex-col h-5/6 w-5/6 mt-24  border border-gray-60 rounded-[42px]  backdrop-blur-sm bg-white/30 p-10'>
                <div className="flex bg-[#222222]  h-[80px] rounded-[20px]  drop-shadow-lg shadow-[#273F40] flex-row p-5 justify-between  ">
                    <div className=" items-start   flex flex-row">
                        <Image src={logo} alt="logo" width={70} height={70} />
                        <h1 className="text-3xl items-center ml-2 mt-1 font-mono font-semibold">
                            <span className="text-headingColor">Code</span>
                            <span className="text-white">tion</span>
                        </h1>
                    </div>
                    <div className="flex justify-between ">
                        <button className="px-8 text-2xl font-montserrat text-white rounded-md hover:text-headingColor">Courses</button>
                        <button className="px-8 text-2xl font-montserrat text-white rounded-md hover:text-headingColor">Practices</button>
                        <button className="px-8 text-2xl font-montserrat text-white rounded-md hover:text-headingColor">Sign Up</button>
                        <button className="px-8 text-2xl font-montserrat text-white rounded-md hover:bg-headingColor bg-gray-600">Sign Up</button>
                    </div>
                </div>
                <div className='mt-40 '>
                    <h1 className='text-6xl font-'>
                    Elevate Your Skills <br/>
                     with Every Line of Code
                    </h1>
                    
                    <h4 className='text-4xl font-montserrat mt-7'>
                    Welcome to a coding experience like no<br/> other ,where every line of code propels you <br/>towards mastery and achievement.
                    </h4>

                </div>
                <button className=' h-[68px] w-[260px] bg-yellow-400 rounded-[24px] mt-8'> <p className='font-montserrat text-4xl'>Join Now</p></button>
            </div> 
        </div>
    );
}

