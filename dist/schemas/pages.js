"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pagesValidator = void 0;
var validius_1 = require("@verve-neowise/validius");
exports.pagesValidator = (0, validius_1.schema)((0, validius_1.object)({
    entries: {
        name: (0, validius_1.string)({
            min: 1,
            max: 60,
            required: true,
        }),
        title: (0, validius_1.string)({
            min: 5,
            required: true,
        }),
        content: (0, validius_1.string)({
            min: 10,
            required: true,
        }),
    },
}));
//# sourceMappingURL=pages.js.map