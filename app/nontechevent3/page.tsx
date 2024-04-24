"use client";

import { AnimatedPinDemo } from "@/components/main/animatedDemo";
import Link from "next/link";
import { LampDemo } from "@/components/main/LampDemo";
import { motion } from "framer-motion";
import { BentoGridDemo8 } from "@/components/main/BentoGridDemo8";
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
      <LampDemo parameter="TV TUNER TANGO"/>
      </Vortex>
      <div > <BentoGridDemo8/></div>
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
    <Link href="https://www.linkedin.com/in/sandhiya-n-2682112ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app								
" target="_blank">

      <AnimatedPinDemo name="Sandhiya N" imageUrl="https://firebasestorage.googleapis.com/v0/b/astra2k24-c3388.appspot.com/o/sandhiya.png?alt=media&token=ec1790c1-2e88-4d79-8031-0f187e03de14" description="Event coordinator" title="Linked In"/>
 
      </Link>
   </div>
    <div className="max-w-xs mx-1 my-2">
    <Link href="https://www.linkedin.com/in/r-madhumita-809666283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app								
" target="_blank">

      <AnimatedPinDemo name="Madhumita R" imageUrl="https://firebasestorage.googleapis.com/v0/b/astra2k24-c3388.appspot.com/o/madhumitha%20r.png?alt=media&token=ffe22210-6193-4a47-919c-6f8272a0d4e0" description="Event coordinator" title="Linked In"/>
 
      </Link>
   </div>
    <div className="max-w-xs mx-1 my-2">
    <Link href="https://www.linkedin.com/in/renuga-devi-p-2334b1287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">

      <AnimatedPinDemo name="Renuga Devi P" imageUrl="https://firebasestorage.googleapis.com/v0/b/astra2k24-c3388.appspot.com/o/renuga.png?alt=media&token=5d8ace0c-c953-4c85-9f49-15158b2f73dc" description="Event coordinator" title="Linked In"/>
   
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