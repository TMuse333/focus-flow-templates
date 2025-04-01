"use client"
import { LandingPage1 } from 'focusflow-components'
import "focusflow-components/dist/index.css";
import React from 'react'
import { landingPage1Data } from '@/data/pageData'
import { FullImageHero } from '@/components/herobanner2'
import { countUpData, ImageAspectsData, parallaxData, TextAndListData, verticalBoxData,
    threeBoxHeroData, 
    fullBodyHeroData,
    carouselHeroTestData,
    heroBanner2Data,
    imageLogoHero,
    experienceCardData,
    imageTextBoxData,testimonialsDatas,
    displayBoxData,
    FullImageDisplayData,
    featureBoxData, carouselGridData,
    carouselData,
    priceCardData} from "@/data/data";
const Lander = () => {


    return (
        <>
       
        <LandingPage1
      {...landingPage1Data}
   
      textColor='text-black'
      bgColor='bg-gray-300'
  
        />
 
        
        </>
    )
}

export default Lander