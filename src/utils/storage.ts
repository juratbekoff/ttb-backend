import multer from "multer";
import {v4 as uuid} from "uuid";

const createStorage = (basePath: string,) =>
    multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, `public/${basePath}`);
        },
        filename: function (req, file, cb) {
            cb(null, `${basePath === "open-documents" && file.fieldname !== "cover_image" ? `${file.originalname}` : `${uuid()}.png`}`);
        },
    });

// @ts-ignore
export const upload = (basePath?: string = "",) => multer({
    storage: createStorage(basePath), limits: {
        fields: 10 * 1024 * 1024, //10MB
    }
});

