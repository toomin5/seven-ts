import { Request, Response, NextFunction } from "express";

export const handleCreateRecord = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const groupId = Number(req.params.groupId);
  const { nickname, password, exerciseType, description, time, distance } =
    req.body;
  try {
    
  } catch(error) {

  }
};
