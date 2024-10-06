"use client";


export default function sideNav() {
    return (
        <div className="w-64 bg-white p-6">
            <div className="flex items-center space-x-4">
                <img src="https://github.com/akkilmg.png" alt="Profile" className="w-12 h-12 rounded-full" />
                <div>
                    <h2 className="font-semibold">Akkil M G</h2>
                    <p className="text-sm text-green-500">Online</p>
                </div>
            </div>

            <nav className="mt-10">
                <ul>
                    <li className="mb-4">
                    <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-purple-600">
                        <span className="icon-dashboard" />
                        <span>Dashboard</span>
                    </a>
                    </li>
                    <li className="mb-4">
                    <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-purple-600">
                        <span className="icon-tasks" />
                        <span>Tasks</span>
                    </a>
                    </li>
                    <li className="mb-4">
                    <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-purple-600">
                        <span className="icon-explore" />
                        <span>Explore</span>
                    </a>
                    </li>
                    <li className="mb-4">
                    <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-purple-600">
                        <span className="icon-projects" />
                        <span>Projects</span>
                    </a>
                    </li>
                </ul>
            </nav>

            <div className="mt-10">
                <h4 className="text-gray-400">Profile & Settings</h4>
                <ul className="mt-4">
                    <li className="mb-4">
                    <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-purple-600">
                        <span className="icon-charts" />
                        <span>Charts</span>
                    </a>
                    </li>
                    <li className="mb-4">
                    <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-purple-600">
                        <span className="icon-billing" />
                        <span>Billing</span>
                    </a>
                    </li>
                    <li className="mb-4">
                    <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-purple-600">
                        <span className="icon-profile" />
                        <span>Profile</span>
                    </a>
                    </li>
                    <li className="mb-4">
                    <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-purple-600">
                        <span className="icon-settings" />
                        <span>Settings</span>
                    </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}