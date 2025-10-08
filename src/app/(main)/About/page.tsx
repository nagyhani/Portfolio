import Image from 'next/image'
import React from 'react'
import  AnimatedContent  from '@/components/AnimatedContent';
export default function About() {
  return (

<>


<div className='bg-neutral-950 text-white min-h-screen '>

  


<AnimatedContent
          distance={150}
          direction="horizontal"
          reverse={false}
          duration={1.2}
          ease="bounce.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={0.3}  onComplete={undefined}>
     
</AnimatedContent>

   
    </div>

</>
    
  )
}
