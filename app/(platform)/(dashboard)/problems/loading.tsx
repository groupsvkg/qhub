import { Sidebar } from "@/components/sidebar";

const ProblemsLoadingPage = () => {
    return (
        <div className="pt-16 h-full">
            <Sidebar />
            <div className="md:pl-60 h-full flex items-center justify-center">
                <div className="text-gray-500">
                    <span className="relative flex h-5 w-5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-5 w-5 bg-red-500"></span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ProblemsLoadingPage;
