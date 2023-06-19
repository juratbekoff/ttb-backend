"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postsService = exports.pagesService = exports.institutionsService = exports.cataloguesService = exports.applicationService = exports.adminService = void 0;
//imports
var Admin_1 = __importDefault(require("./Admin"));
var Applications_1 = __importDefault(require("./Applications"));
var Catalogues_1 = __importDefault(require("./Catalogues"));
var Institutions_1 = __importDefault(require("./Institutions"));
var Pages_1 = __importDefault(require("./Pages"));
var Posts_1 = __importDefault(require("./Posts"));
// exports
exports.adminService = new Admin_1.default();
exports.applicationService = new Applications_1.default();
exports.cataloguesService = new Catalogues_1.default();
exports.institutionsService = new Institutions_1.default();
exports.pagesService = new Pages_1.default();
exports.postsService = new Posts_1.default();
//# sourceMappingURL=index.js.map