import { Sidebar } from "../_components/sidebar";

const HomePage = () => {
    return (
        <div className="pt-16">
            <Sidebar />
            <div className="md:pl-60 h-full ">
                Home Page
            </div>
        </div>
    );
};

export default HomePage;