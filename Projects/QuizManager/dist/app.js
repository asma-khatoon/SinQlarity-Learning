"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("./routes/user"));
const auth_1 = __importDefault(require("./routes/auth"));
const exam_1 = __importDefault(require("./routes/exam"));
const mongoose_1 = __importDefault(require("mongoose"));
const quiz_1 = __importDefault(require("./routes/quiz"));
const report_1 = __importDefault(require("./routes/report"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/user', user_1.default);
app.use('/auth', auth_1.default);
app.use('/quiz', quiz_1.default);
app.use('/exam', exam_1.default);
app.use('/report', report_1.default);
app.use((err, req, res, next) => {
    let message;
    let statusCode;
    if (!!err.statusCode && err.statusCode < 500) {
        message = err.message;
        statusCode = err.statusCode;
    }
    else {
        message = "something went wrong please try after some time";
        statusCode = 500;
    }
    let resp = { status: "error", message, data: {} };
    if (!!err.data) {
        resp.data = err.data;
    }
    console.log(err);
    res.status(statusCode).send(resp);
});
const url = "mongodb+srv://asmakhatoon165:165@Asma@mycluster.vgrk9gh.mongodb.net/quizapp?retryWrites=true&w=majority&appName=myCluster";
mongoose_1.default
    .connect(url)
    .then(() => {
    console.log("MongoDB connected");
    app.listen(3002, () => console.log("Server running on port 3002"));
})
    .catch((err) => {
    console.log("MongoDB connection error:", err);
});
