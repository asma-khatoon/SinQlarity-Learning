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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUserExist = exports.registerUser = exports.loginUser = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const user_1 = __importDefault(require("../models/user"));
const error_1 = __importDefault(require("../helper/error"));
const express_validator_1 = require("express-validator");
// Replace this with your actual secret (better: import from a config file)
const registerUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let resp;
    try {
        const validationError = (0, express_validator_1.validationResult)(req);
        if (!validationError.isEmpty()) {
            const err = new error_1.default('validation failed');
            err.statusCode = 422;
            err.data = validationError.array();
            throw err;
        }
        const { email, name, password } = req.body;
        if (!email || !name || !password) {
            resp = { status: "error", message: "All fields are required", data: {} };
            return res.status(400).json(resp);
        }
        const existingUser = yield user_1.default.findOne({ email });
        if (existingUser) {
            resp = { status: "error", message: "Email already exists", data: {} };
            return res.status(409).json(resp);
        }
        const hashedPassword = yield bcryptjs_1.default.hash(password, 12);
        const newUser = new user_1.default({ email, name, password: hashedPassword });
        const result = yield newUser.save();
        resp = {
            status: "success",
            message: "Registration successful",
            data: { userId: result._id },
        };
        res.status(201).json(resp);
    }
    catch (error) {
        next(error);
    }
});
exports.registerUser = registerUser;
const loginUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let resp;
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            resp = {
                status: "error",
                message: "Email and password are required",
                data: {},
            };
            return res.status(400).json(resp);
        }
        const user = yield user_1.default.findOne({ email });
        if (!user) {
            const err = new error_1.default("No user exist");
            err.statusCode = 401;
            throw err;
        }
        const status = yield bcryptjs_1.default.compare(password, user.password);
        if (status) {
            const token = jsonwebtoken_1.default.sign({ userId: user._id }, "secretmyverysecretkey", { expiresIn: '1h' });
            resp = { status: "success", message: "logged in", data: { token } };
            res.status(200).send(resp);
        }
        else {
            const err = new error_1.default("Credential mismatch");
            err.statusCode = 401;
            throw err;
        }
    }
    catch (error) {
        next(error);
    }
});
exports.loginUser = loginUser;
const isUserExist = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_1.default.findOne({ email });
    if (!user) {
        return false;
    }
    return true;
});
exports.isUserExist = isUserExist;
