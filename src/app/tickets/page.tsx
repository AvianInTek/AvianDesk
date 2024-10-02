'use client';
import AccountSettings from "@/component/user/ticket/settings";
import TicketDetails from "@/component/user/ticket/details";
import TicketInfo from "@/component/user/ticket/info";
import TicketsLists from "@/component/user/ticket/list";

import { useState } from "react";

// function AccountSettings({ isPopupVisible, togglePopup }: any) {
//     return (
//         <>
//           {isPopupVisible && (
//             <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
//               <div className="bg-white w-full max-w-lg rounded-lg shadow-lg overflow-hidden">
//                 <div className="p-6">
//                   {/* Header */}
//                   <div className="flex justify-between items-center">
//                     <div className="flex items-center space-x-4">
//                       <img
//                         src="https://via.placeholder.com/40"
//                         alt="User profile"
//                         className="rounded-full w-12 h-12"
//                       />
//                       <div>
//                         <p className="font-semibold text-lg">Arlene McCoy</p>
//                         <a
//                           href="mailto:arlenemccoy@labourlink.com"
//                           className="text-blue-500 text-sm"
//                         >
//                           arlenemccoy@labourlink.com
//                         </a>
//                       </div>
//                     </div>
//                     <button
//                       onClick={togglePopup}
//                       className="text-gray-500 hover:text-gray-700"
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         strokeWidth={2}
//                         stroke="currentColor"
//                         className="w-6 h-6"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M6 18L18 6M6 6l12 12"
//                         />
//                       </svg>
//                     </button>
//                   </div>

//                   {/* User Group Selector */}
//                   <div className="mt-4">
//                     <label className="block text-sm font-medium text-gray-500">
//                       User Group
//                     </label>
//                     <select className="mt-1 block w-full p-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
//                       <option>Consultant</option>
//                       <option>Manager</option>
//                       <option>Administrator</option>
//                     </select>
//                   </div>

//                   {/* Permissions List */}
//                   <div className="mt-6 space-y-4">
//                     <div className="flex items-center justify-between">
//                       <p className="text-gray-700">Auditing</p>
//                       <input
//                         type="checkbox"
//                         className="toggle-checkbox"
//                         defaultChecked
//                       />
//                     </div>
//                     <div className="flex items-center justify-between">
//                       <p className="text-gray-700">Allocate as job authority</p>
//                       <input
//                         type="checkbox"
//                         className="toggle-checkbox"
//                         defaultChecked
//                       />
//                     </div>
//                     <div className="flex items-center justify-between">
//                       <p className="text-gray-700">Candidate activation</p>
//                       <input
//                         type="checkbox"
//                         className="toggle-checkbox"
//                         defaultChecked
//                       />
//                     </div>
//                     <div className="flex items-center justify-between">
//                       <p className="text-gray-700">Candidate documents</p>
//                       <input type="checkbox" className="toggle-checkbox" />
//                     </div>
//                     <div className="flex items-center justify-between">
//                       <p className="text-gray-700">Financial information</p>
//                       <input type="checkbox" className="toggle-checkbox" />
//                     </div>
//                     <div className="flex items-center justify-between">
//                       <p className="text-gray-700">Job posting</p>
//                       <input type="checkbox" className="toggle-checkbox" />
//                     </div>
//                   </div>

//                   {/* Save Changes Button */}
//                   <div className="mt-6">
//                     <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
//                       Save changes
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </>
//     );
// }

// function TicketsLists() {
//     const [filter, setFilter] = useState(false);
//     const [search, setSearch] = useState("");
//     function handleSearch(e: any) {
//         setSearch(e.target.value);
//     }
//     function handleFilter(e: any) {
//         setFilter(!filter);
//     }
//     return (
//             <div className="flex flex-col">
//                     <div className="flex items-center space-x-2">
//                         <input type="text" placeholder="Search" className="w-full border border-gray-300 rounded-lg px-4 py-2 hover:border-transparent focus:border-transparent focus:ring focus:ring-blue-300" />
//                         <button onClick={handleSearch} className="p-2 bg-gray-100 border rounded-lg">
//                             <img src="/search.svg" alt="search" className="w-6 h-6" />
//                         </button>
//                         <button onClick={handleFilter} className="p-2 bg-gray-100 border rounded-lg">
//                             <img src="/filter.svg" alt="search" className="w-6 h-6" />
//                         </button>
//                     </div>
//                     {/* Below advanced filter */}
//                     <div className="flex items-center space-x-2 mt-4">
//                         <button className="text-blue-500 font-medium">All</button>
//                         <button className="text-gray-500">Open</button>
//                         <button className="text-gray-500">Closed</button>
//                         <button className="text-gray-500">High Priority</button>
//                         <button className="text-gray-500">Low Priority</button>
//                     </div>

//                     <div className="mt-4">
//                         <div className="p-4 border-l-4 border-blue-500 bg-blue-50 rounded-lg mb-4">
//                         <div className="flex justify-between">
//                             <p className="font-medium text-sm text-gray-800">Dean Taylor</p>
//                             <p className="text-xs text-gray-500">2 mins ago</p>
//                         </div>
//                         <p className="text-xs text-gray-600">Hi, I need help with payment...</p>
//                         <div className="flex items-center space-x-2 mt-2">
//                             <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-lg">Open</span>
//                             <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded-lg">High Priority</span>
//                             <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded-lg">Sales Department</span>
//                         </div>
//                         </div>
//                     </div>
//             </div>
//     );
// }

// function TicketDetails() {
//     return (
//     <div className="space-y-6">
//             <div>
//                 <h2 className="text-lg font-semibold text-gray-800">Help needed for payment failure</h2>
//                 <div className="flex space-x-2 mt-2">
//                 <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-lg">Open</span>
//                 <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded-lg">High Priority</span>
//                 <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded-lg">Sales Department</span>
//                 </div>
//             </div>
            
//             <hr className="bg-gray-200 h-0.5 my-4 w-full" />

//             <div>
//                 <p className="text-sm text-gray-800"><span className="font-semibold">Dean Taylor</span> <span className="text-gray-500">23rd of June at 8 am</span></p>
//                 <p className="mt-4 text-sm text-gray-600">Hi, I need help to process payment via VISA...</p>
//             </div>

//             <div className="flex items-center space-x-4">
//                 <div className="flex items-center space-x-2 bg-red-50 p-2 rounded-lg border border-red-100">
//                 <img src="/pdf.svg" alt="pdf" className="w-6 h-6" />
//                 <p className="text-xs font-medium text-red-800">doc.pdf (29KB)</p>
//                 </div>
//                 <div className="flex items-center space-x-2 bg-gray-50 p-2 rounded-lg border border-gray-100">
//                 <img src="/pdf.svg" alt="image" className="w-6 h-6" />
//                 <p className="text-xs font-medium text-gray-800">doc.pdf (30KB)</p>
//                 </div>
//             </div>

//             <div>
//                 <p className="font-semibold text-sm text-gray-700 mb-2">Reply to:</p>
//                 <div className="flex items-start space-x-2 mb-4">
//                 <div className="bg-gray-100 w-10 h-10 rounded-full"></div>
//                 <div className="w-full bg-gray-50 border border-gray-300 rounded-lg">
//                     <div className="p-3 flex justify-between">
//                         <textarea className="w-full text-sm p-2 text-black bg-transparent border border-transparent focus:outline-none focus:border-transparent" rows={2} placeholder="Hi Dean, Thanks for contacting us..."></textarea>
//                         <button className="bg-blue-600 text-white px-4 py-2 h-12 rounded-lg">Send</button>
//                     </div>
//                 </div>
//                 </div>
//             </div>
//     </div>
//     );
// }

// function TicketInfo() {
//     const [expand, setExpand] = useState(false);
//     function handleExpand(e: any) {
//         setExpand(!expand);
//     }
    
//     const [isSettingsVisible, setSettingsVisible] = useState(false);
//     const toggleSettings = () => {
//         setSettingsVisible(!isSettingsVisible);
//     };
//     return (
//     <>
//     <AccountSettings isPopupVisible={isSettingsVisible} togglePopup={toggleSettings} />
//     <div className="space-y-6 gap-3">
//         <div className="bg-white border border-gray-200 rounded-lg p-4 px-8 font-bold">
//             <div className="flex items-center">
//                 <h3 className="w-3/4 text-xl text-gray-800">Ticket actions</h3>
//                 {expand? (
//                     <svg onClick={handleExpand} className="w-1/4 h-3 text-left" fill="#000000" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330" >
//                         <g id="SVGRepo_bgCarrier" strokeWidth={0}></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
//                         <g id="SVGRepo_iconCarrier"> <path id="XMLID_224_" d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394 l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393 C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"></path> </g>
//                     </svg>
//                 ):(    
//                     <svg onClick={handleExpand} className="w-1/4 h-3 text-left" fill="#000000" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330" >
//                         <g id="SVGRepo_bgCarrier" strokeWidth={0}></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
//                         <g id="SVGRepo_iconCarrier"> <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"></path> </g>
//                     </svg>
//                 )}
                
//                 <button onClick={toggleSettings} className="p-2 bg-gray-100 border rounded-lg">
//                     <img src="/settings.svg" alt="search" className="w-6 h-6" />
//                 </button>
//             </div>
//             { expand? (
//                 <div className="">
//                     <button className="text-green-500 px-4 py-2 rounded-lg">Open</button>
//                     <button className="text-yellow-500 px-4 py-2 rounded-lg">In progress</button>
//                     <button className="text-red-500 px-4 py-2 rounded-lg">Close</button>
//                 </div>
//             ): null}
//         </div>
//         <div>
//             <div className="bg-white border border-gray-200 rounded-lg p-8 font-bold">
//                 <h3 className="font-bold text-xl text-gray-800 mb-3">Visitor Information</h3>
//                 <div className="flex pt-4">
//                     <div className="w-4/5">
//                         <h3 className="font-bold text-gray-800 mb-3">Basic Details</h3>
//                     </div>
//                     <div className="w-1/5">
//                         <h3 className="font-bold text-right text-blue-500 mb-3">Edit</h3>
//                     </div>
//                 </div>
//                 <div className="text-base font-medium space-y-2 text-gray-700">
//                     <div className="flex justify-between">
//                         <span className="text-gray-400">Email:</span>
//                         <a className="text-blue-500" href="mailto:dean.taylor@gmail.com">dean.taylor@gmail.com</a>
//                     </div>
//                     <div className="flex justify-between">
//                         <span className="text-gray-400">Phone:</span>
//                         <p>Unknown</p>
//                     </div>
//                     <div className="flex justify-between">
//                         <span className="text-gray-400">Location:</span>
//                         <p>Colombo <a className="text-blue-500">(View on map)</a></p>
//                     </div>
//                     <div className="flex justify-between">
//                         <span className="text-gray-400">Local time:</span>
//                         <p>06:30 am (+5.30 GMT)</p>
//                     </div>
//                     <div className="flex justify-between">
//                         <span className="text-gray-400">Language:</span>
//                         <p className="bg-blue-50 rounded rounded-xl px-3 p-1 text-blue-500">English</p>
//                     </div>
//                 </div>
       
//                 <hr className="bg-gray-200 h-0.5 mt-4 my-2 w-full" />

//                 <div className="flex pt-2">
//                     <div className="w-4/5">
//                         <h3 className="font-bold text-gray-800 mb-3">Device Information</h3>
//                     </div>
//                     <div className="w-1/5">
//                         <h3 className="font-bold text-right text-blue-500 mb-3">Edit</h3>
//                     </div>
//                 </div>
//                 <div className="fond-medium text-base space-y-2 text-gray-700">
//                     <p className="items-left"><span className="text-gray-400 items-right">IP:</span> 107.168.154.199</p>
//                     <p className="items-left"><span className="text-gray-400 items-right">OS:</span> Windows 11</p>
//                     <p className="items-left"><span className="text-gray-400 items-right">Browser:</span> Mozilla Firefox</p>
//                 </div>
//             </div>
//         </div>
//         <div className="bg-white border border-gray-200 rounded-lg p-8">
//             <h3 className="font-bold text-xl text-gray-800 mb-3">Files Shared</h3>
            
//             <hr className="bg-gray-200 h-0.5 mb-2 my-2 w-full" />

//             <div className="space-y-2">
//                 <div className="flex items-center space-x-2 bg-white p-2 rounded-lg">
//                     <img src="/pdf.svg" alt="pdf" className="w-6 h-6" />
//                     <p className="text-sm text-gray-800">doc.pdf</p>
//                 </div>
//                 <div className="flex items-center space-x-2 bg-white p-2 rounded-lg">
//                     <img src="/pdf.svg" alt="image" className="w-6 h-6" />
//                     <p className="text-sm text-gray-800">doc.pdf</p>
//                 </div>
//             </div>
//         </div>
//     </div>
//     </>
//     );
// }

export default function TicketsPage() {
    return (
        <>
        <AccountSettings />
        <div className="flex gap-5 pt-8 px-10 bg-gray-300 min-h-screen">
            <div className="w-1/4 bg-white rounded-lg shadow-lg p-4">
                <TicketsLists />
            </div>
            <div className="w-2/4 bg-white rounded-lg shadow-lg p-6 sticky top-0">
                <TicketDetails name='Akkil M G' subject='This is the subject' description='This will be the deascription of the message' files={[['pdf', 'Test.pdf', 123456, '']]} recentUpdate='2024-10-03T01:00:00.000' tags={['open', 'high priority']} />
            </div>
            
            <div className="w-1/4 sticky top-0">
                <TicketInfo />
            </div>
        </div>
        </>
    );
}