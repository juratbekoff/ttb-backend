"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appMessage = void 0;
var appMessage = function (data, user) {
    var msg = "<code>\uD83D\uDC64Ism-familiya: </code><b>".concat(data.name, " ").concat(data.surname, "</b>\n<code>\uD83D\uDCE5 Email: </code><b>").concat(data.email, "</b>\n<code>\uD83D\uDCDE Telefon raqam: </code><b>").concat(data.phone, "</b>\n<code>\uD83D\uDD16 Xabar: </code><b>").concat(data.message, "</b>\n<code>\uD83C\uDF10 Platforma: </code><b>").concat(data.sentBy ? data.sentBy : "WEBSITE", "</b>");
    return msg;
};
exports.appMessage = appMessage;
//# sourceMappingURL=msgs.js.map