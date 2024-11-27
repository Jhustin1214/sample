import React from 'react'
import yoavaziztKCd from '../assets/yoavaziztKCd.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[300px] mx-auto my-4' src={yoavaziztKCd} alt="/" />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold text-2xl'>Night at Tokyo</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Visit amazing place</h1>
                <p className=''>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Visit now</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics