import express from 'express';
import { availableTimeSlots, requestSession } from '../../controllers/student/session';

const student_session_router = express.Router();


// Gets all the avaialble timeslots
student_session_router.get('/timeslots', availableTimeSlots)


// Sends a request for booking a 1:1 session
student_session_router.post('/:sessionId/students/:studentId/request-session', requestSession)

export default student_session_router