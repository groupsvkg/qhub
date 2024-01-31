import { getSelf } from "@/lib/auth-service"
import { db } from "@/lib/db";
import { User, Problem } from "@prisma/client"
import { createActivity } from "@/lib/activity-service";

export const createProblem = async (description: string, answer: string): Problem => {
    const self: User = await getSelf();

    const problem = await db.problem.create({
        data: {
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