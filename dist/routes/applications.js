"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var services_1 = require("../services");
var express_1 = require("express");
var console_1 = require("console");
var schemas_1 = require("../schemas");
var express_validius_1 = require("@verve-neowise/express-validius");
var bot_1 = require("../bot/config/bot");
var msgs_1 = require("../utils/msgs");
var applications = (0, express_1.Router)();
// submit | create
applications.post("/", (0, express_validius_1.body)(schemas_1.appValidator), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var data, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                data = req.body;
                return [4 /*yield*/, services_1.applicationService.create(data)];
            case 1:
                _a.sent();
                bot_1.bot.api.sendMessage("@astix_uz", (0, msgs_1.appMessage)(data));
                res.status(201).json({
                    message: "Applciation submitted successfully!",
                });
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                (0, console_1.log)(error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// get all
applications.get("/", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var getApplications, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, services_1.applicationService.getAll()];
            case 1:
                getApplications = _a.sent();
                res.status(200).json({
                    message: "All applications!",
                    data: getApplications,
                });
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                (0, console_1.log)(error_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// get by ID
applications.get("/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, application, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, services_1.applicationService.getOne(+id)];
            case 1:
                application = _a.sent();
                if (!application) {
                    return [2 /*return*/, res.status(404).json({
                            message: "application with ID ".concat(id, " is not found!"),
                        })];
                }
                res.status(200).json({
                    message: "ID ".concat(id, " application info"),
                    data: application,
                });
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                (0, console_1.log)(error_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// delete all applications
applications.delete("/", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var data, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, services_1.applicationService.getAll()];
            case 1:
                data = _a.sent();
                if (data.length === 0) {
                    return [2 /*return*/, res.status(404).json({
                            message: "There is no any application in order to delete!",
                        })];
                }
                // deleting all data
                return [4 /*yield*/, services_1.applicationService.deleteAll()];
            case 2:
                // deleting all data
                _a.sent();
                res.status(200).json({
                    message: "All applications successfully deleted!",
                });
                return [3 /*break*/, 4];
            case 3:
                error_4 = _a.sent();
                (0, console_1.log)(error_4);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
// delete by ID
applications.delete("/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, application, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, services_1.applicationService.deleteOne(+id)];
            case 1:
                application = _a.sent();
                if (!application) {
                    return [2 /*return*/, res.status(404).json({
                            message: "Application with ID ".concat(id, " is not found! Maybe it is already deleted!"),
                        })];
                }
                res.status(200).json({
                    message: "Application deleted!",
                    deletedData: application,
                });
                return [3 /*break*/, 3];
            case 2:
                error_5 = _a.sent();
                (0, console_1.log)(error_5);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
exports.default = applications;
//# sourceMappingURL=applications.js.map