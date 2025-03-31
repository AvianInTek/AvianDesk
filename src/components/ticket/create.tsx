"use client";

import { basicGrievances } from "@/types/grievances";
import { allProducts } from "@/types/products";
import { useState } from "react";

export default function TicketCreate({ create, setCreate }: any) {
    const [subject, setSubject] = useState('');
    const [description, setDescription] = useState('');
    const [attachment, setAttachment] = useState('');

    // const createTicket = async (e: any) => {
    //     e.preventDefault();
    //     let subject = e.target.subject.value;
    //     let description = e.target.description.value;
    //     if (subject && description) {
    //         let data = {
    //             subject: subject,
    //             description: description
    //         }
    //         console.log(data);
    //         // let res = await client.post('/tickets/create', data);
    //         // console.log(res);
    //         setCreate(false);
    //     }
    // } 
    
    return (
        <div className={`fixed inset-0 bg-gray-800 w-full bg-opacity-80 flex items-center justify-center z-50 px-4 ${create ? 'block': 'hidden'}`} style={{ zIndex: 1000 }}>
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
                <form className="overflow-auto" > {/** action={createTicket}> */} 
                    <div className="flex flex-col items-end">
                        <button type="button" className="text-gray-500 hover:text-gray-900 shadow-lg rounded-lg p-1" onClick={() => setCreate(false)}>
                            <img src="/icons/close.svg" className="h-4 w-4" alt="Close" />
                        </button>
                    </div>
                    <div className="flex flex-col pt-1 pb-6">
                        <h2 className="text-xl font-semibold text-gray-800 text-center w-full">CREATE TICKET</h2>
                    </div>

                    <div>
                        <label htmlFor="subject" className="sr-only">subject</label>
                        <input type="text" id="subject" placeholder="Enter a subject" onChange={e => setSubject(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-300 overflow-x-auto"/>

                        <div className="flex space-x-4 mt-4 overflow-auto">
                            <select className="flex items-center px-2 py-2 border border-gray-300 rounded-lg text-gray-500 hover:bg-gray-100 w-full overflow-x-auto">
                                {basicGrievances.map((grievance: string, index: number) => (
                                    <option key={index} value={grievance}>
                                        {grievance}
                                    </option>
                                ))}
                            </select>
                            <select className="flex items-center px-2 py-2 border border-gray-300 rounded-lg text-gray-500 hover:bg-gray-100 w-1/2 overflow-x-auto">
                                {allProducts.map((product: string, index: number) => (
                                    <option key={index} value={product}>
                                        {product}
                                    </option>
                                ))}
                            </select>
                        </div>
                        
                        <label htmlFor="description" className="sr-only">Description</label>
                        <div className="border border-gray-300 rounded-lg mt-4 overflow-x-auto">
                            <div className="flex items-center px-3 py-2 border-b border-gray-200 gap-3">
                                <button type="button" className="text-gray-500 hover:text-gray-900 hover:border-blue-400 hover:shadow-lg">
                                    <b> B </b>
                                </button>
                                <button type="button" className="ml-2 text-gray-500 hover:text-gray-900 hover:border-blue-400 hover:shadow-lg">
                                    <i> I </i>
                                </button>
                                <button type="button" className="ml-2 text-gray-500 hover:text-gray-900 hover:border-blue-400 hover:shadow-lg">
                                    <u> U </u>
                                </button>
                            </div>
                            <textarea id="description" placeholder="Description" rows={4} onChange={e => setDescription(e.target.value)}
                                className="w-full border-none px-4 py-2 focus:ring focus:ring-blue-300 overflow-y-auto">
                            </textarea>
                        </div>
                    </div>
                    
                    <div className="flex space-x-4 mt-4 overflow-auto">
                        <select className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-500 hover:bg-gray-100 w-full overflow-x-auto">
                            {basicGrievances.map((grievance: string, index: number) => (
                                <option key={index} value={grievance}>
                                    {grievance}
                                </option>
                            ))}
                        </select>
                        <button type="button" className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-500 hover:bg-gray-100">
                            <img src="/icons/clip.svg" className="h-5 w-5 pr-2 -ml-2" /> <span className="pr-2">Attachment</span>
                        </button>
                    </div>
                        
                    <div className="flex justify-end mt-4 w-full">
                        <button type="button" className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 w-full">Create</button>
                    </div>
                </form>
            </div>
        </div>
    );
}