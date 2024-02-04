import { Request,Response } from "express"
import { addTimeslotService, approveSessionsService, createSessionService, getRequestedSessionsService, removeTimeslotSerivce } from "../../services/admin/session"
import { StatusCodes } from "http-status-codes"

// Lets the create a session and add timeslots for sessions
export const createSession = async (req:Request, res:Response) =>{
  const {timeSlots} = req.body
  const session = await createSessionService(timeSlots)
  res.status(StatusCodes.OK).send({success:true,session})
}

// Lets the admin remove timeslot for sessions
export const removeTimeslot = async (req:Request, res:Response) => {
    const {timeSlot} = req.body
    await removeTimeslotSerivce(timeSlot)
    res.status(StatusCodes.OK).send({success:true,message:'Timeslot removed successfully'})
}

export const addTimeSlot = async ( req:Request, res:Response) =>{
    const {timeSlot} = req.body
    await addTimeslotService(timeSlot)
    res.status(StatusCodes.OK).send({success:true,message:'Timeslot added successfully'})

}

// Gets all the available requested timeslots
export const getRequestedSessions = async (req:Request, res:Response) =>{
   const requestedSessions = await getRequestedSessionsService()
   res.status(StatusCodes.OK).send({success:true,requestedSessions})
}


export const approveSessions = async (req:Request, res:Response) => {
  const {sessionId} = req.params
  const session = await approveSessionsService(sessionId)
  res.status(StatusCodes.OK).send({success:true,session})
}