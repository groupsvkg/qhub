import { Sidebar } from "@/components/sidebar"
import { db } from "@/lib/db";
import { Activity, Dot, Grip } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";

const UsersPage = async () => {
    const users = await db.user.findMany({
        orderBy: {
            createdAt: 'desc'
        },
        include: {
            _count: true
        }
    });

    return (
        <div className="pt-16">
            <Sidebar />
            <div className="md:pl-60 h-full ">
                <div className="h-full flex flex-col m-6 items-center justify-start">
                        <div className="w-full mb-4">
                            <h1 className="text-2xl md:text-3xl font-bold">Users</h1>
                        </div>
                        <div className="grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:gricol6">
                        {
                            users.map(user => (
                                <Link key={user.id} href={`/users/${user.id}`} className="hover:bg-gray-200 rounded-md">
                                    <div className="p-2 space-y-2 shadow-md border rounded-md">
                                        <div className="flex items-center justify-start">
                                            <Image 
                                                    src={user.imageUrl}
                                                    height={50}
                                                    width={50}
                                                    alt="Problem creator"
                                                    className="rounded-full"
                                                />
                                            <div className="flex flex-col ml-2 text-ellipsis overflow-hidden">
                                                <h1 className="text-gray-700 text-md font-semibold">{user.firstName + " " + user.lastName}</h1>
                                                <p className="text-gray-500 text-sm">{user.bio}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-start text-xs text-gray-500 gap-x-1 pt-1">
                                            {formatDistanceToNow(user.createdAt)}
                                            <Grip className="h-4 w-4 ml-2"/> {user._count.problems}
                                            <Activity className="h-4 w-4 ml-2"/> {user._count.activities}
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default UsersPage;