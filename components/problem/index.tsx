import { getProblem } from "@/lib/problem-service";
import ProblemPreview from "@/components/problem/problem-preview";
import { AnswerInput } from "@/components/problem/answer-input";
import { LikesDislikes } from "@/components/likes-dislikes";

interface ProblemProps {
    problemId: string;
}

export const Problem = async ({ problemId }: ProblemProps) => {
    const problem = await getProblem(problemId);

    return (
        <div className="w-full h-full md:max-w-4xl">
            <div className="relative flex flex-col h-full">
                <LikesDislikes problemId={problemId} likes={problem!.likes} dislikes={problem!.dislikes} />
                <div className="flex flex-col space-y-4 items-center justify-center flex-1">
                    <h1 className="text-3xl font-semibold">{problem?.title}</h1>
                    <ProblemPreview problem={problem} />
                </div>
                <div className="mt-2 border-t-2 md:flex items-center justify-center flex-1">
                    <AnswerInput problemId={problemId} />
                </div>
            </div>
        </div>
    )
}