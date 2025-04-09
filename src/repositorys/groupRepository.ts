import { prisma } from "../lib/prisma";

export const findGroupById = async (id: number) => {
  return await prisma.group.findUnique({ where: { id } });
};
