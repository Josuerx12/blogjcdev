import { db } from "@/providers/db";

export async function findUserByEmail(email: string) {
  const user = await db.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
      email: true,
      name: true,
      lastName: true,
      createdAt: true,
      role: true,
      updatedAt: true,
    },
  });

  return user;
}
