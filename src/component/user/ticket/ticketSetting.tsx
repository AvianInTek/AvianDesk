


export default function AccountSettings({ isPopupVisible, togglePopup }: any) {
    return (
        <>
          {isPopupVisible && (
            <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white w-full max-w-lg rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  {/* Header */}
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                      <img src="https://via.placeholder.com/40" alt="User profile" className="rounded-full w-12 h-12"/>
                      <div>
                        <p className="font-semibold text-lg">Arlene McCoy</p>
                        <a href="mailto:arlenemccoy@labourlink.com" className="text-blue-500 text-sm">
                          arlenemccoy@labourlink.com
                        </a>
                      </div>
                    </div>
                    <button onClick={togglePopup} className="text-gray-500 hover:text-gray-700" >
                      <svg
                        xmlns="http://www.w3.org/2000/svg" fill="none" 
                        viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  {/* User Group Selector */}
                  <div className="mt-4">
                    {/* <div className="flex justify-center mt-4">
                      <div className="inline-flex rounded-lg border items-center border-gray-800 p-1 w-full">
                        <button className="inline-block rounded-md px-4 py-2 text-base text-black font-semibold focus:relative border-r border-gray-800">
                          Administrator
                        </button>
                        <button className="inline-block rounded-md px-4 py-2 text-base text-black focus:relative">
                          Consultant
                        </button>
                        <button className="inline-block rounded-md px-4 py-2 text-base text-black focus:relative">
                          Manager
                        </button>
                      </div>
                    </div> */}
                    <div>
                      <div className="sm:hidden">
                        <label htmlFor="Tab" className="sr-only">Tab</label>

                        <select id="Tab" className="w-full rounded-md border-gray-200">
                          <option>Settings</option>
                          <option>Messages</option>
                          <option>Archive</option>
                          <option selected>Notifications</option>
                        </select>
                      </div>

                      <div className="hidden sm:block">
                        <div className="border-b border-gray-200">
                          <nav className="-mb-px flex gap-6">
                            <a href="#"
                              className="shrink-0 border border-transparent p-3 text-sm font-medium text-gray-500 hover:text-gray-700">
                              Settings
                            </a>
                            <a href="#"
                              className="shrink-0 border border-transparent p-3 text-sm font-medium text-gray-500 hover:text-gray-700">
                              Messages
                            </a>

                            <a href="#"
                              className="shrink-0 border border-transparent p-3 text-sm font-medium text-gray-500 hover:text-gray-700">
                              Archive
                            </a>

                            <a href="#"
                              className="shrink-0 rounded-t-lg border border-gray-300 border-b-white p-3 text-sm font-medium text-sky-600">
                              Notifications
                            </a>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Permissions List */}
                  <div className="mt-6 space-y-4 p-3 pt-0">
                    <div className="flex items-center justify-between">
                      <p className="text-gray-700">Auditing</p>

                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-gray-700">Allocate as job authority</p>

                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-gray-700">Candidate activation</p>

                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-gray-700">Candidate documents</p>
                      <input type="checkbox" className="toggle-checkbox" />
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-gray-700">Financial information</p>
                      <input type="checkbox" className="toggle-checkbox" />
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-gray-700">Job posting</p>
                      <input type="checkbox" className="toggle-checkbox" />
                    </div>
                  </div>

                  {/* Save Changes Button */}
                  <div className="mt-6">
                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
    );

}