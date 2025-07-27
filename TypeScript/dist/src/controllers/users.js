"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.registerUser = void 0;
const users_1 = require("../models/users");
const registerUser = (req, res) => {
    const username = "ABC";
    const password = "123";
    const age = 30;
    const result = (0, users_1.addusertoDB)(username, password, age);
    res.send(result);
};
exports.registerUser = registerUser;
const updateUser = (req, res) => {
    let xstate = "locked";
    const myUser = {
        id: 1,
        username: "Veena",
        password: "123egg",
        age: 23,
        is_active: true,
        accountStatus: "unlocked"
    };
    const result = (0, users_1.checkTypeandInterface)(myUser);
    res.send(result);
};
exports.updateUser = updateUser;
