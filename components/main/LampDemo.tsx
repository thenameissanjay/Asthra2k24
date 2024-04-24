// LampDemo.tsx

import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../sub/lamp";

interface LampDemoProps {
  parameter: string; // Specify the type of the parameter prop as string
}

export function LampDemo({ parameter }: LampDemoProps) {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl bg-opacity-0"
      >
        { parameter }
      </motion.h1>
    </LampContainer>
  );
}
