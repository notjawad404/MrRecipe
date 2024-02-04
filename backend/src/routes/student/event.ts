import express from 'express'
import { eventShareLink, registerEvent, showEvent, showEvents } from '../../controllers/student/event';
const student_event_router=  express.Router();


// Fetches details about all the events
student_event_router.get('/',showEvents)

// Gets the details about a specific event
student_event_router.get('/:eventId',showEvent)

// Gets the share link of a specific event
student_event_router.get('/:eventId/shareLink',eventShareLink)

// Registers student in an event
student_event_router.post('/:eventId/register/students/:studentId',registerEvent)

export default student_event_router