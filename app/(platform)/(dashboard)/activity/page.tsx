import { Sidebar } from "@/components/sidebar"
import Link from "next/link";
import Image from "next/image";
import { formatDistanceToNowStrict } from "date-fns";
import { db } from "@/lib/db";
import { getSelf } from "@/lib/auth-service";
import { ArrowDown, ArrowUp, CheckCheck, Eye, PlusCircle, Trash2, X } from "lucide-react";
import { Action } from "@prisma/client";

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
                    title: true,
                    likes: true,
                    dislikes: true
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
                                <Link
                                    key={activity.id}
                                    href={{
                                        pathname: `/activity/${activity.problemId}`,
                                        query: { activityId: activity.id }
                                    }}
                                    className="hover:bg-gray-200 rounded-md">
                                    <div className="flex flex-col justify-between p-2 space-y-2 shadow-md border rounded-md h-full">
                                        <div className="relative flex items-start justify-start">
                                            <Image
                                                src={user.imageUrl}
                                                height={50}
                                                width={50}
                                                alt="Problem creator"
                                                className="rounded-full"
                                            />
                                            <div className="flex flex-col ml-2 text-ellipsis overflow-hidden tracking-tighter">
                                                <h1 className="text-gray-600 text-sm font-semibold">{activity.problem.category}</h1>
                                                <p className="text-gray-500 text-xs mt-1">{activity.problem.title}</p>
                                            </div>
                                            {activity.action === Action.SOLVED && <CheckCheck className="absolute right-0 w-5 h-5 text-green-600" />}
                                            {activity.action === Action.FAILED && <X className="absolute right-0 w-5 h-5 text-red-600" />}
                                            {activity.action === Action.CREATED && <PlusCircle className="absolute right-0 w-5 h-5 text-blue-600" />}
                                            {activity.action === Action.DELETED && <Trash2 className="absolute right-0 w-5 h-5 text-brown-600" />}
                                            {activity.action === Action.VIEWED && <Eye className="absolute right-0 w-5 h-5 text-purple-600" />}

                                        </div>
                                        <div className="flex items-center justify-between text-xs text-gray-500 gap-x-1 pt-1">
                                            <span>
                                                {formatDistanceToNowStrict(activity.createdAt)}
                                            </span>
                                            <div className="flex">
                                                {activity.problem.likes} <ArrowUp className="h-4 w-4 text-green-500" />&nbsp;
                                                {activity.problem.dislikes} <ArrowDown className="h-4 w-4 text-red-500" />
                                            </div>
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