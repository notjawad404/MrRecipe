import { ObjectId } from "mongoose";
import TribalTest, { IQuestion, ITribalTest } from "../../models/tribalTest";
import Student, { IStudent } from "../../models/student";
import { findAllStudents } from "../student/student";

export const findTribalTest = async (): Promise<ITribalTest> => {
  const tribalTest = await TribalTest.findOne({});
  return tribalTest;
};

export const createTribalTest = async (
  questions: Array<IQuestion>
): Promise<ITribalTest> => {
  const test = await TribalTest.create({ quiz: questions });
  return test;
};

export const findTribalTestByIdAndUpdate = async (
  tribalTestId: ObjectId,
  questions: Array<IQuestion>
):Promise<ITribalTest> => {
  const updatedTribalTest = await TribalTest.findByIdAndUpdate(
    tribalTestId,
    { $addToSet: { quiz: { $each: questions } } },
    { runValidators: true, new: true }
  );
  return updatedTribalTest
};


export const findStudentByIdAndDeactive = async (studentId: string):Promise<IStudent> =>{
  const student = await Student.findByIdAndUpdate(
    studentId,
    {blocked: true},
    {new:true, runValidators: true}
  )
  return student
} 

export const findStudentByIdAndActivate = async (studentId: string):Promise<IStudent> =>{
  const student = await Student.findByIdAndUpdate(
    studentId,
    {blocked: false},
    {new:true, runValidators: true}
  )
  return student
} 


export const findStudentsPoints = async ():Promise<Array<number>> =>{
  const students = await findAllStudents()
  const points = students.map(student =>   student.points).sort((a,b)=> a-b);
  return points
}