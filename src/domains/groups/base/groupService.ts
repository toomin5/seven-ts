import {
  createGroup,
  findGroupById,
  findGroups,
  updateGroup,
  deleteGroup,
} from "./groupRepository";
import { findUserById } from "../../users/userRepository";
import {
  CustomUpdateGroup,
  CustomCreateGroup,
} from "../../../types/group.type";

export const getGroupByIdService = async (id: number) => {
  const group = await findGroupById(id);

  if (!group) {
    throw new Error("해당 그룹이 존재하지 않습니다.");
  }
  return group;
};

export const getGroupsService = async (page: number, pageSize: number) => {
  const groups = await findGroups(page, pageSize);
  return groups;
};

export const createGroupService = async (data: CustomCreateGroup) => {
  const group = await createGroup(data);
  return group;
};

export const updateGroupService = async (input: CustomUpdateGroup) => {
  const { groupId, ownerId, password, data } = input;
  const user = await findUserById(ownerId);
  if (!user) {
    throw new Error("유저 정보가 맞지 않습니다.");
  }
  if (user.password !== password) {
    throw new Error("비밀번호가 일치하지 않습니다.");
  }
  const updatedGroup = await updateGroup(groupId, data);
  return updatedGroup;
};

export const deleteGroupService = async (groupId: number) => {
  const deletedGroup = await deleteGroup(groupId);
  return deletedGroup;
};
