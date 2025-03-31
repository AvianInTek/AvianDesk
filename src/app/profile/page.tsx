"use client";

import SideNav from "@/components/dashboard/sideNav";
import AccountSettings from "@/components/settings/settings";
import TicketCreate from "@/components/ticket/create";
import { useState } from "react";


export default function ProfileCard() {
    const [create, setCreate] = useState(false);
    const [settings, setSettings] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
            <div className="2xl:w-1/5 xl:w-1/5 md:w-1/4 shadow-xl">
                <SideNav create={create} setCreate={setCreate} settings={settings} setSettings={setSettings} isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
            </div>
            <div className="2xl:w-4/5 xl:w-4/5 md:w-3/4 p-12 mx-auto bg-gray-200 shadow-lg">
                <div className="rounded-lg bg-white">
                    <div className="relative h-40">
                        <div className="absolute top-2 left-2">
                            <button className="focus:outline-none p-2 text-white border border-white shadow-lg rounded-lg sm:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                                <img src={isMobileMenuOpen ? "/icons/close.svg" : "/icons/menu.svg"} alt="Menu Toggle" className="h-6 w-6" />
                            </button>
                        </div>
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
  