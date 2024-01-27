import { Sidebar } from "../_components/sidebar"

const ActivityPage = () => {
    return (
        <div className="pt-16 md:pl-60 h-full">
            <div className="hidden md:block">
                <Sidebar />
            </div>
            Activity Page
        </div>
    );
};

export default ActivityPage;