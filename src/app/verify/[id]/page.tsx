"use client";

import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import Completed from "@/assets/lottie/completed.json";
import Celebration from "@/assets/lottie/celebration.json";

export default function Verify({ params }: { params: { id: string } }) {
    var id = decodeURIComponent(params.id);
    const [errors, setError] = useState("");
    const [completed, setCompleted] = useState(false);
    useEffect(() => {
        const verifyId = async () => {
            try {
                const response = await fetch(`/api/auth/verify`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ id: id }),
                });
                const responseData: any = await response.json();
                console.log(responseData);
                if (response.ok && responseData.success) {
                    setCompleted(true);
                    // after 5 seconds, redirect to login page
                    setTimeout(() => {
                        window.location.href = "/signin";
                    }, 2500);
                } else {
                    setError(responseData.message);
                }
            } catch (error) {
                // console.error('Error:', error);
                setError("An error occurred while verifying the user.");
            }
        };
        verifyId();
    }, [id]);
    return (
        <>
            {completed && (
                <div className="flex justify-center items-center h-screen flex-col">
                    <div className="w-1/2">
                        <Lottie loop={false} autoplay={true} animationData={Completed} />
                    </div>
                </div>
            )}
        </>
    );
}