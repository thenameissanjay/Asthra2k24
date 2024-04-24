"use client";

import { AnimatedPinDemo } from "@/components/main/animatedDemo";
import Link from "next/link";

import { LampDemo } from "@/components/main/LampDemo";
import { motion } from "framer-motion";
import { BentoGridDemo6 } from "@/components/main/BentoGridDemo6";
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
      <LampDemo parameter="Musical Hunt" />
      </Vortex>
      <div > <BentoGridDemo6/></div>
      <Vortex
    backgroundColor="black"
    rangeY={1300}
    particleCount={700}
    baseHue={120}
    className="flex items-center flex-col justify-center px-2 md:px-10  py-4 h-1000"
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
    <Link href="" target="_blank">

      <AnimatedPinDemo name="Umayal S" imageUrl="https://firebasestorage.googleapis.com/v0/b/astra2k24-c3388.appspot.com/o/umayal.png?alt=media&token=32cdde39-cbae-4611-94f3-f7880bfe4ba6" description="Event coordinator" title="Linked In"/>
 
      </Link>
   </div>
    <div className="max-w-xs mx-1 my-2">
    <Link href="" target="_blank">

      <AnimatedPinDemo name="Tanujhaa G" imageUrl="https://firebasestorage.googleapis.com/v0/b/astra2k24-c3388.appspot.com/o/tanujha.png?alt=media&token=b76b0731-d45c-4d52-847c-8fc04183a596" description="Event coordinator" title="Linked In"/>
  
      </Link>
  </div>
    <div className="max-w-xs mx-1 my-2">
    <Link href="https://www.linkedin.com/in/pavithra-s-278a64221?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app								
" target="_blank">

      <AnimatedPinDemo name="Pavithra S" imageUrl="https://firebasestorage.googleapis.com/v0/b/astra2k24-c3388.appspot.com/o/pavithra.png?alt=media&token=a8f9578b-79db-46fd-9ee5-1a09458bd17c" description="Event coordinator" title="Linked In"/>
  
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