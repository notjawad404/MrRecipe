import BadRequestError from "../../errors/bad-request";
import { IEvent } from "../../models/event";
import { createEvent, deleteEventById } from "../../queries/admin/event";

export const createNewEventService = async (
  eventData: IEvent
): Promise<IEvent> => {
  const event = await createEvent(eventData);
  if (!event) {
    throw new BadRequestError("Event could not be created");
  }
  return event;
};

export const deleteEventService = async (eventId: string): Promise<void> => {
  const event = await deleteEventById(eventId);
  if (!event) {
    throw new BadRequestError("Event could not be deleted");
  }
};
