import { getProblem } from "@/lib/problem-service";
import ProblemPreview from "./problem-preview";

interface ProblemProps {
    problemId: string;
}

export const Problem = async ({problemId}: ProblemProps) => {
    const problem = await getProblem(problemId);

    return (
        <div className="w-full h-full md:max-w-4xl">
            <h1 className="text-3xl font-semibold">{problem?.title}</h1>
            <div className="flex flex-col h-5/6">
                <div className="flex items-center justify-center grow">
                    <ProblemPreview problem={problem}/>
                </div>
                <div className="mt-6 grow border-t-2 flex items-center justify-center">
                    <div className="text-gray-300 font-semibold text-4xl">
                        Type to answer
                    </div>
                </div>
            </div>
        </div>
    )
}