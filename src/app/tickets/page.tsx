'use client';

import { useState } from "react";
import AccountSettings from "@/components/settings/settings";
import TicketDetails from "@/components/ticket/details";
import TicketsLists from "@/components/ticket/list";
import TicketCreate from "@/components/ticket/create";
import SideNav from "@/components/dashboard/sideNav";
// import TicketInfo from "@/components/ticket/info";


export default function TicketsPage() {
    const [create, setCreate] = useState(false);
    const [settings, setSettings] = useState(false);
    const [ticketId, setTicketId] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    var data = [{
        _id: '5xhtyh',
        user: 'akkil',
        subject: 'Akkil: This is the subject',
        description: 'Akkil: This will be the deascription of the message.',
        files: [['pdf', 'Test.pdf', 123456, '']],
        recentUpdate: '2024-10-03T01:00:00.000',
        tags: ['open', 'ignore']
    }, {
        _id: 'nfjn37',
        user: 'saiesh',
        subject: 'Saiesh: This is the subject',
        description: 'Saiesh: This will be the deascription of the message',
        files: [['pdf', 'Test.pdf', 123456, '']],
        recentUpdate: '2024-10-03T01:00:00.000',
        tags: ['open', 'ignore']
    }, {
        _id: '0nduw3',
        user: 'srujan',
        subject: 'Srujan: This is the subject',
        description: 'Srujan: This will be the deascription of the message',
        files: [['pdf', 'Test.pdf', 123456, '']],
        recentUpdate: '2024-10-03T01:00:00.000',
        tags: ['open', 'ignore']
    }]
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
            <div className="2xl:w-4/5 xl:w-4/5 md:w-3/4 w-full flex gap-5 py-4 px-4 bg-gray-200 h-screen justify-center md:justify-start">
                <div className={`${ticketId ? 'hidden md:block': 'block'} xl:w-1/3 lg:w-1/2 w-full bg-white rounded-lg shadow-lg p-4`}>
                    <TicketsLists data={data} setTicketId={setTicketId} isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen}  />
                </div>
                <div className={`${!ticketId ? 'hidden md:block': 'block'} xl:w-2/3 lg:w-1/2 w-full bg-white rounded-lg shadow-lg p-4 sticky top-0`}>
                    { ticketId ? (
                        <TicketDetails data={data} ticketId={ticketId}  />
                    ): (<div>Please select a ticket to view details.</div>)
                    }
                </div>
                
                {/* <div className="w-1/4 sticky top-0 xl:block hidden">
                    <TicketInfo />
                </div> */}
            </div>
        </div>
        </>
    );
}