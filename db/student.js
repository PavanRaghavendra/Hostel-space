"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect("mongodb://localhost:27017/Hostel");
const StudentSchema = new mongoose_1.default.Schema({
    student_mail: {
        type: String,
        requried: true
    },
    student_password: {
        type: String,
        require: true
    },
    student_name: {
        type: String,
        min: 5,
        max: 50,
        required: true,
    },
    student_Gender: {
        type: String,
        required: true
    },
    Date_of_brith: {
        type: String,
        required: true
    },
    contact_info: {
        type: Number,
        min: 1000000000,
        max: 9999999999,
        required: true
    },
    Address: {
        landmark: {
            type: String,
        },
        pincode: {
            type: Number,
        },
        district: {
            type: Number,
            required: true,
        },
        State: {
            type: Number,
            required: true,
        }
    },
    Emergency_contact: {
        Number1: {
            type: Number,
            min: 1000000000,
            max: 9999999999,
        },
        Number2: {
            type: Number,
            min: 1000000000,
            max: 9999999999,
        }
    },
    medical_information: {
        type: String,
        requried: true
    },
    Academic_information: {
        type: String,
        requried: true
    },
});
const student = mongoose_1.default.model("student", StudentSchema);
exports.default = student;
