import { findGroupById } from "../repositorys/groupRepository";

export const getGroupById = async (id: number) => {
  const group = await findGroupById(id);

  if (!group) {
    throw new Error("해당 그룹이 존재하지 않습니다.");
  }
  return group;
};
