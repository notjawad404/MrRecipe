import { Request, Response } from "express";
import Course from "../../models/course";
import { StatusCodes } from "http-status-codes";
import Assignment from "../../models/assignment";
import Quiz from "../../models/quiz";
import {
  addAssignmentToCourseService,
  addLectureVideoService,
  addQuestionToQuizService,
  addQuizToCourseService,
  deleteAssignmentFromCourseService,
  deleteLectureVideoService,
  deleteQuizFromCourseService,
  getCourseReviewsService,
  getCourseService,
  getEnrolledStudentsProgressService,
  getEnrolledStudentsService,
  modifyCoursePriceService,
  modifyQuizNameService,
  removeQuestionToQuizService,
  sendCourseUpdateToStudents,
  updatePrerequisiteLessonService,
} from "../../services/admin/course";
export const createNewCourse = async (req: Request, res: Response) => {
  const newCourse = await Course.create({ ...req.body });
  await sendCourseUpdateToStudents(newCourse);
  return res.status(StatusCodes.CREATED).json({ success: true, newCourse });
};

export const createAssignment = async (req: Request, res: Response) => {
  const assignment = await Assignment.create({ ...req.body });
  return res.status(StatusCodes.CREATED).json({ success: true, assignment });
};

export const createQuiz = async (req: Request, res: Response) => {
  const quiz = await Quiz.create({ ...req.body });
  return res.status(StatusCodes.CREATED).json({ success: true, quiz });
};

export const addAssignmentToCourse = async (req: Request, res: Response) => {
  const { assignmentId, courseId } = req.params;
  await addAssignmentToCourseService(courseId, assignmentId);
  // Send the updated course as a response
  res.status(StatusCodes.OK).send({
    success: true,
    message: "Assignment added to the course successfully.",
  });
};

export const getCourse = async (req: Request, res: Response) => {
  const { courseId } = req.params;
  const course = await getCourseService(courseId);
  res.status(StatusCodes.OK).send({ success: true, course });
};

export const deleteAssignmentFromCourse = async (
  req: Request,
  res: Response
) => {
  const { assignmentId, courseId } = req.params;
  await deleteAssignmentFromCourseService(courseId, assignmentId);
  res.status(StatusCodes.OK).send({
    success: true,
    message: "Assignment deleted from the course successfully.",
  });
};
export const addQuizToCourse = async (req: Request, res: Response) => {
  const { quizId, courseId } = req.params;
  await addQuizToCourseService(courseId, quizId);
  res
    .status(StatusCodes.OK)
    .send({ success: true, message: "Quiz added to the course successfully." });
};

export const deleteQuizFromCourse = async (req: Request, res: Response) => {
  const { quizId, courseId } = req.params;
  await deleteQuizFromCourseService(courseId, quizId);
  res.status(StatusCodes.OK).send({
    success: true,
    message: "Quiz deleted from the course successfully.",
  });
};

export const getEnrolledStudents = async (req: Request, res: Response) => {
  const { courseId } = req.params;
  const students = await getEnrolledStudentsService(courseId);
  res.status(StatusCodes.OK).send({ success: true, students });
};

export const getEnrolledStudentsProgress = async (
  req: Request,
  res: Response
) => {
  const { courseId } = req.params;
  const progress = await getEnrolledStudentsProgressService(courseId);
  res.status(StatusCodes.OK).send({ success: true, progress });
};

export const addLectureVideo = async (req: Request, res: Response) => {
  const { courseId } = req.params;
  const { videoURL } = req.body;
  await addLectureVideoService(courseId, videoURL);
  res
    .status(StatusCodes.OK)
    .send({ success: true, message: "Video lecture added successfully" });
};

export const deleteLectureVideo = async (req: Request, res: Response) => {
  const { courseId } = req.params;
  const { videoURL } = req.body;
  await deleteLectureVideoService(courseId, videoURL);
  res
    .status(StatusCodes.OK)
    .send({ success: true, message: "Video lecture removed successfully" });
};

export const getCourseReviews = async (req: Request, res: Response) => {
  const { courseId } = req.params;
  const reviews = await getCourseReviewsService(courseId);
  res.status(StatusCodes.OK).send({ success: true, reviews });
};

export const modifyCoursePrice = async (req: Request, res: Response) => {
  const { courseId } = req.params;
  const { price } = req.body;
  await modifyCoursePriceService(courseId, price);
  res
    .status(StatusCodes.OK)
    .send({ success: true, message: "Course price updated successfully" });
};



export const addQuestionToQuiz = async (req: Request, res: Response) => {
  const {quizId} = req.params;
  const {question} = req.body;
  await addQuestionToQuizService(quizId, question)
  res.status(StatusCodes.OK).send({ success: true, message: "Question added to the quiz successfully"})
}
export const removeQuestionFromQuiz = async (req: Request, res: Response) => {
  const {quizId} = req.params;
  const {question} = req.body;
  await removeQuestionToQuizService(quizId, question)
  res.status(StatusCodes.OK).send({ success: true, message: "Question removed from the quiz successfully"})
}
export const updatePrerequisiteLesson = async (req: Request, res: Response) => {
  const {quizId} = req.params
  const {prerequisiteLesson} = req.body
  await updatePrerequisiteLessonService(quizId,prerequisiteLesson)
  res.status(StatusCodes.OK).send({ success: true, message: "Quiz prerequestion updated successfully"})
}
export const modifyQuizName = async (req: Request, res: Response) => {
  const {quizId} = req.params
  const {name} = req.body
  await modifyQuizNameService(quizId,name)
  res.status(StatusCodes.OK).send({ success: true, message: "Quiz namw updated successfully"})
}