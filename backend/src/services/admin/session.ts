import BadRequestError from "../../errors/bad-request";
import InternalServerError from "../../errors/internal-server-error";
import NotFoundError from "../../errors/not-found";
import TimeslotExistsError from "../../errors/timeslot-exists-error";
import { IAttendee, ISession, ITimeslot } from "../../models/session";
import {
  createSessionAndAddTimeslot,
  findAllRequestedSessions,
  findSession,
  findSessionAndAddTimeslot,
  findSessionAndRemoveTimeslot,
  findSessionToApprove,

} from "../../queries/admin/session";
import { findAllSessions } from "../../queries/student/session";

export const createSessionService = async (
  timeSlots: Array<ITimeslot>
): Promise<ISession> => {
  const session = await findSession();
  if (session) {
    const newTimeSlots = timeSlots.filter(
      (slotToAdd) =>
        !session.availableTimeSlots.some(
          (slot) =>
            slot.time === slotToAdd.time &&
            slot.date.getTime() === new Date(slotToAdd.date).getTime()
        )
    );
    // If session doesn't exist, create new session and add time slot
    const updatedSession = await createSessionAndAddTimeslot(newTimeSlots);
    if (!updatedSession) {
      throw new BadRequestError("Error occurred while adding timeslot");
    }
    return updatedSession
  }
  const updatedSession = await createSessionAndAddTimeslot(timeSlots)
  if (!updatedSession) {
    throw new BadRequestError("Error occurred while adding timeslot");
  }
  return updatedSession
  
};

export const addTimeslotService = async (
  timeSlot: ITimeslot
): Promise<void> => {
  const session = await findSession();
  if (!session) {
    throw new NotFoundError("Session not found");
  }
  const timeslotToAdd = !session.availableTimeSlots.some(
    (slot) =>
      slot.time === timeSlot.time &&
      slot.date.getTime() === new Date(timeSlot.date).getTime()
  );
  if (!timeslotToAdd) {
    throw new TimeslotExistsError("Similar time slot record already exist");
  }
  const updatedSession = await findSessionAndAddTimeslot(timeSlot);
  if (!updatedSession) {
    throw new BadRequestError("Error occurred while adding timeslot");
  }
};

export const removeTimeslotSerivce = async (
  timeSlot: ITimeslot
): Promise<void> => {
  const session = await findSessionAndRemoveTimeslot(timeSlot);
  if (!session) {
    throw new NotFoundError("Session could not be found");
  }
};


export const getRequestedSessionsService = async ():Promise<Array<IAttendee>> =>{
  const session = await findAllRequestedSessions()
  return session
}



export const approveSessionsService = async (sessionId:string) =>{ 
   const session = await findSessionToApprove(sessionId)
   return session
}