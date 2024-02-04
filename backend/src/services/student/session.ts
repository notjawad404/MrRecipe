import BadRequestError from "../../errors/bad-request";
import NotFoundError from "../../errors/not-found";
import { ITimeslot } from "../../models/session";
import {
  findAllSessions,
  findSessionById,
  findSessionByIdAndTimeslot,
  findSessionByIdAndUpdate,
} from "../../queries/student/session";

export const availableTimeSlotsService = async (): Promise<
  Array<ITimeslot>
> => {
  const sessions = await findAllSessions();
  if (!sessions) {
    throw new BadRequestError("No session available");
  }
  const timeslots: Array<ITimeslot> = sessions.reduce(
    (acc, session) => acc.concat(session.availableTimeSlots),
    []
  );
  return timeslots;
};

export const requestSessionService = async (
  sessionId: string,
  studentId: string,
  timeSlot: ITimeslot
): Promise<void> => {
  const session = await findSessionByIdAndTimeslot(sessionId, timeSlot);
  if (!session) {
    throw new BadRequestError("Cannot request for the session");
  }
  const sessionRequested = session.sessions.some(
    (record) =>
      record.student.toString() === studentId &&
      record.timeSlot.time === timeSlot.time &&
      record.timeSlot.date.getTime() === (new Date(timeSlot.date)).getTime()
  );

  if(sessionRequested){
    throw new BadRequestError('Request for this session has already been sent');
  }


  await findSessionByIdAndUpdate(sessionId, studentId, timeSlot);
};
