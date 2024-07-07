import React from 'react';
import resume from '../assets/resume.pdf'
import {TypeAnimation} from 'react-type-animation';

const Hero = () => {
  return (
    <>
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8  md:h-[70vh] max-w-[1200px] mx-auto py-8 bg-black'>
      <div className="col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]">
            <img className='rounded-2xl' src="https://media.licdn.com/dms/image/C5603AQGHdtcnmVcHMA/profile-displayphoto-shrink_800_800/0/1660932510302?e=2147483647&v=beta&t=VmhtFL_dkG3NYkNFtWshPlvj82_9rowGm56wJ4h-r8E" alt="hero" />
      </div>
      <div className='col-span-2 mx-5 my-auto'>
        <h1 className='text-white text-4xl sm:text-5xl lg:text-7xl font-extrabold'>
            <span className="primary-color">
                I'm a
            </span> <br />
            <TypeAnimation
            sequence={[
                "Programmer",1000,
                "Front-end Developer",1000,
                "Web-designer",1000,
            ]}
            wrapper='span'
            speed={50}
            repeat={Infinity}
            />
        </h1>
        <p className='text-white sm:text-lg my-6 lg:text-xl'>
            My name is Sayantan Karan, I am a BTech student at Cooch Behar Government Engineering College
        </p>
        <div className="my-8">
            <a className='px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white' href={resume}>Download Cv</a>
            <a className='px-6 py-3 w-full rounded-xl mr-4 border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500 hover:border-none text-white' href="mailto: sayantankaran73@gmail.com">contact</a>
        </div>
      </div>
    </div>
    </>
  )
}

export default Hero
