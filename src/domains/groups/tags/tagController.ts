import { findByTag, findByTags } from "./tagService";
import { Request, Response, NextFunction } from "express";

export async function handleGetTags(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const tags = await findByTags();
    res.status(200).json({ tags });
  } catch (error) {
    next(error);
  }
}

export async function handleGetTag(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req.params;
    const tag = await findByTag(Number(id));
    res.status(200).json({ tag });
  } catch (error) {
    next(error);
  }
}
