"use client";

import Lottie from "lottie-react";
import NotFound from "@/assets/lottie/not-found.json";



export default function PageNotFound() {
    return (
        <div className="flex justify-center items-center h-screen">
          {/* <div className="w-1/2"> */}
            <Lottie className="w-1/2" loop={true} autoplay={true} animationData={NotFound} />
          {/* </div> */}
        </div>
    );
}