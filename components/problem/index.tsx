import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getProblem } from "@/lib/problem-service";
import ProblemPreview from "./problem-preview";

interface ProblemProps {
    problemId: string;
}

export const Problem = async ({problemId}: ProblemProps) => {
    const problem = await getProblem(problemId);

    return (
        <Card className="w-full md:max-w-4xl">
            <CardHeader>
                <CardTitle className="hidden md:block text-2xl text-gray-500">
                    Created by <span className="">{problem.user.firstName}</span>
                </CardTitle>
                <CardDescription>
                    
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ProblemPreview problem={problem}/>
            </CardContent>
        </Card>
    )
}