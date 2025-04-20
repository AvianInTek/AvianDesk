"use client";

import NotFound from "@/assets/lottie/not-found.json";
import dynamic from "next/dynamic";

const Lottie = dynamic(
  () => import("lottie-react"),
  { ssr: false }
);


export default function PageNotFound() {
    return (
        <div className="flex justify-center items-center h-screen">
          {/* <div className="w-1/2"> */}
            <Lottie className="w-1/2" loop={true} autoplay={true} animationData={NotFound} />
          {/* </div> */}
        </div>
    );
}