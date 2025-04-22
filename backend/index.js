import express from 'express';
import route from './routes/Webroutes.js';
import dotenv from 'dotenv'
import dbConnect from './utils/dbConnection.js';
import cors from 'cors'
import { createClient } from 'redis';
dotenv.config();
const app = express();
// app.use(cors())
app.use(cors({
    origin: 'http://localhost:3000', // your frontend domain
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
  }));
const port = process.env.PORT;
app.use(express.json());
app.use('profile',express.static('upload/profile'))
app.use(route)

app.listen(port,()=>{
    console.log(`Server listening at http://localhost:${port}`);
})