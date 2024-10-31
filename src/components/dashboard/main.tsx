"use client";


import { useEffect, useState } from 'react';


export default function MainLayout() {
    const stats: any[] = [
        { label: 'Users', count: 12, suffix: 'k+' },
        { label: 'Opened', count: 84, suffix: '+' },
        { label: 'Closed', count: 4, suffix: '+' },
        { label: 'Ignored', count: 4, suffix: '+' },
    ];

    const [displayCounts, setDisplayCounts] = useState<number[]>(Array(stats.length).fill(0));

    useEffect(() => {
        const maxCount = Math.max(...stats.map((stat) => stat.count));

        stats.forEach((stat, index) => {
            const duration = (maxCount / 100) * 5; // Decrease the duration to speed up the animation
            const increment = Math.ceil(stat.count / (duration / 10));

            let currentCount = 0;
            const interval = setInterval(() => {
            currentCount += increment;
            if (currentCount >= stat.count) {
                clearInterval(interval);
                currentCount = stat.count;
            }
            setDisplayCounts((prev) => {
                const updatedCounts = [...prev];
                updatedCounts[index] = currentCount;
                return updatedCounts;
            });
            }, 10);
        });
    }, []);
    return (
        <div className="flex-1 p-6">
            <header className="flex items-center justify-between">
                <h1 className="text-3xl font-semibold">Welcome to SangrahDB.</h1>
                <div className="relative">
                    <input type="text" className="bg-gray-100 border border-gray-300 rounded-full py-2 px-4" placeholder="Search Dashboard"/>
                    <span className="absolute top-0 right-0 p-2 pr-4">
                        {/* <i className="icon-search" /> */}
                        <img src='/icons/search.svg' className='h-6' />
                    </span>
                </div>
            </header>

            <div className='p-6 my-6 bg-yellow-100 rounded-xl shadow-md'>
                <div className='text-center py-4 rounded-lg'>
                    <h2 className="text-2xl font-bold">Welcome to the Dashboard!</h2>
                    <p className="mt-2">Here you can manage your tasks and view statistics.</p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
                {/* Task Cards */}
                <div className="p-6 bg-yellow-100 rounded-xl shadow-md">
                    <h3 className="text-lg font-semibold">Support Team</h3>
                    <div className="mt-4 flex items-center space-x-2">
                        <a href=""><img src="https://placehold.co/100x100" alt="team" className="w-14 h-14 rounded-full" /></a>
                        <a href=""><img src="https://placehold.co/100x100" alt="team" className="w-14 h-14 rounded-full" /></a>
                        <a href=""><img src="https://placehold.co/100x100" alt="team" className="w-14 h-14 rounded-full" /></a>
                        <a href=""><img src="https://placehold.co/100x100" alt="team" className="w-14 h-14 rounded-full" /></a>
                    </div>
                </div>
                <div className="p-6 bg-purple-100 rounded-xl shadow-md">
                    <h3 className="text-lg font-semibold">Statistic</h3>
                    <div className="mt-4 grid grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <span className="text-2xl font-bold">
                            {displayCounts[index]}
                            {stat.suffix}
                            </span>
                            <span className="text-sm text-gray-500">{stat.label}</span>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
            
        </div>
    );
}