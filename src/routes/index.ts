import { Router } from "express";
import fs from "fs";

const router = Router();

const routeFiles = fs.readdirSync(__dirname);
routeFiles.forEach(async (route) => {
  const routeName = route.split(".")[0];
  if (routeName !== "index" && !route.endsWith(".map")) {
    const routePath = await import(`./${route}`);
    router.use(`/${routeName}`, routePath.default);
  }
});
export default router;
