"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postsValidator = void 0;
var validius_1 = require("@verve-neowise/validius");
exports.postsValidator = (0, validius_1.schema)((0, validius_1.object)({
    entries: {
        title: (0, validius_1.string)({
            min: 5,
            required: true,
        }),
        descr: (0, validius_1.string)({
            min: 10,
            required: true,
        }),
    },
}));
//# sourceMappingURL=posts.js.map