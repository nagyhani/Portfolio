import React from 'react'
import FadeContent from '@/components/FadeContent';

export default function Fade() {

    const frontSkills : {title :string , icon:string}[] = [
    {title: "HTML" , icon : "fa-brands fa-html5"},
     {title: "CSS" , icon : "fa-brands fa-css3-alt"},
      {title: "JavaScipt" , icon : "fa-brands fa-java"},
       {title: "Bootstrap" , icon : "fa-brands fa-bootstrap"},
        {title: "Tailwind CSS" , icon : "fa-solid fa-bolt"},
         {title: "React.js" , icon : "fa-brands fa-react"},
          {title: "jQuery" , icon : "fa-solid fa-bolt"},

   ]

   const otherSkills : {title :string , icon:string}[] = [
    {title: "Git/GitHub" , icon : "fa-brands fa-github"},
     {title: "Python" , icon : "fa-brands fa-python"},
      {title: "Responsive Design" , icon : "fa-solid fa-bolt"},
    

   ]
  return (
   <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0} >
   <div className='lg:flex lg:justify-around gap-10 '>
         <div className=' bg-black rounded-2xl lg:w-4/5 p-6 shadow-[0px_0px_39px_-10px_rgba(0,0,600,0.5)]'>

             <h1 className='mb-2 text-xl text-blue-600 font-bold'>Front-End Development </h1>
              <hr className='text-blue-600' />
             

            <div className='grid grid-cols-2 md:grid-cols-3 p-5 rounded-2xl gap-5'>

               
               
            {frontSkills.map((ele)=>{
                return <div className='bg-neutral-800 rounded-2xl flex flex-col justify-center items-center py-6 hover:bg-blue-600 ' key={ele.title}>
                   
                    <i className={ele.icon }></i>
                    <span className='mt-2.5 text-center'>{ele.title}</span>
                </div>
            })}



            </div>
        </div>

         <div className=' bg-black mt-5 lg:mt-0  rounded-2xl lg:w-4/5 p-6 shadow-[0px_0px_39px_-10px_rgba(0,0,600,0.5)]'>

             <h1 className='mb-2 text-xl text-blue-600 font-bold'>Other Skills </h1>
              <hr className='text-blue-600' />
             

            <div className='grid grid-cols-2 md:grid-cols-3 p-5 rounded-2xl gap-5'>

               
               
            {otherSkills.map((ele)=>{
                return <div className='bg-neutral-800 rounded-2xl flex flex-col justify-center items-center py-6 hover:bg-blue-600 ' key={ele.title}>
                   
                    <i className={ele.icon }></i>
                    <span className='mt-2.5 text-center'>{ele.title}</span>
                </div>
            })}



            </div>
        </div>
       </div>
</FadeContent>
  )
}
