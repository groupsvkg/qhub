import { getSelf } from "@/lib/auth-service"
import { db } from "@/lib/db";

export const createProblem = async (description: string, answer: string) => {
    const self = await getSelf();

    const problem = await db.problem.create({
        data: {
            description,
            answer,
            userId: self.id
        }
    });

    return problem;
}