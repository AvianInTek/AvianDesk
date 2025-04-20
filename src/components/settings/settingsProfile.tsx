


// export default function SettingsProfile({ settings, setSettings }: any) {
//     return (
//         <div className="flex-1 px-8 py-4 shadow-md">  
//             <div className="flex flex-col items-end pb-5">
//                 <button onClick={(e) => setSettings(false)} type="button" className="text-gray-500 hover:text-gray-900 shadow-lg rounded-lg p-1">
//                     <img src="/icons/close.svg" className="h-4 w-4" alt="Close" />
//                 </button>
//             </div>
//             <div className="flex justify-between items-center mb-8">
//                 <h2 className="text-xl font-bold">Profile</h2>
//                 <button className="text-sm font-medium text-gray-600 hover:text-gray-800">Edit</button>
//             </div>
//             <div className="flex items-center mb-6">
//                 <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center text-white text-lg font-semibold">
//                 M
//                 </div>
//                 <div className="ml-4">
//                     <h3 className="text-lg font-medium">Akkil M G</h3>
//                     {/* <p className="text-sm text-gray-500">Admin</p> */}
//                 </div>
//                 <button className="ml-auto bg-gray-200 text-gray-600 text-sm px-4 py-2 rounded">Upload Avatar</button>
//             </div>

//             {/* Full Name */}
//             <div className="mb-4">
//                 <label className="block text-sm text-gray-600">Full Name</label>
//                 <input type="text" className="w-full mt-1 p-2 border rounded" value="Akkil M G" readOnly />
//             </div>
//         </div>
//     );
// }


// settingsProfile

export default function SettingsProfile({ details, settings, setSettings, isMobile }: any) {
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
                <h2 className="text-xl font-bold">Profile</h2>
                <div className="flex flex-row gap-5 items-end">
                    <button className="text-lg font-medium text-gray-600 hover:text-gray-800">Edit</button>
                    {isMobile && (
                        <button onClick={(e) => setSettings(false)} type="button" className="text-gray-500 hover:text-gray-900 shadow-lg rounded-lg p-1">
                            <img src="/icons/close.svg" className="h-4 w-4" alt="Close" />
                        </button>
                    )}
                </div>
            </div>
            <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center text-white text-lg font-semibold">
                {details?.name ? details.name?.charAt(0) : '!'}
                </div>
                <div className="ml-4">
                    <h3 className="text-lg font-medium">{details?.name ? details.name : 'Mr. Customer'}</h3>
                    {/* <p className="text-sm text-gray-500">Admin</p> */}
                </div>
                <button disabled className="ml-auto bg-gray-200 text-gray-600 text-sm px-4 py-2 rounded cursor-not-allowed">Upload Avatar</button>
            </div>

            {/* Full Name */}
            <div className="mb-4">
                <label className="block text-sm text-gray-600">Full Name</label>
                <input type="text" className="w-full mt-1 p-2 border rounded" value={details?.name ? details.name : 'Unknown'} readOnly />
            </div>
        </div>
    );
}
