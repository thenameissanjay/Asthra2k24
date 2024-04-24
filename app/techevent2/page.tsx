"use client";

import { AnimatedPinDemo } from "@/components/main/animatedDemo";
import Link from "next/link";

import { LampDemo } from "@/components/main/LampDemo";
import { motion } from "framer-motion";
import { BentoGridDemo2 } from "@/components/main/BentoGridDemo2";
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
      <LampDemo parameter="NeuroNova" />
      </Vortex>
      <div > <BentoGridDemo2/></div>
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
    <Link href="https://www.linkedin.com/in/abubacker-siddique-36b7032a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app					
" target="_blank">

      <AnimatedPinDemo name="Divya Dharshini R" imageUrl="https://firebasestorage.googleapis.com/v0/b/astra2k24-c3388.appspot.com/o/dd.png?alt=media&token=795c0f77-e619-482b-9d63-bfcb1ecfe662" description="Event coordinator" title="Linked In"/>
 
      </Link>
   </div>
    <div className="max-w-xs mx-1 my-2">
    <Link href="https://www.linkedin.com/in/aishwarya-karunakaran-a11350305?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app					
" target="_blank">

      <AnimatedPinDemo name="Aishwarya K" imageUrl="https://firebasestorage.googleapis.com/v0/b/astra2k24-c3388.appspot.com/o/aishu%20k.png?alt=media&token=39abb70e-cec2-4382-9d8a-7734ed8ff1c0" description="Event coordinator" title="Linked In"/>
 
      </Link>
   </div>
    <div className="max-w-xs mx-1 my-2">
    <Link href="https://www.linkedin.com/in/priya-darshini-7062a2278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app					
" target="_blank">

      <AnimatedPinDemo name="Priyadarshini T" imageUrl="https://firebasestorage.googleapis.com/v0/b/astra2k24-c3388.appspot.com/o/tpd.png?alt=media&token=f9c9b77c-fe81-46c1-b880-6efea4f1b76c" description="Event coordinator" title="Linked In"/>
   
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