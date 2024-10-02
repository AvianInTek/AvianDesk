"use client"
import { useState } from "react";
import TicketItem from "./ticketItem";


export default function TicketsLists() {
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
                        <input type="text" placeholder="Search" className="w-full border border-gray-300 rounded-lg px-4 py-2 hover:border-transparent focus:border-transparent focus:ring focus:ring-blue-300" />
                        <button onClick={handleSearch} className="p-2 bg-gray-100 border rounded-lg">
                            <img src="/search.svg" alt="search" className="w-6 h-6" />
                        </button>
                        <button onClick={handleFilter} className="p-2 bg-gray-100 border rounded-lg">
                            <img src="/filter.svg" alt="search" className="w-6 h-6" />
                        </button>
                    </div>
                    {/* Below advanced filter */}
                    <div className="flex items-center space-x-2 mt-4">
                        <button className="text-blue-500 font-medium">All</button>
                        <button className="text-gray-500">Open</button>
                        <button className="text-gray-500">Closed</button>
                        <button className="text-gray-500">High Priority</button>
                        <button className="text-gray-500">Low Priority</button>
                    </div>

                    <div className="mt-4">
                        <TicketItem subject='This is the subject' description='This will be the deascription of the message' recentUpdate={`2024-10-03T01:00:00.000${local}`} tags={['open', 'high priority']}/>
                    </div>
            </div>
    );
}