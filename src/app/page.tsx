"use client";
import { TypewriterEffectSmooth } from "@/src/app/components/ui/typewriter-effect";
import { WavyBackground } from "@/src/app/components/ui/wavy-background";
import React, { useState, useEffect } from "react";
 
export function TypewriterEffectSmoothDemo() {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 580);
    };

    handleResize(); // Проверка при първоначално зареждане
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const words = [
    { text: "Create", className: "text-3xl text-white" },
    { text: "videos", className: "text-3xl text-white" },
    { text: "with", className: "text-3xl text-white" },
    { text: "text", className: "text-3xl text-white" },
    { text: "Prompts.", className: "text-5xl text-gradient-matching-color" },
  ];
  return (
    <WavyBackground>
    <div className="flex flex-col items-center justify-center ">
      <TypewriterEffectSmooth words={words} />
      <div className={isMobileView ? "flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4" : "flex md:flex-row space-y-0 md:space-y-0 space-x-5 md:space-x-4"}>
      <button className="inline-flex w-30 h-10 rounded-xl animate-shimmer items-center justify-center  border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Try Kendy AI
        </button>
        <button className="relative inline-flex h-10 w-30 overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors backdrop-blur-3xl">
    Subscribe
  </span>
</button>
      </div>
    </div>
    </WavyBackground>
  );
}
export default TypewriterEffectSmoothDemo;
// 1279
//text-gradient-matching-color
// <div className="flex  md:flex-row space-y-0 md:space-y-0 space-x-5 md:space-x-4"> a tova za desktop
//  <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4"> за мобиле