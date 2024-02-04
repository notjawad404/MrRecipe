import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import {
  addCourseReviewService,
  awardCertificateService,
  courseContentService,
  enrollInCourseService,
  showAssignmentService,
  showCourseReviewService,
  showCourseService,
  showQuizService,
  unenrollFromCourseService,
} from "../../services/student/course";


// Adds review of a student about the specified course
export const addCourseReview = async (req: Request, res: Response) => {
  const { studentId, courseId } = req.params;
  const { review } = req.body;
  await addCourseReviewService(studentId, courseId, review);
  res
    .status(StatusCodes.OK)
    .send({ success: true, message: "Course review added!" });
};

// Shows all the reviews of students about the specified course
export const showCourseReview = async (req: Request, res: Response) => {
  const { courseId } = req.params;
  const reviews = await showCourseReviewService(courseId);
  res.status(StatusCodes.OK).send({ success: true, reviews });
};

// Shows all the available courses
// Allows query params i.e.
// page: to specify the number of page the result is to be fetched
// limit: to specify the number of documents to be returned
export const showCourses = async (req: Request, res: Response) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const courses = await showCourseService(page, limit);
  res.status(StatusCodes.OK).send({ success: true, courses });
};

// Enrolls a student in a course
// If the course is paid, redirects the user to payment gateway
// TODO: IMPLEMENT PAYMENT LOGIC
export const enrollInCourse = async (req: Request, res: Response) => {
  const { studentId, courseId } = req.params;
  await enrollInCourseService(studentId, courseId);
  res
    .status(StatusCodes.OK)
    .send({ success: true, message: "Student successfully enrolled" });
};

// Enrolls a student in a course
// If the course is paid, allow user to get a refund
// TODO: IMPLEMENT PAYMENT REFUND LOGIC
export const unenrollFromCourse = async (req: Request, res: Response) => {
  const { studentId, courseId } = req.params;
  await unenrollFromCourseService(studentId, courseId);
  res
    .status(StatusCodes.OK)
    .send({ success: true, message: "Student successfully unenrolled" });
};



// Fetches course name, videos, zoom link and certificate for enrolled course
// Allows query params i.e.
// courseName: to specify that course name is to be fetched
// videos: to specify that videos are to be fetched
// zoomLink: to specify that zoomLink is to be fetched
// certificate: to specify that certificate is to be fetched
// assignment: to specify that assignment details are to be fetched
// quiz: to specify that quiz details are to be fetched
export const enrolledCourseContent = async (req: Request, res: Response) => {
  const { courseId, studentId } = req.params;
  const obj = {
    courseName: req.query.courseName === "true",
    videos: req.query.videos === "true",
    certificateAwarded: req.query.certificateAwarded === "true",
    zoomLink: req.query.zoomLink === "true",
    assignment: req.query.assignments === "true",
    quiz: req.query.quizzes === "true",
  };
  const courseContent = await courseContentService(studentId, courseId, obj);
  res.status(StatusCodes.OK).send({ success: true, courseContent });
};

// Checks if the course has been completed and then awards certificate to the student
export const awardCertificate = async (req: Request, res: Response) =>{
  const {studentId, courseId} = req.params
  await awardCertificateService(studentId, courseId);
  res.status(StatusCodes.OK).send({ success: true, message:'Certificate award successfully'})

}

// Fetches the details about a specific quiz
export const showQuiz = async (req: Request, res: Response) =>{
  const {courseId, quizId} = req.params
  const quiz = await showQuizService(courseId,quizId)
  res.status(StatusCodes.OK).send({ success: true, quiz})

}
// Fetches the details about a specific assignment
export const showAssignment = async (req: Request, res: Response) =>{
  const {courseId,assignmentId} = req.params
  const assignment = await showAssignmentService(courseId,assignmentId)
  res.status(StatusCodes.OK).send({ success: true, assignment})

}