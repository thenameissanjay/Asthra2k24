"use client";

import { AnimatedPinDemo } from "@/components/main/animatedDemo";
import Link from "next/link";
import { LampDemo } from "@/components/main/LampDemo";
import { motion } from "framer-motion";
import { BentoGridDemo10 } from "@/components/main/BentoGridDemo10";
import { Vortex } from "@/components/sub/vortex";

export default function Home() {
  return (
    <main className="h-full w-full">
         <Vortex
    backgroundColor="black"
    rangeY={1300}
    particleCount={700}
    baseHue={120}
    className="flex items-center flex-col justify-center px-2 md:px-10  py-4 h-2000"
  >
      <LampDemo parameter="Aperture Apex" />
      </Vortex>
      <div > 
        <BentoGridDemo10/></div>
      <Vortex
  backgroundColor="black"
  rangeY={500} // Decreased from 1200 to move the effect upwards
  particleCount={700}
  baseHue={120}
  className="flex items-center flex-col justify-center px-2 md:px-10 mt-[-40] py-1 h-1000"
>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
       
       <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 text-white py-4 mt-100"style={{marginTop:"100px"}}>
          Events Co-ordinators
        </div>
      
      </motion.div>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.6,
          duration: 1,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
       
       <div className="flex justify-center">
  <div className="flex flex-wrap justify-center -mx-1">
    <div className="max-w-xs mx-1 my-2">
    <Link href="https://www.linkedin.com/in/abhay-kesav-82a64b229/" target="_blank">

      <AnimatedPinDemo name="Abhay Kesav P D" imageUrl="https://firebasestorage.googleapis.com/v0/b/astra2k24-c3388.appspot.com/o/abhay.png?alt=media&token=6363c100-c45e-4b78-b16d-48f00420a1bc" description="Event Coordinator" title="Linked In"/>
 
      </Link>
   </div>
    <div className="max-w-xs mx-1 my-2">
    <Link href="https://www.linkedin.com/in/vinoth-kumar-muthusamy-490573266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">

      <AnimatedPinDemo name="Vinoth Kumar M" imageUrl="https://firebasestorage.googleapis.com/v0/b/astra2k24-c3388.appspot.com/o/vinoth.png?alt=media&token=c5f77310-9f54-480b-8b1e-570314620c6d" description="Event Coordinator" title="Linked In"/>
 
      </Link>
   </div>
    <div className="max-w-xs mx-1 my-2">
    <Link href="https://www.linkedin.com/in/jeeva-nathan-552a62275/" target="_blank">

      <AnimatedPinDemo name="Jeevanathan B" imageUrl="https://firebasestorage.googleapis.com/v0/b/astra2k24-c3388.appspot.com/o/jeeva.png?alt=media&token=5b08e374-c9a4-4c65-961e-3adaf3e0a73f" description="Event Coordinator" title="Linked In"/>
    
      </Link>
</div>
    
   
  </div>
</div>
      
      </motion.div>
      </Vortex>
      <br/>     
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

    </main>
  );
}