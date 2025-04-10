import { CustomCreateUser } from "../../types/user.type";
import {
  createUser,
  findUserById,
  joinGroup,
  leaveGroup,
} from "./userRepository";

export const createUserService = async (data: CustomCreateUser) => {
  const user = await createUser(data);
  return user;
};

export const joinGroupService = async (userId: number, groupId: number) => {
  //유저가 그룹참가하려면 유저아이디, 그룹아이디가필요
  const user = await joinGroup(userId, groupId);
  return user;
};

export const leaveGroupService = async (
  userId: number,
  password: string,
  groupId: number
) => {
  const leaveUser = await findUserById(userId);

  if (!leaveUser) {
    throw new Error("존재하지 않는 유저 입니다.");
  }

  if (leaveUser.password !== password) {
    throw new Error("비밀번호가 일치하지 않습니다.");
  }

  const user = await leaveGroup(userId, groupId);
  return user;
};
