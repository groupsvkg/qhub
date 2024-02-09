import { db } from "./db"

export const getLeaders = async () => {
    const leaders = await db.user.findMany({
        where: {
            activities: {
                some: {
                    action: "SOLVED"
                }
            }
        },
        include: {
            _count: {
                select: {
                    activities: {
                        where: {
                            action: "SOLVED"
                        }
                    }
                }
            }
        },
        orderBy: {
            activities: {
                _count: "asc"
            }
        }
    });

    return leaders;
}