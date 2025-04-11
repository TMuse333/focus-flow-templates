"use client"

import React from "react";
import { servicePage2Data } from "@/data/pageData";
import { ServicePage2 } from "focusflow-components";


const Page = () => {


    return (
        <main className="bg-gray-300">
            <ServicePage2
            {...servicePage2Data}
            isMobile={false}
            bgColor='bg-gray-300'
           
            />
        </main>
    )
}

export default Page