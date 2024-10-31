'use client';
import { useState } from "react";
import AccountSettings from "@/components/ticket/ticketSetting";
import TicketDetails from "@/components/ticket/details";
import TicketsLists from "@/components/ticket/list";
import TicketCreate from "@/components/ticket/create";
import SideNav from "@/components/dashboard/sideNav";
// import TicketInfo from "@/components/ticket/info";


export default function TicketsPage() {
    const [create, setCreate] = useState(false);
    const [ticketId, setTicketId] = useState('');
    var data = [{
        _id: '5xhtyh',
        user: 'akkil',
        subject: 'Akkil: This is the subject',
        description: 'Akkil: This will be the deascription of the message',
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
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="w-1/6 shadow-xl">
                <SideNav />
            </div>
            <AccountSettings />
            <div className="w-5/6 flex gap-5 py-8 px-10 bg-gray-100 h-screen">
                <div className="w-1/3 bg-white rounded-lg shadow-lg p-4">
                    <TicketsLists create={create} setCreate={setCreate} data={data} setTicketId={setTicketId} />
                </div>
                <div className="w-2/3 bg-white rounded-lg shadow-lg p-6 sticky top-0">
                    { create ? (
                        <TicketCreate />
                    ) : (
                        ticketId ? (
                            <TicketDetails data={data} ticketId={ticketId}  />
                        ): (<div>Please select a ticket to view details.</div>)
                    )}
                </div>
                
                {/* <div className="w-1/4 sticky top-0 xl:block hidden">
                    <TicketInfo />
                </div> */}
            </div>
        </div>
    );
}