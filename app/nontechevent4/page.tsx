"use client";

import { AnimatedPinDemo } from "@/components/main/animatedDemo";
import Link from "next/link";
import { LampDemo } from "@/components/main/LampDemo";
import { motion } from "framer-motion";
import { BentoGridDemo9 } from "@/components/main/BentoGridDemo9";
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
      <LampDemo parameter="Liar's Lair" />
      </Vortex>
      <div > <BentoGridDemo9/></div>
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
      <Link href="https://www.linkedin.com/in/r-madhumita-809666283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app								
">
      <AnimatedPinDemo name="Thameen mul Ansari" imageUrl="https://firebasestorage.googleapis.com/v0/b/astra2k24-c3388.appspot.com/o/ansari.png?alt=media&token=bdf69ff5-c176-4875-af33-bce9fbfdb2fa" description="Event coordinator" title="Linked In"/>
   </Link>
    </div>
    <div className="max-w-xs mx-1 my-2">
      <Link href="">
      <AnimatedPinDemo name="Jithendharan S" imageUrl="https://firebasestorage.googleapis.com/v0/b/astra2k24-c3388.appspot.com/o/jithendiran.png?alt=media&token=47aa7bcf-e266-4e25-a9d4-448759eb163a" description="Event coordinator" title="Linked In"/>
   </Link>
    </div>
    <div className="max-w-xs mx-1 my-2">
      <Link href="">
      <AnimatedPinDemo name="Yogeshawarn N" imageUrl="https://firebasestorage.googleapis.com/v0/b/astra2k24-c3388.appspot.com/o/N%20yogeshwaran.png?alt=media&token=4f8f2657-fe72-4eee-9f38-52e198305b0a" description="Event coordinator" title="Linked In"/>
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