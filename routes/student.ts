import express from 'express';
import mongoose from 'mongoose';
import student from '../db/student';
import cors from 'cors'
const router=express.Router();
router.post("/signup",(req,res)=>
{
    const student_name:string=req.body.student_name;
    const student_Gender:string=req.body.student_Gender;
    const D_O_B:Date=req.body.Date_of_brith;
    const contactinfo:Number=req.body.contact_info;
    const Address:object=req.body.Address;
})
router.get("/login",(req,res)=>
{

})
router.put("/update",(req,res)=>
{

})
router.delete("/delete",(req,res)=>
{

})