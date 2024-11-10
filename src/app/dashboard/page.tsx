"use client";


import Detail from "@/components/dashboard/detail";
import MainLayout from "@/components/dashboard/main";
import SideNav from "@/components/dashboard/sideNav";
import AccountSettings from "@/components/settings/settings";
import TicketCreate from "@/components/ticket/create";
import { useState } from "react";


export default async function Dashboard() {
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
            <div className="w-1/6 shadow-xl">
                <SideNav create={create} setCreate={setCreate} settings={settings} setSettings={setSettings} />
            </div>
            <div className="w-5/6 bg-gray-200">
                <MainLayout />
            </div>

            {/* <Detail /> */}
        </div>
        </>
       
    );
}