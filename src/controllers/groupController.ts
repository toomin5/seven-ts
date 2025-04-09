import { Request, Response, NextFunction } from "express";
import { getGroupById } from "../services/groupService";

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
  } catch (error) {
    next(error);
  }
};
