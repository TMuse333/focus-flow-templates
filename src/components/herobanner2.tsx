"use client"

import { motion } from 'framer-motion'

import { FadeInFromLeftText,TypeAlongText } from 'focusflow-components'
import { useState } from 'react'
import Image from 'next/image'

interface FullImageHeroProps {
  heroImage: string; // Image URL or path
  headingText: string; // Text for the heading (h1)
  subHeadingText: string; // Text for the subheading (p)
  buttonText: string; // Text for the button
  keywords: string[]; // Keywords for the TypeAlongText component
  onButtonClick?: () => void; // Optional handler for button click
}

export const FullImageHero = ({ 
  heroImage, 
  headingText, 
  subHeadingText, 
  buttonText, 
  keywords, 
  onButtonClick 
}: FullImageHeroProps) => {

  const [h1Complete, setH1Complete] = useState(false);

  return (
    <>
      <header 
        id='home'
        className='w-screen min-h-[500px] h-[75vh] text-center text-gray-200 relative flex flex-col items-center justify-center transition-colors duration-1000 relative'
        role='banner'
        aria-label='Experience the Assante Advantage'
      >
        <Image 
          className='w-full h-full object-cover absolute z-[1] brightness-[0.5]'
          src={heroImage}
          alt='Hero Image'
          width={600}
          height={1300}
        />

        <section className='relative z-[2] mb-auto mt-auto  mx-auto
       px-4 max-w-[1000px] text-left'>

            <motion.h1 className='text-md sm:text-lg
            font-semibold md:text-xl'>
                insert seo cheese here
            </motion.h1>

          <TypeAlongText
          
            styles='text-4xl sm:text-5xl md:text-6xl text-white  font-bold 
            whitespace-pre-line pb-4 mt-4' 
            text={headingText}
            keywords={keywords}
            startAnimation
            setAnimationComplete={setH1Complete}
          />
          <FadeInFromLeftText
            className='text-xl mt-4 sm:text-2xl md:text-3xl font- text-left'
            text={subHeadingText}
          
            startAnimation={h1Complete}
          />
          
          <motion.button
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1,
              transition: {
                delay: 1,
                ease: 'easeIn'
              },
            }}
            onClick={onButtonClick}
            className='bg-gray-300 rounded-2xl p-4 text-black mt-8 hover:scale-[1.1] hover:bg-component-color hover:text-black transition-all mr-auto'
          >
            {buttonText}
          </motion.button>
        </section>
      </header>
    </>
  );
}