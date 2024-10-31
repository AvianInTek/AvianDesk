import SideNav from "@/components/dashboard/sideNav";



export default function SettingsPage() {
    return (
        <div className="flex h-screen">
            <div className="w-1/6 shadow-xl">
                <SideNav />
            </div>
            <div className="w-5/6 bg-gray-100">
                {/* <MainLayout /> */}
            </div>
        </div>
    );
}