import { Action, Problem, User } from "@prisma/client";
import { db } from "@/lib/db";

export const createActivity = async (user: User, problem: Problem) => {
    await db.activity.create({
        data: {
            action: Action.CREATED,
            userId: user.id,
            problemId: problem.id
        }
    });
};