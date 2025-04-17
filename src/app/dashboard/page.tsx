"use client";


import Detail from "@/components/dashboard/detail";
import MainLayout from "@/components/dashboard/main";
import SideNav from "@/components/dashboard/sideNav";
import AccountSettings from "@/components/settings/settings";
import TicketCreate from "@/components/ticket/create";
import { useEffect, useState } from "react";


export default function Dashboard() {
    const [create, setCreate] = useState(false);
    const [settings, setSettings] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const auth = true;
    if (!auth) {
        window.location.href = "/signin";
    }

    const [admin, setAdmin] = useState(false);
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
                if (data.admin) {
                    setAdmin(true);
                } else {
                    setAdmin(false);
                }
            } else {
                console.error('Verify failed:', data.message);
            }
        } catch (error) {
            console.error('Error verify out:', error);
        }
    }

    useEffect(() => {
        handleAdmin();
        if (!admin) {
            window.location.href = "/tickets";
        }
    }, []);

    return (
        <>
        {create && (
            <TicketCreate create={create} setCreate={setCreate} />  
        )}
        { 
            <AccountSettings settings={settings} setSettings={setSettings} />
        }
        <div className="flex h-screen">
            <div className="2xl:w-1/5 xl:w-1/5 md:w-1/4 shadow-xl">
                <SideNav create={create} setCreate={setCreate} settings={settings} setSettings={setSettings} isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
            </div>
            <div className="2xl:w-4/5 xl:w-4/5 md:w-3/4 w-full flex gap-5 py-4 px-4 bg-gray-200 h-screen justify-center md:justify-start">
                <MainLayout isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
            </div>

            {/* <Detail /> */}
        </div>
        </>
       
    );
}