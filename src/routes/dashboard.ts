import {Router} from "express";
import {
  applicationService,
  cataloguesService,
  institutionsService,
  lshService,
  openDocumentsService,
  pagesService,
  postsService,
} from "../services";

const dashboard = Router();

dashboard.get("/", async (req, res) => {
    try {
        let appCount = await applicationService.getCount();
        let catologsCount = await cataloguesService.getCount();
        let postCount = await postsService.getCount();
        let instCount = await institutionsService.getCount();
        let pageCount = await pagesService.getCount();
        let lshCount = await lshService.getCount();
        let openDocsCount = await openDocumentsService.getCount()

        res.status(200).json({
            message: `Total counts!`,
            data: {
                appCount,
                catologsCount,
                postCount,
                instCount,
                pageCount,
                lshCount,
                openDocsCount
            },
        });
    } catch (error) {
        console.log(error);
    }
});

export default dashboard;
