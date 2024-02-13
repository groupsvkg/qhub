import { Sidebar } from "@/components/sidebar";
import { UserProfile } from "../_components/user-profile";

const UserPage = ({ params }: { params: { userId: string } }) => {
    return (
        <div className="pt-16 h-full">
            <Sidebar />
            <div className="md:pl-60">
                <UserProfile userId={params.userId} />
            </div>
        </div>
    );
};

export default UserPage;