"use client";

import { colorTags } from "@/types/color";
import { time } from "console";
import { useState, useEffect } from "react";


export default function TicketItem({id, setFetchComment, subject, description, createdAt, tags, setTicketId}: any) {
    const [timesAgo, setTimesAgo] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    useEffect(() => {
        if (createdAt) {
            const currentTime = new Date();
            const updatedTime = new Date(createdAt);
            const diff = currentTime.getTime() - updatedTime.getTime();
            if(diff < 3600000) {
                setTimesAgo(Math.floor(diff / 60000) + ' mins ago');
            } else if(diff < 86400000) {
                setTimesAgo(Math.floor(diff / 3600000) + ' hrs ago');
            } else {
                setTimesAgo(Math.floor(diff / 86400000) + ' days ago');
            }
        }
        if (description) {
            // setShortDescription(description?.substring(0, 29) + '...');
            setShortDescription(description);
        }
    }, [createdAt]);

    return (
        <div className="p-4 border-l-4 border-blue-500 bg-blue-50 rounded-lg mb-4" onClick={(e) => {
                setTicketId(id);
                setFetchComment([]);
            }}>
            <div className="flex justify-between">
                <p className="font-medium text-sm text-gray-800">{subject}</p>
                <p className="text-xs text-gray-500">{timesAgo}</p>
            </div>
            <p className="line-clamp-1 text-xs text-gray-600">{shortDescription}</p>
            <div className="flex items-center space-x-2 mt-2">
                {tags.map((tag: string, index: number) => {
                    return colorTags(tag, index)
                })}
            </div>
        </div>
    )
}