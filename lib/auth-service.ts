import { currentUser } from "@clerk/nextjs";

import { db } from "@/lib/db";

export const getSelf = async () => {
  const self = await currentUser();

  if (!self) {
    throw new Error("Unauthorized");
  }

  const user = await db.user.findUnique({
    where: {
      externalUserId: self.id
    }
  });

  if (!user) {
    throw new Error("Not found");
  }

  return user;
};