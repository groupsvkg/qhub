import { db } from "@/lib/db";

export async function getUserById(id: string) {
    const user = await db.user.findUnique({
        where: {
            externalUserId: id,
        }
    });

    return user;
};