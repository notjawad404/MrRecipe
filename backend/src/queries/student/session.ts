import Session, { ISession, ITimeslot } from "../../models/session";

export const findAllSessions = async (): Promise<Array<ISession>> => {
  const sessions = await Session.find({});
  return sessions;
};

export const findSessionById = async (sessionId: string): Promise<ISession> => {
  const session = await Session.findById(sessionId);
  return session;
};

export const findSessionByIdAndTimeslot = async (sessionId: string, timeSlot: ITimeslot): Promise<ISession> =>{
   const session = await Session.findOne({
    _id : sessionId,
    'availableTimeSlots.time': timeSlot.time,
    'availableTimeSlots.date': { $eq: new Date(timeSlot.date) } 
   })
   return session
}

export const findSessionByIdAndUpdate = async (
  sessionId: string,
  studentId: string,
  timeSlot: ITimeslot
): Promise<ISession> => {
  const session = await Session.findByIdAndUpdate(
    sessionId,
    {
      $addToSet: { sessions: { student: studentId, timeSlot: timeSlot } },
    },
    { new: true, runValidators: true }
  );
  return session;
};
