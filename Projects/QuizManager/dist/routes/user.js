"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = require("../controllers/user");
const isAuth_1 = require("../middlewares/isAuth");
const router = express_1.default.Router();
// Register a new user
router.get('/:userId', isAuth_1.isAuthenticated, user_1.getUser);
// Update a user by ID
router.put('/', isAuth_1.isAuthenticated, user_1.updateUser);
exports.default = router;
