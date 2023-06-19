"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.submitForm = void 0;
var services_1 = require("../../services");
var submitForm = function (conversation, ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var name, surname, email, phone, message, data, text, msg, application;
    var _a, _b, _c, _d, _e, _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0: return [4 /*yield*/, ctx.reply("Ismingizni kiriting!")];
            case 1:
                _g.sent();
                return [4 /*yield*/, conversation.wait()];
            case 2:
                name = (_a = (_g.sent()).message) === null || _a === void 0 ? void 0 : _a.text;
                if (name) {
                    ctx.session.name = name;
                }
                // surname
                return [4 /*yield*/, ctx.reply("Familiya?")];
            case 3:
                // surname
                _g.sent();
                return [4 /*yield*/, conversation.waitFor(":text")];
            case 4:
                surname = (_b = (_g.sent()).message) === null || _b === void 0 ? void 0 : _b.text;
                if (surname) {
                    ctx.session.surname = surname;
                }
                // email
                return [4 /*yield*/, ctx.reply("Email?")];
            case 5:
                // email
                _g.sent();
                return [4 /*yield*/, conversation.waitFor(":text")];
            case 6:
                email = (_c = (_g.sent()).message) === null || _c === void 0 ? void 0 : _c.text;
                if (email) {
                    ctx.session.email = email;
                }
                // phone
                return [4 /*yield*/, ctx.reply("Telefon raqam?")];
            case 7:
                // phone
                _g.sent();
                return [4 /*yield*/, conversation.waitFor(":text")];
            case 8:
                phone = (_d = (_g.sent()).message) === null || _d === void 0 ? void 0 : _d.text;
                if (phone) {
                    ctx.session.phone = phone;
                }
                // message
                return [4 /*yield*/, ctx.reply("Xabarni kiriting?")];
            case 9:
                // message
                _g.sent();
                return [4 /*yield*/, conversation.waitFor(":text")];
            case 10:
                message = (_e = (_g.sent()).message) === null || _e === void 0 ? void 0 : _e.text;
                if (message) {
                    ctx.session.message = message;
                }
                data = {
                    name: ctx.session.name,
                    surname: ctx.session.surname,
                    email: ctx.session.email,
                    phone: ctx.session.phone,
                    message: ctx.session.message,
                    sentBy: "TELEGRAM",
                };
                text = "\n  ".concat(data.name, "\n  ").concat(data.surname, "\n  ").concat(data.email, "\n  ").concat(data.phone, "\n  ").concat(data.message, "\n    ");
                return [4 /*yield*/, ctx.reply("Yuborilmoqda....")];
            case 11:
                msg = _g.sent();
                return [4 /*yield*/, services_1.applicationService.create(data)];
            case 12:
                application = _g.sent();
                return [4 /*yield*/, ctx.api.sendMessage("@astix_uz", text)];
            case 13:
                _g.sent();
                return [4 /*yield*/, ctx.api.deleteMessage((_f = ctx.chat) === null || _f === void 0 ? void 0 : _f.id, msg.message_id)];
            case 14:
                _g.sent();
                return [4 /*yield*/, ctx.reply("#".concat(application.id, ", Arizangiz muvaffaqiyatli yuborildi "))];
            case 15:
                _g.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.submitForm = submitForm;
//# sourceMappingURL=submitForm.js.map