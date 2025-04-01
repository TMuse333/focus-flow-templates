"use client"

import { landingPage2Data } from "@/data/pageData"
import { LandingPage2 } from "focusflow-components"



const Page = () => {



    return (
        <LandingPage2
        {...landingPage2Data}
        bgColor="bg-gradient-to-tr from-orange-400 to-[#00bfff]"
        textColor="text-white"
        />
    )
}

export default Page