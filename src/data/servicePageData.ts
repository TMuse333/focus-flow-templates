// data.ts
import {
    ThreeBoxHeroProps,
    CircleStepsProps,
    TextAndListProps,
  } from 'focusflow-components';
  
  export const investmentHeroData: ThreeBoxHeroProps = {
    h1: "Assante Investment & Planning Advice in Halifax",
    h2: "Smart Strategies for Your Financial Future",
    pTag:
      "Grow, protect, and manage your money with expert guidance tailored to your financial goals.",
    boxData: [
      {
        title: "Comprehensive Planning",
        description:
          "Financial, retirement, tax, insurance, and estate strategies built around your life.",
      },
      {
        title: "Expert Investment Guidance",
        description:
          "Confidently invest your money with tailored advice and proven strategies.",
      },
      {
        title: "Long-Term Financial Health",
        description:
          "Save, grow, and manage your finances effectively with ongoing expert support.",
      },
    ],
    boxBgColor: "bg-gray-300",
    textColor: "text-gray-800",
    boxTextColor: "text-black",
  };
  
  export const assanteSteps: CircleStepsProps = {
    title: "Our Investment Planning Process",
    description:
      "We tailor each experience based on your unique needs, guiding you through every step to ensure your financial goals are met.",
    boxColor: "bg-gray-400",
    bgColor: "#ffffff",
    textColor: "#000000",
    steps: [
      {
        number: 1,
        title: "Initial Meeting",
        description:
          "Meet with an advisor to determine your financial needs and develop a personalized action plan.",
      },
      {
        number: 2,
        title: "Account Setup",
        description:
          "Open new investment accounts or transfer existing ones to align with your financial plan.",
      },
      {
        number: 3,
        title: "Ongoing Guidance",
        description:
          "Meet regularly with your advisor to monitor progress and adjust your plan as your life and the markets evolve.",
      },
    ],
  };
  
  export const assanteGetStarted: TextAndListProps = {
    subTitle: "Get Started",
    title: "What You’ll Need to Begin",
    src: "/newLogo.webp",
    alt: "Assante Financial Logo",
    description:
      "Before we can begin planning your financial future, here’s a list of items you’ll need to provide. These help us get a clear picture of your current situation and tailor our services to your needs.",
    isMobile: false,
    bgColor: "bg-white",
    titleColor: "text-black",
    titleBgColor: "bg-gray-100",
    descriptionBgColor: "bg-gray-50",
    descriptionTextColor: "text-gray-700",
    listAspects: [
      {
        title: "Financial Snapshot",
        description:
          "Details of your income, assets, liabilities, and a complete financial statement.",
      },
      {
        title: "Identification",
        description:
          "Government-issued photo ID such as a Driver’s License or Passport.",
      },
      {
        title: "Banking Information",
        description:
          "May be required depending on your needs and the services being provided.",
      },
    ],
  };
  
  export const assanteIntroCard = {
    title: "Welcome to Our Financial Planning Series",
    src: "/newLogo.webp",
    alt: "Assante Logo",
    description:
      "At Assante, we understand that every person’s financial journey is unique. That’s why we focus on truly listening, understanding your needs, and offering guidance that’s tailored to your life. In this series, you’ll see how we build thoughtful, strategic plans—while staying with you every step of the way. We don’t just manage your finances—we care about your peace of mind, providing clear, ongoing, and human-centered support that puts your goals first.",
    aspects: [
      "Personalized Approach",
      "Proven Strategies",
      "Ongoing Support",
      "Transparency & Trust",
    ],
    aspectHeader: "What You'll Learn",
    link: "",
    bgColor: "bg-gray-300",
    objectContain: false,
    textColor: "text-black",
  };
  