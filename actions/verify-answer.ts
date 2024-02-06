"use server";

import { getSelf } from "@/lib/auth-service";
import { db } from "@/lib/db";
import { Action } from "@prisma/client";

export const verifyAnswer = async (problemId: string, answer: string) => {
    const user = await getSelf();

    const problem = await db.problem.findUnique({
        where: {
            id: problemId,
            answer
        }
    });

    if (problem) {
        await db.activity.create({
            data: {
                problemId,
                userId: user.id,
                action: Action.SOLVED,
                input: answer
            }
        });
        return true;
    }

    await db.activity.create({
        data: {
            problemId,
            userId: user.id,
            action: Action.FAILED,
            input: answer
        }
    });

    return false;
}