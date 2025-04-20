"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";

const Lottie = dynamic(
  () => import("lottie-react"),
  { ssr: false }
);

export default function Home() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "/signin";
    }, 7500);

    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <div className="w-1/2">
        <Lottie loop={false} autoplay={true} animationData={require("@/assets/lottie/welcome.json")} />
      </div>
    </div>
  );
}