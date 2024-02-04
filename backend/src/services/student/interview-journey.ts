import BadRequestError from "../../errors/bad-request";
import { IAcceleratedInterviewJourney, IInterviewJourney } from "../../models/interviewJourney";
import { createAcceleratedInterviewJourneyRequest, createInterviewJourneyRequest } from "../../queries/student/interview-journey";

export const requestForInterviewJourneyService = async (
  studentData: IInterviewJourney
): Promise<void> => {
  const requestCourse = await createInterviewJourneyRequest(studentData);
  if (!requestCourse) {
    throw new BadRequestError("Could not request for interview journey");
  }
};


export const requestForAcceleratedInterviewJourneyService = async (
  studentData: IAcceleratedInterviewJourney
): Promise<void> => {
  const requestCourse = await createAcceleratedInterviewJourneyRequest(studentData);
  if (!requestCourse) {
    throw new BadRequestError("Could not request for interview journey");
  }
};

