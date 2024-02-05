"use server";

import { db } from "@/lib/db";

export const verifyAnswer = async (problemId: string, answer: string) => {
    const problem = await db.problem.findUnique({
        where: {
            id: problemId,
            answer
        }
    });

    if (problem) return true;

    return false;
}