import React from "react";
import { PinContainer } from "../sub/3d-pin";

interface AnimatedPinDemoProps {
  title: string;
  name: string;
  imageUrl: string;
  description: string;
}

export function AnimatedPinDemo({ title, name, imageUrl, description }: AnimatedPinDemoProps) {
  return (
    <div className="h-[20rem] w-full flex items-center justify-center">
      <PinContainer title={title}> {/* Use the title prop */}
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[12rem] h-[15rem] ">
          <img src={imageUrl} alt={name} className="w-[10rem] h-[10rem] mb-4" />
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100 text-center">
            {name}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal text-center">
            <span className="text-slate-500">{description}</span> {/* Render the description */}
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
