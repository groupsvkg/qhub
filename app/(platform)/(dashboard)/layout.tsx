import { Navbar } from "./_components/navbar";
import { Sidebar } from "./_components/sidebar";

const DashboardLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <main className="h-full w-full">
            <Navbar />
            {children}
        </main>
    );
};

export default DashboardLayout;