import BadRequestError from "../../errors/bad-request";
import NotFoundError from "../../errors/not-found";
import { IStudent } from "../../models/student";
import TribalTest, { IQuestion, ITribalTest } from "../../models/tribalTest";
import { findStudentByIdAndActivate, findStudentByIdAndDeactive, findTribalTestByIdAndUpdate } from "../../queries/admin/students";
import { findAllStudents } from "../../queries/student/student";
import { findStudentByEmail } from "../../queries/student/student-auth";

export const manageTribalTestService = async (questions:Array<IQuestion>, questionNumber:number):Promise<ITribalTest> => {
  const tribalTest = await TribalTest.findOne({});

  // Create quiz if it doesnt exist
  if (!tribalTest) {
    if (questionNumber !== -1) {
      throw new BadRequestError('Tribal test not found');
    }
    const test = await TribalTest.create({ quiz: questions });
    return test
  }

  // Deletes specific question from the quiz
  if (questionNumber !== -1) {
    if (tribalTest.quiz.length <= questionNumber) {
      throw new BadRequestError(`Cannot delete question ${questionNumber} from tribal test`);
    }
    tribalTest.quiz.splice(questionNumber, 1);
  } else {
   const updatedTribalTest = await findTribalTestByIdAndUpdate(tribalTest._id, questions)
   if(!updatedTribalTest){
    throw new BadRequestError('Tribal test could not be updated!')
   }
  }

  await tribalTest.save();
  return tribalTest;
};

export const deactiveStudentService = async (studentId:string):Promise<void> =>{
  const updatedStudent = await findStudentByIdAndDeactive(studentId);
  if(!updatedStudent){
    throw new BadRequestError('Could not deactive student account')
  }

}


export const activeStudentService = async (studentId:string):Promise<void> =>{
  const updatedStudent = await findStudentByIdAndActivate(studentId);
  if(!updatedStudent){
    throw new BadRequestError('Could not deactive student account')
  }
}

export const getAllStudentsService = async ():Promise<Array<IStudent>> =>{
  const students = await findAllStudents()
  if(!students.length){
    throw new NotFoundError('No students found')
  }
  return students
}

export const getStudentService = async (studentEmail:string):Promise<IStudent> => {
  const student = await findStudentByEmail(studentEmail)
  if(!student){
    throw new NotFoundError('Student not found')
  }
  return student
}
