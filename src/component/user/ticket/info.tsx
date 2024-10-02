'use client';

import { useState } from "react";
import AccountSettings from "./settings";

export default function TicketInfo() {
    const [expand, setExpand] = useState(false);
    function handleExpand(e: any) {
        setExpand(!expand);
    }
    
    const [isSettingsVisible, setSettingsVisible] = useState(false);
    const toggleSettings = () => {
        setSettingsVisible(!isSettingsVisible);
    };
    return (
    <>
    <AccountSettings isPopupVisible={isSettingsVisible} togglePopup={toggleSettings} />
    <div className="space-y-6 gap-3">
        <div className="bg-white border border-gray-200 rounded-lg p-4 px-8 font-bold">
            <div className="flex items-center">
                <h3 className="w-3/4 text-xl text-gray-800">Ticket actions</h3>
                {expand? (
                    <svg onClick={handleExpand} className="w-1/4 h-3 text-left" fill="#000000" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330" >
                        <g id="SVGRepo_bgCarrier" strokeWidth={0}></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier"> <path id="XMLID_224_" d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394 l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393 C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"></path> </g>
                    </svg>
                ):(    
                    <svg onClick={handleExpand} className="w-1/4 h-3 text-left" fill="#000000" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330" >
                        <g id="SVGRepo_bgCarrier" strokeWidth={0}></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier"> <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"></path> </g>
                    </svg>
                )}
                
                <button onClick={toggleSettings} className="p-2 bg-gray-100 border rounded-lg">
                    <img src="/settings.svg" alt="search" className="w-6 h-6" />
                </button>
            </div>
            { expand? (
                <div className="">
                    <button className="text-green-500 px-4 py-2 rounded-lg">Open</button>
                    <button className="text-yellow-500 px-4 py-2 rounded-lg">In progress</button>
                    <button className="text-red-500 px-4 py-2 rounded-lg">Close</button>
                </div>
            ): null}
        </div>
        <div>
            <div className="bg-white border border-gray-200 rounded-lg p-8 font-bold">
                <h3 className="font-bold text-xl text-gray-800 mb-3">Visitor Information</h3>
                <div className="flex pt-4">
                    <div className="w-4/5">
                        <h3 className="font-bold text-gray-800 mb-3">Basic Details</h3>
                    </div>
                    <div className="w-1/5">
                        <h3 className="font-bold text-right text-blue-500 mb-3">Edit</h3>
                    </div>
                </div>
                <div className="text-base font-medium space-y-2 text-gray-700">
                    <div className="flex justify-between">
                        <span className="text-gray-400">Email:</span>
                        <a className="text-blue-500" href="mailto:dean.taylor@gmail.com">dean.taylor@gmail.com</a>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-400">Phone:</span>
                        <p>Unknown</p>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-400">Location:</span>
                        <p>Colombo <a className="text-blue-500">(View on map)</a></p>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-400">Local time:</span>
                        <p>06:30 am (+5.30 GMT)</p>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-400">Language:</span>
                        <p className="bg-blue-50 rounded rounded-xl px-3 p-1 text-blue-500">English</p>
                    </div>
                </div>
       
                <hr className="bg-gray-200 h-0.5 mt-4 my-2 w-full" />

                <div className="flex pt-2">
                    <div className="w-4/5">
                        <h3 className="font-bold text-gray-800 mb-3">Device Information</h3>
                    </div>
                    <div className="w-1/5">
                        <h3 className="font-bold text-right text-blue-500 mb-3">Edit</h3>
                    </div>
                </div>
                <div className="fond-medium text-base space-y-2 text-gray-700">
                    <p className="items-left"><span className="text-gray-400 items-right">IP:</span> 107.168.154.199</p>
                    <p className="items-left"><span className="text-gray-400 items-right">OS:</span> Windows 11</p>
                    <p className="items-left"><span className="text-gray-400 items-right">Browser:</span> Mozilla Firefox</p>
                </div>
            </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h3 className="font-bold text-xl text-gray-800 mb-3">Files Shared</h3>
            
            <hr className="bg-gray-200 h-0.5 mb-2 my-2 w-full" />

            <div className="space-y-2">
                <div className="flex items-center space-x-2 bg-white p-2 rounded-lg">
                    <img src="/pdf.svg" alt="pdf" className="w-6 h-6" />
                    <p className="text-sm text-gray-800">doc.pdf</p>
                </div>
                <div className="flex items-center space-x-2 bg-white p-2 rounded-lg">
                    <img src="/pdf.svg" alt="image" className="w-6 h-6" />
                    <p className="text-sm text-gray-800">doc.pdf</p>
                </div>
            </div>
        </div>
    </div>
    </>
    );
}
