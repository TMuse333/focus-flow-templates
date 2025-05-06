import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import home from '../../public/Assante-1014.webp';
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";


const TiltingBgText: React.FC = () => {
  const isFrench = false
  const [tiltAngle, setTiltAngle] = useState(30);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isAnimationTriggered, setIsAnimationTriggered] = useState(false);

  const h2Controls = useAnimation();
  const pControls = useAnimation();
  const buttonControls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const contentElement = contentRef.current;
      if (!contentElement) return;

      const elementTop = contentElement.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      const visiblePercent = Math.max(0, Math.min(100, (windowHeight - elementTop) / windowHeight * 100));
      const newTiltAngle = Math.max(0, 30 - (visiblePercent / 70) * 30);

      setTiltAngle(newTiltAngle);

      if (newTiltAngle === 0 && !isAnimationTriggered) {
        setIsAnimationTriggered(true);
        h2Controls.start({ opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 10, delay: 0 } });
        pControls.start({ opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 10, delay: 0.2 } });
        buttonControls.start({ opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 10, delay: 0.4 } });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [h2Controls, pControls, buttonControls, isAnimationTriggered]);

  return (
    <section
      className="w-[95vw] pb-12 mx-auto my-[4rem] rounded-2xl sm:w-[85vw] text-left border border-blue-200 text-black md:h-[60vh] md:max-h-[600px] relative z-[2]"
      id="tilting-closer"
      ref={contentRef}
      style={{
        transform: `perspective(1000px) rotateX(${tiltAngle}deg)`,
        transition: "transform 0.2s ease-out",
      }}
    >
      <Image
        src={home}
        alt="Modern home exterior"
        className="w-full h-full object-cover absolute z-[1] rounded-2xl brightness-[0.5]"
        width={600}
        height={1300}
      />
      <div className=" px-4 md:px-12 md:w-[80%] mx-auto md:mr-0 md:ml-6 justify-center relative z-[2] text-white mt-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={h2Controls}
        >
          {isFrench
            ? "Prêt à franchir la prochaine étape?"
            : "Ready to Take the Next Step?"}
        </motion.h2>
        {isFrench
  ? "Chez Assante, nous croyons qu’un accompagnement attentionné fait toute la différence. Que vous achetiez, vendiez ou investissiez, notre équipe vous offre des conseils stratégiques, une écoute authentique et un engagement total pour concrétiser vos projets. Appelez-nous dès aujourd’hui — votre tranquillité d’esprit commence ici."
  : "At Assante, we believe that personalized support makes all the difference. Whether you're buying, selling, or investing, our team offers expert strategies, genuine care, and a commitment to getting the job done right. Call us today — your peace of mind starts here."}

        <motion.div
          className="flex flex-col md:flex-row gap-4 items-center justify-center md:items-start
          justify-start mt-12
          md:mr-auto"
          initial={{ opacity: 0, y: -50 }}
          animate={buttonControls}
        >
          <a
            href="tel:902-123-4567"
            className="px-6 py-3 text-base font-semibold text-black bg-white border border-black rounded-md hover:bg-[#00bfff] hover:text-white transition-colors"
          >
            {isFrench ? "Appelez-nous : 902-123-4567" : "Call Us: 902-123-4567"}
          </a>
          <Link href="/contact">
            <button className="px-6 py-3 text-base font-semibold text-black bg-white border border-black self-start rounded-md hover:bg-[#00bfff] hover:text-white transition-colors">
              {isFrench ? "Ou envoyez-nous un message" : "Or Send a Message"}
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TiltingBgText;
