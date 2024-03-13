import { loadEnv } from "@/config";
import cors from "cors";
import express, { Express } from "express";

import "express-async-errors";

import { exampleRouter } from "./routers/example-router";

loadEnv();

const app = express();
app
  .use(cors())
  .use(express.json())
  .get("/health", (_req, res) => res.send("OK!"))
  .use("/example", exampleRouter)

export default app;
