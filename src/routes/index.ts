import { Router } from "express";
import fs from "fs";

const router = Router();
const pathRouter = __dirname

const directoryFiles = fs.readdirSync(pathRouter);

const getfileName = (fileName: string) => fileName.split(".")[0];

directoryFiles.forEach(async (file) => {
  const fileName = getfileName(file);
  if (fileName !== "index" && !file.endsWith(".map")) {
    const routePath = await import(`./${file}`);
    router.use(`/${fileName}`, routePath.default);
  }
});

export default router;
