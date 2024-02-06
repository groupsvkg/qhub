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

export const getActivity = async (activityId: string) => {
    const activity = await db.activity.findUnique({
        where: {
            id: activityId
        }
    });

    return activity;
}

export const getActivitiesByUserId = async (userId: string, take: number) => {
    const activities = await db.activity.findMany({
        take,
        where: {
            userId
        },
        orderBy: {
            createdAt: "desc"
        },
        include: {
            problem: {
                select: {
                    category: true,
                    title: true,
                    likes: true,
                    dislikes: true
                }
            }
        }
    });

    return activities;
}