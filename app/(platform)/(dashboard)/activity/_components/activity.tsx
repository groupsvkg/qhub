import { getProblem } from "@/lib/problem-service";
import { LikesDislikes } from "@/components/likes-dislikes";
import ActivityPreview from "./activity-preview";
import { AnswerPreview } from "./answer-preview";
import { getActivity } from "@/lib/activity-service";

interface ActivityProps {
    problemId: string;
    activityId: string;
}

export const Activity = async ({ problemId, activityId }: ActivityProps) => {
    const problem = await getProblem(problemId);
    const activity = await getActivity(activityId);

    return (
        <div className="w-full h-full md:max-w-4xl">
            <div className="relative flex flex-col h-full">
                <LikesDislikes problemId={problemId} likes={problem!.likes} dislikes={problem!.dislikes} />
                <div className="flex flex-col space-y-4 items-center justify-center flex-1">
                    <h1 className="text-3xl font-semibold">{problem?.title}</h1>
                    <ActivityPreview problem={problem} />
                </div>
                <div className="mt-2 border-t-2 flex items-center justify-center flex-1">
                    <AnswerPreview input={activity!.input} action={activity!.action} />
                </div>
            </div>
        </div>
    )
}