"use client";

import { basicGrievances } from "@/types/grievances";
import { allProducts } from "@/types/products";
import axios from "axios";
import { useState } from "react";

export default function TicketCreate({ create, setCreate }: any) {
    const [subject, setSubject] = useState('');
    const [description, setDescription] = useState('');
    const [attachment, setAttachment] = useState<any>(null);
    const [problem, setProblem] = useState('');
    const [product, setProduct] = useState('');
    const [files, setFiles] = useState<any>([]);
    const [error, setError] = useState('');

    const uploadAttachment = async (e: any) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setFiles((prevFiles: any) => [...prevFiles, [file.name.split('.')[file.name.split('.').length - 1], file.name, file.size, '']]);
            try {
                const formData = new FormData();
                formData.append('file', file, file.name);
                const config = {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                };

                await axios
                    .post('https://aviandesk-attachment.avianintek.workers.dev/upload', formData, config)
                    .then(async (response: any) => {
                    if (response.data['success'] === true) {
                        setAttachment(response.data['durl'])
                        return;
                    } else {
                        console.log("Error: "+response.data['message']);
                        setError('File uploaded not successful.');
                        return;
                    }
                    })
                    .catch((error: any) => {
                        console.log('Error uploading file: ' + error.message);
                        setError('File uploaded not successful.');
                        return;
                    });
                setError('File uploaded not successful.');
                return
            } catch (error) {
                setError('File uploaded not successful.');
                console.log('Error uploading file:' + (error as any).messages);
                return
            }
        }
    }
    console.log(subject, description, attachment, problem, product, files);
    const createTicket = async (e: any) => {
        e.preventDefault();

        if (!subject || !description || !problem || !product) {
            setError('Please fill in all fields');
            return;
        }

        console.log(subject, description, attachment, problem, product);

        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            };
            var data = {
                subject: subject,
                description: description,
                attachment: attachment,
                problem: problem,
                product: product,
                files: null
            };
            if (files.length > 0) {
                data.files = files;
            }
            try {
                const response = await fetch('/api/dashboard/tickets', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                if (response.ok) {
                    const result = await response.json();
                    if (result.success) {
                        setSubject('');
                        setDescription('');
                        setAttachment(null);
                        setProblem('');
                        setProduct('');
                        setFiles([]);
                        setCreate(false);
                        setError('');
                    } else {
                        console.error("Error: " + result.message);
                        setError('Unable to create ticket.');
                    }
                } else {
                    console.error("Error: " + response.statusText);
                    setError('Unable to create ticket.');
                }
            } catch (error: any) {
                console.error('Error creating ticket: ', error.message || error);
                setError('Unable to create ticket.');
            }
            setError('Unable to create ticket.');
            return
        } catch (error) {
            setError('Unable to create ticket.');
            console.log('Error create ticket:' + (error as any).messages);
            return
        }
    } 
    
    return (
        <div className={`fixed inset-0 bg-gray-800 w-full bg-opacity-80 flex items-center justify-center z-50 px-4 ${create ? 'block': 'hidden'}`} style={{ zIndex: 1000 }}>
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
                <form className="overflow-auto" > {/** action={createTicket}> */} 
                    <div className="flex flex-col items-end">
                        <button type="button" className="text-gray-500 hover:text-gray-900 shadow-lg rounded-lg p-1" onClick={() => {setFiles([]); setCreate(false)}}>
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
                            <select className="flex items-center px-2 py-2 border border-gray-300 rounded-lg text-gray-500 hover:bg-gray-100 w-full overflow-x-auto" onChange={e => setProblem(e.target.value)}>
                                {basicGrievances.map((grievance: string, index: number) => (
                                    <option key={index} value={grievance}>
                                        {grievance}
                                    </option>
                                ))}
                            </select>
                            <label htmlFor="attachment" className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-500 hover:bg-gray-100 cursor-pointer">
                                <img src="/icons/clip.svg" className="h-5 w-5 pr-2 -ml-2" /> <span className="pr-2">Attachment</span>
                                <input type="file" id="attachment" accept="image/*" className="hidden" onChange={uploadAttachment} />
                            </label>
                        </div>
                        
                        <div className="flex gap-1 mt-4 overflow-auto">
                            {allProducts.map((producto, index) => (
                                <button type="button" key={index} onClick={() => { setProduct(producto) }} className={`px-3 py-2 rounded-xl font-medium border-2 transition ${
                                    product === producto
                                    ? "border-green-400 bg-green-100 text-green-700"
                                    : "border-gray-200 bg-white text-gray-500 hover:bg-gray-100"
                                }`}>
                                {producto}
                                </button>
                            ))}
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
                    
                        
                    <div className="flex justify-end mt-4 w-full">
                        <button type="button" onClick={createTicket}
                            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 w-full">Create</button>
                    </div>
                </form>
            </div>
        </div>
    );
}