import { createRecordService, updateRecordService } from "./recordService";
import { Request, Response, NextFunction } from "express";

export async function handleCreateRecord(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const data = req.body;
    const newRecord = await createRecordService(data);
    res.status(201).json({ newRecord });
  } catch (error) {
    next(error);
  }
}

export async function handleUpdateRecord(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const data = req.body;
    const id = Number(req.params.id);
    const patchedRecord = await updateRecordService(id, data);
    res.status(200).json({ patchedRecord });
  } catch (error) {
    next(error);
  }
}
