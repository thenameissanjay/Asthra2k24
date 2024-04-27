"use client";

import { AnimatedPinDemo } from "@/components/main/animatedDemo";
import Link from "next/link";

import { LampDemo } from "@/components/main/LampDemo";
import { motion } from "framer-motion";
import { BentoGridDemo5 } from "@/components/main/BentoGridDemo5";
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
      <LampDemo parameter="Puzzle Palooza Codeathon" />
      </Vortex>
      <div > <BentoGridDemo5/></div>
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
    <Link href="https://www.linkedin.com/in/barath-virupriya-656b581a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app					
					
          " target="_blank">

      <AnimatedPinDemo name="Barath Virupriya" imageUrl="https://firebasestorage.googleapis.com/v0/b/astra2k24-c3388.appspot.com/o/barath.png?alt=media&token=04f5e721-a615-4ae5-a3cb-14919cc0caa6" description="Event coordinator" title="Linked In"/>
  
      </Link>
  </div>
    <div className="max-w-xs mx-1 my-2">
    <Link href="https://www.linkedin.com/in/nirmala-siva-0b7944252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app					
" target="_blank">

      <AnimatedPinDemo name="Nirmala S" imageUrl="https://firebasestorage.googleapis.com/v0/b/astra2k24-c3388.appspot.com/o/nirmala.png?alt=media&token=ed638dad-4360-4966-a487-6ab991a6f355" description="Event coordinator" title="Linked In"/>
   
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
