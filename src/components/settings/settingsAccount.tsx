


export default function SettingsAccount({ settings, setSettings }: any) {
    return (
        <div className="flex-1 px-8 py-4 shadow-md">  
            <div className="flex flex-col items-end pb-5">
                <button onClick={(e) => setSettings(false)} type="button" className="text-gray-500 hover:text-gray-900 shadow-lg rounded-lg p-1">
                    <img src="/icons/close.svg" className="h-4 w-4" alt="Close" />
                </button>
            </div>
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-bold">Account</h2>
                <button className="text-sm font-medium text-gray-600 hover:text-gray-800">Edit</button>
            </div>

            {/* Email */}
            <div className="mb-4">
                <label className="block text-sm text-gray-600">Email</label>
                <input
                type="text"
                className="w-full mt-1 p-2 border rounded bg-gray-100 cursor-not-allowed"
                value="akkilcharanmg@gmail.com"
                readOnly
                />
                <p className="text-xs text-blue-600 mt-1">Please contact the administrator to change your email.</p>
            </div>
        </div>
    );
}