import { ServicePage1Props } from "focusflow-components";

export const landingPage1Data = {
  heroProps: {
    bgImage: "/skyline.webp",
    logoImage: "/logo.webp",
    fullBodyImage: "/Chris-hd-min.webp",
    titleText: "Elevate Your Online Presence",
    typeAlongText: "We build websites that Convert",
    typeAlongKeywords: ["convert leads", "stand out", "drive sales"],
    descriptionText:
      "Our custom websites are designed to help real estate professionals showcase their properties and attract more clients.",
    altTextSkyline: "City skyline at sunset",
    altTextLogo: "Company logo",
    altTextFullBody: "Full-body image of a real estate agent",
    fullBodyStyles: "rounded-lg shadow-lg",
    logoStyles: "w-24 h-auto",
    typeWriterExamples: ["Sell faster", "Grow your brand", "Close more deals"],
    diagonalColor: "bg-gradient-to-br from-[#00bfff] to-orange-400",
    bgColor: "bg-gradient-to-br from-[#00bfff] to-orange-400", // Unified gradient
  },

  introSection: {
    title: "Why Choose Us",
    src: "/Chris-hd-min.webp",
    alt: "Client Experience",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptatem iste saepe incidunt expedita.",
    aspects: ["Professional", "Efficient", "Creative", "Affordable"],
    link: "/experience",
    buttonText: "Learn More",
    reverse: false,
    aspectHeader: "Our Expertise",
    bgColor: "bg-gradient-to-br from-[#00bfff] to-orange-400", // Unified gradient
    buttonColor: "bg-[#00bfff]", // Matches gradient start
    hoverTextColor: "hover:text-orange-400", // Matches gradient end
    objectContain: true,
  },

  service1Intro: {
    src: "/skyline.webp",
    alt: "Service Highlight",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat leo nec felis pretium, ut pharetra neque luctus.",
    reverse: false,
    title: "Our Services",
    bgColor: "bg-gradient-to-br from-[#00bfff] to-orange-400", // Unified gradient
    objectContain: true,
    isMobile: false,
  },

  service2Intro: {
    src: "/skyline.webp",
    alt: "Service Highlight",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat leo nec felis pretium, ut pharetra neque luctus.",
    reverse: true,
    title: "Our Services",
    bgColor: "bg-gradient-to-br from-[#00bfff] to-orange-400", // Unified gradient
    objectContain: true,
    isMobile: false,
  },

  reviews: {
    reviews: [
      {
        name: "John & Emily",
        src: "/Chris-hd-min.webp",
        description:
          "“Chris was incredibly patient and guided us through every step of buying our first home. We couldn’t have done it without him!”",
        date: "2024-01-15",
        alt: "John and Emily's Success Story",
      },
      {
        name: "Sandra",
        src: "/Chris-hd-min.webp",
        description:
          "“Chris handled everything and got my house sold fast. His pricing strategy and marketing brought in multiple offers!”",
        date: "2023-11-28",
        alt: "Sandra's Home Sale Story",
      },
      {
        name: "Mike & Linda",
        src: "/Chris-hd-min.webp",
        description:
          "“Chris helped us find the perfect investment properties. His market knowledge and negotiation skills were invaluable.”",
        date: "2024-02-05",
        alt: "Mike and Linda's Investment Success",
      },
      {
        name: "Daniel",
        src: "/Chris-hd-min.webp",
        description:
          "“Moving to a new city was stressful, but Chris made finding a home effortless. I’m so grateful for his expertise!”",
        date: "2023-12-10",
        alt: "Daniel’s Relocation Story",
      },
    ],
    sectionColor: "bg-[#00bfff]", // Gradient start for contrast
    bgColor: "bg-red-200", // Unified gradient
    destination: "/reviews",
    description:
      "Discover how Chris has helped homeowners buy and sell properties with ease, providing expert guidance and outstanding results.",
  },

  service3Intro: {
    src: "/skyline.webp",
    alt: "Parallax Effect",
    isVideo: false, // Changed since no .mp4 provided
    description: "A sample parallax image description",
    muted: true,
    thumbnail: "/skyline.webp",
    heading: "Welcome to Our Site",
    subHeading: "We bring your vision to life",
    link: "/learn-more",
    descriptionColor: "text-white",
    buttonColor: "bg-[#00bfff]", // Gradient start
    buttonTextColor: "text-orange-400", // Gradient end
    bgColor: "bg-gradient-to-br from-[#00bfff] to-orange-400", // Unified gradient
  },

  whyUs: {
    subTitle: "Your Subtitle",
    title: "Your Title",
    src: "/logo.webp",
    alt: "Example Image",
    description:
      "This component provides a structured way to display information in a visually appealing manner.",
    isMobile: false,
    listAspects: [
      {
        src: "/logo.webp",
        alt: "Aspect Image",
        title: "Aspect Title",
        description:
          "This aspect highlights a key feature of the component.",
      },
      {
        src: "/logo.webp",
        alt: "Aspect Image",
        title: "Aspect Title",
        description:
          "Another important aspect that emphasizes versatility.",
      },
      {
        src: "/logo.webp",
        alt: "Aspect Image",
        title: "Aspect Title",
        description:
          "A feature that enhances accessibility for all users.",
      },
      {
        src: "/logo.webp",
        alt: "Aspect Image",
        title: "Aspect Title",
        description:
          "This aspect focuses on adaptability and customization.",
      },
    ],
    bgColor: "bg-gradient-to-br from-[#00bfff] to-orange-400", // Unified gradient
  },

  closer: {
    title: "Enhance Your Focus",
    description: "Unlock your brain's potential with cutting-edge neuroscience techniques.",
    logo: "/focusFlow-brain-nobg.png",
    bgImage: "/skyline.webp",
    isMobile: false,
    subTitle: "Optimize Your Mental Performance",
    mainGradientColor:"#00bfff",
    darkGradientColor:"#009acd",
    brightGradientColor:"#009acd"
  },
};

export const landingPage2Data = {
  carouselHero: {
    mainHeader: "Transform Your Business",
    titleText: "Innovative Solutions for Real Estate Agents",
    descriptionText: "Enhance your online presence with custom websites tailored to your needs.",
    bgColor: "bg-gradient-to-br from-[#00bfff] to-orange-400",
    carouselData: [
      {
        src: "/chris-hd-min.webp",
        alt: "Real Estate Website",
        description: "A modern website design for real estate agents."
      },
      {
        src: "/kitchen-2.webp",
        alt: "Custom Designs",
        description: "Creative and engaging web designs for any business."
      }
    ]
  },
  
  countUpImageText: {
    src: "/focusFlow-brain-nobg.png",
    alt: "Growth Stats",
    title: "Achieve Success with a Custom Website",
    description: "See the tangible results that come with a strong online presence.",
    isMobile: false,
    bgColor: "bg-gradient-to-br from-[#00bfff] to-orange-400",
    height: "400px",
    width: "100%",
    maxHeight: "500px",
    maxWidth: "100%",
    stats: [
      {
        number: "500+",
        name: "Projects Completed"
      },
      {
        number: "10M+",
        name: "Revenue Generated"
      }
    ]
  },

  featureBoxes: {
    title: "Our Key Features",
    description: "Built to boost your business growth and online presence.",
    boxData: [
      {
        src: "/focusFlow-brain-nobg.png",
        alt: "Feature 1",
        title: "Responsive Design",
        description: "Your website will look great on all devices."
      },
      {
        src: "/focusFlow-brain-nobg.png",
        alt: "Feature 2",
        title: "SEO Optimized",
        description: "Built with SEO in mind to improve your visibility."
      },
      {
        src: "/focusFlow-brain-nobg.png",
        alt: "Feature 1",
        title: "Responsive Design",
        description: "Your website will look great on all devices."
      },
      {
        src: "/focusFlow-brain-nobg.png",
        alt: "Feature 2",
        title: "SEO Optimized",
        description: "Built with SEO in mind to improve your visibility."
      }
    ],
    boxColor: "#00bfff",
    bgColor: "bg-gradient-to-br from-[#00bfff] to-orange-400",
    titleSlideColor: "#ffb200",
    testimonials: [
      {
        title: "What Our Clients Say",
        quote: "This is the best investment for my business. The website helped increase my leads dramatically.",
        author: "Chris Crowell",
        effect: "fade-up"
      },
      {
        title: "What Our Clients Say",
        quote: "My real estate sales skyrocketed after the website launch. Highly recommend!",
        author: "Brad Real",
        effect: "fade-up"
      }
    ]
  },
  experienceCard1:{
    title: "Experience the Best Service",
    src: "/kitchen-2.webp", // Different src than the previous one
    alt: "Best Kitchen Service",
    description: "Our kitchen services offer a range of high-quality experiences that will leave you satisfied.",
    aspects: ["Quality", "Fast Service", "Affordable Prices"],
    link: "/services/kitchen",
    buttonText: "click me",
    reverse: false, // Normal layout
    aspectHeader: "Why Choose Us?",
    bgColor: "bg-gradient-to-br from-[#00bfff] to-orange-400", // Same color as before
    buttonColor: "bg-gradient-to-br from-[#009acd] to-[#ff8c00]", // Matching color
    hoverTextColor: "#ffffff", // Matching hover color
    objectContain: true,
  },
  experienceCard2:{
    title: "Innovative Office Solutions",
    src: "/chris-hd-min.webp", // Different src than the first one
    alt: "Office Solutions",
    description: "We provide cutting-edge office solutions that are tailored to your business needs.",
    aspects: ["Efficiency", "Customization", "Sustainability"],
    link: "/services/office",
    buttonText: "click me ",
    reverse: true, // Reversed layout
    aspectHeader: "Our Expertise",
    bgColor: "bg-gradient-to-br from-[#00bfff] to-orange-400", // Same color as before
    buttonColor: "#00bfff", // Matching color
    hoverTextColor: "#ffffff", // Matching hover color
    objectContain: true
  },
  testimonials: {
    testimonials: [
      {
        title: "Customer Experience",
        quote: "This service completely transformed our workflow. The team is highly professional, and we saw immediate results.",
        author: "John Doe, CEO of TechSolutions",
        effect: "fade-up"
      },
      {
        title: "Amazing Service",
        quote: "I never expected such seamless integration and support. The website's performance exceeded our expectations.",
        author: "Sarah Smith, Marketing Manager at GreenTech",
        effect: "fade-up"
      },
      {
        title: "Highly Recommended",
        quote: "The design and functionality are perfect. We were able to boost our conversions right after launch.",
        author: "Michael Johnson, Founder of WebInnovators",
        effect: "fade-up"
      }
    ],
    bgColor: "bg-gradient-to-br from-[#00bfff] to-orange-400" // Same color gradient as before
  },
  closer: {
    title: "Get Started Today",
    description: "Your path to success begins with a custom website.",
    logo: "/logo.webp",
    bgImage: "/skyline.webp",
    isMobile: false,
    subTitle: "Reach more clients with a stunning online presence.",
    mainGradientColor:"#00bfff",
    darkGradientColor:"#009acd",
    brightGradientColor:"#009acd"
  }
};


export const servicePage1Data: ServicePage1Props = {
  heroContent: {
    h1: "Welcome to Our Service",
    h2: "Transform Your Business Today",
    pTag: "We provide the tools you need to streamline your operations and grow.",
    boxData: [
      {
        title: "Feature 1",
        description: "Description of the first feature."
      },
      {
        title: "Feature 2",
        description: "Description of the second feature."
      },
      {
        title: "Feature 3",
        description: "Description of the third feature."
      }
    ],
    boxBgColor: "bg-gray-400",
    textColor: "text-black"
  },
  introContent: {
    title: "Introduction to Our Services",
    src: "/path-to-image.jpg", // Example image path
    alt: "Intro Image",
    description: "Our services are designed to meet your business needs.",
    button: null, // Leaving button blank as per your request
    bgColor: "bg-gradient-to-br from-[#00bfff] to-orange-400",
    textBgColor:'bg-blue-200/50'
  },
  features: {
    title: "Our Key Features",
    description: "We offer the following features to help your business grow.",
    boxColor:'bg-gradient-to-tr from-blue-600 to-orange-600',
    boxData: [
      {
        src: "/focusFlow-brain-nobg.png",
        alt: "Feature 1",
        title: "Feature 1",
        description: "This is a detailed description of feature 1, highlighting its unique benefits and how it can add value to the user experience."

      },
      {
        src: "/focusFlow-brain-nobg.png",
        alt: "Feature 2",
        title: "Feature 2",
        description: "This is a detailed description of feature 1, highlighting its unique benefits and how it can add value to the user experience."

      },
      {
        src: "/focusFlow-brain-nobg.png",
        alt: "Feature 2",
        title: "Feature 2",
        description: "This is a detailed description of feature 1, highlighting its unique benefits and how it can add value to the user experience."

      },
      {
        src: "/focusFlow-brain-nobg.png",
        alt: "Feature 2",
        title: "Feature 2",
        description: "This is a detailed description of feature 1, highlighting its unique benefits and how it can add value to the user experience."

      }
    ],
    
  },
  carouselImages: {
    images: [
      {
        src: "/skyline.webp",
        alt: "Image 1"
      },
      {
        src: "/skyline.webp",
        alt: "Image 2"
      },
      {
        src: "/skyline.webp",
        alt: "Image 3"
      }
    ],
    // bgColor: "bg-gradient-to-br from-[#00bfff] to-orange-400",
    isMobile: false, // Assuming it's not for mobile in this case, adjust accordingly
  },
  closingContent: {
    title: "Get Started with Us Today",
    description: "Contact us for more details or start a project with us.",
    logo: "/focusFlow-brain-nobg.png", // Example logo path
    bgImage: "/closing-bg.jpg", // Example background image path
    isMobile: false, // Adjust as needed
    subTitle: "We are here to help you every step of the way.",
    button: null, // Leaving button blank as per your request
    mainGradientColor:"#00bfff",
    darkGradientColor:"#009acd",
    brightGradientColor:"#009acd"
  },
  textColor: "text-black", // Assuming white text for readability against the background gradient
  bgColor: "bg-gray-200", 

  steps: {
    steps: [
      {
        number: 1,
        title: "Step 1: Introduction",
        description: "Learn about the service and how it works."
      },
      {
        number: 2,
        title: "Step 2: Setup",
        description: "Set up your account and preferences."
      },
      {
        number: 3,
        title: "Step 3: Customization",
        description: "Customize the features according to your needs."
      },
      {
        number: 4,
        title: "Step 4: Training",
        description: "Complete the training modules to get the most out of the service."
      },
      {
        number: 5,
        title: "Step 5: Implementation",
        description: "Start implementing the service in your daily operations."
      },
      {
        number: 6,
        title: "Step 6: Review & Feedback",
        description: "Review your progress and provide feedback for improvements."
      }
    ],
    boxColor: "bg-blue-500",
    bgColor: "bg-gray-300",
    title: "How It Works",
    description: "A step-by-step guide to how we deliver our service.",
    textColor: "text-black",
    // subTitle: "Learn more about the process"
  },

};


export const servicePage2Data = {
  heroContent: {
    h1: "Your Service Title Here",
    h2: "Your Service Subtitle Here",
    pTag: "A short paragraph explaining the service.",
    boxData: [
      {
        title: "Box Title 1",
        description: "Description for box 1."
      },
      {
        title: "Box Title 2",
        description: "Description for box 2."
      },
      {
        title: "Box Title 3",
        description: "Description for box 3."
      }
    ],
    boxBgColor:'bg-gray-400',
    
  },
  introContent: {
    title: "Introduction to Our Service",
    src: "/path/to/image.jpg",  // Placeholder image
    alt: "Service image",
    aspectHeader:"Key benefits",
    description: "Detailed description about the service offered.",
    aspects: [
      "Aspect 1",
      "Aspect 2",
      "Aspect 3"
    ],
    link: "https://example.com",  // Placeholder link
    buttonText: ""  // Empty button text as requested
  },

  features: {
    title: "Key Features",
    description: "Overview of the features of the service.",
    boxData: [
      {
        src: "/path/to/image1.jpg",  // Placeholder image
        alt: "Feature 1",
        title: "Feature 1",
        description: "Feature 1 description."
      },
      {
        src: "/path/to/image2.jpg",  // Placeholder image
        alt: "Feature 2",
        title: "Feature 2",
        description: "Feature 2 description."
      },
      {
        src: "/path/to/image3.jpg",  // Placeholder image
        alt: "Feature 3",
        title: "Feature 3",
        description: "Feature 3 description."
      }
    ],
    boxColor:'bg-blue-400'
  },
  testimonials: {

  
    testimonials: [
      {
        quote: "This is an amazing service!",
        author: "Client 1",
        effect: "Positive"
      },
      {
        quote: "Changed the way we do business.",
        author: "Client 2",
        effect: "Positive"
      }
    ],
    bgColor: "bg-gray-300"
  },
  steps: {
    steps: [
      {
        number: 1,
        title: "Step 1: Introduction",
        description: "Learn about the service and how it works."
      },
      {
        number: 2,
        title: "Step 2: Setup",
        description: "Set up your account and preferences."
      },
      {
        number: 3,
        title: "Step 3: Customization",
        description: "Customize the features according to your needs."
      },
      {
        number: 4,
        title: "Step 4: Training",
        description: "Complete the training modules to get the most out of the service."
      },
      {
        number: 5,
        title: "Step 5: Implementation",
        description: "Start implementing the service in your daily operations."
      },
      {
        number: 6,
        title: "Step 6: Review & Feedback",
        description: "Review your progress and provide feedback for improvements."
      }
    ],
    boxColor: "bg-blue-500",
    bgColor: "bg-gray-300",
    title: "How It Works",
    description: "A step-by-step guide to how we deliver our service.",
    textColor: "text-black",
    // subTitle: "Learn more about the process"
  },
  gettingStarted: {
    title: "Getting Started",
    description: "Here's what you need to do to get started with our service.",
    listAspects: [
      {
        title: "Financial Statements",
        description: "We need your past financial statements to understand your current financial situation."
      },
      {
        title: "Investment Preferences",
        description: "Tell us about your preferred investment options and risk tolerance."
      },
      {
        title: "Debt and Liabilities",
        description: "Provide details on any outstanding debts or liabilities you may have."
      },
      {
        title: "Income and Assets",
        description: "Share information about your income sources and assets to help us plan effectively."
      },
      {
        title: "Financial Goals",
        description: "Describe your short- and long-term financial goals to guide our strategy."
      }
    ],
    subTitle:'Work with is',
    isMobile:false
  },
  textColor: "text-black",
  bgColor: "bg-gray-300"
};


