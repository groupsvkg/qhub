import { Sidebar } from "@/components/sidebar"
import { Card } from "@/components/ui/card";
import { getLeaders } from "@/lib/leaderboard-service";
import { formatDistanceToNow, formatDistanceToNowStrict } from "date-fns";
import { CheckCheck, Crown, Grip } from "lucide-react";
import Image from "next/image"

const LeaderboardPage = async () => {
    const leaders = await getLeaders();

    return (
        <div className="pt-16">
            <Sidebar />
            <div className="md:pl-60 h-full ">
                <div className="h-full flex flex-col m-6 items-center justify-start">
                    <div className="w-full mb-4">
                        <h1 className="text-2xl md:text-3xl font-bold">Leaderboard</h1>
                    </div>
                    <div className="space-y-2 w-full">
                        {
                            leaders.map((leader, index) => (
                                <Card key={index}>
                                    <div className="flex justify-between">
                                        <div className="flex flex-col md:flex-row m-2">
                                            <Image
                                                src={leader.imageUrl}
                                                alt="Leader"
                                                width={100}
                                                height={100}
                                                className="rounded-full"
                                            />
                                            <div className="ml-2">
                                                <h1 className="text-gray-500 text-md font-semibold">{leader.firstName + " " + leader.lastName}</h1>
                                                <p className="text-gray-400 text-sm">joined {formatDistanceToNowStrict(leader.createdAt)} ago</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-center text-7xl text-gray-400">
                                            <div className="flex flex-col items-center gap-x-4">
                                                {leader._count.activities} <CheckCheck className="text-green-600" />
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-center text-7xl text-gray-400 mr-4">
                                            <div className="flex flex-col items-center gap-x-4">
                                                {index + 1} <Crown className="text-yellow-600" />
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeaderboardPage;