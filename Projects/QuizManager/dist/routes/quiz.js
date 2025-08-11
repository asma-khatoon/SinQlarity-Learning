"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const quiz_1 = require("../controllers/quiz");
const isAuth_1 = require("../middlewares/isAuth");
const express_validator_1 = require("express-validator");
const router = express_1.default.Router();
router.post("/", isAuth_1.isAuthenticated, [
    (0, express_validator_1.body)('name').trim().not().isEmpty().isLength({ min: 10 }).withMessage("Please enter a valid name,minimum 10 charecter long"), (0, express_validator_1.body)('questions_list').custom(questions_list => {
        if (questions_list.length == 0) {
            return Promise.reject("Enter atleast 1 question!");
        }
        return true;
    }), (0, express_validator_1.body)('answers').custom(answers => {
        if (Object.keys(answers).length == 0) {
            return Promise.reject("Answer should not be empty");
        }
        return true;
    })
], quiz_1.createQuiz);
router.get("/:quizId", isAuth_1.isAuthenticated, quiz_1.getQuiz);
router.put("/", isAuth_1.isAuthenticated, [
    (0, express_validator_1.body)('name').trim().not().isEmpty().isLength({ min: 10 }).withMessage("Please enter a valid name,minimum 10 charecter long"), (0, express_validator_1.body)('questions_list').custom(questions_list => {
        if (questions_list.length == 0) {
            return Promise.reject("Enter atleast 1 question!");
        }
        return true;
    }), (0, express_validator_1.body)('answers').custom(answers => {
        if (Object.keys(answers).length == 0) {
            return Promise.reject("Answer should not be empty");
        }
        return true;
    })
], quiz_1.updateQuiz);
router.delete("/:quizId", isAuth_1.isAuthenticated, quiz_1.deleteQuiz);
router.patch("/publish", isAuth_1.isAuthenticated, quiz_1.publishQuiz);
exports.default = router;
