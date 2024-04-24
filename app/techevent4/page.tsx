"use client";

import { AnimatedPinDemo } from "@/components/main/animatedDemo";
import Link from "next/link";
import { LampDemo } from "@/components/main/LampDemo";
import { motion } from "framer-motion";
import { BentoGridDemo4 } from "@/components/main/BentoGridDemo4";
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
      <LampDemo parameter="Markup Mayhem Escape" />
      </Vortex>
      <div > <BentoGridDemo4/></div>
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
    <Link href="https://www.linkedin.com/in/santhosh-s-5440071b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app					
" target="_blank">

      <AnimatedPinDemo name="Santhosh S" imageUrl="https://firebasestorage.googleapis.com/v0/b/astra2k24-c3388.appspot.com/o/sandy.png?alt=media&token=211b3be2-bc04-4d53-b0c1-c7e429c21377" description="Event coordinator" title="Linked In"/>
  
      </Link>
  </div>
    <div className="max-w-xs mx-1 my-2">
    <Link href="https://www.linkedin.com/in/anne-joan-benita-v-1b8869282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app					
					
          " target="_blank">

      <AnimatedPinDemo name="Anne Joan Benita" imageUrl="https://firebasestorage.googleapis.com/v0/b/astra2k24-c3388.appspot.com/o/anne1.png?alt=media&token=68b3719a-7eab-4d61-9f02-fd4d3e4286e6" description="Event coordinator" title="Linked In"/>
  
      </Link>
  </div>
    <div className="max-w-xs mx-1 my-2">
    <Link href="" target="_blank">

      <AnimatedPinDemo name="Shawn Godfrey T" imageUrl="https://firebasestorage.googleapis.com/v0/b/astra2k24-c3388.appspot.com/o/shawn.png?alt=media&token=fd084f0a-f809-40e7-9daf-0926d9543872" description="Event coordinator" title="Linked In"/>
 
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