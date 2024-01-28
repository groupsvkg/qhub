import { Separator } from "@/components/ui/separator";
import { Sidebar } from "../_components/sidebar"
import { currentUser } from "@clerk/nextjs";
import { db } from "@/lib/db";
import Image from "next/image";

const ProfilePage = async () => {
    const user = await currentUser();

    const dbUser = await db.user.findUnique({
        where: {
            externalUserId: user?.id
        }
    });

    return (
        <div className="pt-16 md:pl-60 h-full">
            <div className="hidden md:block">
                <Sidebar />
            </div>
            <div className="p-4 space-y-2">
                <h1 className="text-xl font-bold mt-2">Profile</h1>
                {dbUser && <div className="w-full flex flex-col items-start justify-center">
                    <Image 
                        src={dbUser?.imageUrl}
                        alt="user image"
                        height={200}
                        width={200}
                        className="rounded-full"
                    />
                </div>}
                <Separator orientation="horizontal"/>
                <h1 className="text-md text-muted-foreground font-semibold">
                    {dbUser?.firstName}&nbsp;{dbUser?.lastName}
                </h1>
                <h1 className="text-xl text-muted-foreground font-semibold">Bio</h1>
            </div>
        </div>
    );
};

export default ProfilePage;