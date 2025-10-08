import FadeContent from '@/components/FadeContent'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export default function Projects() {
  return (

    <div className='bg-neutral-950  text-white p-16 '>

         <h1 className='text-5xl font-bold text-center py-12'>My Projects</h1>

         <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0} >

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-7'>

        <div className="flex justify-center  md:justify-start relative overflow-hidden group">
            <Image className="transition-all duration-500 group-hover:brightness-75" src={'/Daniels.jpg'} alt='Bookmark' width={400} height={250}/>
            <Button className='bg-blue-600 absolute cursor-pointer ml-3 lg:ml-0 left-7/12 lg:left-6/12 -translate-x-1/2 -translate-y-1/2 top-56 transition-all duration-500 group-hover:top-1/2'>
              <a target='_blank' href="https://nagyhani.github.io/Daniels/">  <i className="fa-solid fa-eye"></i></a>
            </Button>

             <Button className='bg-blue-600 absolute cursor-pointer left-5/12 lg:left-4/12 -translate-x-1/2 -translate-y-1/2 top-56 transition-all duration-500 group-hover:top-1/2'>
            <a target='_blank' href="https://github.com/nagyhani/Daniels"><i className="fa-brands fa-github"></i></a> 
            </Button>
        </div>

         <div className="flex justify-center  md:justify-start relative overflow-hidden group ">
            <Image className="transition-all duration-500 group-hover:brightness-75" src={'/Bookmark.jpg'} alt='Bookmark' width={400} height={250}/>
              <Button className='bg-blue-600 absolute cursor-pointer ml-3 lg:ml-0 left-7/12 lg:left-6/12 -translate-x-1/2 -translate-y-1/2 top-56 transition-all duration-500 group-hover:top-1/2'>
              <a target='_blank' href="https://nagyhani.github.io/Bookmark/">  <i className="fa-solid fa-eye"></i></a>
            </Button>

             <Button className='bg-blue-600 absolute cursor-pointer left-5/12 lg:left-4/12 -translate-x-1/2 -translate-y-1/2 top-56 transition-all duration-500 group-hover:top-1/2'>
            <a target='_blank' href="https://github.com/nagyhani/Bookmark"><i className="fa-brands fa-github"></i></a> 
            </Button>
        </div>

         <div className="flex justify-center  md:justify-start relative overflow-hidden group ">
            <Image className="transition-all duration-500 group-hover:brightness-75" src={'/E-commerce.jpg'} alt='Bookmark' width={400} height={250}/>
             <Button className='bg-blue-600 absolute cursor-pointer ml-3 lg:ml-0 left-7/12 lg:left-6/12 -translate-x-1/2 -translate-y-1/2 top-56 transition-all duration-500 group-hover:top-1/2'>
              <a target='_blank' href="https://e-commerce-gules-theta-74.vercel.app/#sent/_blank">  <i className="fa-solid fa-eye"></i></a>
            </Button>

             <Button className='bg-blue-600 absolute cursor-pointer left-5/12 lg:left-4/12 -translate-x-1/2 -translate-y-1/2 top-56 transition-all duration-500 group-hover:top-1/2'>
            <a target='_blank' href="https://github.com/nagyhani/E-commerce"><i className="fa-brands fa-github"></i></a> 
            </Button>
        </div>

         <div className="flex justify-center  md:justify-start relative overflow-hidden group ">
            <Image className="transition-all duration-500 group-hover:brightness-75" src={'/GameVault.jpg'} alt='Bookmark' width={400} height={250}/>
              <Button className='bg-blue-600 absolute cursor-pointer ml-3 lg:ml-0 left-7/12 lg:left-6/12 -translate-x-1/2 -translate-y-1/2 top-56 transition-all duration-500 group-hover:top-1/2'>
              <a target='_blank' href="https://game-vault-tau-rust.vercel.app/">  <i className="fa-solid fa-eye"></i></a>
            </Button>

             <Button className='bg-blue-600 absolute cursor-pointer left-5/12 lg:left-4/12 -translate-x-1/2 -translate-y-1/2 top-56 transition-all duration-500 group-hover:top-1/2'>
            <a target='_blank' href="https://github.com/nagyhani/GameVault"><i className="fa-brands fa-github"></i></a> 
            </Button>
        </div>

         <div className="flex justify-center  md:justify-start relative overflow-hidden group ">
            <Image className="transition-all duration-500 group-hover:brightness-75" src={'/Mealify.jpg'} alt='Bookmark' width={400} height={250}/>
               <Button className='bg-blue-600 absolute cursor-pointer ml-3 lg:ml-0 left-7/12 lg:left-6/12 -translate-x-1/2 -translate-y-1/2 top-56 transition-all duration-500 group-hover:top-1/2'>
              <a target='_blank' href="https://nagyhani.github.io/Mealify/">  <i className="fa-solid fa-eye"></i></a>
            </Button>

             <Button className='bg-blue-600 absolute cursor-pointer left-5/12 lg:left-4/12 -translate-x-1/2 -translate-y-1/2 top-56 transition-all duration-500 group-hover:top-1/2'>
            <a target='_blank' href="https://github.com/nagyhani/Mealify"><i className="fa-brands fa-github"></i></a> 
            </Button>
        </div>


         <div className="flex justify-center  md:justify-start relative overflow-hidden group ">
            <Image className="transition-all duration-500 group-hover:brightness-75" src={'/Weather.jpg'} alt='Bookmark' width={400} height={250}/>
              <Button className='bg-blue-600 absolute cursor-pointer ml-3 lg:ml-0 left-7/12 lg:left-6/12 -translate-x-1/2 -translate-y-1/2 top-56 transition-all duration-500 group-hover:top-1/2'>
              <a target='_blank' href="https://nagyhani.github.io/Weather-Forecast/#sent/_blank">  <i className="fa-solid fa-eye"></i></a>
            </Button>

             <Button className='bg-blue-600 absolute cursor-pointer left-5/12 lg:left-4/12 -translate-x-1/2 -translate-y-1/2 top-56 transition-all duration-500 group-hover:top-1/2'>
            <a target='_blank' href="https://github.com/nagyhani/Weather-Forecast"><i className="fa-brands fa-github"></i></a> 
            </Button>
            
        </div>

          <div className="flex justify-center  md:justify-start relative overflow-hidden group ">
            <Image className="transition-all duration-500 group-hover:brightness-75" src={'/Quiz.jpg'} alt='Bookmark' width={400} height={250}/>
               <Button className='bg-blue-600 absolute cursor-pointer ml-3  lg:ml-0 left-7/12 lg:left-6/12 -translate-x-1/2 -translate-y-1/2 top-56 transition-all duration-500 group-hover:top-1/2'>
              <a target='_blank' href="https://nagyhani.github.io/Quiz-Website/">  <i className="fa-solid fa-eye"></i></a>
            </Button>

             <Button className='bg-blue-600 absolute cursor-pointer left-5/12 lg:left-4/12 -translate-x-1/2 -translate-y-1/2 top-56 transition-all duration-500 group-hover:top-1/2'>
            <a target='_blank' href="https://github.com/nagyhani/Quiz-Website"><i className="fa-brands fa-github"></i></a> 
            </Button>
        </div>

    </div>
 
</FadeContent>


    </div>

    
    
  )
}
