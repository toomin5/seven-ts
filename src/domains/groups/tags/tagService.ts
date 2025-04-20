import { Tag } from "@prisma/client";
import { findTags, findTag } from "./tagRepository";

export async function findByTags(data?: Tag) {
  const tags = await findTags(data);
  return tags;
}

export async function findByTag(id: number) {
  const tag = await findTag(id);
  return tag;
}
