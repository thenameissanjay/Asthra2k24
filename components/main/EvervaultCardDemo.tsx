import React from "react";
import { EvervaultCard, Icon } from "../sub/evervault-card";

interface AnimatedPinDemoProps {
  name: string;
  description: string;
}

export function EvervaultCardDemo({  name, description }: AnimatedPinDemoProps) {  return (
    <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[25rem]">
     

      <EvervaultCard className="text-center" text={name} />
<div className="text-center">
      <h2 className=" text-black text-center mt-4 text-sm font-light">
       {description}
      </h2>
      </div>
   
    </div>
  );
}
