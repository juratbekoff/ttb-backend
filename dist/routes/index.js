"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// imports
var admin_1 = __importDefault(require("./admin"));
var applications_1 = __importDefault(require("./applications"));
var pages_1 = __importDefault(require("./pages"));
var catalogues_1 = __importDefault(require("./catalogues"));
var institutions_1 = __importDefault(require("./institutions"));
var posts_1 = __importDefault(require("./posts"));
var dashboard_1 = __importDefault(require("./dashboard"));
var router = (0, express_1.Router)();
router.use("/admin", admin_1.default);
router.use("/application", applications_1.default);
router.use("/pages", pages_1.default);
router.use("/catalogs", catalogues_1.default);
router.use("/institutions", institutions_1.default);
router.use("/posts", posts_1.default);
router.use("/dashboard", dashboard_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map