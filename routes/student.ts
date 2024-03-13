import express from 'express';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken'
import student from '../db/student';
import cors from 'cors'
const router=express.Router();
const secret=123456;
router.post("/signup",async (req,res)=>
{
    try{
    const student_mail:string=req.body.student_mail;
    const student_password:string=req.body.student_password;
    const student_name:string=req.body.student_name;
    const student_Gender:string=req.body.student_Gender;
    const Date_of_brith:string=req.body.Date_of_brith;
    const contact_info:Number=req.body.contact_info;
    const Address:object=req.body.Address;
    const Emergency_contact:object=req.body.Emergency_contact;
    const medical_information:string=req.body.medical_information;
    const Academic_information:string=req.body.Academic_information;
    await student.create({
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
    res.status(200).json(
        {
            msg:"user created successfully"
        }
    )
}
catch(err)
{
    res.status(401).json({err});
}

})
router.get("/login",async (req,res)=>
{
    const student_mail=req.query.student_mail;
    const student_password=req.query.student_password;
    const Avaliable=await student.findOne({student_mail:student_mail});
    if(Avaliable!=null)
    {
        if(Avaliable.student_password===student_password)
        {
        //const token=jwt.sign({student_mail});
        }

    }
})
router.put("/update",(req,res)=>
{

})
router.delete("/delete",(req,res)=>
{

})
module.exports=router;