import BadRequestError from "../../errors/bad-request";
import NotFoundError from "../../errors/not-found";
import { IEvent } from "../../models/event";
import {
  findEventById,
  findEvents,
  findEventsByIdForUpdate,
  registerStudentForEventById,
} from "../../queries/student/event";
import { findStudentById } from "../../queries/student/student";
import { sendNotification } from "../../utils/notification-utils";
export const showEventsService = async (): Promise<Array<IEvent>> => {
  const events = await findEvents();
  if (!events.length) {
    throw new NotFoundError("No event found");
  }
  return events;
};

export const registerEventService = async (
  eventId: string,
  studentId: string
): Promise<void> => {
  const event = await findEventsByIdForUpdate(eventId);
  if (!event) {
    throw new NotFoundError("Event not found");
  }
  if (event.feeStatus === "paid") {
    //implement payment gateway here
    return;
  }
  const updatedStudent = await registerStudentForEventById(studentId, eventId);
  if (!updatedStudent) {
    throw new NotFoundError("Student not found");
  }
  event.attendees += 1;
  await event.save()
  await sendNotification(studentId, 'Registered in event!', 'Event')
};

export const showEventService = async (eventId: string): Promise<IEvent> => {
  const event = await findEventById(eventId);
  if (!event) {
    throw new NotFoundError("Event not found");
  }
  return event;
};

export const eventShareLinkService = async (eventId: string): Promise<string> =>{
   const event = await findEventById(eventId);
   if (!event) {
    throw new NotFoundError("Event not found");
  }  
  if(!event.shareLink){
    throw new BadRequestError("Event does not have a share link");
  } 
  return event.shareLink;
}