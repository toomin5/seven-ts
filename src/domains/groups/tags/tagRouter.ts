import { Router } from "express";
import { handleGetTags } from "../tags/tagController";

const router = Router();

router.get("/", handleGetTags);

export default router;
