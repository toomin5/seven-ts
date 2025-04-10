import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";

import groupRouter from "../src/routes/groupRouter";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/groups", groupRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log(`${process.env.PORT} server starting`);
});
