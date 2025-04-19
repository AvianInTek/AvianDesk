'use client';

import { useEffect, useState } from "react";
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
  

    const [data, setData] = useState(null);
    const fetchTickets = async () => {
        const response = await fetch(admin ? '/api/admin-dashboard/tickets' : '/api/dashboard/tickets', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        });
        const data = await response.json();
        setData(data.tickets);
    }

    const [details, setDetails] = useState(null);

    async function getDetails() {
        try {
            const res = await fetch("/api/auth/details", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await res.json();
            if (data.success) {
                setDetails(data.details);
            } else {
                console.error("details failed:", data.message);
            }
        } catch (error) {
            console.error("Error during details:", error);
        }
    }
    
    const [fetchComment, setFetchComment] = useState([]);

    async function fetchComments() {
        try {
        const res = await fetch("/api/dashboard/comment?ticketId="+ticketId, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const datax = await res.json();
        if (datax.success) {
            setFetchComment(datax.comments);
        } else {
            setFetchComment([]);
            console.error("details failed:", datax.message);
        }
        } catch (error) {
        console.error("Error during details:", error);
        }
    }


    const [ticket, setTicket] = useState(<div>Please select a ticket to view details.</div>);

    useEffect(() => {
        handleAdmin();
        fetchTickets();
        getDetails();
    }, []);
    
    useEffect(() => {
        if (ticketId) {
            setFetchComment([]);
            fetchComments();
            setTicket(<TicketDetails fetchComment={fetchComment} data={data} ticketId={ticketId} userInfo={details}  />)
        }
    }, [ticketId]);

    useEffect(() => {
        const interval = setInterval(() => {
            fetchTickets();
            getDetails();
            if (ticketId && fetchComment.length > -1) {
                fetchComments();
            }
            if (ticketId) {
                setTicket(<TicketDetails fetchComment={fetchComment} data={data} ticketId={ticketId} userInfo={details}  />)
            }
        }, 5000);
        return () => clearInterval(interval);
    }, [ticketId, fetchComment]);

    if (!details) {
        return <div className="flex h-screen items-center justify-center bg-gray-100">
            <div className="text-center">
                <div className="mt-4">
                    <svg className="animate-spin h-10 w-10 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                    </svg>
                </div>
            </div>
        </div>
    }

    return (
        <>
        {create && (
            <TicketCreate create={create} setCreate={setCreate} />  
        )}
        { <AccountSettings details={details} settings={settings} setSettings={setSettings} /> }
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            <div className="2xl:w-1/5 xl:w-1/5 md:w-1/4 shadow-xl">
                <SideNav create={create} setCreate={setCreate} settings={settings} setSettings={setSettings} isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
            </div>
            <div className="2xl:w-4/5 xl:w-4/5 md:w-3/4 w-full flex gap-5 py-4 px-4 bg-gray-200 h-screen justify-center md:justify-start">
                <div className={`${ticketId ? 'hidden md:block': 'block'} xl:w-1/3 lg:w-1/2 w-full bg-white rounded-lg shadow-lg p-4`}>
                    <TicketsLists data={data} setFetchComment={setFetchComment} setTicketId={setTicketId} isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen}  />
                </div>
                <div className={`${!ticketId ? 'hidden md:block': 'block'} xl:w-2/3 lg:w-1/2 w-full bg-white rounded-lg shadow-lg p-4 sticky top-0`}>
                    {ticket}
                </div>
                
                {/* <div className="w-1/4 sticky top-0 xl:block hidden">
                    <TicketInfo />
                </div> */}
            </div>
        </div>
        </>
    );
}