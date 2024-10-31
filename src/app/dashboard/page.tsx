import Detail from "@/components/dashboard/detail";
import MainLayout from "@/components/dashboard/main";
import SideNav from "@/components/dashboard/sideNav";


export default async function Dashboard() {
    const auth = true;
    if (!auth) {
        window.location.href = "/signin";
    }
    return (
        <div className="flex h-screen">
            <div className="w-1/6 shadow-xl">
                <SideNav />
            </div>
            <div className="w-5/6 bg-gray-100">
                <MainLayout />
            </div>

            {/* <Detail /> */}
        </div>
    );
}