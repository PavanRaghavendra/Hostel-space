import express from 'express';
import { Router } from 'express';
import cors from 'cors'
import student from './student'
const app=express();
app.use(cors);
app.use("/student",student);
export default app;