import { Router } from "express";
import dotenv from "dotenv";
dotenv.config();

// imports
import adminRouter from "./admin";
import applicationRouter from "./applications";
import pagesRouter from "./pages";
import cataloguesRouter from "./catalogues";
import institutionsRouter from "./institutions";
import postsRouter from "./posts";
import dashboardRouter from "./dashboard";

const router = Router();

router.use("/admin", adminRouter);
router.use("/application", applicationRouter);
router.use("/pages", pagesRouter);
router.use("/catalogs", cataloguesRouter);
router.use("/institutions", institutionsRouter);
router.use("/posts", postsRouter);
router.use("/dashboard", dashboardRouter);

export default router;
