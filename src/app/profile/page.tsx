"use client";

import SideNav from "@/components/dashboard/sideNav";
import AccountSettings from "@/components/settings/settings";
import TicketCreate from "@/components/ticket/create";
import { useState } from "react";


export default function ProfileCard() {
    const [create, setCreate] = useState(false);
    const [settings, setSettings] = useState(false);
    const name = "Akkil M G";
    const username = "AkkilMG";
    const tickets = '1,234';
    const closedTickets = '923';
    return (
        <>
        {create && (
            <TicketCreate create={create} setCreate={setCreate} />  
        )}
        { 
            <AccountSettings settings={settings} setSettings={setSettings} />
        }
        <div className="flex h-screen">
            
            {/* Sidebar */}
            <div className="w-1/6 shadow-xl">
                <SideNav create={create} setCreate={setCreate} settings={settings} setSettings={setSettings} />
            </div>
            <div className="w-5/6 p-12 mx-auto bg-gray-200 shadow-lg">
                <div className="rounded-lg bg-white">
                    <div className="relative h-40">
                        <img src="https://4kwallpapers.com/images/wallpapers/macos-big-sur-apple-layers-fluidic-colorful-wwdc-stock-3840x1080-1455.jpg"
                            alt="Background Banner" className="w-full h-full object-cover rounded-t-lg" width={600} height={160} />
                        
                        {/* Profile Image */}
                        <div className="absolute -bottom-12 left-6">
                            <img src="https://github.com/akkilmg.png" 
                                alt="Profile" className="w-24 h-24 rounded-full border-4 border-white" />
                        </div>
                    </div>
                    {/* Details */}
                    <div className="pt-14 px-6 pb-6">
                        <h2 className="text-xl font-bold">{name}</h2>
                        <p className="text-sm text-gray-600">@{username}<span>🧑‍💻</span></p>
                        {/* <p className="text-sm text-gray-500 mt-1">🌍 Mangaluru, India</p> */}
                        
                        {/* Stats */}
                        <div className="flex items-center space-x-4 mt-4">
                            <div className="text-blue-600 font-semibold">
                            {tickets} <span className="text-gray-600 font-normal">tickets</span>
                            </div>
                            <div className="text-blue-600 font-semibold">
                            {closedTickets} <span className="text-gray-600 font-normal">closed</span>
                            </div>
                        </div>
                
                        {/* Action Buttons */}
                        {/* <div className="flex space-x-2 mt-4">
                            <button className="flex-1 bg-blue-600 text-white py-2 rounded font-medium hover:bg-blue-700">Follow</button>
                            <button className="flex-1 border border-gray-300 text-gray-700 py-2 rounded font-medium hover:bg-gray-100">More</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
  