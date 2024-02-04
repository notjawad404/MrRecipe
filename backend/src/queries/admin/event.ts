import Event, { IEvent } from "../../models/event";
import { ModifyResult } from "mongoose";

export const createEvent = async (eventData: IEvent): Promise<IEvent> => {
  const event = await Event.create({
    ...eventData,
  });
  return event;
};

export const deleteEventById = async (
  eventId: string
): Promise<ModifyResult<IEvent>> => {
  const event = await Event.findByIdAndDelete(eventId);
  return event;
};
