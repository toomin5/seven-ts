import { disconnect } from "process";
import { prisma } from "../../lib/prisma";
import { CustomCreateUser } from "../../types/user.type";

// 유저 정보 찾기
export const findUserById = async (id: number) => {
  return await prisma.user.findUnique({ where: { id } });
};

// 유저 생성
export const createUser = async (data: CustomCreateUser) => {
  return await prisma.user.create({
    data,
  });
};

// 유저 그룹 참가
export const joinGroup = async (userId: number, groupId: number) => {
  const user = await prisma.user.update({
    where: { id: userId },
    data: {
      group: {
        connect: { id: groupId },
      },
    },
  });
  return user;
};

// 유저 그룹 탈퇴
export const leaveGroup = async (userId: number, groupId: number) => {
  const user = await prisma.user.update({
    where: { id: userId },
    data: {
      group: {
        disconnect: { id: groupId },
      },
    },
  });
};

// 유저 그룹조회