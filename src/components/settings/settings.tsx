// "use client";
// import { useState } from "react";
// import SettingsSideBar from './settingsSideBar';
// import SettingsAccount from './settingsAccount';
// import SettingsProfile from './settingsProfile';
// import SettingsDangerous from './settingsDangerous';

// export default function AccountSettings({ settings, setSettings }: any) {
//     const [profile, setProfile] = useState(true);
//     const [account, setAccount] = useState(false);
//     const [dangerous, setDangerous] = useState(false);
//     var data = [profile, account, dangerous];

//     return (
//         <div className={`fixed inset-0 bg-gray-800 bg-opacity-80 flex items-center justify-center z-50 ${settings ? 'block': 'hidden'}`} style={{ zIndex: 1000 }}>
//             <div className="flex w-screen h-screen p-12 rounded-md">
//                 <div className="flex w-full h-full rounded-2xl bg-white">
//                     <SettingsSideBar profile={profile} setProfile={setProfile} account={account} setAccount={setAccount} dangerous={dangerous} setDangerous={setDangerous} />
//                     {profile && (<SettingsProfile settings={settings} setSettings={setSettings} />)}
//                     {account && (<SettingsAccount settings={settings} setSettings={setSettings} />)}
//                     {dangerous && (<SettingsDangerous settings={settings} setSettings={setSettings} />)}
//                 </div>
//             </div>
//         </div>
//     );
// }
  

// settings
"use client";
import { useState, useEffect } from "react";
import SettingsSideBar from "./settingsSideBar";
import SettingsAccount from "./settingsAccount";
import SettingsProfile from "./settingsProfile";
import SettingsDangerous from "./settingsDangerous";

export default function AccountSettings({ settings, setSettings }: any) {
  const [profile, setProfile] = useState(true);
  const [account, setAccount] = useState(false);
  const [dangerous, setDangerous] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
    };

    handleResize(); // Check initial size
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const activeComponent = () => {
    if (profile) return <SettingsProfile settings={settings} setSettings={setSettings} isMobile={isMobile} />;
    if (account) return <SettingsAccount settings={settings} setSettings={setSettings} isMobile={isMobile} />;
    if (dangerous) return <SettingsDangerous settings={settings} setSettings={setSettings} isMobile={isMobile} />;
    return null;
  };

  return (
    <div className={`fixed inset-0 bg-gray-800 bg-opacity-80 flex items-center justify-center z-50 ${settings ? "block" : "hidden"}`} style={{ zIndex: 1000 }}>
      <div className="flex w-screen h-screen p-4 md:p-12 rounded-md">
        <div className="flex flex-col md:flex-row w-full h-full rounded-2xl bg-white">
          {isMobile ? (
            <>
              <SettingsSideBar profile={profile} setProfile={setProfile} account={account} setAccount={setAccount} 
                dangerous={dangerous} setDangerous={setDangerous} isMobile={isMobile} />
              <div className="w-full">{activeComponent()}</div>
            </>
          ) : (
            <>
              <SettingsSideBar profile={profile} setProfile={setProfile} account={account} setAccount={setAccount} 
              dangerous={dangerous} setDangerous={setDangerous} isMobile={isMobile} />
              {activeComponent()}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
