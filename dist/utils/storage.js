"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
var multer_1 = __importDefault(require("multer"));
var uuid_1 = require("uuid");
var storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public");
    },
    filename: function (req, file, cb) {
        cb(null, "".concat((0, uuid_1.v4)(), ".png"));
    },
});
exports.upload = (0, multer_1.default)({ storage: storage });
//# sourceMappingURL=storage.js.map