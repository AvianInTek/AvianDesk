"use client";


export default function Detail() {
    return (
        <div className="w-80 bg-white p-6">
            <div className="flex justify-between items-center">
                <p>Project Discovery Call</p>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-full">Invite</button>
            </div>
            <div className="mt-4">
                <h4 className="text-sm">18 Planned Today</h4>
                <h4 className="text-sm">12 Finished Yesterday</h4>
                <h4 className="text-sm">4 Overdue</h4>
                <h4 className="text-sm">5 Due Today</h4>
                <h4 className="text-sm">24 Due This Week</h4>
            </div>
            <div className="mt-6">
                <div className="bg-gray-200 p-4 rounded-lg">
                <p>May, 2020</p>
                <p className="mt-2">Calendar would go here</p>
                </div>
            </div>
        </div>
    );
}