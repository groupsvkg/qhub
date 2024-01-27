import { Sidebar } from "../_components/sidebar"

const UsersPage = () => {
    return (
        <div className="pt-16 md:pl-60 h-full">
            <div className="hidden md:block">
                <Sidebar />
            </div>
            Users Page
        </div>
    );
};

export default UsersPage;