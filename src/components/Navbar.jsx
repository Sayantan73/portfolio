import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import Scroll, { Link } from 'react-scroll'
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <>
      <div id='home'>
        <Scroll.ScrollLink
          to="#contact"
          spy={true}
          smooth={true}
          duration={500}
        ></Scroll.ScrollLink>
        <div className="bg-black text-gray-400 mx-auto flex justify-between items-center">
          <h1 className='text-3xl font-bold primary-color ml-4'>S. KARAN</h1>
          <ul className='hidden md:flex'>
            <li className='p-5'><a href="#home">Home</a></li>
            <li className='p-5'><a href="#about">About</a></li>
            <li className='p-5'><a href="#work">Work</a></li>
            <li className='p-5'><a href="#contact">Contact</a></li>
          </ul>
          <div className='block md:hidden mr-6' onClick={handleNav}>
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
          <div className={nav ? 'z-10 fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500' : 'fixed -left-full'}>
            <h1 className='text-3xl font-bold primary-color m-4'>S. KARAN</h1>
            <ul className='p-8 text-2xl'>
              <li className='p-5'><a href="#nav">Home</a></li>
              <li className='p-5'><a href="#about">About</a></li>
              <li className='p-5'><a href="#work">Work</a></li>
              <li className='p-5'> <Link to="contact"> Contact </Link></li>
            </ul>

          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar

