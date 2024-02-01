import { Sidebar } from "@/components/sidebar";
import { Skeleton } from "@/components/ui/skeleton";

const DashboardLoadingPage = () => {
    return (
        <div className="pt-16 h-full">
            <Sidebar />
            <div className="md:pl-60 h-full flex items-center justify-center">
                <div className="text-gray-500">Loading...</div>
            </div>
        </div>
    );
};

export default DashboardLoadingPage;
