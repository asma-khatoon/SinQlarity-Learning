"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateusertoDB = exports.addusertoDB = void 0;
const addusertoDB = (username, password, age) => {
    console.log(username, password);
    return "user registration done";
};
exports.addusertoDB = addusertoDB;
const updateusertoDB = (objUser) => {
    console.log(objUser.username);
    return "user data updated";
};
exports.updateusertoDB = updateusertoDB;
