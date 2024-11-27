import React from 'react';
import {
    FaFacebookSquare,
    FaInstagram,
    FaTwitterSquare,
    FaYoutubeSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Tokyo.</h1>
            <p className='py-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className='flex justify-between md:w-[75%] my-6'>
                <FaFacebookSquare size={30} />
                <FaInstagram size={30} />
                <FaTwitterSquare size={30} />
                <FaYoutubeSquare size={30} />
            </div>
        </div>
            <div className='lg:col-span-2 flex justify-between'>
            <div>
                <h6 className='font-medium'>Lorem ipsum</h6>
                    <ul>
                        <li className='py-2 text-sm'>Lorem ipsum</li>
                        <li className='py-2 text-sm'>Lorem ipsum</li>
                        <li className='py-2 text-sm'>Lorem ipsum</li>
                    </ul>
            </div>
            <div>
                <h6 className='font-medium'>Lorem ipsum</h6>
                    <ul>
                        <li className='py-2 text-sm'>Lorem ipsum</li>
                        <li className='py-2 text-sm'>Lorem ipsum</li>
                        <li className='py-2 text-sm'>Lorem ipsum</li>
                    </ul>
            </div>
            <div>
                <h6 className='font-medium'>Lorem ipsum</h6>
                    <ul>
                        <li className='py-2 text-sm'>Lorem ipsum</li>
                        <li className='py-2 text-sm'>Lorem ipsum</li>
                        <li className='py-2 text-sm'>Lorem ipsum</li>
                    </ul>
            </div>
        </div>
    </div>
  );
};

export default Footer;