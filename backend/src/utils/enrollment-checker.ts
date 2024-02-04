import { Types } from "mongoose";
import { IStudent } from "../models/student";
export const isStudentEnrolled  = async (student:IStudent,courseId:string) =>{
  // Check if courseIdAsObjectId is present in the enrolledCourses array
  const courseIdAsObjectId = new Types.ObjectId(courseId);
  const hasStudentEnrolled = student.enrolledCourses.some((course) =>
    course instanceof Types.ObjectId
      ? course.equals(courseIdAsObjectId)
      : "_id" in course && course._id.equals(courseIdAsObjectId)
  );
  return hasStudentEnrolled
  
}