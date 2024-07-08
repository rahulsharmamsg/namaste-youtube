import express from 'express'
import { userSave,userLogin,userVerify } from '../controller/MainController.js';
import upload from '../moddleware/UploadProfile.js';
const route = express();

route.post("/register",upload.single('profile'),userSave)
route.post("/login",userLogin)
route.get("/verify",userVerify)

export default route;