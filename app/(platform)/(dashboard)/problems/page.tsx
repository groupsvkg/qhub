import { Sidebar } from "@/components/sidebar";
import { getSelf } from "@/lib/auth-service";
import { db } from "@/lib/db";
import { getUnsolvedProblems } from "@/lib/problem-service";
import { formatDistanceToNowStrict } from "date-fns";
import { ArrowDown, ArrowUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProblemsPage = async () => {
    const user = await getSelf();
    const problems = await getUnsolvedProblems(50);

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
                                        <div className="flex items-start justify-start w-full">
                                            <Image
                                                src={problem.user.imageUrl}
                                                height={50}
                                                width={50}
                                                alt="Problem creator"
                                                className="rounded-full"
                                            />
                                            <div className="flex flex-col ml-2 text-ellipsis overflow-hidden tracking-tighter">
                                                <h1 className="text-gray-600 text-sm font-semibold">{problem.category}</h1>
                                                <p className="text-gray-500 text-xs">{problem.title}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between text-xs text-gray-500 gap-x-1 pt-1">
                                            {formatDistanceToNowStrict(problem.createdAt)} ago
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