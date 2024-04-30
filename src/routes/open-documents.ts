import {Router} from "express";
import {log} from "console";
import {upload} from "../utils";
import {open_documents} from "../types";
import {openDocumentsService} from "../services";
import {formatBytes} from "../utils/formatters";

const openDocuments = Router();

// create
openDocuments.post("/", upload('open-documents').fields([
    {name: "cover_image", maxCount: 1},
    {name: "file", maxCount: 1}
]), async (req, res) => {
    try {
        let data: open_documents = req.body;
        let files = req.files as { [fieldname: string]: Express.Multer.File[] };

        let file = files['file']?.[0];
        let cover_image = files['cover_image']?.[0];

        // create
        const createDocument = await openDocumentsService.create({
            title: data.title,
            file_url: file?.originalname!,
            file_size: formatBytes(file?.size!),
            cover_image: cover_image?.filename,
        })

        // response
        return res.status(201).json({
            message: "Open document is created successfully!",
            info: createDocument
        })
    } catch (error: any) {
        log(error);
        return res.status(500).json({error: error.message});
    }
});

// get all
openDocuments.get("/", async (req, res) => {
    try {
        const documents = await openDocumentsService.getAll()

        return res.status(200).json({
            message: `Open documents are retrieved successfully!`,
            documents
        });
    } catch (error: any) {
        log(error);
        return res.status(500).json({error: error.message});
    }
});

// get by ID
openDocuments.get("/:id", async (req, res) => {
    try {
        const findDocument = await openDocumentsService.findById(+req.params.id)
        if (!findDocument) {
            return res.status(404).json({
                message: "Document is not found!"
            })
        }

        return res.status(200).json({
            message: `Document info with ID ${req.params.id} is retrieved successfully!`,
            info: findDocument
        })

    } catch (error: any) {
        log(error);
        return res.status(500).json({error: error.message});
    }
});

// get by file
openDocuments.get("/file/:file", async (req, res) => {
    try {
        let {file} = req.params;
        let document = await openDocumentsService.findByFile(file);
        if (!document) {
            return res.status(404).json({
                message: `document with image ${file} is not found!`,
            });
        }
        res.sendFile(document.file_url!, {root: "public/open-documents"});
    } catch (error) {
        log(error);
    }
});

// get by image
openDocuments.get("/img/:image", async (req, res) => {
    try {
        let {image} = req.params;
        let findImage = await openDocumentsService.findByImage(image);
        if (!findImage) {
            return res.status(404).json({
                message: `document with image ${image} is not found!`,
            });
        }

        res.sendFile(findImage.cover_image!, {root: "public/open-documents"});
    } catch (error) {
        log(error);
    }
});

// delete openDocument by ID
openDocuments.delete("/:id", async (req, res) => {
    try {
        const findDocument = await openDocumentsService.findById(+req.params.id)
        if (!findDocument) {
            return res.status(404).json({
                message: "Document is not found!"
            })
        }

        // delete document
        await openDocumentsService.delete(+req.params.id)

        return res.status(200).json({
            message: `Document is deleted successfully!`,
            ID: +req.params.id
        })
    } catch (error: any) {
        log(error);
        return res.status(500).json({error: error.message});
    }
});

export default openDocuments;
