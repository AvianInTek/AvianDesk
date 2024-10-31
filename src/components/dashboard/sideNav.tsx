"use client";


export default function sideNav() {
    return (
        <div className="bg-white p-6">
            <div className="flex items-center space-x-4">
                <img src="https://github.com/akkilmg.png" alt="Profile" className="w-12 h-12 rounded-full" />
                <div>
                    <h2 className="font-semibold">Akkil M G</h2>
                    <p className="text-sm text-green-500">Online</p>
                </div>
            </div>

            <hr className="mt-5 text-gray-600" />

            <nav className="mt-5">
                <ul>
                    <li className="mb-4">
                        <a href="/dashboard" className="flex items-center space-x-2 text-gray-600 hover:text-purple-600">
                            <img src="/icons/dashboard.svg" className="h-6" />
                            <span className="text-base">Dashboard</span>
                        </a>
                    </li>
                    <li className="mb-4">
                        <a href="/tickets" className="flex items-center space-x-2 text-gray-600 hover:text-purple-600">
                            <img src="/icons/ticket.svg" className="h-6" />
                            <span className="text-base">Tickets</span>
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="mt-10">
                <h4 className="text-gray-400">Profile & Settings</h4>
                <ul className="mt-4">
                    <li className="mb-4">
                        <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-purple-600">
                            <img src="/icons/profile.svg" className="h-4" />
                            <span className="text-base">Profile</span>
                        </a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-purple-600">
                            <img src="/icons/settings.svg" className="h-4" />
                            <span className="text-base">Settings</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
