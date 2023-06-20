"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    port: process.env.PORT,
    info: function () {
        console.log("server is running on http://localhost:".concat(process.env.PORT));
        // console.log(`server re-started in ${os.uptime()} seconds!`)
    },
    bot_token: process.env.BOT_TOKEN,
};
//# sourceMappingURL=server.config.js.map