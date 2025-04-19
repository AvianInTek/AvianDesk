"use client";
import { owner } from "@/lib/constants";
import { redirect } from "next/navigation";
import { useState, useEffect } from "react";

export default function Signin() {
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        "email": "",
        "password": ""
    });
    const [video, setVideo] = useState(0);
    
    async function handleAdmin() {
        try {
            const res = await fetch('/api/auth/verify', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await res.json();
            if (data.success) {
                if (!data.admin) {
                    window.location.href = "/tickets";
                } else {
                    window.location.href = "/dashboard";
                }
            } else {
                console.error('Verify failed:', data.message);
            }
        } catch (error) {
            console.error('Error verify out:', error);
        }
    }

    useEffect(() => {
        const handleRefresh = () => {
            setVideo(Math.floor(Math.random() * owner.length));
        };
        if (document.cookie) {
            handleAdmin();
        }
        window.addEventListener('load', handleRefresh);
        return () => {
            window.removeEventListener('load', handleRefresh);
        };
    }, []);

    const handleChange = (event: any) => {
        setFormData({
            ...formData,
            [event.target.id]: event.target.value
        });
    }

    const submit = async () => {
        for (const [key, value] of Object.entries(formData)) {
            if (value === "") {
                setError(`${key} is required`);
                return;
            }
        }
        try {
            const response = await fetch(`/api/auth/signin`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const responseData: any = await response.json();
            if (response.ok && responseData.success) {
                handleAdmin();
            } else {
                setError(responseData.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
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
                            <h2 className="flex flex-row mb-6 text-2xl font-bold">Sign in to <span className="ml-3"> </span><img src='/logo/letter-dark.png' className='h-7 no-drag' alt='SangrahDB' /></h2>
                            <form action={submit}> {/** form */}
                                <div className="mb-4">
                                    <label className="block mb-2 font-bold text-gray-700 text-sl"> Email </label>
                                    <input value={formData.email} onChange={handleChange} id="email" type="email" 
                                    className="w-full px-3 py-2 leading-tight text-gray-700 border rounded-lg shadow appearance-none h-14 focus:border-indigo-500 focus:shadow-lg focus:outline-none focus:ring-2" />
                                </div>
                                <div className="mb-6">
                                    <span className="flex items-center justify-between mb-2 font-sans font-bold text-gray-700 text-sl">
                                        Password
                                        <a href="/forgot-password" className="font-sans text-sm font-normal text-gray-600 underline cursor-pointer">Forgot?</a>
                                    </span>
                                    <input value={formData.password} onChange={handleChange} id="password" type="password" 
                                    className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded-lg shadow appearance-none focus:border-indifo-500 h-14 focus:outline-none focus:ring" />
                                </div>
                                { error && (<div className="mb-6">
                                    <span className="flex items-center justify-between mb-2 font-sans text-lg font-bold text-red-700">
                                    {error}
                                    </span>
                                </div> )}
                                <div>
                                    <button type="submit" className="focus:shadow-outline h-14 w-full rounded-3xl bg-[#0D0C22] px-4 py-2 font-sans font-bold text-white hover:bg-gray-800 focus:outline-none">Sign In</button>
                                </div>
                                <p className="mt-4 text-sm text-center text-gray-600">
                                    Don't have an account?<span> </span>
                                    <a href="/signup" className="font-sans text-sm text-gray-600 underline cursor-pointer">Sign up </a>
                                </p>
                            </form> {/* form*/}
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}