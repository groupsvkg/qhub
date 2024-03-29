
import { getProfileStats } from "@/lib/profile-service";
import { ArrowDown, ArrowUp, CheckCheck, PlusCircle, X } from "lucide-react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { formatDistanceToNowStrict } from "date-fns";
import { db } from "@/lib/db";
import { User } from "@prisma/client";

interface UserProfileProps {
    userId: string;
}

export const UserProfile = async ({ userId }: UserProfileProps) => {
    const user = await db.user.findUnique({
        where: {
            id: userId,
        }
    }) as User;

    const profileStats = await getProfileStats(user.id);

    return (
        <div className="flex flex-col items-center py-6 space-y-2">
            <div className="w-32 h-32 rounded-full overflow-hidden">
                <Image
                    alt="Profile picture"
                    src={user.imageUrl}
                    height={128}
                    width={128}
                />
            </div>
            <h1 className="text-2xl font-bold">{user.firstName + " " + user.lastName}</h1>
            <p className="text-sm text-gray-400">joined {formatDistanceToNowStrict(user.createdAt)} ago</p>
            {user.bio && <p className="text-gray-500 dark:text-gray-400">{user.bio}</p>}
            <div className="flex flex-col md:flex-row items-center justify-around w-full gap-2 px-2 max-w-5xl">
                {
                    profileStats.map((value, index) => (
                        <div key={index} className="w-full">
                            {
                                value.action === "CREATED" && <Card className="relative flex flex-col items-center justify-center">
                                    <div className="text-blue-500 text-6xl">
                                        {value._count}
                                    </div>
                                    <div className="text-gray-400 font-bold capitalize">
                                        {value.action}
                                    </div>
                                    <PlusCircle className="absolute right-1 top-1 h-4 w-4 text-blue-500" />
                                </Card>
                            }
                            {
                                value.action === "SOLVED" && <Card className="relative flex flex-col items-center justify-center">
                                    <div className="text-green-800 text-6xl">
                                        {value._count}
                                    </div>
                                    <div className="text-gray-400 font-bold capitalize">
                                        {value.action}
                                    </div>
                                    <CheckCheck className="absolute right-1 top-1 h-4 w-4 text-green-800" />
                                </Card>
                            }
                            {
                                value.action === "FAILED" && <Card className="relative flex flex-col items-center justify-center">
                                    <div className="text-red-800 text-6xl">
                                        {value._count}
                                    </div>
                                    <div className="text-gray-400 font-bold capitalize">
                                        {value.action}
                                    </div>
                                    <X className="absolute right-1 top-1 h-4 w-4 text-red-800" />
                                </Card>
                            }
                            {
                                value.action === "LIKED" && <Card className="relative flex flex-col items-center justify-center">
                                    <div className="text-green-400 text-6xl">
                                        {value._count}
                                    </div>
                                    <div className="text-gray-400 font-bold capitalize">
                                        {value.action}
                                    </div>
                                    <ArrowUp className="absolute right-1 top-1 h-4 w-4 text-green-400" />
                                </Card>
                            }
                            {
                                value.action === "DISLIKED" && <Card className="relative flex flex-col items-center justify-center">
                                    <div className="text-red-400 text-6xl">
                                        {value._count}
                                    </div>
                                    <div className="text-gray-400 font-bold capitalize">
                                        {value.action}
                                    </div>
                                    <ArrowDown className="absolute right-1 top-1 h-4 w-4 text-red-400" />
                                </Card>
                            }
                        </div>
                    ))
                }

            </div>
        </div>
    );
};