import RegisterSchema from "../schema/RegisterSchema.js";
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer'
dotenv.config();

const sendVerifyMail = async(email,fullname,id)=>{
try{
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // Use `true` for port 465, `false` for all other ports
        auth: {
          user: "rahulsharma1071993@gmail.com",
          pass: "yihqdaoybjwnbzjc",
        },
      });
      const info = await transporter.sendMail({
        from: '"Youtube Auth 👻" <rahulsharma1071993@gmail.com>', // sender address
        to: email, // list of receivers
        subject: "Verify Email ✔", // Subject line
        html: `<p>Hi ${fullname} please click here to <a href="http://localhost:4000/verify?id=${id}">Verify</a>`, // html body
      });
      if(info){
        console.log("email has been send");
      }
}catch(error){
console.log(error)
}
}
const userSave = async (req, res) => {
    try {
        const hasPass =  bcrypt.hashSync(req.body.password, 10);
        const info = {
            username: req.body.username,
            password: hasPass,
            fullname: req.body.fullname,
            profile: req.file.originalname
        }
        const data = new RegisterSchema(info);
        const result = await data.save();
        sendVerifyMail(req.body.username,req.body.fullname,data._id)
        res.status(200).send({ data: result, status: true, msg: "User Register SuccessFully" });
    } catch (error) {
        res.status(400).send({ status: false, msg: "Email id should be unique.." });
    }

}
const userLogin = async (req, res) => {
    const { username, password } = req.body
    const data = await RegisterSchema.findOne({ username: username, is_verify:true });
    if (!data) return res.status(200).send({success:false,msg:"Please check your email and verify"});
 
    const isPasswordValid =  bcrypt.compareSync(password, data.password);
    if (!isPasswordValid) return res.status(400).send({success:false,msg:"Password is not valid"});
    const token = jwt.sign({
        userid:data._id,
        username:data.username,
        fullname:data.fullname
    }, process.env.SECRET, { expiresIn: 60 * 60 });

    return res.status(200).send({token:token,success:true,msg:"User Login Successfully"});
}
const userVerify = async(req,res)=>{
try{
    const verify = await RegisterSchema.updateOne({_id:req.query.id},{$set:{is_verify:true}})
        return res.status(200).send({success:true,msg:"User Verify Successfully"});
}catch(error){
    res.status(400).send({ status: false, msg: "Please Verify Email.." });
}

}
export { userSave, userLogin, userVerify }