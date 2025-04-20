import { Router } from "express";
import { handleCreateRecord, handleUpdateRecord } from "./recordController";

const router = Router();

router.post("/", handleCreateRecord);
router.patch("/:id", handleUpdateRecord);

export default router;
