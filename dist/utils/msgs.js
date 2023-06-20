"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allCorrect = exports.appMessage = void 0;
var appMessage = function (data, user) {
    var msg = "\nname: ".concat(data.name, ";\nsurname: ").concat(data.surname, ";\nemail: ").concat(data.email, ";\nphone: ").concat(data.phone, ";\nmessage: ").concat(data.message, ";\nsentBy: ").concat(data.sentBy, "    \n\nuser: @").concat(user || "Aniqlanmagan!", "\n    ");
    return msg;
};
exports.appMessage = appMessage;
var allCorrect = function (data) {
    var msg = "Barcha ma'lumotlar to'grimi?\n\nism: ".concat(data.name, ";\nfamiliya: ").concat(data.surname, ";\nemail: ").concat(data.email, ";\ntelefon raqam: ").concat(data.phone, ";\nxabar: ").concat(data.message, ";\n  ");
    return msg;
};
exports.allCorrect = allCorrect;
//# sourceMappingURL=msgs.js.map