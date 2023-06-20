"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
var validius_1 = require("@verve-neowise/validius");
exports.register = (0, validius_1.schema)((0, validius_1.object)({
    entries: {
        name: (0, validius_1.string)({
            min: 1,
            max: 14,
            required: true,
        }),
        username: (0, validius_1.string)({
            min: 1,
            max: 14,
            required: true,
        }),
        password: (0, validius_1.string)({
            min: 1,
            max: 14,
            required: true,
        }),
    },
}));
exports.login = (0, validius_1.schema)((0, validius_1.object)({
    entries: {
        username: (0, validius_1.string)({
            min: 1,
            max: 14,
            required: true,
        }),
        password: (0, validius_1.string)({
            min: 1,
            max: 14,
            required: true,
        }),
    },
}));
//# sourceMappingURL=admin.js.map