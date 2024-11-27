import React, { useState, useEffect, useRef } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const sidebarRef = useRef(null) // Create a ref for the sidebar
    const navbarRef = useRef(null) // Create a ref for the navbar container

    const handleNav = () => {
        setNav(!nav)
    }

    // Disable scroll when the sidebar is open
    useEffect(() => {
        if (nav) {
            // Disable scroll
            document.body.style.overflow = 'hidden'
        } else {
            // Enable scroll
            document.body.style.overflow = 'auto'
        }

        // Cleanup function to reset overflow on component unmount
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [nav]) // This will run every time `nav` state changes

    // Close the sidebar if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target) && !navbarRef.current.contains(event.target)) {
                setNav(false) // Close the sidebar
            }
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <div ref={navbarRef} className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Tokyo.</h1>
            <ul className='hidden md:flex'>
                <li className='p-4'>Price</li>
                <li className='p-4'>Tour</li>
                <li className='p-4'>History</li>
                <li className='p-4'>Contact</li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <div
                ref={sidebarRef} // Attach the sidebar ref
                className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}
            >
                <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>Tokyo.</h1>
                <ul className='uppercase p-4'>
                    <li className='p-4 border-b border-gray-600'>Price</li>
                    <li className='p-4 border-b border-gray-600'>Tour</li>
                    <li className='p-4 border-b border-gray-600'>History</li>
                    <li className='p-4'>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar