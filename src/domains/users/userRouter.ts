import { Router } from "express";
import {
  handleCreateUser,
  handleJoinGroup,
  handleLeaveGroup,
} from "./userController";

const userRouter = Router();

userRouter.post("/join-group", handleJoinGroup);
userRouter.post("/", handleCreateUser);
userRouter.delete("/leave-group", handleLeaveGroup);

export default userRouter;
