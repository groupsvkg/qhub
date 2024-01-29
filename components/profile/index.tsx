
import {User} from "@prisma/client"
import { Grip, Hourglass, UsersIcon } from "lucide-react";
import Image from "next/image";


interface ProfileProps {
    user: User;
}

export const Profile = ({ user }: ProfileProps) => {
    return (
        <div className="flex flex-col items-center py-6 space-y-6">
            <div className="w-32 h-32 rounded-full overflow-hidden">
                <Image 
                    alt="Profile picture"
                    src={user.imageUrl}
                    height={128}
                    width={128}
                />
            </div>
            <h1 className="text-2xl font-bold">{user.firstName + " " + user.lastName}</h1>
            {user.bio && <p className="text-gray-500 dark:text-gray-400">{user.bio}</p>}
            <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                    <Grip className="h-4 w-4 text-green-500"/>
                    <span className="text-sm text-gray-500">300 solved</span>
                </div>
                <div className="flex items-center space-x-2">
                    <Hourglass className="w-4 h-4 text-red-500"/>
                    <span className="text-sm text-gray-500">500 inprogress</span>
                </div>
            </div>
        </div>
    );
};