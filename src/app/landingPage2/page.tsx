"use client"

import Navbar from "@/components/test"
import { landingPage2Data } from "@/data/pageData"
import { LandingPage2 } from "focusflow-components"



const Page = () => {

    const links = [
        {
        destination:'/landingpage',
        name:'Landing page 1'
      },
      {
        destination:'/landingPage2',
        name:'Landing page 2'
      },
    
    ]

    return (
        <>
        <Navbar
        links={links}
        />

        <LandingPage2
        {...landingPage2Data}
        bgColor="bg-gradient-to-tr from-orange-400 to-[#00bfff]"
        textColor="text-white"
        />
        </>
    )
}

export default Page