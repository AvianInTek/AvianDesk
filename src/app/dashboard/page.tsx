import Detail from "@/component/dashboard/detail";
import MainLayout from "@/component/dashboard/main";
import SideNav from "@/component/dashboard/sideNav";


export default async function Dashboard() {
    const auth = true;
    if (!auth) {
        window.location.href = "/signin";
    }
    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <SideNav />

            {/* Main content */}
            <MainLayout />

            {/* Right sidebar */}
            <Detail />
        </div>
    );
}