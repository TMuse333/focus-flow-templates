

import React, { useEffect, useRef, useState } from "react";
import { delay, motion, useAnimation, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export interface Element {
  number: number;
  title: string;
  description: string;
  inView?:boolean,
  index?:number

}

const CircleStep = ({ number, title, description,
inView,index }: Element) => {
  const controls = useAnimation();

  useEffect(() => {
    if (inView && index) {
      const timer = setTimeout(() => {
        controls.start("visible");
      }, 300 + (index * 9000)); // Delay of 300ms

      // Cleanup the timer in case the component is unmounted before the delay
      return () => clearTimeout(timer);
    } else {
      controls.start("hidden");
    }
  }, [inView, controls, index]); // Trigger the effect whenever `inView` changes



const delay =  ( index ?index * 1 : 0)
  

  return (
<>
     
      
<div className="relative w-[100px] h-[100px] flex items-center justify-center mb-4">
  <motion.svg width="100" height="100" viewBox="0 0 100 100">
    <motion.circle
    className="z-[400] w-full h-full"
      cx="50"
      cy="50"
      r="45"
      stroke="#000"
      strokeWidth="4"
      fill="none"
      strokeDasharray="282.6"
      strokeDashoffset="282.6"
      variants={{
        hidden: { strokeDashoffset: 282.6 },
        visible: {
          strokeDashoffset: 0,
          transition: { duration: 0.76, delay: delay, ease: "easeOut" },
        },
      }}
    />
  </motion.svg>

  {/* Centered Number */}
  <motion.div
    className="absolute inset-0 flex items-center justify-center text-3xl font-bold"
    variants={{
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { delay: 1 + delay, duration: 0.5 },
      },
    }}
  >
    {number}
  </motion.div>
</div>


      {/* Title */}
      <motion.h3
        className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6
        md:px-6 w-[40vw]"
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { delay: 1.3 + delay , duration: 0.5 },
          },
        }}
      >
        {title}
      </motion.h3>

      {/* Description */}
      <motion.p
        className="text-sm sm:text-md md:text-lg text-left  mt-2 
        max-w-[350px]
        "
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { delay: 1.6 + delay , duration: 0.5 },
          },
        }}
      >
        {description}
      </motion.p>
      </>

  );
};

export interface CircleStepsProps {
    steps:Element[],
    boxColor:string,
    bgColor?:string,
    title:string,
    description:string,
    textColor?:string
}

 const CircleSteps = ({ steps,boxColor,
bgColor,title,description,textColor }:CircleStepsProps):React.JSX.Element => {

    
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;

    if (!container || !track) return;

    gsap.to(track, {
      x: () => -(track.scrollWidth - container.clientWidth),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${track.scrollWidth}`,
        pin: true,
        scrub: true,
        markers: false,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

const ref= useRef(null)

const inView = useInView(containerRef,{
    amount:0.2
   
})

useEffect(()=>{
    console.log('in view', inView)
},[inView])

const variants = (delay: number) => {
    return {
      hidden: {
        opacity: 0,
        y: -40,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          delay,
          duration: 0.5,
          ease: "easeOut",
        },
      },
    };
  };
  

  return (
    <section ref={ref}
    key={1}
    className={`mt-[12rem] ${bgColor ? `${bgColor}` : ''}`}>
      <h2 
      
      className="text-4xl sm:text-6xl text-center font-bold pb-6">
        {title}</h2>

        <p
        className="px-4 text-center sm:text-lg md:text-xl"
        
        >
            {description}
            </p>
      <div ref={containerRef} className="relative w-screen h-[100vh] overflow-hidden z-10">
        <div
          ref={trackRef}
          key={2}
          className="flex w-max h-full items-center justify-start space-x-10 px-10"
        >
          {steps.map((step, index) => (
       
                <motion.div
                key={index}
                className={`${textColor ? `${textColor}` : ''}flex flex-col items-center justify-center text-center relative mx-8 my-6 
                ${boxColor} py-12 rounded-2xl  h-[70vh] 
                `}
         
                id={`${step.title}-step`}
                variants={variants(index * 1.4 )}
                initial='hidden'
                animate={inView ? 'visible' : 'hidden'}
                
              >
            <CircleStep 
            inView={inView}
            index={index}
             {...step} />
            </motion.div>
        
          ))}
        </div>
      </div>
    </section>
  );
};


export default CircleSteps
