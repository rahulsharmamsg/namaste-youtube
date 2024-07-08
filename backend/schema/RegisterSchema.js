import mongoose from "mongoose";

const userRegister = new mongoose.Schema({
    username:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    fullname:{type:String,required:true},
    profile:{type:String,required:true},
    is_verify:{type:String,default:false}
});
const RegisterSchema  =  mongoose.model('userDetail',userRegister);
export default RegisterSchema;