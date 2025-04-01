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
