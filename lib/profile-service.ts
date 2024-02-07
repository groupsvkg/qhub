import { db } from "./db"

export const getProfileStats = async (userId: string) => {
    const profileStats = await db.activity.groupBy({
        where: {
            userId,
        },
        by: "action",
        _count: true,
    })

    return profileStats;
};