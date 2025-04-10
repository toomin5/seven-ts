import { Router } from "express";
import {
  handleCreateGroup,
  handleGetGroupById,
  handleGetGroups,
  handleUpdateGroup,
} from "../controllers/groupController";

const router = Router();

router.get("/", handleGetGroups);
router.get("/:id", handleGetGroupById);
router.post("/", handleCreateGroup);
router.patch("/:id", handleUpdateGroup);

export default router;
