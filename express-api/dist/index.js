"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//const express = require('express')
const express_1 = __importDefault(require("express"));
console.log("hola holita");
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    res.json({ name: "Juansa2" });
});
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
