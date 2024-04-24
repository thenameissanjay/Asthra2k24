import Image from "next/image";
import React from "react";
import { CardContainer, CardBody, CardItem } from "../sub/3d-card";
interface AnimatedPinDemoProps {
  name: string;
  description: string;
  imageurl:string;
}
export function ThreeDCardDemo({  name, description, imageurl }: AnimatedPinDemoProps) {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center">
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[20rem] h-[20rem] sm:w-[25rem] sm:h-[25rem] rounded-xl p-3 border">
         
          <CardItem translateZ="100" rotateX={20} rotateZ={-10} className="w-full mt-2">
            <Image src={imageurl} height="400" width="400" className="object-cover rounded-xl group-hover/card:shadow-xl" alt="thumbnail" />
          </CardItem>
          <div className="flex justify-between items-center mt-2">
            
           
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
}
