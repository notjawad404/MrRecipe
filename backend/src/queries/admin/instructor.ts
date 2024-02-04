import Instructor, { IInstructor } from "../../models/instructor";


export const createInstructor = async (instructorData:IInstructor):Promise<IInstructor> =>{
    const instructor = await Instructor.create({...instructorData})
    return instructor
}

export const findAllInstructors = async ():Promise<Array<IInstructor>> =>{
  const instructors = await Instructor.find({})
  return instructors
}

export const findInstructorByEmail = async ( email: string):Promise<IInstructor> =>{
  const instructor = await Instructor.findOne({email})
  return instructor
}