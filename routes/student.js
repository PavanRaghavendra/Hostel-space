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
const express_1 = __importDefault(require("express"));
const student_1 = __importDefault(require("../db/student"));
const router = express_1.default.Router();
router.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const student_mail = req.body.student_mail;
        const student_password = req.body.student_password;
        const student_name = req.body.student_name;
        const student_Gender = req.body.student_Gender;
        const Date_of_brith = req.body.Date_of_brith;
        const contact_info = req.body.contact_info;
        const Address = req.body.Address;
        const Emergency_contact = req.body.Emergency_contact;
        const medical_information = req.body.medical_information;
        const Academic_information = req.body.Academic_information;
        yield student_1.default.create({
            student_mail,
            student_password,
            student_name,
            student_Gender,
            Date_of_brith,
            contact_info,
            Address,
            Emergency_contact,
            medical_information,
            Academic_information
        });
        res.status(200).json({
            msg: "user created successfully"
        });
    }
    catch (err) {
        res.status(401).json({ err });
    }
}));
router.get("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
}));
router.put("/update", (req, res) => {
});
router.delete("/delete", (req, res) => {
});
module.exports = router;
