import { Request, Response } from "express";
import {
  registerStudentService,
  loginStudentService,
  forgetPasswordStudentService,
  resetPasswordStudentSerivce,
  verifyCodeService,
} from "../../services/student/student-auth";
import generateJWT from "../../utils/generate-JWT";
import "express-async-errors";
import { StatusCodes } from "http-status-codes";



// Registers student and creates new entry in the database
export const registerStudent = async (
  req: Request,
  res: Response
) => {
  const newStudent = await registerStudentService({...req.body});
  return res.status(StatusCodes.CREATED).json({ success: true, newStudent });
};


// Logs in student and generates JWT token
export const loginStudent = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const student = await loginStudentService(email, password);
  const token = await generateJWT(student);
  return res.status(StatusCodes.OK).json({ sucess: true, token });
};


// Sends verfication code to the student to authorize them if they want to change the password
export const forgetPasswordStudent = async (req: Request, res: Response) => {
  const { email } = req.body;
  await forgetPasswordStudentService(email);
  return res
    .status(StatusCodes.OK)
    .json({ success: true, message: "Email sent successfully" });
};

// Compares and verifies the code sent via email and the entered code  
export const verifyCode = async (req: Request, res: Response) => {
  const {email,verificationCode} = req.body;
  await verifyCodeService(email,verificationCode)
  return res.status(StatusCodes.OK).json({success:true, message:'email verified successfully'});
}

// Resets student's password 
export const resetPasswordStudent = async (req:Request, res:Response) =>{
  const { email, newPassword } = req.body;
  await resetPasswordStudentSerivce(email,newPassword);
  return res.status(200).json({success:true, message: 'Password updated successfully' });
}


