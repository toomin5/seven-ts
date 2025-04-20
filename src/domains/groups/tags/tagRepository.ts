import { prisma } from "../../../lib/prisma";
import { Tag } from "@prisma/client";

export async function findTags(data?: Tag) {
  const tags = await prisma.tag.findMany({
    where: data,
  });
  return tags;
}

export async function findTag(id: number) {
  const tag = await prisma.tag.findUnique({
    where: {
      id,
    },
  });
  return tag;
}
