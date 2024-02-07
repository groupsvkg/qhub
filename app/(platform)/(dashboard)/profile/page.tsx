import { Sidebar } from "@/components/sidebar"
import { Profile } from "@/components/profile";

const ProfilePage = async () => {

    return (
        <div className="pt-16">
            <Sidebar />
            <div className="md:pl-60">
                <Profile />
            </div>
        </div>
    );
};

export default ProfilePage;