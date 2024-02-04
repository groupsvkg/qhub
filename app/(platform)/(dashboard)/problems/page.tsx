import { Sidebar } from "@/components/sidebar";
import { db } from "@/lib/db";
import { formatDistanceToNow } from "date-fns";
import { ArrowDown, ArrowUp, ThumbsDown, ThumbsUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProblemsPage = async () => {
    const problems = await db.problem.findMany({
        take: 50,
        include: {
            user: true
        },
        orderBy: {
            createdAt: "desc"
        }
    })

    return (
        <div className="pt-16">
            <Sidebar />
            <div className="md:pl-60 h-full">
                <div className="h-full flex flex-col m-6 items-center justify-start">
                    <div className="w-full mb-4">
                        <h1 className="text-2xl md:text-3xl font-bold">Problems</h1>
                    </div>
                    <div className="grid gap-2 grid-cols-1 md:grid-cols-4 lg:grid-cols-6  w-full h-full">
                        {
                            problems.map(problem => (
                                <Link key={problem.id} href={`/problems/${problem.id}`} className="hover:bg-gray-200 rounded-md w-full">
                                    <div className="p-2 space-y-2 shadow-md border rounded-md h-full flex flex-col justify-between">
                                        <div className="flex items-center justify-start w-full">
                                            <Image
                                                src={problem.user.imageUrl}
                                                height={50}
                                                width={50}
                                                alt="Problem creator"
                                                className="rounded-full"
                                            />
                                            <div className="flex flex-col ml-2 text-ellipsis overflow-hidden tracking-tighter">
                                                <h1 className="text-gray-700 text-md font-semibold">{problem.category}</h1>
                                                <p className="text-gray-500 text-xs">{problem.title}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between text-xs text-gray-500 gap-x-1 pt-1">
                                            {formatDistanceToNow(problem.createdAt)}
                                            <div className="flex">
                                                {problem.likes} <ArrowUp className="h-4 w-4 text-green-500" />&nbsp;
                                                {problem.dislikes} <ArrowDown className="h-4 w-4 text-red-500" />
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

export default ProblemsPage