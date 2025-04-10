import { Request, Response, NextFunction } from "express";
import {
  createGroupService,
  deleteGroupService,
  getGroupByIdService,
  getGroupsService,
  updateGroupService,
} from "../services/groupService";
import { findUserById } from "../repositorys/userRepository";
import { findGroupById } from "../repositorys/groupRepository";

export const handleGetGroupById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = parseInt(req.params.id);
    if (!id) {
      return res.status(400).json({ message: "잘못된 id입니다." });
    }
    const group = await getGroupByIdService(id);
    return res.status(200).json({ group });
  } catch (error) {
    next(error);
  }
};

export const handleGetGroups = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const pageSize = parseInt(req.query.pageSize as string) || 10;

    const groups = await getGroupsService(page, pageSize);
    return res.status(200).json({
      data: groups,
    });
  } catch (error) {}
};

export const handleCreateGroup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newGroup = req.body;

    if (!newGroup.name || !newGroup.ownerId) {
      throw new Error("필수 정보가 누락 되었습니다.");
    }
    const createGroup = await createGroupService(newGroup);

    return res.status(201).json({ group: createGroup });
  } catch (error) {
    next(error);
  }
};

export const handleUpdateGroup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const ownerId = req.body.ownerId;
    const updateData = req.body.data;
    const groupId = req.body.groupId;
    const password = req.body.password;

    const user = await findUserById(ownerId);
    if (!ownerId || !updateData) {
      throw new Error("요청 정보가 부족합니다.");
    }
    if (!user) {
      throw new Error("유저 정보가 존재 하지 않습니다.");
    }
    const updatedGroup = await updateGroupService({
      groupId,
      ownerId,
      password,
      data: updateData,
    });
    return res.status(201).json({ updatedGroup });
  } catch (error) {
    next(error);
  }
};

export const handleDeleteGroup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const groupId = parseInt(req.params.groupId);
    const group = await findGroupById(groupId);
    if (!groupId) {
      throw new Error("입력한 그룹ID가 잘못 되었습니다..");
    }
    if (!group) {
      throw new Error("존재하지 않는 그룹입니다.");
    }

    await deleteGroupService(groupId);

    return res.status(200).json({ message: "삭제 완료" });
  } catch (error) {
    next(error);
  }
};
