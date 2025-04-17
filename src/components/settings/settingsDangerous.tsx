
// settingsDangerous
export default function SettingsProfile({ settings, setSettings, isMobile }: any) {
    return (
        <div className="flex-1 px-4 py-2 pt-5 md:px-8 md:py-4">
            {!isMobile && (
                <div className="flex flex-col items-end pb-5">
                    <button onClick={(e) => setSettings(false)} type="button" className="text-gray-500 hover:text-gray-900 shadow-lg rounded-lg p-1">
                        <img src="/icons/close.svg" className="h-4 w-4" alt="Close" />
                    </button>
                </div>
            )}      
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-bold">Dangerous Zone</h2>
                <div className="flex flex-row gap-5 items-end">
                    <button className="text-lg font-medium text-gray-600 hover:text-gray-800">Edit</button>
                    {isMobile && (
                        <button onClick={(e) => setSettings(false)} type="button" className="text-gray-500 hover:text-gray-900 shadow-lg rounded-lg p-1">
                            <img src="/icons/close.svg" className="h-4 w-4" alt="Close" />
                        </button>
                    )}
                </div>
            </div>
            {/* Email */}
            <div className="mb-4">
                <label className="block text-sm text-gray-600 pb-4">Delete Accounts</label>
                {/* <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Delete Account Now
                </button> */}
                <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded cursor-not-allowed" disabled>
                    Delete Account Now
                </button>
            </div>

        </div>
    );
}