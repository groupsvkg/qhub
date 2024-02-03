import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getProblem } from "@/lib/problem-service";
import ProblemPreview from "./problem-preview";

interface ProblemProps {
    problemId: string;
}

export const Problem = async ({problemId}: ProblemProps) => {
    const problem = await getProblem(problemId);

    return (
        <div className="w-full md:max-w-4xl">
            <h1 className="text-3xl font-semibold">{problem?.title}</h1>
            <ProblemPreview problem={problem}/>
        </div>
    )
}