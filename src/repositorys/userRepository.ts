import { prisma } from "../lib/prisma";

export const findUserById = async (id: number) => {
  return await prisma.user.findUnique({ where: { id } });
};
