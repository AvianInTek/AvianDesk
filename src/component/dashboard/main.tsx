"use client";


export default function MainLayout() {
    return (
        <div className="flex-1 p-6">
            <header className="flex items-center justify-between">
                <h1 className="text-3xl font-semibold">Welcome to Planti.</h1>
                <div className="relative">
                <input
                    type="text"
                    className="bg-gray-100 border border-gray-300 rounded-full py-2 px-4"
                    placeholder="Search Dashboard"
                />
                <span className="absolute top-0 right-0 p-2">
                    <i className="icon-search" />
                </span>
                </div>
            </header>

            <div className="grid grid-cols-2 gap-4 mt-6">
                {/* Task Cards */}
                <div className="p-6 bg-yellow-100 rounded-xl shadow-md">
                    <h3 className="text-lg font-semibold">R&D for New Banking Mobile App</h3>
                    <div className="mt-4 flex items-center space-x-2">
                        <img src="/team1.jpg" alt="team" className="w-8 h-8 rounded-full" />
                        <img src="/team2.jpg" alt="team" className="w-8 h-8 rounded-full" />
                        <img src="/team3.jpg" alt="team" className="w-8 h-8 rounded-full" />
                    </div>
                </div>

                <div className="p-6 bg-purple-100 rounded-xl shadow-md">
                <h3 className="text-lg font-semibold">Create Signup Page</h3>
                <div className="mt-4">
                    <div className="relative">
                    <div className="absolute top-0 left-0 h-full w-full rounded-full bg-purple-500" style={{ width: '47%' }}></div>
                    <div className="absolute top-0 left-0 h-full w-full rounded-full bg-gray-200"></div>
                    <span className="absolute top-0 left-0 h-full w-full flex items-center justify-center text-xl font-bold">
                    47%
                    </span>
                    </div>
                </div>
                </div>
            </div>

            {/* Active Tasks */}
            <div className="mt-8">
                <h2 className="text-lg font-semibold">Active Tasks</h2>
                <ul className="mt-4 space-y-4">
                <li className="flex items-center space-x-4">
                    <div className="flex-none w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                        <i className="icon-uber" />
                    </div>
                    <div className="flex-1">
                        <h4 className="text-md font-semibold">Uber</h4>
                        <p className="text-sm text-gray-500">App Design and Upgrades with new features - In Progress 16 days</p>
                    </div>
                    <div className="flex-none">
                        <img src="/team1.jpg" alt="team" className="w-8 h-8 rounded-full" />
                    </div>
                </li>

                {/* Repeat similar list items for Facebook Ads, Payoneer, Upwork */}
                </ul>
            </div>
        </div>
    );
}