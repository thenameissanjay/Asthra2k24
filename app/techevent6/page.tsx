"use client";

import { AnimatedPinDemo } from "@/components/main/animatedDemo";
import Link from "next/link";

import { LampDemo } from "@/components/main/LampDemo";
import { motion } from "framer-motion";
import { BentoGridDemo11 } from "@/components/main/BentoGridDemo11";
import { Vortex } from "@/components/sub/vortex";

export default function Home() {
  return (
    <main className="h-full w-full">
         <Vortex
        backgroundColor="black"
        rangeY={2000}
        particleCount={700}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 h-full"
      >
      <LampDemo parameter="Knowledge Knockout" />
      </Vortex>
      <div > <BentoGridDemo11/></div>
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
          Event Co-ordinators
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
      <AnimatedPinDemo name="Harini P" imageUrl="https://firebasestorage.googleapis.com/v0/b/astra2k24-c3388.appspot.com/o/harini.png?alt=media&token=af9e9250-0800-43b6-a8bc-e430956aeeea" description="Event coordinator" title="Linked In"/>
    </Link>
    </div>
    <div className="max-w-xs mx-1 my-2">
    <Link href="" target="_blank">
      <AnimatedPinDemo name="Divya Bharathi M" imageUrl="https://firebasestorage.googleapis.com/v0/b/astra2k24-c3388.appspot.com/o/divya%20bharathi.png?alt=media&token=282d1341-fbb5-43a4-84d3-bf25615dcb8c" description="Event coordinator" title="Linked In"/>
    </Link>
    </div>
    <div className="max-w-xs mx-1 my-2">
    <Link href="" target="_blank">
      <AnimatedPinDemo name="Dayana Devi K" imageUrl="https://firebasestorage.googleapis.com/v0/b/astra2k24-c3388.appspot.com/o/dayana.png?alt=media&token=cfa823c6-f1e4-41da-b096-0f3628941fad" description="Event coordinator" title="Linked In"/>
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