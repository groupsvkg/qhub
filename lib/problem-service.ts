import { getSelf } from "@/lib/auth-service"
import { db } from "@/lib/db";
import { Action, User } from "@prisma/client"
import { createActivity } from "@/lib/activity-service";

export const createProblem = async (category: string, title: string, description: string, answer: string) => {
    const self: User = await getSelf();

    const problem = await db.problem.create({
        data: {
            category,
            title,
            description,
            answer,
            userId: self.id
        }
    });

    if (problem) {
        await createActivity(self, problem);
    }

    return problem;
}

export const getProblem = async (problemId: string) => {
    const problem = await db.problem.findUnique({
        where: {
            id: problemId
        },
        include: {
            // TODO: review if its needed or separate api is needed like getProblemAndUser, getProblemAndActivity..etc
            // activities: true,
            // user: true
        }
    });

    return problem;
}

export const getUnsolvedProblems = async (take: number) => {
    const user = await getSelf();

    const problems = await db.problem.findMany({
        take: 50,
        where: {
            NOT: [
                {
                    activities: {
                        some: {
                            action: Action.SOLVED,
                            userId: user.id
                        }
                    }
                },
                // TODO: review later - exclude or show problems created by user in problems page.
                // {
                //     userId: user.id
                // }
            ]
        },
        include: {
            user: true
        },
        orderBy: {
            createdAt: "desc"
        }
    });

    return problems
}