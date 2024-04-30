import {cataloguesService} from "../services";
import {Router} from "express";
import {catalogues} from "../types";
import {log} from "console";
import {upload} from "../utils";

const catalogues = Router();

// create
catalogues.post("/", upload("catalogues").single("image"), async (req, res) => {
    try {
        let data: catalogues = req.body;
        let image_file = req.file?.filename;
        if (!data.descr || !data.title || !image_file) {
            return res.status(400).json({
                message: `Fill all the fields!`,
            });
        }
        let catalogue = await cataloguesService.create(data, image_file);
        res.status(201).json({
            message: `Catalogue created successfully!`,
            data: catalogue,
        });
    } catch (error) {
        log(error);
    }
});

// get all
catalogues.get("/", async (req, res) => {
    try {
        let getCatalogues = await cataloguesService.getAll();

        res.status(200).json({
            message: `All catalogues!`,
            data: getCatalogues,
        });
    } catch (error) {
        log(error);
    }
});

// get by ID
catalogues.get("/:id", async (req, res) => {
    try {
        let {id} = req.params;
        let catalogue = await cataloguesService.getOne(+id);
        if (!catalogue) {
            return res.status(404).json({
                message: `catalogue with ID ${id} is not found!`,
            });
        }

        catalogue.image = `${process.env.API_URL!}/catalogs/img/${catalogue.image}`;

        res.status(200).json({
            message: `ID ${id} catalogue info`,
            data: catalogue,
        });
    } catch (error) {
        log(error);
    }
});

// get by imageID
catalogues.get("/img/:image", async (req, res) => {
    try {
        let {image} = req.params;
        let catalogue = await cataloguesService.getByImage(image);
        if (!catalogue) {
            return res.status(404).json({
                message: `catalogue with image ${image} is not found!`,
            });
        }
        let image_file = catalogue.image;
        res.sendFile(image_file, {root: "public/catalogues"});
    } catch (error) {
        log(error);
    }
});

// delete all catalogues
catalogues.delete("/", async (req, res) => {
    try {
        let data = await cataloguesService.getAll();
        if (data.length === 0) {
            return res.status(404).json({
                message: `There is no any catalogue in order to delete!`,
            });
        }
        // deleting all data
        await cataloguesService.deleteAll();
        res.status(200).json({
            message: `All catalogues successfully deleted!`,
        });
    } catch (error) {
        log(error);
    }
});

// delete by ID
catalogues.delete("/:id", async (req, res) => {
    try {
        const {id} = req.params;
        let catalogue = await cataloguesService.getOne(+id);
        if (!catalogue) {
            return res.status(404).json({
                message: `catalogue with ID ${id} is not found! Maybe it is already deleted!`,
            });
        }
        //deleting
        await cataloguesService.deleteOne(+id);
        res.status(200).json({
            message: `catalogue deleted!`,
            deletedData: catalogue,
        });
    } catch (error) {
        log(error);
    }
});

export default catalogues;
