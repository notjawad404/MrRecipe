import { ObjectId } from "mongoose";
interface IAssignmentScore {
  assignmentId: ObjectId;
  courseId: ObjectId;
  score: number;
}

interface IQuizScore {
  quizId: ObjectId;
  courseId: ObjectId;
  score: number;
}

export const calculateScores = (
  scoresArray: Array<IAssignmentScore | IQuizScore>,
  courseId: string
) => {
  const filteredScores = scoresArray.filter(
    (item) => item.courseId.toString() === courseId
  );
  // Assuming the scores provided are on a scale of 100
  const totalScore = filteredScores.reduce((acc, item) => acc + item.score, 0);
  const normalizedScores = (totalScore / (filteredScores.length * 100)) * 100;
  return normalizedScores;
};
