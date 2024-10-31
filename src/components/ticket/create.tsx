

export default function TicketCreate() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col">
                <h2 className="text-xl font-semibold text-gray-800 text-center justify-between items-center">CREATE TICKET</h2>
            </div>

            <div>
                <label htmlFor="title" className="sr-only">Title</label>
                <input type="text" id="title" placeholder="Enter a title"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-300"/>

                <label htmlFor="description" className="sr-only">Description</label>
                <div className="border border-gray-300 rounded-lg mt-4">
                    <div className="flex items-center px-3 py-2 border-b border-gray-200 gap-3">
                        <button type="button" className="text-gray-500 hover:text-gray-900 hover:border-blue-400 hover:shadow-lg">
                            <b> B </b>
                        </button>
                        <button type="button" className="ml-2 text-gray-500 hover:text-gray-900 hover:border-blue-400 hover:shadow-lg">
                            <i> I </i>
                        </button>
                        <button type="button" className="ml-2 text-gray-500 hover:text-gray-900 hover:border-blue-400 hover:shadow-lg">
                            <u> U </u>
                        </button>
                    </div>
                    <textarea id="description" placeholder="Description" rows={4}
                        className="w-full border-none px-4 py-2 focus:ring focus:ring-blue-300">
                    </textarea>
                </div>

                <div className="flex space-x-4 mt-4">
                    <button type="button" className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-500 hover:bg-gray-100">
                        <img src="/icons/clip.svg" className="h-5 w-5 pr-2" /> Attachment
                    </button>
                    <button type="button" className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-500 hover:bg-gray-100">
                        Alert
                    </button>
                    <button type="button" className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-500 hover:bg-gray-100">
                        More
                    </button>
                </div>
            </div>
        </div>

    );
}