import {Request, Response} from 'express';
import { eventShareLinkService, registerEventService, showEventService, showEventsService } from '../../services/student/event';
import { StatusCodes } from 'http-status-codes';


// Shows the details of all the events 
export const showEvents = async (req:Request, res:Response) =>{
   const events = await showEventsService()
   res.status(StatusCodes.OK).send({success:true, events})
}


// Registers the student in the event
export const registerEvent = async (req:Request, res:Response) =>{
    const {eventId,studentId} = req.params
    await registerEventService(eventId,studentId)
    res.status(StatusCodes.OK).send({success:true,message:'Student registered in event successfully'})
}

// Gets the details about a particular event
export const showEvent = async (req:Request, res:Response) =>{
    const {eventId} = req.params
    const event = await showEventService(eventId)
   res.status(StatusCodes.OK).send({success:true, event})

}


// Gets the share link of a particular event
export const eventShareLink = async (req:Request, res:Response) => {
    const {eventId} = req.params
    const shareLink = await eventShareLinkService(eventId)
    res.status(StatusCodes.OK).send({success:true, shareLink})

}