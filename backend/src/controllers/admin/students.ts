import { StatusCodes } from "http-status-codes";
import { activeStudentService, deactiveStudentService, getAllStudentsService, getStudentService, manageTribalTestService } from "../../services/admin/students";
import { Request, Response } from "express";

export const manageTribalTest = async (req: Request, res: Response) => {
  const { questions } = req.body;
  const  questionNumber  = Number(req.params.questionNumber)|| -1; 
  await manageTribalTestService(questions, questionNumber);
  res
    .status(StatusCodes.OK)
    .send({ success: true, message: "Tribal test updated successfully" });
};

export const deactiveStudent = async (req: Request, res: Response) =>{
  const {studentId} = req.params
  await deactiveStudentService(studentId)
  res.status(StatusCodes.OK).send({success:true,message:'Student account has been deactivated'})
}


export const activeStudent = async (req: Request, res: Response) =>{
  const {studentId} = req.params
  await activeStudentService(studentId)
  res.status(StatusCodes.OK).send({success:true,message:'Student account has been activated'})
}

export const getAllStudents = async (req:Request,res:Response) => {
   const students  = await getAllStudentsService()
  res.status(StatusCodes.OK).send({success:true,students})
   
}

export const getStudent = async (req:Request,res:Response) => {
  const {studentEmail} = req.body
  const student = await getStudentService(studentEmail)
  res.status(StatusCodes.OK).send({success:true,student})

}