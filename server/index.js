"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = require("path");
const rootPath = path_1.resolve(__dirname, '..');
process.chdir(rootPath);
const app = express_1.default();
app.listen(8000);
app.use(express_1.default.static(path_1.resolve(rootPath, 'public')));
app.get('/', (_req, _res) => {
    console.log("App opened!");
});
//# sourceMappingURL=index.js.map