"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    secret: String(process.env.JWT_SECRET),
    expiresIn: process.env.EXPIRES_IN,
};
//# sourceMappingURL=jwt.config.js.map