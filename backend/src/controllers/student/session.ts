import { StatusCodes } from "http-status-codes"
import { availableTimeSlotsService, requestSessionService } from "../../services/student/session"
import { Request, Response } from "express"


// Shows all the available time slots for booking a session
export const availableTimeSlots = async (req:Request, res:Response) =>{
    const timeslots = await availableTimeSlotsService()
    res.status(StatusCodes.OK).send({success:true,timeslots})
}


// Requests a 1:1 session 
export const requestSession= async (req:Request, res:Response) => {
    const {sessionId,studentId} = req.params
    const {timeSlot} = req.body
    await requestSessionService(sessionId,studentId,timeSlot)
    res.status(StatusCodes.OK).send({success:true,message:'Successfully requested for the session'})

}