import { Sidebar } from "../_components/sidebar";

const HomePage = () => {
    return (
        <div className="pt-16 md:pl-60 h-full">
            <div className="hidden md:block">
                <Sidebar />
            </div>
            Home Page
        </div>
    );
};

export default HomePage;