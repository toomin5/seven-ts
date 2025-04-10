import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";

import groupRouter from "./domains/groups/groupRouter";
import userRouter from "./domains/users/userRouter";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/groups", groupRouter);
app.use("/user", userRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log(`${process.env.PORT} server starting`);
});
