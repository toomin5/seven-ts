import { Request, Response, NextFunction } from "express";
import {
  createUserService,
  joinGroupService,
  leaveGroupService,
} from "./userService";

export const handleCreateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newUser = req.body;
    if (!newUser.nickname || !newUser.password || !newUser.email) {
      throw new Error("필수 정보가 입력되지 않았습니다.");
      //return res.status(400).json({message:"필수 정보가 입력되지 않았습니다."});
    }
    const createUser = await createUserService(newUser);
    return res.status(201).json({ user: createUser });
  } catch (error) {
    next(error);
  }
};

export const handleJoinGroup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId, groupId } = req.body;
    const user = await joinGroupService(userId, groupId);
    return res.status(200).json({ user });
  } catch (error) {
    next(error);
  }
};

export const handleLeaveGroup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId, groupId, password } = req.body;
    await leaveGroupService(userId, groupId, password);
    return res.status(200).json({ message: "탈퇴 완료" });
  } catch (error) {
    next(error);
  }
};
