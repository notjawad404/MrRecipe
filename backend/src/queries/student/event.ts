import { IEvent } from "../../models/event"
import Event from "../../models/event"
import Student, { IStudent } from "../../models/student"
export const findEvents =async ():Promise<Array<IEvent>> =>{
    const events = await Event.find({}).lean()
    return events
}

export const findEventById = async (eventId:string):Promise<IEvent>=>{
 const event = await Event.findById(eventId).lean()
 return event
}

export const findEventsByIdForUpdate = async (eventId:string):Promise<IEvent> =>{
    const event = await Event.findById(eventId)
 return event
}

export const registerStudentForEventById = async (studentId:string,eventId:string):Promise<IStudent> =>{
    const updatedStudent = await Student.findByIdAndUpdate(
        studentId,
        { $addToSet: { eventsAttending: eventId } },
        { runValidators: true, new: true }
      );
    return updatedStudent
}
