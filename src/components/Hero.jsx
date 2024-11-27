import React from 'react';
import { ReactTyped } from 'react-typed';

const Hero = () => {
    return (
        <div className='text-white'>
            <div className='max-w[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='md:text-7xl sm:text-6xl text-5xl font-bold'>Welcome to</p>
                <h1 className='md:text-5xl sm:text-4xl text-4xl text-[#00df9a] font-bold md:py-6'>Tokyo Japan</h1>
                <div className='flex justify-center items-center'>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
                      Visit
                    </p>
                    <ReactTyped 
                      className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
                      strings={['Ginza', 'Shinjuku', 'Shibuya']}
                      typeSpeed={120}
                      backSpeed={140}
                      loop 
                      />
                </div>
                <p className='w-[60%] mx-auto items-center md:text-2xl text-xl font-bold text-gray-500'>Tokyo offers a wide array of tourist spots that blend the old with the new. Here are some of the most popular tourist spots in the city.</p>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Learn more</button>
            </div>
        </div>
    )
}

export default Hero