import express from 'express';
import route from './routes/route'
import cors from 'cors';
const app=express();
app.use(cors());
app.use(express.json());
app.use("/api",route);
app.listen(3001);
