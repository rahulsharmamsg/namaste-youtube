import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();
const dbConnect = (async()=>{
    const connect = mongoose.connect(process.env.MONGO_DB_STRING);
    if(connect){
        console.log("DB connected")
    }
    else{
        console.log("Error While connection DB")
    }
})()
export default dbConnect;
