"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export interface AnimatedContentProps {
  distance?: number;
  direction?: "vertical" | "horizontal";
  reverse?: boolean;
  duration?: number;
  ease?: string;
  initialOpacity?: number;
  animateOpacity?: boolean;
  scale?: number;
  threshold?: number;
  delay?: number;
  onComplete?: () => void;
  children?: React.ReactNode;
  className?: string;
}

const AnimatedContent: React.FC<AnimatedContentProps> = ({
  children,
  distance = 100,
  direction = "vertical",
  reverse = false,
  duration = 0.8,
  ease = "power3.out",
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.1,
  delay = 0,
  onComplete,
  className,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration,
        ease,
        delay,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "bottom top",
          scrub: 1.5,
          toggleActions: "play reverse play reverse",
        },
        onComplete,
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.killTweensOf(el);
    };
  }, [
    distance,
    direction,
    reverse,
    duration,
    ease,
    initialOpacity,
    animateOpacity,
    scale,
    threshold,
    delay,
    onComplete,
  ]);

  return (

    <>

     <h1 className='text-5xl font-bold text-center py-12'>About</h1>

      <div ref={ref} className={className ?? "flex flex-col lg:flex-row justify-between items-center px-12"}>
      {/* You can use children OR put internal content here */}
      {children ?? (
        <>
       
          <div className="flex justify-center  md:justify-start">
            <Image
              src="/profile.jpeg"
              alt="Profile"
              width={400}
              height={400}
              className="rounded-2xl shadow-lg"
            />
          </div>

          <div className="mt-10 lg:mt-0 md:ps-12 text-center lg:text-left">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Front-End Developer</h2>
            <p className="text-lg text-gray-200 max-w-2xl leading-relaxed">
            Front-End Developer with a strong passion for transforming creative ideas into engaging and seamless web user interfaces. I have established a solid foundation in JavaScript & modern frameworks like React, along with libraries such as jQuery. I mastered HTML5, CSS3 and CSS frameworks like Tailwind CSS and Bootstrap. I believe in the importance of continuous learning and always seek to explore the latest technologies and best practices in web development.
            </p>
          </div>
        </>
      )}
    </div>
    
    </>
    
   
  );
};

export default AnimatedContent;
