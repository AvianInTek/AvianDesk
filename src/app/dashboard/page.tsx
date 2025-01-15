"use client";


import Detail from "@/components/dashboard/detail";
import MainLayout from "@/components/dashboard/main";
import SideNav from "@/components/dashboard/sideNav";
import AccountSettings from "@/components/settings/settings";
import TicketCreate from "@/components/ticket/create";
import { useState } from "react";


export default function Dashboard() {
    const [create, setCreate] = useState(false);
    const [settings, setSettings] = useState(false);
    const auth = true;
    if (!auth) {
        window.location.href = "/signin";
    }
    return (
        <>
        {create && (
            <TicketCreate create={create} setCreate={setCreate} />  
        )}
        { 
            <AccountSettings settings={settings} setSettings={setSettings} />
        }
        <div className="flex h-screen">
            <div className="xl:w-1/5 lg:w-1/4 w-1/3 shadow-xl">
                <SideNav create={create} setCreate={setCreate} settings={settings} setSettings={setSettings} />
            </div>
            <div className="xl:w-4/5 lg:w-3/4 w-2/3 bg-gray-200">
                <MainLayout />
            </div>

            {/* <Detail /> */}
        </div>
        </>
       
    );
}