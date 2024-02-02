import { getSelf } from "@/lib/auth-service"
import { db } from "@/lib/db";
import { User } from "@prisma/client"
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

    if(problem) {
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
            activities: true,
            user: true
        }
    });

    return problem;
}