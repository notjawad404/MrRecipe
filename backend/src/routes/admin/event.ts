import express from "express";
import { createNewEvent, deleteEvent } from "../../controllers/admin/event";

const admin_event_router = express.Router();

// Creates a new event
admin_event_router.post("/events", createNewEvent);

// Deletes a specific event
admin_event_router.delete("/events/:eventId", deleteEvent);

export default admin_event_router;
