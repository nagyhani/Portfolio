import React from 'react'

export default function Footer() {
  return (
    <div className='bg-neutral-900 p-16 flex flex-col items-center'>

        <div>
           <a target='_blank' href="https://www.facebook.com/nagy.hany.98"> <i className="fa-brands fa-facebook text-2xl text-white hover:text-blue-600"></i></a>
           <a href="https://www.instagram.com/nagi_hany/" target='_blank'> <i className="fa-brands fa-instagram text-2xl text-white hover:text-blue-600 mx-1.5"></i></a>
          <a href="https://www.linkedin.com/in/nagy-hani-544b99302/" target='_blank'>  <i className="fa-brands fa-linkedin text-2xl text-white hover:text-blue-600"></i></a>
          <a href="https://github.com/nagyhani" target='_blank'>  <i className="fa-brands fa-square-github text-2xl text-white hover:text-blue-600 mx-1.5"></i></a>

        </div>

        <div className='flex mt-10'><i className="fa-solid fa-phone text-xl text-white"></i> <p className='text-xl text-white mx-1.5'>+20 1558373663</p> </div>
         <div className='flex mt-5'><i className="fa-solid fa-location-dot text-xl text-white"></i> <p className='text-xl text-white mx-1.5'>Cairo, Egypt</p> </div>

         <hr className='w-full my-4 text-white'/>

         <p className='text-xl text-white mx-1.5'>© 2025 Nagy Hani. All rights reserved.</p>

    </div>
  )
}
