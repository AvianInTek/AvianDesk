

export default function TicketDetails() {
    return (
    <div className="space-y-6">
        <div>
            <h2 className="text-lg font-semibold text-gray-800">Help needed for payment failure</h2>
            <div className="flex space-x-2 mt-2">
            <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-lg">Open</span>
            <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded-lg">High Priority</span>
            <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded-lg">Sales Department</span>
            </div>
        </div>
        
        <hr className="bg-gray-200 h-0.5 my-4 w-full" />

        <div>
            <p className="text-sm text-gray-800"><span className="font-semibold">Dean Taylor</span> <span className="text-gray-500">23rd of June at 8 am</span></p>
            <p className="mt-4 text-sm text-gray-600">Hi, I need help to process payment via VISA...</p>
        </div>

        <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-red-50 p-2 rounded-lg border border-red-100">
            <img src="/pdf.svg" alt="pdf" className="w-6 h-6" />
            <p className="text-xs font-medium text-red-800">doc.pdf (29KB)</p>
            </div>
            <div className="flex items-center space-x-2 bg-gray-50 p-2 rounded-lg border border-gray-100">
            <img src="/pdf.svg" alt="image" className="w-6 h-6" />
            <p className="text-xs font-medium text-gray-800">image.jpg (30KB)</p>
            </div>
        </div>

        <div>
            <p className="font-semibold text-sm text-gray-700 mb-2">Reply to:</p>
            <div className="flex items-start space-x-2 mb-4">
            <div className="bg-gray-100 w-10 h-10 rounded-full"></div>
            <div className="w-full bg-gray-50 border border-gray-300 rounded-lg">
                <div className="p-3 flex justify-between">
                <textarea className="w-full text-sm bg-transparent" rows={2} placeholder="Hi Dean, Thanks for contacting us..."></textarea>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Send</button>
                </div>
            </div>
            </div>
        </div>
</div>
    );
}