import React from 'react'

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
        <img className='mx-auto rounded-3xl py-8 md:py-0' src="https://scontent.fccu5-1.fna.fbcdn.net/v/t1.6435-9/138060439_1179940282424375_8323365154740216426_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=RdL4vtsD9WcAb4ERXMw&_nc_ht=scontent.fccu5-1.fna&oh=00_AfCuzfi7aBCB7oJSgW21vVh7IDH_vyyMW1lm6bbpgwbu0A&oe=6637EC9F" alt="" width={300} height={300} />
      </div>
    </div>
    </>
  )
}

export default About
