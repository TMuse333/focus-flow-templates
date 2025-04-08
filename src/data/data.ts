import {TextAndListProps,CountUpImageTextProps,
ParallaxTextProps} from 'focusflow-components'

export const TextAndListData: TextAndListProps = {
    subTitle: "Your Subtitle",
    title: "Your Title",
    src: "/vercel.svg",
    alt: "Example Image",
    description: "This component provides a structured way to display information in a visually appealing manner. It combines text, images, and a list of key aspects to effectively convey important details to the user.",
    isMobile: false, // or true depending on your use case
    listAspects: [
      {
    
      
        title: "Aspect Title",
        description: "This aspect highlights a key feature of the component, explaining its importance and how it enhances the user experience by providing clear, structured information.",
      },
      {
     
        title: "Aspect Title",
        description: "Another important aspect that emphasizes the versatility of this component, allowing for different types of content to be displayed seamlessly across various screen sizes and devices.",
      },
      {
      
        title: "Aspect Title",
        description: "A feature that enhances accessibility, ensuring that all users, regardless of their device or browsing preferences, can easily engage with the content and navigate through the information effortlessly.",
      },
      {
     
        title: "Aspect Title",
        description: "This aspect focuses on the component’s adaptability, allowing customization of colors, images, and text to match the branding and design preferences of different applications or websites.",
      },
    ],
};

export const countUpData: CountUpImageTextProps = {
    src: "/focusFlow-brain-nobg.png",
    alt: "FocusFlow Brain Logo",
    title: "Boost Your Productivity",
    description: "Enhance your workflow with cutting-edge technology designed to optimize efficiency and focus.",
    isMobile: false,
    bgColor: "#f5f5f5",
    height: "",
    width: "",
    maxHeight: "",
    maxWidth: "",
    stats: [
        {
            number: "95%",
            name: "User Satisfaction"
        },
        {
            number: "50K+",
            name: "Active Users"
        },
        {
            number: "10X",
            name: "Efficiency Boost"
        },
        {
            number: "24/7",
            name: "Support Availability"
        }
    ]
};

export const parallaxData: ParallaxTextProps = {
    src: "/skyline.webp",
    alt: "City Skyline",
    isVideo: false,
    description: "Experience breathtaking views with our immersive parallax effect that brings your content to life.",
    muted: true,
    heading: "Discover New Perspectives",
    subHeading: "A seamless experience with depth and motion",
    link: "/explore",
    descriptionColor: "#ffffff",
    buttonColor: "#ff5733",
    buttonTextColor: "#000000",
    bgColor: "#1a1a1a"
};

export const verticalBoxData = {
    title: "Enhance Your Focus",
    description: "Unlock your brain's potential with cutting-edge neuroscience techniques.",
    logo: "/focusFlow-brain-nobg.png",
    bgImage: "/skyline.webp",
    isMobile: false,
    subTitle: "Optimize Your Mental Performance",
    mainGradientColor:"#00bfff",
    darkGradientColor:"#009acd",
    brightGradientColor:"#009acd"
  };
  

  
export const ImageAspectsData = {
    images: [
        {
            title: "Feature One",
            src: "/focusFlow-brain-nobg.png",
            description: "This image represents the first key feature, showcasing how the component visually enhances the user interface while maintaining a clean and modern design.",
            alt: "Illustration of Feature One"
        },
        {
            title: "Feature Two",
            src: "/focusFlow-brain-nobg.png",
            description: "This image highlights another essential aspect, emphasizing how structured visuals can improve user engagement and effectively communicate information.",
            alt: "Illustration of Feature Two"
        },
        {
            title: "Feature Three",
            src: "/focusFlow-brain-nobg.png",
            description: "An example demonstrating how images can be used alongside descriptions to create an intuitive and aesthetically pleasing layout, optimized for readability.",
            alt: "Illustration of Feature Three"
        },
        {
            title: "Feature Four",
            src: "/focusFlow-brain-nobg.png",
            description: "This image represents the adaptability of the component, allowing seamless integration into various sections of a website or application while maintaining consistency.",
            alt: "Illustration of Feature Four"
        }
    ],
    title: "Key Features and Benefits",
    description: "Explore the core aspects of this component, designed to enhance user experience through visually appealing layouts and structured content presentation."
};


export const threeBoxHeroData  = {
    h1: "Your Heading Here",
    h2Color: "#00bfff",
    h2: "Your Subheading Here",
    pTag: "Your paragraph text here.",
    boxData: [
      { title: "Box 1", description: "Description for box 1" },
      { title: "Box 2", description: "Description for box 2" },
      { title: "Box 3", description: "Description for box 3" },
    ],
    buttonText: "Primary Button",
    destination: "/primary",
    buttonText2: "Secondary Button",
    destination2: "/secondary",
    src: "/vercel.svg",
  };

  export const fullBodyHeroData = {
    // bgImage: "/skyline.webp", // Optional if needed
    logoImage: "/logo.webp",
    fullBodyImage: "/thomas-full-body.png", // "/chris-hd-min.webp" if preferred
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
    diagonalColor:'#00bfff'
  };
  

 export  const carouselHeroTestData = {
    mainHeader: "Welcome to Our Service!",
    titleText: "Innovative Solutions for You",
    descriptionText: "We provide cutting-edge technology solutions to accelerate your business growth. Our team of experts are here to help you every step of the way.",
    carouselData: [
      {
        src: "/vercel.svg",  // Image path for testing
        alt: "Vercel logo",
        description: "Vercel logo carousel image"
      },
      {
        src: "/vercel.svg",  // Same image path for testing
        alt: "Vercel logo",
        description: "Vercel logo carousel image 2"
      },
      {
        src: "/vercel.svg",  // Same image path for testing
        alt: "Vercel logo",
        description: "Vercel logo carousel image 3"
      }
    ]
  };
  
  
  
  export const heroBanner2Data = {
    heroImage: '/skyline.webp',
    headingText: 'Discover the Future of Web Design',
    subHeadingText: 'Fast, creative, and optimized websites tailored for your business success.',
    buttonText: 'Get Started',
    keywords: ['Future', 'Creative', 'Optimized', 'SEO-Friendly', 'Responsive'],
    onButtonClick: 'undefined', // Left empty as requested
  };

  export const imageLogoHero = {
    heroImage: "/chris-hd-min.webp",
    logoImage: "/logo.webp",
    headingText: "John Doe",
    subHeadingText: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
    description:'this is a description Lorem ipsum, dolor sit amet consectetur adipisicing. Lorem ipsum, dolor sit amet consectetur adipisicing.',
    logoAlt:"logoAlt",
    heroAlt:'hero'
  };

  export const experienceCardData = {
    src: "/logo.webp",
    title: "title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptatem iste saepe incidunt expedita, odio aut earum pariatur eum praesentium maiores facere ipsam placeat. Itaque soluta quas suscipit nesciunt ipsa sit quae voluptas in magnam, rerum explicabo. Ipsam facilis est tenetur illum distinctio voluptatem, temporibus asperiores. Rem repellendus, consequatur voluptatem suscipit atque tempora cumque enim voluptas labore nihil rerum nam!",
    aspectHeader: "aspects",
    aspects: ['hello', 'world'],
    alt: "alt",
    bgColor: "bg-gradient-to-br from-[#00bfff] to-orange-400",
    link: "link",
    objectContain: true,
    buttonText: "button"
  };
  

  export const displayBoxData = [
    {
      title: "Premium Web Design",
      src: "/logo.webp",
      alt: "Web Design Service",
      description: "Get a custom, high-performance website tailored to your brand.",
      buttonText: "Learn More",
      destination: "/services/web-design",
      buttonHover:"hover:bg-red-800",
      buttonColor:'bg-red-200'
      // boxColor:"bg-gradient-to-br from-blue-400 to-red-400"
    },
    {
      title: "SEO Optimization",
      src: "/logo.webp",
      alt: "SEO Service",
      description: "Boost your search engine rankings and increase organic traffic.",
      buttonText: "Get Started",
      destination: "/services/seo",
      buttonHover:"hover:bg-red-800",
      buttonColor:'bg-red-200'
    },
    {
      title: "E-Commerce Solutions",
      src: "/logo.webp",
      alt: "E-Commerce Service",
      description: "Launch your online store with seamless shopping experiences.",
      buttonText: "View Plans",
      destination: "/services/ecommerce",
      buttonHover:"hover:bg-red-800",
      buttonColor:'bg-red-200'
    },
    {
      title: "Brand Identity",
      src: "/logo.webp",
      alt: "Branding Service",
      description: "Create a memorable brand with stunning visuals and strategy.",
      buttonText: "See Portfolio",
      destination: "/services/branding",
      buttonHover:"hover:bg-red-800",
      buttonColor:'bg-red-200'
    },
  ];

  export const FullImageDisplayData = [
    {
      src: '/skyline.webp',
      alt: 'Skyline View 1',
      description: 'Discover the beauty of the skyline in this breathtaking view.',
      button: 'Learn More',
      buttonText: 'Explore the View',
      destination: '/explore-skyline-1',
      buttonColor: 'bg-blue-500',
      buttonHover: 'hover:bg-blue-700',
      stats: ['3 bed', '2 bathroom', '1000sq feet']
    },
    {
      src: '/skyline.webp',
      alt: 'Skyline View 2',
      description: 'Experience the sunset with a new perspective from the skyline.',
      button: 'See Details',
      buttonText: 'View the Sunset',
      destination: '/explore-skyline-2',
      buttonColor: 'bg-green-500',
      buttonHover: 'hover:bg-green-700',
      stats: ['4 bed', '3 bathroom', '1500sq feet']
    },
    {
      src: '/skyline.webp',
      alt: 'Skyline View 3',
      description: 'Take in the skyline during the day with vibrant city life.',
      button: 'Get Started',
      buttonText: 'View the Daytime',
      destination: '/explore-skyline-3',
      buttonColor: 'bg-yellow-500',
      buttonHover: 'hover:bg-yellow-700',
      stats: ['2 bed', '1 bathroom', '800sq feet']
    },
    {
      src: '/skyline.webp',
      alt: 'Skyline View 4',
      description: 'See the skyline from a high vantage point and enjoy the view.',
      button: 'Join Us',
      buttonText: 'Join the Tour',
      destination: '/explore-skyline-4',
      buttonColor: 'bg-red-500',
      buttonHover: 'hover:bg-red-700',
      stats: ['5 bed', '4 bathroom', '2000sq feet']
    }
  ];

  export const imageTextBoxData = {
    alt: "alt",
    isMobile: false,
    objectContain: true,
    bgColor: "bg-gradient-to-br from-[#00bfff] to-orange-400",
    src: "/logo.webp", // replace with the appropriate image path (e.g., `/img.jpg`)
    title: "title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptatem iste saepe incidunt expedita, odio aut earum pariatur eum praesentium maiores facere ipsam placeat. Itaque soluta quas suscipit nesciunt ipsa sit quae voluptas in magnam, rerum explicabo. Ipsam facilis est tenetur illum distinctio voluptatem, temporibus asperiores. Rem repellendus, consequatur voluptatem suscipit atque tempora cumque enim voluptas labore nihil rerum nam!"
  };
  
  

  export const featureBoxData = [
    {
      src: '/award.svg',
      alt: 'Excellence Icon',
      title: 'Expertise & Excellence',
      description:
        `We prioritize continuous education, advanced training and medical precision to
        ensure safe, top-tier results`,
    },
    {
      src: '/check-circle.svg',
      alt: 'Client-Centered Care Icon',
      title: 'Client-Centered Care',
      description:
       `Every treatment is tailored to the unique needs and goals of each client, providing
       a personalized experience`,
    },
    {
      src: '/handshake.svg',
      alt: 'Integrity & Trust Icon',
      title: 'Integrity & Trust',
      description:
       `Transparency, honesty, and ethical practice are at the core of everything we do`,
    },
    {
      src: '/trending-up.svg',
      alt: 'Innovation & Growth Icon',
      title: 'Innovation & Growth',
      description:
       `We embrace the latest advancements in medical aesthetics and wellness to offer
       the best possible treatments`,
    },
    {
      src: '/smile.svg',
      alt: 'Confidence & Empowerment Icon',
      title: 'Confidence & Empowerment',
      description:
       `Looking good is about feeling good. Our goal is to help clients radiate confidence
       in their everyday lives.`,
    },
    {
      src: '/healthy.png',
      alt: 'Confidence & Empowerment Icon',
      title: 'Wellness as a Whole',
      description:
       `We focus on enhancing your overall vitality, reducing stress and supporting a
       balanced lifestyle. Our commitment to wellness empowers you to feel your best,
       inside and out.`,
    },
  ];

  export const carouselData = [
    {
      src: "/skyline.webp",
      title: "City Skyline",
      description: "A breathtaking view of the city skyline at dusk.",
      link: "/explore-skyline",
      isVideo: false,
      alt: "City skyline during sunset",
      objectContain: true,
    },
    {
      src: "/skyline.webp",
      title: "Urban Landscape",
      description: "Experience the beauty of modern architecture.",
      link: "/urban-landscape",
      isVideo: false,
      alt: "Modern city skyline with skyscrapers",
      objectContain: true,
    },
    {
      src: "/skyline.webp",
      title: "Night Lights",
      description: "The city comes alive with vibrant lights at night.",
      link: "/night-lights",
      isVideo: false,
      alt: "Illuminated skyline with night lights",
      objectContain: false,
    },
    {
      src: "/skyline.webp",
      title: "Golden Hour",
      description: "Golden hues reflecting off the city buildings.",
      link: "/golden-hour",
      isVideo: false,
      alt: "Golden hour view of a skyline",
      objectContain: true,
    },
    {
      src: "/skyline.webp",
      title: "Skyline Serenity",
      description: "A peaceful moment in the heart of the city.",
      isVideo: false,
      alt: "Serene view of the city skyline",
      objectContain: false,
    },
  ];
  
  
  export const carouselGridData = [
    { src: "/skyline.webp", alt: "Skyline view 1" },
    { src: "/skyline.webp", alt: "Skyline view 2" },
    { src: "/skyline.webp", alt: "Skyline view 3" },
    { src: "/skyline.webp", alt: "Skyline view 4" },
    { src: "/skyline.webp", alt: "Skyline view 5" },
  ];

  export const priceCardData = [
    {
      name: "Premium Plan",
      price: "$29.99/month",
      description: "Access to all premium features with priority support.",
      aspects: [
        "Unlimited access",
        "24/7 support",
        "Advanced analytics",
        "Custom branding"
      ],
      cardColor:"#00bfff"
    },
    {
      name: "Standard Plan",
      price: "$14.99/month",
      description: "Ideal for small businesses with essential features.",
      aspects: [
        "Basic access",
        "Email support",
        "Standard analytics",
        "Limited customization"
      ],
      cardColor:"#00bfff"
    },
    {
      name: "Free Plan",
      price: "$0/month",
      description: "Perfect for individuals trying out the service with limited features.",
      aspects: [
        "Access to basic features",
        "Limited storage",
        "No support",
        "No customization"
      ],
      cardColor:"#00bfff"
    }
  ];

// Assuming this is the structure of ReviewData


// Modify the testimonialsData to match GoogleReviewsProps
export const testimonialsDatas = {
  reviews: [
    {
      src: "/client.png",
      alt: "John and Emily's Success Story",
      title: "Chris Made Buying Our Home Easy",
      description: "“Chris was incredibly patient and guided us through every step of buying our first home. We couldn’t have done it without him!” – John & Emily",
      link: "",
      date: "2024-01-15",
      name: "John & Emily"  // Add name here
    },
    {
      src: "/client.png",
      alt: "Sandra's Home Sale Story",
      title: "Sold My Home Above Asking",
      description: "“Chris handled everything and got my house sold fast. His pricing strategy and marketing brought in multiple offers!” – Sandra",
      link: "",
      date: "2023-11-28",
      name: "Sandra"  // Add name here
    },
    {
      src: "/client.png",
      alt: "Mike and Linda's Investment Success",
      title: "Helped Us Build Our Investment Portfolio",
      description: "“Chris helped us find the perfect investment properties. His market knowledge and negotiation skills were invaluable.” – Mike & Linda",
      link: "",
      date: "2024-02-05",
      name: "Mike & Linda"  // Add name here
    },
    {
      src: "/client.png",
      alt: "Daniel’s Relocation Story",
      title: "Found My Dream Home in Halifax",
      description: "“Moving to a new city was stressful, but Chris made finding a home effortless. I’m so grateful for his expertise!” – Daniel",
      link: "",
      date: "2023-12-10",
      name: "Daniel"  // Add name here
    }
  ],
  sectionColor: "bg-[#00bfff]",
  destination: "/here",
  description: "Discover how Chris has helped homeowners buy and sell properties with ease, providing expert guidance and outstanding results.",
};


  
  
  
  
export const tilteSlideData = {
  title: 'Your New Title', // Set your dynamic title here
  src: "/focusFlow-brain-nobg.png",
  alt: 'Description of the image', // You can describe the image here
  description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptatem iste saepe incidunt expedita, odio aut earum pariatur eum praesentium maiores facere ipsam placeat. Itaque soluta quas suscipit nesciunt ipsa sit quae voluptas in magnam, rerum explicabo. Ipsam facilis est tenetur illum distinctio voluptatem, temporibus asperiores. Rem repellendus, consequatur voluptatem suscipit atque tempora cumque enim voluptas labore nihil rerum nam!",

};

export const circleStepsData = [
  {
    number: 1,
    title: "Step 1: Initial Consultation",
    description: "Meet with your REALTOR®️ to discuss your goals, timeline, and expectations. We’ll do a walkthrough of your home, assess its condition, and discuss how to make the selling process smooth and stress-free.",
  },
  {
    number: 2,
    title: "Step 2: Determine the Right Listing Price",
    description: "I’ll conduct a Comparative Market Analysis (CMA) to determine your home’s value. Together, we’ll choose a pricing strategy to attract buyers while maximizing your return on investment.",
  },
  {
    number: 3,
    title: "Step 3: Prepare Your Home for Market",
    description: "First impressions matter. We’ll help declutter, clean, and stage your home to make it shine. I’ll also guide you through any needed repairs and arrange for professional photos and videos to showcase your home.",
  },
  {
    number: 4,
    title: "Step 4: Paperwork & Required Forms",
    description: "Before listing, you’ll complete important documents such as the Seller Designated Brokerage Agreement, Property Disclosure Statement, and Residential Listing Input Form to ensure everything is in order.",
  },
  {
    number: 5,
    title: "Step 5: Launch Your Listing",
    description: "Once your home is ready, we’ll go live on MLS®️, complete with professional photos and compelling descriptions. We’ll execute a marketing strategy to get your property the exposure it deserves.",
  },
  {
    number: 6,
    title: "Step 6: Reviewing Offers",
    description: "When offers come in, I’ll present each one and help you negotiate terms, price, and conditions. Together, we’ll accept the best offer to move forward with the sale.",
  },
  {
    number: 7,
    title: "Step 7: Fulfilling Buyer Conditions",
    description: "The buyer will work to satisfy conditions like financing, inspections, and insurance approval. We’ll navigate through this process, responding to inspection findings or negotiating necessary adjustments.",
  },
  {
    number: 8,
    title: "Step 8: Legal & Closing Preparations",
    description: "Prepare for the final steps by hiring a real estate lawyer, signing sale documents, and organizing your move. I’ll ensure everything is in order for a smooth closing.",
  },
  {
    number: 9,
    title: "Step 9: Closing Day",
    description: "On closing day, your lawyer will finalize the sale, transfer the funds, and register the deed. Once everything is settled, you’ll hand over the keys to the buyer and officially complete the sale!",
  },
];



  
  
  
  