import { Separator } from "@/components/ui/separator";
import { Sidebar } from "../_components/sidebar"
import { currentUser } from "@clerk/nextjs";
import Image from "next/image";
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
            {/* <div className="pt-16 hidden md:block"> */}
            <Sidebar />
            {/* </div> */}
            <div className="md:pl-60 h-full ">
                {/* <div className="hidden md:block">
                    <Sidebar />
                </div> */}
                {user && <Profile user={user}/>}
                {/* <div className="p-4 space-y-2">
                    <h1 className="text-xl font-bold mt-2">Profile</h1>
                    {user && <div className="w-full flex flex-col items-start justify-center">
                        <Image 
                            src={user?.imageUrl}
                            alt="user image"
                            height={200}
                            width={200}
                            className="rounded-full"
                        />
                    </div>}
                    <Separator orientation="horizontal"/>
                    <h1 className="text-md text-muted-foreground font-semibold">
                        {user?.firstName}&nbsp;{user?.lastName}
                    </h1>
                    <h1 className="text-xl text-muted-foreground font-semibold">Bio</h1>
                </div> */}
            </div>
        </div>
    );
};

export default ProfilePage;