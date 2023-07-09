"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var configs_1 = require("./configs");
var routes_1 = __importDefault(require("./routes"));
var bot_1 = require("./bot/config/bot");
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var app = (0, express_1.default)();
bot_1.bot;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static("public"));
app.use((0, morgan_1.default)("combined"));
app.use("/api", routes_1.default);
app.listen(configs_1.serverConfig.port, function () {
    configs_1.serverConfig.info();
});
//# sourceMappingURL=server.js.map