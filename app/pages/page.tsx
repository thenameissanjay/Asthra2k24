"use client";

import Link from "next/link";
import { EvervaultCardDemo } from "@/components/main/EvervaultCardDemo";

import { ThreeDCardDemo } from "@/components/main/ThreeDCardDemo";
import { motion } from "framer-motion";

import { LampDemo } from "@/components/main/LampDemo";
import { useEffect, useRef } from "react";
import ParticlesComponent from "@/components/main/particles";

const getHeight = () => {
  if (typeof window !== 'undefined' && window.innerWidth <= 768) {
    return "-150px";
  } else {
    return "200px";
  }
};

const getHeight2 = () => {
  if (typeof window !== 'undefined' && window.innerWidth <= 768) {
    return "50px";
  } else {
    return "100px";
  }
};

const getHeight3 = () => {
  if (typeof window !== 'undefined' && window.innerWidth <= 768) {
    return "200px";
  } else {
    return "-600px";
  }
};

const getHeight6 = () => {
  if (typeof window !== 'undefined' && window.innerWidth <= 768) {
    return "-100px";
  } else {
    return "-400px";
  }
};

const getHeight4 = () => {
  if (typeof window !== 'undefined' && window.innerWidth <= 768) {
    return "-200px";
  } else {
    return "00px";
  }
};

const getHeight5 = () => {
  if (typeof window !== 'undefined' && window.innerWidth <= 768) {
    return "0px";
  } else {
    return "-100px";
  }
};



export default function Home1() {
  
  const technicalEventsRef = useRef<HTMLDivElement>(null);
  const nonTechnicalEventsRef = useRef<HTMLDivElement>(null);
  const gamingEventsRef = useRef<HTMLDivElement>(null);
useEffect(() => {
  
  const urlParams = new URLSearchParams(window.location.search);
  const section = urlParams.get('section');
 
  if (section === "technical-events") {
    technicalEventsRef.current?.scrollIntoView({ behavior: 'smooth' });
  } else if (section === "non-technical-events") {
    nonTechnicalEventsRef.current?.scrollIntoView({ behavior: 'smooth' });
  } else if (section === "gaming-events") {
    gamingEventsRef.current?.scrollIntoView({ behavior: 'smooth' });
  }
}, []);
  return (
    <main className="h-full w-full">
      <ParticlesComponent id="particles"></ParticlesComponent>
        <div ref={technicalEventsRef}>



<LampDemo parameter="Technical Events" />

<div className="flex flex-wrap justify-center" style={{ marginBottom: "100px", marginTop: "-100px" }}>
<motion.div
  initial={{ scale: 0 }}
  animate={{ rotate: 180, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 20
  }}
/>
  <div className="flex justify-center" style={{ marginRight: "20px" }}> {/* Added margin to the right of the first card */}
    <Link href='./techevent1' >
      <EvervaultCardDemo  name="Knowledge Kaleidoscope " description="Paper Presentation"  />
    </Link>
  </div>
  <div className="flex justify-center" style={{ marginRight: "20px" }}> {/* Added margin to the right of the second card */}
    <Link href='./techevent2'>
      <EvervaultCardDemo  name="NeuroNova" description="Mock Interview" />
    </Link>
  </div>
  <div className="flex justify-center"> {/* No margin added to the last card */}
    <Link href='./techevent3'>
      <EvervaultCardDemo  name="SpinScape Treasure Edition" description="Technical Treasure"  />
    </Link>
  </div>
</div>


<div className="flex flex-wrap justify-center" style={{ marginBottom: "100px", marginTop: "-100px" }}>
  <div className="flex justify-center" style={{ marginRight: "20px" }}> {/* Added margin to the right of the first card */}
    <Link href='./techevent4'>
      <EvervaultCardDemo  name="Markup Mayhem Escape" description="HTML coding " />
    </Link>
  </div>
  <div className="flex justify-center" style={{ marginRight: "20px" }}> {/* Added margin to the right of the second card */}
    <Link href='./techevent5'>
      <EvervaultCardDemo  name="Puzzle Palooza Codeathon" description="Debugging"  />
    </Link>
  </div>
  <div className="flex justify-center" style={{ marginRight: "20px" }}> {/* Added margin to the right of the second card */}
    <Link href='./techevent6'>
      <EvervaultCardDemo  name="Knowledge Knockout" description="Technical Quiz"  />
    </Link>
  </div>
 
</div>

</div>





      <div ref={nonTechnicalEventsRef}>

      <LampDemo parameter=" Non-Tech Events" / >

      <div className="flex flex-wrap justify-center" style={{ marginBottom: getHeight3(), marginTop: getHeight6() }}>
  <div className="mb-4 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3"style={{ marginBottom: getHeight(), marginTop: getHeight() }}>
    <Link href="./nontechevent1"> 
    <ThreeDCardDemo name="Musical Hunt" description="Music " imageurl="https://firebasestorage.googleapis.com/v0/b/astra2k24-c3388.appspot.com/o/9.png?alt=media&token=6cbd830e-861d-4295-93cd-3c63532a857a" />
    </Link>
  </div>

  <div className="mb-1 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3"style={{ marginBottom: getHeight(), marginTop: getHeight() }}>
  <Link href="./nontechevent2"> 

    <ThreeDCardDemo name="Link and Clue" description="Connetions"  imageurl="https://firebasestorage.googleapis.com/v0/b/astra2k24-c3388.appspot.com/o/2.png?alt=media&token=874167ef-37ae-44f3-bb0e-d578ed90fe26"/>
    </Link>

  </div>
  <div className="mb-4 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3"style={{ marginBottom: getHeight(), marginTop: getHeight() }}>
  <Link href="./nontechevent3"> 

   
    <ThreeDCardDemo  name="Channel Surfing" description="Channnel Surfing" imageurl="https://firebasestorage.googleapis.com/v0/b/astra2k24-c3388.appspot.com/o/event%20names12.png?alt=media&token=f5275bb1-98f9-4ee5-8db8-2f7f76497f77" />

    </Link>

  </div>
</div>



<div className="flex flex-wrap justify-center" style={{ marginTop: getHeight4() , marginBottom:getHeight5()}}>

  <div className="mb-4 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3"style={{ marginBottom: getHeight(), marginTop: getHeight() }} >
  <Link href="./nontechevent4"> 

    <ThreeDCardDemo name="Truth and Lier" description="Truth and lie " imageurl="https://firebasestorage.googleapis.com/v0/b/astra2k24-c3388.appspot.com/o/7.png?alt=media&token=be0b5f80-6d2f-449d-8300-1296f2880bde" />
    </Link>

  </div>
  <div className="mb-4 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3"style={{ marginBottom: getHeight(), marginTop:getHeight() }}>
  <Link href="./nontechevent5">
  
    <ThreeDCardDemo  name="Online Event " description="Online events"  imageurl="https://firebasestorage.googleapis.com/v0/b/astra2k24-c3388.appspot.com/o/0.jpg?alt=media&token=ea80e890-be8d-4a9c-9c10-0546e83193da" />
  
  </Link>
  </div>
</div>
</div>





    </main>
  );
}


