import {Request, Response} from 'express'
import { requestForAcceleratedInterviewJourneyService, requestForInterviewJourneyService } from '../../services/student/interview-journey'
import { StatusCodes } from 'http-status-codes'

// Lets the students insert data and sends request to enroll in the interview journey course
export const requestForInterviewJourney = async (req:Request, res:Response) =>{
   await requestForInterviewJourneyService({...req.body})
   res.status(StatusCodes.CREATED).send({success:true,message:'Request for interview journey has been sent'})
}
// Lets the students insert data and sends request to enroll in the accelerated interview journey course
export const requestForAcceleratedInterviewJourney = async (req:Request, res:Response) =>{
   await requestForAcceleratedInterviewJourneyService({...req.body})
   res.status(StatusCodes.CREATED).send({success:true,message:'Request for accelerated interview journey has been sent'})
}