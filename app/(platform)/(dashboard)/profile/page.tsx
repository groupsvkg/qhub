import { Sidebar } from "@/components/sidebar"
import { currentUser } from "@clerk/nextjs";
import { getUserById } from "@/lib/user-service";
import { Profile } from "@/components/profile";

const ProfilePage = async () => {
    const externalUser = await currentUser();

    if(!externalUser || !externalUser.id) {
        throw new Error("Unauthorized");
    }

    const user = await getUserById(externalUser.id);

    return (
        <div className="pt-16">
            <Sidebar />
            <div className="md:pl-60">
                {user && <Profile user={user}/>}
            </div>
        </div>
    );
};

export default ProfilePage;