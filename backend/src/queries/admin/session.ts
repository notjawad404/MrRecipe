import { time } from "console";
import Session, { IAttendee, ISession, ITimeslot } from "../../models/session";

export const createSessionAndAddTimeslot = async (
  timeSlots: Array<ITimeslot>
): Promise<ISession> => {
  const session = await Session.findOneAndUpdate(
    {},
    { $addToSet: { availableTimeSlots: timeSlots } },
    { upsert: true, new: true, runValidators: true }
  );

  return session;
};

export const findSession = async (): Promise<ISession> => {
  const session = await Session.findOne({});
  return session;
};

export const findAllRequestedSessions = async (): Promise<Array<IAttendee>> => {
  const sessions = await Session.find({});
  const requestSessions = sessions.map((session) => session.sessions)[0];
  return requestSessions;
};

export const findSessionAndAddTimeslot = async (
  timeSlot: ITimeslot
): Promise<ISession> => {
  const session = await Session.findOneAndUpdate(
    {},
    { $addToSet: { availableTimeSlots: timeSlot } },
    { runValidators: true, new: true }
  );
  return session;
};

export const findSessionAndRemoveTimeslot = async (
  timeSlot: ITimeslot
): Promise<ISession> => {
  const session = await Session.findOneAndUpdate(
    {},
    { $pull: { availableTimeSlots: timeSlot } },
    { runValidators: true, new: true }
  );
  return session;
};

export const findSessionToApprove = async (
sessionId:string
) : Promise<IAttendee>=> {
  const sessions = await Session.find()
  const requestedSessions = sessions.map((session) => session.sessions)[0]
  const foundSession = requestedSessions.find(session => session.id === sessionId);
  return foundSession

};
