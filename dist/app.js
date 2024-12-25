"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./app/routes"));
const globalErrorHandling_1 = __importDefault(require("./app/middleWares/globalErrorHandling"));
const notFound_1 = __importDefault(require("./app/middleWares/notFound"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/api/v1/', routes_1.default);
app.get('/', (req, res) => {
    res.send({
        status: true,
        message: "Server is running"
    });
});
// globalErrorHandle 
app.use(globalErrorHandling_1.default);
app.use(notFound_1.default);
exports.default = app;
