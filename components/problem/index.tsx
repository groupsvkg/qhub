import { getProblem } from "@/lib/problem-service";
import ProblemPreview from "./problem-preview";

interface ProblemProps {
    problemId: string;
}

export const Problem = async ({ problemId }: ProblemProps) => {
    const problem = await getProblem(problemId);

    return (
        <div className="w-full h-full md:max-w-4xl">
            <div className="flex flex-col h-5/6">
                <div className="flex flex-col space-y-4 items-center justify-center grow">
                    <h1 className="text-3xl font-semibold">{problem?.title}</h1>
                    <ProblemPreview problem={problem} />
                </div>
                <div className="mt-6 grow border-t-2 flex items-center justify-center">
                    <div className="text-gray-300 font-semibold text-4xl flex">
                        Type to answer
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-700 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}