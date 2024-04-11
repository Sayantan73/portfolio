import React from 'react'

const Footer = () => {
    let date = new Date();
  return (
    <>
    <div className='max-w-[1200px] sm:h-[150px] p-12 flex justify-between mx-auto'>
      <span className='primary-color'>S. Karan</span>
      <p className='text-gray-600'>© Copyright  {date.getFullYear()}  S Karan. All rights reserved</p>
    </div>
    </>
  )
}

export default Footer
