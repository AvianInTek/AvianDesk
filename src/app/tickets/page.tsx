'use client';
import AccountSettings from "@/component/user/ticket/ticketSetting";
import TicketDetails from "@/component/user/ticket/details";
import TicketInfo from "@/component/user/ticket/info";
import TicketsLists from "@/component/user/ticket/list";

import { useState } from "react";

export default function TicketsPage() {
    return (
        <>
        <AccountSettings />
        <div className="flex gap-5 pt-8 px-10 bg-gray-300 min-h-screen">
            <div className="w-1/4 bg-white rounded-lg shadow-lg p-4">
                <TicketsLists />
            </div>
            <div className="w-2/4 bg-white rounded-lg shadow-lg p-6 sticky top-0">
                <TicketDetails />
                {/* <TicketDetails name='Akkil M G' subject='This is the subject' description='This will be the deascription of the message' files={[['pdf', 'Test.pdf', 123456, '']]} recentUpdate='2024-10-03T01:00:00.000' tags={['open', 'high priority']} /> */}
            </div>
            
            <div className="w-1/4 sticky top-0">
                <TicketInfo />
            </div>
        </div>
        </>
    );
}