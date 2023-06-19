"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appValidator = void 0;
var validius_1 = require("@verve-neowise/validius");
exports.appValidator = (0, validius_1.schema)((0, validius_1.object)({
    entries: {
        name: (0, validius_1.string)({
            min: 1,
            max: 14,
            required: true,
        }),
        surname: (0, validius_1.string)({
            min: 1,
            max: 14,
            required: true,
        }),
        email: (0, validius_1.string)({
            min: 1,
            max: 40,
            required: true,
            isEmail: true,
        }),
        gender: (0, validius_1.string)({
            min: 1,
            max: 14,
            required: true,
        }),
        phone: (0, validius_1.string)({
            min: 1,
            max: 14,
            required: true,
        }),
        message: (0, validius_1.string)({
            min: 5,
            required: true,
        }),
    },
}));
//# sourceMappingURL=applications.js.map