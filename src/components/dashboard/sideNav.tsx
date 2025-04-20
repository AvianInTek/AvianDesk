"use client";

import { useEffect, useState } from "react";

export default function SideNav({ create, setCreate, settings, setSettings, isMobileMenuOpen, setIsMobileMenuOpen }: any) {
    return (
        <div>

            {/* Mobile Menu */}
            <div
                className={`sm:hidden bg-white p-6 transition-transform duration-300 ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"} absolute z-50 top-0 left-0 h-full w-3/4 shadow-lg`}>
                <MenuContent
                    create={create}
                    setCreate={setCreate}
                    settings={settings}
                    setSettings={setSettings}
                    setIsMobileMenuOpen={setIsMobileMenuOpen}
                    isMobileMenuOpen={isMobileMenuOpen}
                />
            </div>

            {/* Regular Sidebar for sm and above */}
            <div className="hidden sm:block bg-white p-6">
                <MenuContent
                    create={create}
                    setCreate={setCreate}
                    settings={settings}
                    setSettings={setSettings}
                />
            </div>
        </div>
    );
}

function MenuContent({ create, setCreate, settings, setSettings, setIsMobileMenuOpen, isMobileMenuOpen }: any) {
    interface Details {
        name: string;
    }

    const [details, setDetails] = useState<Details | null>(null);

    async function getDetails() {
        try {
            const res = await fetch("/api/auth/details", {
                method: "GET",
                headers: {
                "Content-Type": "application/json",
                },
            });
            const data = await res.json();
            if (data.success) {
                setDetails(data.details);
            } else {
                console.error("details failed:", data.message);
            }
        } catch (error) {
            console.error("Error during details:", error);
        }
    }
    useEffect(() => {
        getDetails();
    }, []);

    async function signOut() {
        try {
            const res = await fetch('/api/auth/signout', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await res.json();
            if (data.success && typeof window !== "undefined") {
                window.location.href = '/signin';
            } else {
                console.error('Sign out failed:', data.message);
            }
        } catch (error) {
            console.error('Error during sign out:', error);
        }
    }

    const [admin, setAdmin] = useState(false);
    async function handleNav() {
        try {
            const res = await fetch('/api/auth/verify', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await res.json();
            if (data.success) {
                if (data.admin) {
                    setAdmin(true);
                } else {
                    setAdmin(false);
                }
            } else {
                console.error('Verify failed:', data.message);
            }
        } catch (error) {
            console.error('Error verify out:', error);
        }
    }

    useEffect(() => {
        handleNav();
    }, []);

    return (
        <div>
            <div className="flex items-center justify-between space-x-4">
                <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-blue-400 flex items-center justify-center text-white font-semibold text-lg">
                        {details?.name ? details?.name?.charAt(0).toUpperCase() : '!'}
                    </div>
                    <div>
                        <h2 className="font-semibold">{details?.name ? details?.name : 'Mr. Customer'}</h2>
                        <p className="text-sm text-green-500">Online</p>
                    </div>
                </div>
                <button className="focus:outline-none font-semibold p-1 bg-gray-100 sm:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    <img src={isMobileMenuOpen ? "/icons/close.svg" : "/icons/menu.svg"} alt="Toggle Menu" className="h-4 w-4" />
                </button>
            </div>

            <div onClick={() => setCreate(true)} className="mt-8 p-2 border-dashed border-2 border-green-600 bg-green-400 rounded-lg mb-4 cursor-pointer">
                <div className="flex items-center justify-center space-x-2">
                    <img src="/icons/plus-circle.svg" alt="create" className="w-6 h-6" />
                    <p className="font-medium text-lg text-white mb-1">Create ticket</p>
                </div>
            </div>

            <hr className="mt-5 text-gray-600" />

            <nav className="mt-5">
                <ul>
                    {admin && (
                        <li className="mb-4">
                            <a href="/dashboard" className="flex items-center space-x-2 text-gray-600 hover:text-purple-600">
                                <img src="/icons/dashboard.svg" className="h-6" />
                                <span className="text-base">Dashboard</span>
                            </a>
                        </li>
                    )}
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
                        <a href="/profile" className="flex items-center space-x-2 text-gray-600 hover:text-purple-600">
                            <img src="/icons/profile.svg" className="h-4" />
                            <span className="text-base">Profile</span>
                        </a>
                    </li>
                    <li onClick={() => setSettings(true)} className="mb-4">
                        <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-purple-600">
                            <img src="/icons/settings.svg" className="h-4" />
                            <span className="text-base">Settings</span>
                        </a>
                    </li>
                    <li onClick={signOut} className="mb-4">
                        <div className="flex items-center space-x-2 text-gray-600 hover:text-purple-600">
                            <img src="/icons/signout.svg" className="h-4" />
                            <span className="text-base">SignOut</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
