"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const quizSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    questions_list: [{
            question_number: {
                type: Number,
                required: true
            },
            question: String,
            options: {}
        }],
    answers: {},
    created_by: {
        type: mongoose_1.default.Types.ObjectId,
        required: true
    },
    is_published: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });
const Quiz = mongoose_1.default.model('Quiz', quizSchema);
exports.default = Quiz;
