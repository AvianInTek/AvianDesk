"use client";

import { useState } from "react";


export default function sideNav({create, setCreate, settings, setSettings}: any) {
    return (
        <div className="bg-white p-6">
            <div className="flex items-center space-x-4">
                <img src="https://github.com/akkilmg.png" alt="Profile" className="w-12 h-12 rounded-full" />
                <div>
                    <h2 className="font-semibold">Akkil M G</h2>
                    <p className="text-sm text-green-500">Online</p>
                </div>
            </div>

            <div onClick={(e)=>{setCreate(true)}} className="mt-8 p-2 border-dashed border-2 border-green-600 bg-green-400 rounded-lg mb-4 cursor-pointer">
                <div className="flex items-center justify-center space-x-2">
                    <img src="/icons/plus-circle.svg" alt="create" className="w-6 h-6" />
                    <p className="font-medium text-lg text-white mb-1">Create ticket</p>
                </div>
            </div>

            <hr className="mt-5 text-gray-600" />

            <nav className="mt-5">
                <ul>
                    <li className="mb-4">
                        <a href="/dashboard" className="flex items-center space-x-2 text-gray-600 hover:text-purple-600">
                            <img src="/icons/dashboard.svg" className="h-6" />
                            <span className="text-base">Dashboard</span>
                        </a>
                    </li>
                    <li className="mb-4">
                        <a href="/tickets" className="flex items-center space-x-2 text-gray-600 hover:text-purple-600">
                            <img src="/icons/ticket.svg" className="h-6" />
                            <span className="text-base">Tickets</span>
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="mt-10">
                <h4 className="text-gray-400">Profile & Settings</h4>
                <ul className="mt-4">
                    <li className="mb-4">
                        <a href="/profile" className="flex items-center space-x-2 text-gray-600 hover:text-purple-600">
                            <img src="/icons/profile.svg" className="h-4" />
                            <span className="text-base">Profile</span>
                        </a>
                    </li>
                    <li onClick={(e)=>setSettings(true)} className="mb-4">
                        <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-purple-600">
                            <img src="/icons/settings.svg" className="h-4" />
                            <span className="text-base">Settings</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
