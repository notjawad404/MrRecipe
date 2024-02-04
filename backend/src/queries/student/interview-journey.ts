import  {
  AcceleratedInterviewJourney,
 IAcceleratedInterviewJourney,
 IInterviewJourney,InterviewJourney
} from "../../models/interviewJourney";




export const createInterviewJourneyRequest = async (
  data: IInterviewJourney
):Promise<IInterviewJourney>=> {
  const courseRequest = await InterviewJourney.create({ ...data });
  return courseRequest as IInterviewJourney
};



export const createAcceleratedInterviewJourneyRequest = async (
  data: IAcceleratedInterviewJourney
):Promise<IAcceleratedInterviewJourney>=> {
  const courseRequest = await AcceleratedInterviewJourney.create({ ...data });
  return courseRequest as IAcceleratedInterviewJourney
};
