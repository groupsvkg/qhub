import { Separator } from "@/components/ui/separator";
import { Sidebar } from "../_components/sidebar"
import Image from "next/image";

const ProfilePage = () => {
    return (
        <div className="pt-16 md:pl-60 h-full">
            <div className="hidden md:block">
                <Sidebar />
            </div>
            <div className="p-4">
                <h1 className="font-semibold mt-2">Profile Page</h1>
                <Separator className="my-2 bg-yellow-600"/>
            </div>
        </div>
    );
};

export default ProfilePage;