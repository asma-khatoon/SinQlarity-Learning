"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//const userController =require('../controllers/users');
const users_1 = require("../controllers/users");
const router = express_1.default.Router();
router.post('/register', users_1.registerUser);
router.post('/update', users_1.updateUser);
exports.default = router;
