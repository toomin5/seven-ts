import { Router } from "express";
import {
  handleCreateGroup,
  handleDeleteGroup,
  handleGetGroupById,
  handleGetGroups,
  handleUpdateGroup,
} from "./groupController";

const router = Router();

router.get("/", handleGetGroups);
router.get("/:id", handleGetGroupById);
router.post("/", handleCreateGroup);
router.patch("/:id", handleUpdateGroup);
router.delete("/:id", handleDeleteGroup);

export default router;
