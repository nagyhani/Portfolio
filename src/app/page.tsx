'use client'

import React from 'react'
import Split from './(main)/split/Split'
import Type from './(main)/Type/Type'
import ParticlesImage from './(main)/Particles/Particles'
import About from './(main)/About/page'
import Skills from './(main)/Skills/page'
import Projects from './(main)/Projects/page'
import Footer from './Components/Footer/Footer'





export default function page() {


  return (
   
   
   
  <>
  <div className="relative w-full h-[650px]">
    <ParticlesImage />

    <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/60 z-10 text-white p-3">
      <Split />
      <h1 className="text-5xl font-extrabold my-5 text-blue-600 text-center">
        Nagy Hani Botros
      </h1>
      <Type />
      <span className="max-w-2xl text-center mt-6">
        I create responsive and interactive web interfaces using modern technologies like React, Tailwind CSS, and Bootstrap.
      </span>
    </div>
    <About/>
    <Skills/>
    <Projects/>
    <Footer/>
  </div>

  
</>

   
   
  )
}
