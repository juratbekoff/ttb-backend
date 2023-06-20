"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catalogValidator = void 0;
var validius_1 = require("@verve-neowise/validius");
exports.catalogValidator = (0, validius_1.schema)((0, validius_1.object)({
    entries: {
        title: (0, validius_1.string)({
            min: 10,
            required: true,
        }),
        descr: (0, validius_1.string)({
            min: 1,
            required: true,
        }),
    },
}));
//# sourceMappingURL=catalogues.js.map