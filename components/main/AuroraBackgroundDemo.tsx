"use client";

import { motion } from "framer-motion";
import React from "react";
import { AnimatedPinDemo } from "./animatedDemo";
import Link from "next/link";

export function AuroraBackgroundDemo() {
  return (
 <main>
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
       <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Our Coordinators
        </div>
       
      
      </motion.div>



 
     



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
       
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4 mt-100" style={{marginTop:"100px"}}>
        Overall Coordinators
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
  <Link href="https://www.linkedin.com/in/sanjay-kumar-651010276/" target="_blank">

      <AnimatedPinDemo name="Sanjay Kumar M" imageUrl="https://firebasestorage.googleapis.com/v0/b/astra2k24-c3388.appspot.com/o/sk.png?alt=media&token=4c403b0e-cde9-4b2c-a52b-bd5cdb084bea" description="President" title="Linked In"/>
      </Link>

    </div>
    <div className="max-w-xs mx-1 my-2">
    <Link href="https://www.linkedin.com/in/neha-m-137287266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">

    
      <AnimatedPinDemo name="Neha M" imageUrl="https://firebasestorage.googleapis.com/v0/b/astra2k24-c3388.appspot.com/o/neha2.png?alt=media&token=743961d7-1046-4abc-ab3e-7f0dc1b4342e" description="Secretary" title="Linked In"/>
      </Link>

    </div>
    <div className="max-w-xs mx-1 my-2">

    <Link href="https://www.linkedin.com/in/hari-krishnan-p-1854a51b2/" target="_blank">
  <AnimatedPinDemo
    name="Hari krishnan P"
    imageUrl="https://firebasestorage.googleapis.com/v0/b/astra2k24-c3388.appspot.com/o/hari%20p.png?alt=media&token=0a58cb1b-6198-416c-95e2-40cbf23a3631"
    description="Student Coordinator"
    title="Linked In"
  />
</Link>
    </div>
   
    <div className="max-w-xs mx-1 my-2">
    <Link href="https://www.linkedin.com/in/yokesh-waran-k-076814301?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">

      <AnimatedPinDemo name="Yokeshwaran K" imageUrl="https://firebasestorage.googleapis.com/v0/b/astra2k24-c3388.appspot.com/o/yo.png?alt=media&token=ee9405ca-7442-4674-a826-9a8e45fdf6e5" description="Student Coordinator" title="Linked In"/>
   
      </Link>
 </div>
    <div className="max-w-xs mx-1 my-2">
    <Link href="https://www.linkedin.com/in/haifa-zahoor-5923a8245/" target="_blank">

      <AnimatedPinDemo name="Haifa Zulaika Z" imageUrl="https://firebasestorage.googleapis.com/v0/b/astra2k24-c3388.appspot.com/o/haifa.png?alt=media&token=77384e26-73f7-4b42-ba26-276a26281dd9" description="Student Coordinator" title="Linked In "/>
   
      </Link>
 </div>
    <div className="max-w-xs mx-1 my-2">
    <Link href="https://www.linkedin.com/in/cherisha-s-631351219/" target="_blank">

      <AnimatedPinDemo name="Cherisha S" imageUrl="https://firebasestorage.googleapis.com/v0/b/astra2k24-c3388.appspot.com/o/cherisha.png?alt=media&token=71750fbd-053c-43ea-bc1b-18e6d8fd5a86" description="Student Coordinator" title="Linked In"/>
   
      </Link>
 </div>
  
  </div>
</div>
      
      </motion.div>
     

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
       
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4 mt-100" style={{marginTop:"100px"}}>
          Treasurer
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

      <AnimatedPinDemo name="Divya R" imageUrl="https://firebasestorage.googleapis.com/v0/b/astra2k24-c3388.appspot.com/o/divya.png?alt=media&token=2ca798fe-e82b-4f39-b18f-05741db266b6" description="Treasurer" title="Linked In"/>
   
      </Link>
 </div>
    <div className="max-w-xs mx-1 my-2">
    <Link href="" target="_blank">

      <AnimatedPinDemo name="Abubacker Siddique" imageUrl="https://firebasestorage.googleapis.com/v0/b/astra2k24-c3388.appspot.com/o/abu.png?alt=media&token=3fd520b4-f882-47ed-9c26-d2000b41a221" description="Treasurer" title="Linked In"/>
   
      </Link>
 </div>

    
   
  </div>
</div>
      
      </motion.div>


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
       
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4 mt-100" style={{marginTop:"100px"}}>
          Web Developers
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
  <Link href="https://www.linkedin.com/in/a-vinith-642301282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">

      <AnimatedPinDemo name="Vinith A" imageUrl="https://firebasestorage.googleapis.com/v0/b/astra2k24-c3388.appspot.com/o/vinith3.png?alt=media&token=28cda86b-d414-4a13-a41d-cc7620194331" description="React developer" title="Linked In"/>
  
      </Link>
  </div>
    <div className="max-w-xs mx-1 my-2">
    <Link href="https://www.linkedin.com/in/niranjan-kumar-a-769696276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">

      <AnimatedPinDemo name="Niranjan Kumar A" imageUrl="https://firebasestorage.googleapis.com/v0/b/astra2k24-c3388.appspot.com/o/nk1.png?alt=media&token=27495e26-2994-4268-8b29-06f4227d39c2" description="React developer" title="Linked In"/>
  
      </Link>
  </div>
    <div className="max-w-xs mx-1 my-2">
    <Link href="https://www.linkedin.com/in/sathish-g-65b1971b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">

      <AnimatedPinDemo name="Sathish G" imageUrl="https://firebasestorage.googleapis.com/v0/b/astra2k24-c3388.appspot.com/o/sathish.png?alt=media&token=e37a9b09-4418-47e1-86bf-edce3bb23a25" description="React developer" title="Linked In"/>
  
      </Link>
  </div>
    
    <div className="max-w-xs mx-1 my-2">
    <Link href="https://www.linkedin.com/in/vinoth-kumar-muthusamy-490573266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">

      <AnimatedPinDemo name="Vinoth kumar M" imageUrl="https://firebasestorage.googleapis.com/v0/b/astra2k24-c3388.appspot.com/o/vinoth.png?alt=media&token=c5f77310-9f54-480b-8b1e-570314620c6d" description="React developer" title="Linked In"/>
  
      </Link>
  </div>
    <div className="max-w-xs mx-1 my-2">
    <Link href="" target="_blank">

      <AnimatedPinDemo name="Sanjay kumar M" imageUrl="https://firebasestorage.googleapis.com/v0/b/astra2k24-c3388.appspot.com/o/sk.png?alt=media&token=4c403b0e-cde9-4b2c-a52b-bd5cdb084bea" description="Backend developer" title="Linked In"/>
   
      </Link>
 </div>
  </div>
</div>
      
      </motion.div>





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
       
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4 mt-100" style={{marginTop:"100px"}}>
          Editorial team 
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

      <AnimatedPinDemo name="Hari krishnan P"     imageUrl="https://firebasestorage.googleapis.com/v0/b/astra2k24-c3388.appspot.com/o/hari%20p.png?alt=media&token=0a58cb1b-6198-416c-95e2-40cbf23a3631" description="Editor" title="Linked In"/>
   
      </Link>
 </div>
    <div className="max-w-xs mx-1 my-2">
    <Link href="" target="_blank">

      <AnimatedPinDemo name="Hari Krishnan M R" imageUrl="https://firebasestorage.googleapis.com/v0/b/astra2k24-c3388.appspot.com/o/hari%20mr.png?alt=media&token=9012e6f0-d012-47b1-a3de-d0533c67847f" description="Editor" title="Linked In"/>
  
      </Link>
  </div>
    
    <div className="max-w-xs mx-1 my-2">
    <Link href="" target="_blank">

      <AnimatedPinDemo name="Adithiya R" imageUrl="https://firebasestorage.googleapis.com/v0/b/astra2k24-c3388.appspot.com/o/adithya.png?alt=media&token=61dcd0f7-9268-441c-92d0-83ce58d5296f" description="Editor" title="Linked In"/>
   
      </Link>
 </div>
    <div className="max-w-xs mx-1 my-2">
    <Link href="" target="_blank">

      <AnimatedPinDemo name="Hema Jeyanth" imageUrl="https://firebasestorage.googleapis.com/v0/b/astra2k24-c3388.appspot.com/o/hj.png?alt=media&token=c88823a7-ddde-4c28-b40b-8495644510a4" description="Editor" title="Linked In"/>
   
      </Link>
 </div>
   
 <div className="max-w-xs mx-1 my-2">
    <Link href="" target="_blank">

      <AnimatedPinDemo name="Saraah Akthar" imageUrl="https://firebasestorage.googleapis.com/v0/b/astra2k24-c3388.appspot.com/o/saarah.png?alt=media&token=6cbf283b-89f8-409c-8ee4-4dbbf268e75c" description="Designer" title="Linked In"/>
   
      </Link>
 </div>
 <div className="max-w-xs mx-1 my-2">
    <Link href="" target="_blank">

      <AnimatedPinDemo name="Manisha Nivassani" imageUrl="https://firebasestorage.googleapis.com/v0/b/astra2k24-c3388.appspot.com/o/manisha.png?alt=media&token=f4319419-4ad6-43a5-b46b-88b49f24037c" description="Designer" title="Linked In"/>
   
      </Link>
 </div>
    
    
  </div>
</div>
      
      </motion.div>




      
     

          </main>
  );
}