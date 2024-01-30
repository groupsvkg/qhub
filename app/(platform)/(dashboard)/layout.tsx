import { Navbar } from "@/components/navbar";

const DashboardLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <main className="h-full w-full">
            <Navbar />
            <div className="h-full">
                {children}
            </div>
        </main>
    );
};

export default DashboardLayout;