import express from 'express';
import { requestForAcceleratedInterviewJourney, requestForInterviewJourney } from '../../controllers/student/interview-journey';

const student_interview_journey_router = express.Router();

// Sends an application for Interview Journey enrollment
student_interview_journey_router.post('/application', requestForInterviewJourney)


// Sends an application for Accelerated Interview Journey enrollment
student_interview_journey_router.post('/accelerated/application', requestForAcceleratedInterviewJourney)

export default student_interview_journey_router