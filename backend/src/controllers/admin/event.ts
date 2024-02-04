import { Request, Response } from "express";
import {
  createNewEventService,
  deleteEventService,
} from "../../services/admin/event";
import { StatusCodes } from "http-status-codes";


// Allows the admin to create a new event
export const createNewEvent = async (req: Request, res: Response) => {
  const event = await createNewEventService({ ...req.body });
  res.status(StatusCodes.CREATED).send({ success: true, event });
};

// Deletes a specific event
export const deleteEvent = async (req: Request, res: Response) => {
  const { eventId } = req.params;
  await deleteEventService(eventId);
  res
    .status(StatusCodes.OK)
    .send({ success: true, message: "Event deleted successfully" });
};
