import { prisma } from "../../lib/prisma";
import { CustomCreateGroup, Group } from "../../types/group.type";

// 그룹 상세조회
export const findGroupById = async (id: number) => {
  return await prisma.group.findUnique({ where: { id } });
};

// 그룹 목록조회
export const findGroups = async (page: number = 1, pageSize: number = 10) => {
  const skip = (page - 1) * pageSize;

  const groups = await prisma.group.findMany({
    skip,
    take: pageSize,
    orderBy: {
      createdAt: "desc",
    },
  });
  return groups;
};

// 그룹 생성
export const createGroup = async (groupData: CustomCreateGroup) => {
  const { ownerId, ...groupFields } = groupData;

  return await prisma.group.create({
    data: {
      ...groupFields,
      owner: { connect: { id: ownerId } },
      ownerId,
    },
  });
};

//그룹 수정
export const updateGroup = async (
  groupId: number,
  updateData: Partial<Group>
) => {
  return await prisma.group.update({
    where: { id: groupId },
    data: updateData,
  });
};

//그룹 삭제
export const deleteGroup = async (groupId: number) => {
  return await prisma.group.delete({ where: { id: groupId } });
};
