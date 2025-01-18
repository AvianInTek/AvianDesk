"use client";
import { owner } from '@/lib/constants';
import React, { useEffect, useState } from 'react';

interface ForgotProps {
    id: string;
}

export default function Forgot({ id }: ForgotProps) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        "password": ""
    });
    
    const [video, setVideo] = useState(0);

    useEffect(() => {
        setVideo(Math.floor(Math.random() * owner.length));
        const timer = setTimeout(() => {
        setLoading(false);
        }, 2000);

        return () => clearTimeout(timer); // Clear the timer when the component unmounts
    }, []);

    async function forgotPassword(e: any) {
        var password = formData.password;
        if (password === '') {
            alert('Password is required');
            return;
        }
        password = id;
        console.log('Password:', password);
    }

    return (
        <>
            <main className="flex flex-col">
                <header className="fixed top-0 z-50 hidden w-full text-gray-100 transition-all duration-300 ease-in-out lg:block lg:w-1/3 body-font">
                    <div className="container flex flex-row flex-wrap items-center p-5 mx-auto">
                        <a className="flex-grow font-semibold text-2x1" href="/"><img src='/logo/letter.png' className='w-40 no-drag' alt='SangrahDB' /></a>
                    </div>
                </header>
                <div className="flex flex-row flex-grow">
                    
                <div className="hidden lg:block lg:w-1/3">
                    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
                            <video className="object-cover w-full h-full border-none no-drag" autoPlay muted loop>
                            <source src={`/assets/video/${video}.mp4`} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <a href={`https://dribbble.com/${owner[video]}`} className="font-bold text-center text-white" style={{ position: 'absolute', bottom: 0, width: '100%', marginBottom: '20px' }}>@{owner[video]}</a>
                        </div>
                    </div>
                    <div className="flex items-center justify-center flex-grow p-6 lg:w-2/3 h-screen lg:h-auto pb-10">
                        <div className="w-full max-w-md">
                            <h2 className="flex flex-row mb-6 text-2xl font-bold">Reset password <span className="ml-3"> </span><img src='/logo/letter-dark.png' className='h-7 no-drag hidden lg:block' alt='SangrahDB' /></h2>
                            <form action={forgotPassword}>
                                <div className="mb-6">
                                    <span className="flex items-center justify-between mb-2 font-sans font-bold text-gray-700 text-sl">
                                        Password
                                    </span>
                                    <input className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded-lg shadow appearance-none focus:border-indifo-500 h-14 focus:outline-none focus:ring" id="password" type="password" />
                                </div>
                                { error && (<div className="mb-6">
                                    <span className="flex items-center justify-between mb-2 font-sans text-lg font-bold text-red-700">
                                    {error}
                                    </span>
                                </div> )}
                                <div>
                                    <button type="submit" className="focus:shadow-outline h-14 w-full rounded-3xl bg-[#0D0C22] px-4 py-2 font-sans font-bold text-white hover:bg-gray-800 focus:outline-none">Reset Now!</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};