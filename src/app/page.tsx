"use client"

import Image from "next/image";
import img from '../../public/vercel.svg'
import {ExperienceCard,ImageAspects,ImageTextBox,TextAndList,
  CountUpImageTextBox,
  ParallaxText, 
  AppearingGradient,
  VerticalImageTextBox,
  FullBodyHero, CarouselHero,ThreeBoxHero,
  ImageLogoHero,
  FullImageDisplay,
  FeatureBoxes,
  Carousel,
  CarouselGrid,
  SlideShowCarousel,
  PriceCards,
  LandingPage1
  // SlidingText
  // TypeWriter
} from 'focusflow-components'
import TypeWriter from "@/components/typerTest";
// import Test from "@/components/test";
import { countUpData, ImageAspectsData, parallaxData, TextAndListData, verticalBoxData,
threeBoxHeroData, 
fullBodyHeroData,
carouselHeroTestData,
heroBanner2Data,
imageLogoHero,
displayBoxData,
FullImageDisplayData,
featureBoxData, carouselGridData,
carouselData,
priceCardData} from "@/data/data";

// import ColorPalette from "@/components/typerTest";
// import Herobanner from "@/components/test";
// import { FullImageHero } from "@/components/herobanner2";
// import DisplayBoxes from "@/components/test";
// import Link from "next/link";
// import InteractiveBoxes from "@/components/typerTest";
// import SlidingText from "@/components/test";

// import FullBodyHero from "@/components/fullBodyTest";
export default function Home() {

  const isMobile:boolean = false
  return (
  <main className="w-screen">

    {/* <ExperienceCard
    src={img}
    title='title'
    description="    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptatem iste saepe incidunt expedita, odio aut earum pariatur eum praesentium maiores facere ipsam placeat. Itaque soluta quas suscipit nesciunt ipsa sit quae voluptas in magnam, rerum explicabo. Ipsam facilis est tenetur illum distinctio voluptatem, temporibus asperiores. Rem repellendus, consequatur voluptatem suscipit atque tempora cumque enim voluptas labore nihil rerum nam!"
    aspectHeader="aspects"
    aspects={['hello','world']}
    alt='alt'
   bgColor="bg-gradient-to-br from-[#00bfff] to-orange-400"
    link="link"
    objectContain
    buttonText="button"
    /> */}

    {/* <ImageTextBox
    alt="alt"
    isMobile={false}
    objectContain
    bgColor="bg-gradient-to-br from-[#00bfff] to-orange-400"
     src={img}
     title='title'
     description="    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptatem iste saepe incidunt expedita, odio aut earum pariatur eum praesentium maiores facere ipsam placeat. Itaque soluta quas suscipit nesciunt ipsa sit quae voluptas in magnam, rerum explicabo. Ipsam facilis est tenetur illum distinctio voluptatem, temporibus asperiores. Rem repellendus, consequatur voluptatem suscipit atque tempora cumque enim voluptas labore nihil rerum nam!"
     /> */}

      {/* <TextAndList
      {...TextAndListData}
      />

      <ImageAspects
      {...ImageAspectsData}
      bgColor='bg-[#00bfff]'
      /> */}
<span className="font-bold text-xl text-2xl">&gt;</span>

      {/* <CountUpImageTextBox
      {...countUpData}
      />

      <ParallaxText
      {...parallaxData}
      /> */}

      {/* <AppearingGradient
      text="hello"
      isMobile
      subText="world"
      mainColor="#00bfff"
      brightColor="#33ccff"
      darkColor="#009acd"
      
      /> */}
     


      <VerticalImageTextBox
      {...verticalBoxData}
      // isMobile={false}
      // mainGradientColor="#00bfff"
      // darkGradientColor="#009acd"
      // brightGradientColor="#009acd"
      />

      {/* <ThreeBoxHero
      {...threeBoxHeroData}
    boxBgColor="bg-[#00bfff]"
      gradient={{
        color1:'#00bfff',
        color2:'black'
      }}
      // bgColor="bg-red-200"
      /> */}
      {/* <FullBodyHero
      {...fullBodyHeroData}
    
      
      /> */}


   {/* <FullImageHero
   {...heroBanner2Data}
   />


<ImageLogoHero
{...imageLogoHero}
bgColor="bg-gradient-to-br from-blue-400 to-red-400"
/>  */}

{/* <DisplayBoxes
data={displayBoxData}
boxColor="bg-red-400"
hoverColor="hover:bg-blue-500"
glowColor="shadow-[0_0_25px_#00bfff]"

/> */}

<FullImageDisplay
boxes={FullImageDisplayData}
/>



<FeatureBoxes
boxData={featureBoxData}
boxColor="bg-[#00bfff]"
/>

<Carousel
images={carouselData}
hasDescription
button={{
  buttonColor:"bg-red-300",
  buttonHoverColor:'hover:bg-red-800',
  buttonText:'Learn more'
}}
/>

<CarouselGrid
images={carouselGridData}
isMobile={false}
/>

<SlideShowCarousel
images={featureBoxData}
isMobile={false}
slideColor="bg-gradient-to-br from-red-400 to-blue-400"
/>

{/* <PriceCards
priceData={priceCardData}

/> */}

<PriceCards
cardColor="bg-gradient-to-tr from-blue-400 to-blue-200"
priceData={priceCardData}
/>




 


  </main>
  );
}
