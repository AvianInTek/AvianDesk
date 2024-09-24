


export default function TicketsLists() {
    return (
            <div className="flex flex-col">
                    <div className="flex items-center space-x-2">
                        <input type="text" placeholder="Search" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-300" />
                        <button className="p-2 bg-gray-100 border rounded-lg">
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3v4a1 1 0 001 1h3M7 7l10 10M8 3h4a1 1 0 011 1v4m-1 0h4"></path></svg>
                        </button>
                    </div>

                    <div className="mt-4">
                        <div className="p-4 border-l-4 border-blue-500 bg-blue-50 rounded-lg mb-4">
                        <div className="flex justify-between">
                            <p className="font-medium text-sm text-gray-800">Dean Taylor</p>
                            <p className="text-xs text-gray-500">2 mins ago</p>
                        </div>
                        <p className="text-xs text-gray-600">Hi, I need help with payment...</p>
                        <div className="flex items-center space-x-2 mt-2">
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-lg">Open</span>
                            <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded-lg">High Priority</span>
                            <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded-lg">Sales Department</span>
                        </div>
                        </div>
                    </div>
            </div>
    );
}