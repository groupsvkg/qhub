"use server";

import { getSelf } from "@/lib/auth-service";
import { db } from "@/lib/db";
import { Action } from "@prisma/client";

export const dislikeProblem = async (problemId: string) => {
    const user = await getSelf();

    const dislikesCount = await db.activity.count({
        where: {
            userId: user.id,
            problemId,
            OR: [
                {
                    action: Action.LIKED
                },
                {
                    action: Action.DISLIKED
                }
            ]
        }
    });

    if (dislikesCount > 0) return;

    const problem = await db.problem.update({
        where: {
            id: problemId
        },
        data: {
            dislikes: {
                increment: 1
            }
        }
    });

    await db.activity.create({
        data: {
            userId: user.id,
            problemId,
            action: Action.DISLIKED
        }
    });

    return problem;
};