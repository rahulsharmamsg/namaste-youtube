import express from 'express';
import route from './routes/Webroutes.js';
import dotenv from 'dotenv'
import dbConnect from './utils/dbConnection.js';
import cors from 'cors'
import { createClient } from 'redis';
dotenv.config();
const app = express();
app.use(cors())
const redisClient = createClient();
redisClient.connect()
redisClient.on("connect",(err)=>{
console.log("Redish connected")
})
const port = process.env.PORT;
app.use(express.json());
app.use('profile',express.static('upload/profile'))
app.use(route)

app.listen(port,()=>{
    console.log(`Server listening at http://localhost:${port}`);
})