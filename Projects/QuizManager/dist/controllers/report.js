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
exports.getReport = void 0;
const report_1 = __importDefault(require("../models/report"));
const error_1 = __importDefault(require("../helper/error"));
const getReport = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { reportId } = req.params;
        let reportData;
        if (reportId) {
            const report = yield report_1.default.findById(reportId);
            if (!report) {
                throw Object.assign(new error_1.default("Report not found"), { statusCode: 404 });
            }
            if (report.userId.toString() !== req.userId) {
                throw Object.assign(new error_1.default("You are not allowed"), { statusCode: 403 });
            }
            reportData = report;
        }
        else {
            const reports = yield report_1.default.find({ userId: req.userId });
            if (!reports.length) {
                throw Object.assign(new error_1.default("No reports found"), { statusCode: 404 });
            }
            reportData = reports;
        }
        const resp = {
            status: "success",
            message: "Report retrieved successfully",
            data: reportData
        };
        res.json(resp);
    }
    catch (error) {
        next(error);
    }
});
exports.getReport = getReport;
