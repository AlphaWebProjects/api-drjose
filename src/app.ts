import { loadEnv } from "@/config";
import cors from "cors";
import express, { Express } from "express";

import "express-async-errors";

import { authRouter } from "./routers/auth-router";
import { enrollmentRouter } from "./routers/enrollment-router";

loadEnv();

const app = express();
app
  .use(cors())
  .use(express.json())
  .get("/health", (_req, res) => res.send("OK!"))
  .use("/user", authRouter)
  .use("/user", enrollmentRouter)

export default app;
