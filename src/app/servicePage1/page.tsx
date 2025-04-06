"use client"

import { servicePage1Data } from "@/data/pageData";
import { ServicePage1 } from "focusflow-components";
import React from "react";



const Page = () => {


    return (
        <ServicePage1
        {...servicePage1Data}
        />
    )
}


export default Page