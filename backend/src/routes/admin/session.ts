import express from "express";
import {
  addTimeSlot,
  approveSessions,
  createSession,
  getRequestedSessions,
  removeTimeslot,
} from "../../controllers/admin/session";
const admin_session_router = express.Router();

// Enables the admin to create a new session and add timeslots
admin_session_router.post("/sessions/session", createSession);

// Allows the admin to remove a timeslot
admin_session_router.patch("/sessions/session/remove-timeslot", removeTimeslot);

// Allows the admin to add a timeslot
admin_session_router.patch("/sessions/session/add-timeslot", addTimeSlot);

// Allows the admin to get list of requested sessions
admin_session_router.get('/sessions/requested', getRequestedSessions)

// Allows the admin to approve a session
admin_session_router.get('/sessions/session/:sessionId/approve',approveSessions)

export default admin_session_router
