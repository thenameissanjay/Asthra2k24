"use client";

import { AnimatedPinDemo } from "@/components/main/animatedDemo";
import Link from "next/link";

import { LampDemo } from "@/components/main/LampDemo";
import { motion } from "framer-motion";
import { BentoGridDemo3 } from "@/components/main/BentoGridDemo3";
import { Vortex } from "@/components/sub/vortex";

export default function Home() {
  return (
    <main className="h-full w-full">
         <Vortex
    backgroundColor="black"
    rangeY={1300}
    particleCount={700}
    baseHue={120}
    className="flex items-center flex-col justify-center px-2 md:px-10  py-4 h-1000"
  >
      <LampDemo parameter="SpinScape Treasure Edition" />
      </Vortex>
      <div > <BentoGridDemo3/></div>
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
       
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 text-white py-4 mt-100" style={{marginTop:"100px"}}>
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
    <Link href="https://www.linkedin.com/in/poorva-murugan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app					
" target="_blank">

      <AnimatedPinDemo name="Poorva" imageUrl="https://firebasestorage.googleapis.com/v0/b/astra2k24-c3388.appspot.com/o/poorva.png?alt=media&token=5d6d49df-1913-4f51-867c-0105ab5d852a" description="Event coordinator" title="Linked In"/>
 
      </Link>
   </div>
    <div className="max-w-xs mx-1 my-2">
    <Link href="https://www.linkedin.com/in/1st-yr-vishali-r-060026286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app					
" target="_blank">

      <AnimatedPinDemo name="Vishali" imageUrl="https://firebasestorage.googleapis.com/v0/b/astra2k24-c3388.appspot.com/o/vishali.png?alt=media&token=e4ee8cbd-e98e-4db2-a2b0-d4df62da5c9f" description="Event coordinator" title="Linked In"/>
  
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