"use client"
import { useState } from "react";
import TicketItem from "./ticketItem";


export default function TicketsLists({data, setFetchComment, setTicketId, isMobileMenuOpen, setIsMobileMenuOpen}: any) {

    const [filter, setFilter] = useState(false);
    const [search, setSearch] = useState("");
    function handleSearch(e: any) {
        setSearch(e.target.value);
    }
    function handleFilter(e: any) {
        setFilter(!filter);
    }
    let local = '+05:30'
    return (
            <div className="flex flex-col">
                    <div className="flex items-center space-x-2">
                        <button className="focus:outline-none p-2 px-3 bg-gray-100 border rounded-lg" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                            <img src={isMobileMenuOpen ? "/icons/close.svg" : "/icons/menu.svg"} alt="Menu Toggle" className="h-6 w-6" />
                        </button>
                        <input type="text" placeholder="Search" className="w-full border border-gray-300 rounded-lg px-4 py-2 hover:border-transparent focus:border-transparent focus:ring focus:ring-blue-300" />
                        <button onClick={handleSearch} className="p-2 bg-gray-100 border rounded-lg">
                            <img src="/icons/search.svg" alt="search" className="w-6 h-6" />
                        </button>
                        <button onClick={handleFilter} className="p-2 bg-gray-100 border rounded-lg">
                            <img src="/icons/filter.svg" alt="search" className="w-6 h-6" />
                        </button>
                    </div>
                    {/* Below advanced filter */}
                    <div className="flex items-center space-x-2 mt-4">
                        <button className="text-white bg-blue-500 font-medium py-1 px-4 rounded-3xl border-2 border-blue-500 hover:text-white hover:bg-blue-700">All</button>
                        <button className="text-gray-500 py-1 px-2 rounded-3xl border-2 border-gray-500 hover:text-white hover:bg-blue-500">Open</button>
                        <button className="text-gray-500 py-1 px-2 rounded-3xl border-2 border-gray-500 hover:text-white hover:bg-blue-500">Closed</button>
                    </div>

                    
                    <div className="mt-4">
                        {/* <div onClick={(e)=>{setCreate(!create)}} className="p-4 border-dashed border-2 border-green-600 bg-green-400 rounded-lg mb-4 cursor-pointer">
                            <div className="flex items-center justify-center space-x-2">
                                <img src="/icons/plus-circle.svg" alt="create" className="w-6 h-6" />
                                <p className="font-medium text-lg text-white mb-1">Create ticket</p>
                            </div>
                        </div> */}
                    </div>
                    <div className="mt-4">
                        {data && data.map((ticket: any) => (
                            <TicketItem
                                key={ticket._id}
                                id={ticket._id}
                                subject={ticket.subject}
                                description={ticket.description}
                                createdAt={ticket.createdAt}
                                tags={ticket.tags}
                                setTicketId={setTicketId}
                                setFetchComment={setFetchComment}
                            />
                        ))}
                    </div>
            </div>
    );
}