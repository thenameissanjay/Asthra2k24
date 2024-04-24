"use client";


import { AnimatedPinDemo } from "@/components/main/animatedDemo";
import Link from "next/link";
import { LampDemo } from "@/components/main/LampDemo";
import { motion } from "framer-motion";
import { BentoGridDemo1 } from "@/components/main/BentoGridDemo1";
import { Vortex } from "@/components/sub/vortex";


export default function Home() {
  return (


    <main className="h-full w-full" >
 <Vortex
        backgroundColor="black"
        rangeY={2000}
        particleCount={700}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 h-full"
      >
   

<LampDemo parameter="Knowledge Kaleidoscope" />

</Vortex>


    <div > <BentoGridDemo1/></div>
    <Vortex
  backgroundColor="black"
  rangeY={500} // Decreased from 1200 to move the effect upwards
  particleCount={700}
  baseHue={120}
  className="flex items-center flex-col justify-center px-2 md:px-10 mt-[-40] py-1 h-1000"
>
  {/* Content of the Vortex component */}
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
      <Link href="https://www.linkedin.com/in/aafrein-a-03491a229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app					
" target="_blank">

        <AnimatedPinDemo
          name="AAFREIN A"
          imageUrl="https://firebasestorage.googleapis.com/v0/b/astra2k24-c3388.appspot.com/o/aafrein.png?alt=media&token=a489f49a-8897-4e9d-90ea-901762d7e2fa"
          description="Event coordinator"
          title="Linked In"
        />
   
   </Link>
   </div>
      <div className="max-w-xs mx-1 my-2">
      <Link href="https://www.linkedin.com/in/jenifer-m-959703285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app					
" target="_blank">

        <AnimatedPinDemo
          name="JENIFER M"
          imageUrl="https://firebasestorage.googleapis.com/v0/b/astra2k24-c3388.appspot.com/o/jenifer.png?alt=media&token=65df1707-ff2f-42b9-a4b0-19d784b38af9"
          description="Event coordinator"
          title="Linked In"
        />
  
  </Link>
    </div>
      <div className="max-w-xs mx-1 my-2">
      <Link href="https://www.linkedin.com/in/abubacker-siddique-36b7032a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app					
" target="_blank">

        <AnimatedPinDemo
          name="Abubacker Siddique"
          imageUrl="https://firebasestorage.googleapis.com/v0/b/astra2k24-c3388.appspot.com/o/abu.png?alt=media&token=3fd520b4-f882-47ed-9c26-d2000b41a221"
          description="Event coordinator"
          title="Event coordinator"
        />
    
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