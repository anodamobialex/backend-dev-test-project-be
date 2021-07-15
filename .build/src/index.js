"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
var UserController_1 = __importDefault(require("./controller/UserController"));
var validator_1 = require("./validator");
var user_1 = __importDefault(require("./validator/user"));
var serverless_http_1 = __importDefault(require("serverless-http"));
var app = express_1.default();
app.use(express_1.default.json());
app.get("/users", validator_1.validate([user_1.default.read]), UserController_1.default.find);
app.post("/users", validator_1.validate([user_1.default.create]), UserController_1.default.create);
app.patch("/users", validator_1.validate([user_1.default.update]), UserController_1.default.update);
app.delete("/users", validator_1.validate([user_1.default.delete]), UserController_1.default.delete);
app.listen(3000, function () {
    return console.log("Server is running..");
});
var handler = function (event, context) {
    return serverless_http_1.default(app)(event, context);
};
exports.handler = handler;
//# sourceMappingURL=index.js.map