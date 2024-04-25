import React from "react";
import Countdown from "./timer";
import Link from "next/link";
import { Button } from "@nextui-org/react";

const TimerBg: React.FC = () => {
  return (
    <div className="hero h-full relative  overflow-hidden">

      {/* Video background */}
      <video autoPlay muted loop className="absolute inset-0 object-cover w-full h-full">
        <source src="timer.mp4" type="video/mp4" />
        {/* Add additional source elements for different video formats if needed */}
      </video>
      
      <div className="hero-overlay bg-opacity-0"></div>
      
      <div className="hero-content flex flex-col justify-center items-center text-center text-neutral-content">
        <div className="container mx-auto px-4">
          <div className="md:text-xl  my-4">Time is running out</div>
          <div className="md:text-5xl text-3xl lg:text-5xl font-bold text-center text-white relative z-2 my-4">
           <span className="text-blue-500">Register Now!</span>
           </div>        
                 <div className="md:text-xl my-4 mx-5">Our Event is going to be fabulous exposure for Technical World!</div>
          <div className="md:text-xl my-4 mx-5">So Hurry Up guys Hurry Up!</div>
          <div className="md:text-6xl text-3xl lg:text-6xl font-bold text-center text-white relative z-2 my-4">No Entry fee!!</div>
          <div className="md:text-6xl text-3xl lg:text-6xl font-bold text-center text-white relative z-2 my-4 mx-5">
            Win Exciting  <span className="text-blue-500 mx-5">Prizes</span>
           </div>     
           
           
                 {/* Correct the href attribute */}
                 <Link href="/register">
     <button
  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg text-center p-8 m-8 text-2xl mx-15 animate-pulse border-2 border-transparent rounded-full w-72 inline-block"
  style={{ cursor: "pointer" }} // Add cursor style to indicate clickable
>
  On-Spot <br />Registration
</button>
    </Link>
          
        </div>

        <div className="md:h-1/2"> {/* Set half the height of the screen */}
          <div className="max-w-md ">
            <h1 className="mb-5 text-5xl font-bold"><Countdown/></h1> {/* Adjust the height of the container */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimerBg;
