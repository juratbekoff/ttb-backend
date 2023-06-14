import { Router } from "express";

// imports
import adminRouter from "./admin";
import applicationRouter from "./applications";
import pagesRouter from "./pages";
import cataloguesRouter from "./catalogues";
import institutionsRouter from "./institutions";
import postsRouter from "./posts";

const router = Router();

router.use("/admin", adminRouter);
router.use("/application", applicationRouter);
router.use("/pages", pagesRouter);
router.use("/catalogs", cataloguesRouter);
router.use("/institutions", institutionsRouter);
router.use("/posts", postsRouter);

export default router;
