import mongoose from 'mongoose';
mongoose.connect("mongodb://localhost:27017/Hostel");
const StudentSchema=new mongoose.Schema(
    {
        student_mail:
        {
            type:String,
            requried:true
        },
        student_password:
        {
            type:String,
            require:true
        },
        student_name:
        {
            type:String,
            min:5,
            max:50,
            required:true,
        },
        student_Gender:
        {
            type:String,
            required:true
        },
        Date_of_brith:
        {
            type:String,
            required:true
        },
        contact_info:
        {
            type:Number,
            min: 1000000000,
            max: 9999999999,
            required:true
        },
        Address:
        {
            landmark:
            {
                type:String,
            },
            pincode:
            {
                type:Number,
            },
            district:
            {
                type:String,
                required:true,
            },
            State:
            {
                type:String,
                required:true,
            }
        },
        Emergency_contact:
        {
            Number1:
            {
                type:Number,
                min: 1000000000,
                max: 9999999999,
            },
            Number2:
            {
                type:Number,
                min: 1000000000,
                max: 9999999999,
            }
        },
        medical_information:
        {
            type:String,
            requried:true
        },
        Academic_information:
        {
            type:String,
            requried:true
        },
    }
)
const student=mongoose.model("student",StudentSchema);
export default student;