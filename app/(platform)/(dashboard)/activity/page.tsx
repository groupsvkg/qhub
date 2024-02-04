import { Sidebar } from "@/components/sidebar"
import Link from "next/link";
import Image from "next/image";
import { formatDistanceToNowStrict } from "date-fns";
import { db } from "@/lib/db";
import { getSelf } from "@/lib/auth-service";

const ActivityPage = async () => {
    const user = await getSelf();

    const activities = await db.activity.findMany({
        take: 50,
        where: {
            userId: user.id
        },
        orderBy: {
            createdAt: "desc"
        },
        include: {
            problem: {
                select: {
                    category: true,
                    title: true
                }
            }
        }
    });

    return (
        <div className="pt-16">
            <Sidebar />
            <div className="md:pl-60 h-full">
                <div className="h-full flex flex-col m-6 items-center justify-start">
                    <div className="w-full mb-4">
                        <h1 className="text-2xl md:text-3xl font-bold">Activity</h1>
                    </div>
                    <div className="grid gap-2 grid-cols-1 md:grid-cols-3 xl:grid-cols-6 w-full">
                        {
                            activities.map(activity => (
                                <Link key={activity.id} href={`/problems/${activity.problemId}`} className="hover:bg-gray-200 rounded-md">
                                    <div className="flex flex-col justify-between p-2 space-y-2 shadow-md border rounded-md h-full">
                                        <div className="flex items-center justify-start">
                                            <Image
                                                src={user.imageUrl}
                                                height={50}
                                                width={50}
                                                alt="Problem creator"
                                                className="rounded-full"
                                            />
                                            <div className="flex flex-col ml-2 text-ellipsis overflow-hidden tracking-tighter">
                                                <h1 className="text-gray-600 text-md font-semibold">{user.firstName + " " + user.lastName}</h1>
                                                <p className="text-gray-500 text-sm font-medium">{activity.problem.category}</p>
                                                <p className="text-gray-400 text-xs mt-1">{activity.problem.title}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-start text-xs text-gray-500 gap-x-1 pt-1">
                                            <span>
                                                {formatDistanceToNowStrict(activity.createdAt)}
                                            </span>
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

export default ActivityPage;