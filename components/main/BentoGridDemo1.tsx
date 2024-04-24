import React from "react";
import { BentoGrid, BentoGridItem } from "../sub/bento-grid";
import {
  IconArrowWaveRightUp,

  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { MaskContainer } from "@/components/sub/svg-mask-effect";

import Link from "next/link";
import { Vortex } from "../sub/vortex";

export function BentoGridDemo1() {
  return (
    <Vortex
    backgroundColor="black"
    rangeY={1300}
    particleCount={500}
    baseHue={120}
    className="flex items-center flex-col justify-center px-2 md:px-10  py-4 h-1000"
  >
    <BentoGrid className="md:max-w-6xl md:mx-auto mx-auto  ">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 0 ? "md:col-span-2 md:row-span-2 row-span-2" : i === 2 ? "md:col-span-1 md:row-span-2 row-span-1 " : i === 3 ? "md:col-span-2 md:row-span-2 row-span-2 " : i === 4 ? "md:col-span-1 md:row-span-1 " : i === 1 ? "md:col-span-1 md:row-span-1 row-span-1" : ""}
        />
      ))}
    </BentoGrid>
    </Vortex>
  );
}


const Round1words="Step into the dynamic world of Circuithon, where your inner inventor ignites, challenges thrill, and innovation knows no bounds! Don't miss out-Spark your brilliance and seize the victory! oiefewnf fnw fwnjf wfne welfnq efnqoef qljnjqn dqnojfn kq fkn kq f qjnfq flqnf nvkon v  rownfnw 0j  jfnw joqenfn iquoiqnkjfnw foqnljdn ofihofn qifoqnadnipqjd qidjio  wnkd";
const Round2words="Step into the dynamic world of Circuithon, where your inner inventor ignites, challenges thrill, and innovation knows no bounds! Don't miss out-Spark your brilliance and seize the victory! oiefewnf fnw fwnjf wfne welfnq efnqoef qljnjqn dqnojfn kq fkn kq f qjnfq flqnf nvkon v  rownfnw 0j  jfnw joqenfn iquoiqnkjfnw foqnljdn ofihofn qifoqnadnipqjd qidjio  wnkd";
export function SVGMaskEffectDemo() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center  overflow-hidden">



      <MaskContainer
        revealText={
          <><div className="flex flex-wrap justify-center">
          <div className="m-4">
            <h2 className="text-3xl font-bold text-black text-center"  style={{marginBottom:"20px"}} >Rules</h2>
            <ul>
              <li className="max-w-4xl mx-auto text-slate-800 text-center text-1xl font-bold">
                - Maximum 3 Participants per team are allowed.
              </li>
              <li className="max-w-4xl mx-auto text-slate-800 text-center text-1xl font-bold">
                - The Participants are requested to send abstract on or before event.
              </li>
              <li className="max-w-4xl mx-auto text-slate-800 text-center text-1xl font-bold">
                - The Presentation could contain a maximum of 15 slides.
              </li>
            </ul>
          </div>
         
          
       
        </div>
        </>
        }
        className="h-[40rem] border rounded-md"
      >
        <><div className="flex flex-wrap justify-center">
          <div className="m-4">
            <h2 className="text-3xl font-bold text-black text-center"  style={{marginBottom:"20px"}} ><span className="text-red-500">Rules</span></h2>
            <ul>
            <li className="max-w-4xl mx-auto text-slate-800 text-center text-1xl font-bold text-white">
                - Maximum 3 Participants per team are allowed.
              </li>
              <li className="max-w-4xl mx-auto text-slate-800 text-center text-1xl font-bold text-white">
                - The Participants are requested to send abstract on or before event.
              </li>
              <li className="max-w-4xl mx-auto text-slate-800 text-center text-1xl font-bold text-white">
                - The Presentation could contain a maximum of 15 slides.
              </li>
            </ul>
          </div>
         
          
       
        </div>
        </>
      </MaskContainer>
    </div>
  );
}




export function SVGMaskEffectDemo1() {
  return (
    <MaskContainer
    revealText={
      <><div className="flex flex-wrap justify-center">
      <div className="m-4">
        <h2 className="text-3xl font-bold text-black text-center"  style={{marginBottom:"20px"}} >Round</h2>
        <ul>
          <li className="max-w-4xl mx-auto text-slate-800 text-center text-1xl font-bold">
          - Any Topic related to Information Technology or Booming Technology.
          </li>
          <li className="max-w-4xl mx-auto text-slate-800 text-center text-1xl font-bold">
           - Winners get Rewarded,All Participant get Certified.
          </li>
        </ul>
      </div>
      
      
   
    </div>
    </>
    }
    className="h-[40rem] border rounded-md"
  >
  


    <><div className="flex flex-wrap justify-center mt-[-20]">
      <div className="m-4">
        <h2 className="text-3xl font-bold text-black text-center" style={{marginBottom:"20px"}}><span className="text-red-500">Round</span></h2>
        <ul>
        <li className="max-w-4xl mx-auto text-slate-800 text-center text-1xl font-bold text-white">
          - Any Topic related to Information Technology or Booming Technology.
          </li>
          <li className="max-w-4xl mx-auto text-slate-800 text-center text-1xl font-bold text-white">
           - Winners get Rewarded,All Participant get Certified.
          </li>
        </ul>
      </div>
    </div>
    </>
  </MaskContainer>
  );
}




const Registration = () => (
  <div className="text-center">
    <Link href="/register">
      <button
        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg text-center"
        style={{
          padding: '32px 44px',
          margin: '30px',
          fontSize: '2.0rem',
          animation: 'pulse 2s infinite alternate',
          borderWidth: '2px',
          borderColor: 'transparent',
          borderRadius: '30%',
          width: "300px",
          display: "inline-block",
          textDecoration: "none",
          textAlign: "center",
          cursor: "pointer", // Add cursor style to indicate clickable
        }}
      >
        Register<br/> Here
      </button>
    </Link>
  </div>
);
const CustomDate = () => {
  return (
    <>
      <div className="grid md:grid-cols-1 grid-cols-2 gap-1 text-center "style={{ marginBottom: "-20px", marginTop:"30px" }} >
        <div>
          <p className="md:text-7xl text-4xl  md:font-bold text-black  md:mr-2 
          mr-11">04</p>
          <p className="text-xs ml-1 mt-1 uppercase text-black">th</p>
        </div>
        <div  className=" " style={{ marginLeft: "-5px" }}>
          <p className="md:text-3xl md:font-semibold text-2xl text-black">MAY</p>
          <p className="md:text-3xl md:font-medium text-black">2024</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-1 text-center" style={{ marginTop: "-20px" }}>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" x="10px" y="10px" width="50" height="50"  viewBox=" 20 50 50" style={{marginLeft:"50px", marginTop:"-10px"}}>
<path d="M 25 2 C 12.264481 2 2 12.264481 2 25 C 2 37.735519 12.264481 48 25 48 C 37.735519 48 48 37.735519 48 25 C 48 12.264481 37.735519 2 25 2 z M 25 4 C 36.664481 4 46 13.335519 46 25 C 46 36.664481 36.664481 46 25 46 C 13.335519 46 4 36.664481 4 25 C 4 13.335519 13.335519 4 25 4 z M 24.984375 6.9863281 A 1.0001 1.0001 0 0 0 24 8 L 24 22.173828 C 22.81904 22.572762 22 23.655572 22 25 C 22 25.471362 22.108361 25.906202 22.289062 26.296875 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 23.703125 27.710938 C 24.093798 27.891639 24.528638 28 25 28 C 26.7 28 28 26.7 28 25 C 28 23.655572 27.18096 22.572762 26 22.173828 L 26 8 A 1.0001 1.0001 0 0 0 24.984375 6.9863281 z"></path>
</svg>


        </div>
        <div style={{ marginLeft: "-5px" }}>
          <p className="md:text-lg md:font-bold text-xl text-black">10.00am - 2.00pm</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-1 text-center" style={{ marginTop: "-20px" }}>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 64 64" style={{marginLeft:"45px", marginTop:"-10px"}} id="location"><g fill="#134563"><path d="m32 55.7-.9-1.1c-.6-.8-15.9-18.7-15.9-29.4 0-9.3 7.6-16.8 16.8-16.8S48.8 16 48.8 25.2c0 10.7-15.3 28.7-15.9 29.4l-.9 1.1zm0-45c-8 0-14.4 6.5-14.4 14.4 0 8.4 11.1 22.7 14.4 26.8 3.3-4.1 14.4-18.3 14.4-26.8 0-7.9-6.4-14.4-14.4-14.4z"></path><path d="M32 31.6c-3.5 0-6.4-2.9-6.4-6.4s2.9-6.4 6.4-6.4 6.4 2.9 6.4 6.4-2.9 6.4-6.4 6.4zm0-10.4c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"></path></g></svg>
        </div>
        <div style={{ marginLeft: "-5px" }}>
          <p className="md:text-2xl md:font-bold text-xl text-black">3rd Floor</p>
          <p className="md:text-1xl md:font-bold text-md text-black">Main Block</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-1 text-center" style={{ marginTop: "-40px" }}>
        <div>
        <img src="./icons8-member-48.png" alt="dead" className="w-[3rem] h-[3rem] mb-4" style={{marginLeft:"50px", marginTop:"-10px"}}/>
        </div>
        <div style={{ marginLeft: "-5px" }}>
          <p className="md:text-2xl md:font-bold text-xl text-black">1-3 Members</p>
        </div>
      </div>
    </>
  );
  
};


const Contacts = () => (
  <>
  <div className="text-center">
           <h2 className="text-3xl font-bold text-black text-center"  style={{ marginTop:"20px"}} > Contacts</h2>

  </div>
   <div className="grid grid-cols-2  text-center "style={{ marginBottom: "-20px", marginTop:"-100px" }} >
   <div>
   <p className="text-2xl font-semibold text-black">Abubacker</p>
     <p className="text-1xl font-medium text-black">9150391522</p>
   </div>
   <div style={{ marginLeft: "-5px" }}>
   <svg width="50px" height="50px" viewBox="0 0 24 24" style={{marginLeft:"80px"}} fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.3545 22.2323C15.3344 21.7262 11.1989 20.2993 7.44976 16.5502C3.70065 12.8011 2.2738 8.66559 1.76767 6.6455C1.47681 5.48459 2.00058 4.36434 2.88869 3.72997L5.21694 2.06693C6.57922 1.09388 8.47432 1.42407 9.42724 2.80051L10.893 4.91776C11.5152 5.8165 11.3006 7.0483 10.4111 7.68365L9.24234 8.51849C9.41923 9.1951 9.96939 10.5846 11.6924 12.3076C13.4154 14.0306 14.8049 14.5807 15.4815 14.7576L16.3163 13.5888C16.9517 12.6994 18.1835 12.4847 19.0822 13.1069L21.1995 14.5727C22.5759 15.5257 22.9061 17.4207 21.933 18.783L20.27 21.1113C19.6356 21.9994 18.5154 22.5232 17.3545 22.2323ZM8.86397 15.136C12.2734 18.5454 16.0358 19.8401 17.8405 20.2923C18.1043 20.3583 18.4232 20.2558 18.6425 19.9488L20.3056 17.6205C20.6299 17.1665 20.5199 16.5348 20.061 16.2171L17.9438 14.7513L17.0479 16.0056C16.6818 16.5182 16.0047 16.9202 15.2163 16.7501C14.2323 16.5378 12.4133 15.8569 10.2782 13.7218C8.1431 11.5867 7.46219 9.7677 7.24987 8.7837C7.07977 7.9953 7.48181 7.31821 7.99439 6.95208L9.24864 6.05618L7.78285 3.93893C7.46521 3.48011 6.83351 3.37005 6.37942 3.6944L4.05117 5.35744C3.74413 5.57675 3.64162 5.89565 3.70771 6.15943C4.15989 7.96418 5.45459 11.7266 8.86397 15.136Z" fill="#0F0F0F"/>
</svg>
   </div>
 </div>
 <div className="grid grid-cols-2  text-center "style={{ marginBottom: "20px", marginTop:"-100px" }} >
   <div>
   <p className="text-2xl font-semibold text-black">Hari Krishnan</p>
     <p className="text-1xl font-medium text-black">8072324813</p>
   </div>
   <div style={{ marginLeft: "-5px" }}>
   <svg width="50px" height="50px" viewBox="0 0 24 24" style={{marginLeft:"80px"}} fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.3545 22.2323C15.3344 21.7262 11.1989 20.2993 7.44976 16.5502C3.70065 12.8011 2.2738 8.66559 1.76767 6.6455C1.47681 5.48459 2.00058 4.36434 2.88869 3.72997L5.21694 2.06693C6.57922 1.09388 8.47432 1.42407 9.42724 2.80051L10.893 4.91776C11.5152 5.8165 11.3006 7.0483 10.4111 7.68365L9.24234 8.51849C9.41923 9.1951 9.96939 10.5846 11.6924 12.3076C13.4154 14.0306 14.8049 14.5807 15.4815 14.7576L16.3163 13.5888C16.9517 12.6994 18.1835 12.4847 19.0822 13.1069L21.1995 14.5727C22.5759 15.5257 22.9061 17.4207 21.933 18.783L20.27 21.1113C19.6356 21.9994 18.5154 22.5232 17.3545 22.2323ZM8.86397 15.136C12.2734 18.5454 16.0358 19.8401 17.8405 20.2923C18.1043 20.3583 18.4232 20.2558 18.6425 19.9488L20.3056 17.6205C20.6299 17.1665 20.5199 16.5348 20.061 16.2171L17.9438 14.7513L17.0479 16.0056C16.6818 16.5182 16.0047 16.9202 15.2163 16.7501C14.2323 16.5378 12.4133 15.8569 10.2782 13.7218C8.1431 11.5867 7.46219 9.7677 7.24987 8.7837C7.07977 7.9953 7.48181 7.31821 7.99439 6.95208L9.24864 6.05618L7.78285 3.93893C7.46521 3.48011 6.83351 3.37005 6.37942 3.6944L4.05117 5.35744C3.74413 5.57675 3.64162 5.89565 3.70771 6.15943C4.15989 7.96418 5.45459 11.7266 8.86397 15.136Z" fill="#0F0F0F"/>
</svg>
   </div>
 </div>
 </>

);
const items = [
  {
    title: "",
    description: "",
    header: <SVGMaskEffectDemo1 />,
    icon: <IconClipboardCopy className="h-4 w-4 text-black" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Registration/>,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <CustomDate/>,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
      header: <SVGMaskEffectDemo/>,
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: <Contacts/>,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
 
];