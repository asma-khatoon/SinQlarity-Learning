"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkTypeandInterface = exports.addusertoDB = void 0;
const addusertoDB = (username, password, age) => {
    console.log(username, password);
    return "user registration done";
};
exports.addusertoDB = addusertoDB;
const checkTypeandInterface = (objUser) => {
    let x = { x: 1, y: 7 };
    console.log(x);
    console.log(objUser.username);
    return "user data updated";
};
exports.checkTypeandInterface = checkTypeandInterface;
