"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenFormation = exports.generateToken = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var configs_1 = require("../configs");
var generateToken = function (data) {
    return jsonwebtoken_1.default.sign({ data: data }, configs_1.jwtConfig.secret);
};
exports.generateToken = generateToken;
var tokenFormation = function (token) {
    return String(token.split(" ")[1]);
};
exports.tokenFormation = tokenFormation;
//# sourceMappingURL=token.js.map