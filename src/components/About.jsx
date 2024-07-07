import React from 'react'
import aboutPhoto from '../assets/sayantanAbout.jpg'

const About = () => {
  return (
    <>
    <div className='text-white max-w-[1200px] mx-auto my-12' id='about'>
      <div className="md:grid md:grid-cols-2 sm:py-16">

        <div className="mt-4 md:mt-0 text-left flex justify-start">
            <div className="my-auto mx-6">
                <h2 className='text-4xl font-bold mb-4 primary-color'>About Me</h2>
                <p className='text-base lg:text-lg'>Student at Cooch Behar Government Engineering College branch Computer Science and Engineering batch 2024. <br /> <br />

I am proficient in web development technologies like JavaScript, React, Node, Express, API, SQL, MongoDB, HTML/CSS, Tailwind, Bootstrap, Java, DSA . <br /> <br />

Looking for opportunities to explore more technologys and skills which can eventually helpful to grow in this field.</p>
            </div>
        </div>
        <img className='mx-auto rounded-3xl py-8 md:py-0' src="aboutPhoto" alt="sayantan karan picture" width={300} height={300} />
      </div>
    </div>
    </>
  )
}

export default About
