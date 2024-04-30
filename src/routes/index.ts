import {Router} from "express";
import dotenv from "dotenv";
// imports
import adminRouter from "./admin";
import applicationRouter from "./applications";
import pagesRouter from "./pages";
import cataloguesRouter from "./catalogues";
import institutionsRouter from "./institutions";
import postsRouter from "./posts";
import dashboardRouter from "./dashboard";
import leadership from "./leadership";
import openDocuments from "./open-documents";

dotenv.config();

const router = Router();

router.use("/admin", adminRouter);
router.use("/application", applicationRouter);
router.use("/pages", pagesRouter);
router.use("/catalogs", cataloguesRouter);
router.use("/institutions", institutionsRouter);
router.use("/posts", postsRouter);
router.use("/dashboard", dashboardRouter);
router.use("/leadership", leadership);
router.use("/open-documents", openDocuments);

export default router;
