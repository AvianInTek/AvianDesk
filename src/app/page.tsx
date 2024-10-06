"use client";

import Lottie from "lottie-react";
import Welcome from "@/assets/lottie/welcome.json";
import Loading from "@/assets/lottie/loading.json";
import { use, useEffect } from "react";


export default function Home() {
  useEffect(() => {
    // after 4 seconds, redirect to login page
    setTimeout(() => {
      window.location.href = "/signin";
    }, 7500);
  });
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <div className="w-1/2">
        <Lottie loop={false} autoplay={true} animationData={Welcome} />
      </div>
    </div>
  );
}
