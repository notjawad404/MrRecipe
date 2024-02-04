import {Request, Response} from 'express'
import { addNewInstructorSerivce, getAllInstructorsService, getInstructorService } from '../../services/admin/instructor'
import { StatusCodes } from 'http-status-codes'


export const addNewInstructor = async (req: Request, res: Response) => {
     await addNewInstructorSerivce({...req.body})
     res.status(StatusCodes.CREATED).send({success:true,message:'New instructor has been added successfully'})
}

export const getAllInstructors = async (req: Request, res: Response) => {
    const instructors = await getAllInstructorsService()
    res.status(StatusCodes.OK).send({success:true,instructors})
}


export const getInstructor = async (req: Request, res: Response) => {
    const {email} = req.body
    const instructor = await getInstructorService(email)
    res.status(StatusCodes.OK).send({success:true,instructor})
}
