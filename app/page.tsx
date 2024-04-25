"use client";
import Encryption from "@/components/main/Encryption";

import {SparklesPreview } from "@/components/main/SparklesPreview";
import Link from "next/link";



import StarsCanvas from "@/components/main/StarBackground";

import { motion } from "framer-motion";
import { useEffect, useState ,useRef} from "react";
import { useInView } from "react-intersection-observer";
import { Stat } from "@/components/main/stat";
import TimerBg from "@/components/main/timerbg";
import { AuroraBackgroundDemo } from "@/components/main/AuroraBackgroundDemo";
import College from "@/components/main/college";
import Department from "@/components/main/department";
import { collection, getDoc, doc } from "firebase/firestore";
import { Sponsor } from "@/components/main/sponsor";


const getHeight = () => {
  if (typeof window !== "undefined" && window.innerWidth <= 768) {
    return "50px";
  } else {
    return "200px";
  }
};

const getHeight2 = () => {
  if (typeof window !== "undefined" && window.innerWidth <= 768) {
    return "-400px";
  } else {
    return "-100px";
  }
};

const getHeight4 = () => {
  if (typeof window !== "undefined" && window.innerWidth <= 768) {
    return "-200px";
  } else {
    return "-100px";
  }
};

const getHeight1 = () => {
  if (typeof window !== "undefined" && window.innerWidth <= 768) {
    return "-150px";
  } else {
    return "200px";
  }
};


export default function Home() {

 




  const [isAnimated2, setIsAnimated2] = useState(false);

  const [isAnimated1, setIsAnimated1] = useState(false);

  const [isAnimated3, setIsAnimated3] = useState(false);

  const [isAnimated4, setIsAnimated4] = useState(false);

  const { ref: ref2, inView: inView2 } = useInView({
      triggerOnce: true, // Only trigger once
      threshold: 0, // Trigger when any part of the component is in view
  });

  useEffect(() => {
    
    if (inView2) {
        setIsAnimated2(true);
    }
}, [ inView2]);

  

  const handleViewportEnter2 = () => {
    setIsAnimated2(true);
  };

  const handleViewportLeave2 = () => {
    setIsAnimated2(false);
  };
 

  const handleViewportEnter1 = () => {
      setIsAnimated1(true);
  };

 
  const handleViewportLeave1 = () => {
      setIsAnimated1(false);
  };



  const handleViewportEnter3 = () => {
    setIsAnimated3(true);
  };

  const handleViewportLeave3 = () => {
    setIsAnimated3(false);
  };
 

  const handleViewportEnter4 = () => {
      setIsAnimated4(true);
  };

 
  const handleViewportLeave4 = () => {
      setIsAnimated4(false);
  };
  return (
    <main className="h-full w-full">
        
        <div className="flex flex-col h-screen justify-end">
      <div className="flex flex-col gap-60">
        <div className="relative flex flex-col h-full w-[-20rem] bg-black" id="about-me">
          <div className="mt-40 md:mt-40 lg:mt-60 xl:mt-80 bg-black">
            <SparklesPreview />
          </div>
          <StarsCanvas />
        </div>
      </div>
    </div>
    <Sponsor/>
    <motion.div
      initial={{ x: -400 }} // Adjusted initial position off-screen
      animate={isAnimated1 ? { x: 10 } : { x: -400 }} // Conditionally animate based on isAnimated2
      transition={{ duration: 1 }} // Duration of the animation
      onViewportEnter={handleViewportEnter1} // Callback when component enters viewport
      onViewportLeave={handleViewportLeave1} // Callback when component leaves viewport
    >
      <College />
    </motion.div>
    <motion.div
      initial={{ x: 400 }} // Adjusted initial position off-screen
      animate={isAnimated2 ? { x: 0 } : { x: 400 }} // Conditionally animate based on isAnimated2
      transition={{ duration: 1 }} // Duration of the animation
      onViewportEnter={handleViewportEnter2} // Callback when component enters viewport
      onViewportLeave={handleViewportLeave2} // Callback when component leaves viewport
    >
      <Department/>
      </motion.div>

      <div  className="mt-[-40rem]" style={{ marginTop: getHeight(), marginBottom: getHeight1() }}>
  <Stat />
</div>

<div className="mb-0 flex justify-center items-center" style={{ marginBottom: getHeight() }}>
<TimerBg/>
</div>




    

      <div  style={{marginTop:getHeight4()}}>
      <motion.div
                    initial={{ x: -400 }} // Adjusted initial position off-screen
                    animate={isAnimated3 ? { x: 0 } : { x: -400 }} // Conditionally animate based on isAnimated2
                    transition={{ duration: 1 }} // Duration of the animation
                    onViewportEnter={handleViewportEnter3} // Callback when component enters viewport
                    onViewportLeave={handleViewportLeave3} // Callback when component leaves viewport
                >
                
                  <Link href="./pages?section=technical-events">      
                                    <Encryption name1="Technical " image1="./encryption.webm" />
                    </Link>
                    </motion.div>

            </div>

            <div ref={ref2} style={{marginTop:getHeight2()}}>
                <motion.div
                    initial={{ x: 400 }} // Adjusted initial position off-screen
                    animate={isAnimated4 ? { x: 0 } : { x: 400 }} // Conditionally animate based on isAnimated2
                    transition={{ duration: 1 }} // Duration of the animation
                    onViewportEnter={handleViewportEnter4} // Callback when component enters viewport
                    onViewportLeave={handleViewportLeave4} // Callback when component leaves viewport
                >
                    <Link href='/pages?section=non-technical-events'>
                        <Encryption name1="Non Technical " image1="./cards-video.webm" />
                    </Link>
                </motion.div>
            </div>
            <div >

            <AuroraBackgroundDemo/>
            </div>

    </main>
  );
}