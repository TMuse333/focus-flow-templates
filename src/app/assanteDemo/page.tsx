"use client"
import TiltingBgText from "@/components/tiltingBgText";

import { assanteGetStarted,assanteIntroCard,investmentHeroData,
assanteSteps } from "@/data/servicePageData"; // <- Import the new function
import { CircleSteps, ExperienceCard, TextAndList, ThreeBoxHero } from "focusflow-components";

const ServicePage = () => {


  // Call the function to get the right language content






  return (
    <main className="w-screen bg-white overflow-x-hidden">
      {/* <Navbar links={links} /> */}

      <ThreeBoxHero 
    //   gradient={{
    //     color1:'#f9f9f9',
    //     color2:'gray'

    //   }}
      {...investmentHeroData} />

      <ExperienceCard
      {...assanteIntroCard}
      objectContain
      hoverTextColor=""
      buttonColor="bg-white"
      buttonText='contact us'
      />

      <CircleSteps {...assanteSteps} textColor="text-black" />

      <TextAndList {...assanteGetStarted} textColor="text-black" objectContain />

      <TiltingBgText />

    <div className="h-[40vh] w-screen bg-transparent"
    />
  
    </main>
  );
};

export default ServicePage;
