import BadRequestError from "../../errors/bad-request";
import NotFoundError from "../../errors/not-found";
import Course, { ICourse } from "../../models/course";
import Student, { IStudent } from "../../models/student";
import { Schema, Types } from "mongoose";
import { isStudentEnrolled } from "../../utils/enrollment-checker";
import Quiz, { IQuiz } from "../../models/quiz";
import Assignment, { IAssignment } from "../../models/assignment";
import { findStudentById } from "../../queries/student/student";
import {
  awardStudentCertificate,
  enrollStudentInCourse,
  findAssignmentById,
  findCourseById,
  findCourseByIdAndUpdate,
  findCourseWithConstraints,
  findQuizById,
  unenrollStudentFromCourse,
} from "../../queries/student/course";
import sendMail from "../../utils/mail-student";

interface ICourseReview {
  student: IStudent | Types.ObjectId;
  content: string;
}

interface ICourseContent {
  courseName: boolean;
  videos: boolean;
  zoomLink: boolean;
  assignment: boolean;
  quiz: boolean;
  certificateAwarded: boolean;
}

interface ICourseContentResponse {
  courseName?: string;
  videos?: Array<string>;
  zoomLink?: string;
  certificateAwarded?: boolean;
  assignments?: Array<Schema.Types.ObjectId>;
  quizzes?: Array<Schema.Types.ObjectId>;
}

export const addCourseReviewService = async (
  studentId: string,
  courseId: string,
  review: string
): Promise<void> => {
  if (!studentId || !courseId || !review) {
    throw new BadRequestError("Invalid input");
  }
  const student = await findStudentById(studentId);

  if (!student) {
    throw new NotFoundError("Student not found");
  }

  const hasStudentEnrolled = await isStudentEnrolled(student, courseId);
  if (!hasStudentEnrolled) {
    throw new BadRequestError("Student is not enrolled in this course");
  }

  const course = await findCourseByIdAndUpdate(courseId, studentId, review);

  if (!course) {
    throw new BadRequestError("Couldn't add course review");
  }
};

export const showCourseReviewService = async (
  courseId: string
): Promise<Array<ICourseReview>> => {
  const course = await findCourseById(courseId);
  if (!course) {
    throw new BadRequestError("Course not found");
  }
  const reviewsArray = course.review;
  const reviewsWithContent = reviewsArray.filter(
    (reviewObj) => reviewObj.content
  );
  return reviewsWithContent;
};

export const showCourseService = async (
  page: number,
  limit: number
): Promise<Array<ICourse>> => {
  const skip = (page - 1) * limit;

  const courses = await findCourseWithConstraints(skip, limit);

  return courses;
};

export const enrollInCourseService = async (
  studentId: string,
  courseId: string
): Promise<void> => {
  const [course,student] = await Promise.all([findCourseById(courseId),findStudentById(studentId)])
  if (!course) {
    throw new NotFoundError("Course not found");
  }

  if (!student) {
    throw new NotFoundError("Student not found");
  }
  const isCourseProgressExist = student.courseProgress.some(progress => progress.courseId.toString() === courseId);
  if(isCourseProgressExist) {
    throw new BadRequestError('Student already enrolled in the course')
  }

  if (course.courseType === "Paid") {
    // redirect to payment gateway
  }
  const [updatedStudent,updatedCourse] = await enrollStudentInCourse(studentId, courseId);
  if (!updatedStudent || !updatedCourse) {
    throw new BadRequestError("Could not enroll student in the course");
  }
 
  const message = `🌟 Welcome to "${course.courseName}"! 🌟
  Prepare to embark on an exciting journey across ${course.videos.length} comprehensive videos. 
  
  🚀 What's in store for you?
  - Expert insights and in-depth understanding of cutting-edge web development practices.
  - Hands-on projects that bring theories to life.
  - Guidance from seasoned professionals in the field.
  
  🏆 On successful completion, a certificate of achievement awaits you, marking your proficiency and dedication.
  
  💡 Key Takeaways: 
  - Master ${course.keyTakeaway}.
  - Elevate your skills from beginner to pro.
  - Become an in-demand web developer with skills that are coveted in the industry.
  
  Get ready to transform your passion into expertise. Let's dive in! 🎓`;
  sendMail(updatedStudent.email,message, 'Unleash Your Learning Power With Medology!')
};

export const unenrollFromCourseService = async (
  studentId: string,
  courseId: string
): Promise<void> => {
  const course: ICourse = await Course.findById(courseId).lean();
  if (!course) {
    throw new NotFoundError("Course not found");
  }
  if (course.courseType === "Paid") {
    // handle refund request
  }
  const updatedStudent = await unenrollStudentFromCourse(studentId, courseId);
  if (!updatedStudent) {
    throw new NotFoundError("Student not found");
  }
};

export const courseContentService = async (
  studentId: string,
  courseId: string,
  content: ICourseContent
): Promise<ICourseContentResponse> => {
  // Find student and course in parallel for efficiency
  const [student, course] = await Promise.all([
    findStudentById(studentId),
    findCourseById(courseId),
  ]);

  // Error handling for not found scenarios
  if (!student) throw new NotFoundError("Student not found");
  if (!course) throw new NotFoundError("Course not found");

  // Check if the student is enrolled in the course
  if (!isStudentEnrolled(student, courseId)) {
    throw new BadRequestError("Student is not enrolled in this course");
  }

  // Construct the response object based on requested content
  const responseObject: ICourseContentResponse = {};
  if (content.courseName) responseObject.courseName = course.courseName;
  // if (content.videos) responseObject.videos = course.videos.map(video => video.videoURL);
  if (content.zoomLink) responseObject.zoomLink = course.zoomLink;
  if (content.assignment) responseObject.assignments = course.assignments;
  if (content.quiz) responseObject.quizzes = course.quizzes;
  if (content.certificateAwarded)
    responseObject.certificateAwarded = course.certificateAwarded;
  // console.log(responseObject);
  // console.log(content);
  return responseObject;
};

export const awardCertificateService = async (
  studentId: string,
  courseId: string
) => {
  const student = await findStudentById(studentId);
  if (!student) {
    throw new NotFoundError("Student not found");
  }

  const isCourseCompleted = student.courseProgress.some(
    (progress) =>
      progress.courseId.toString() === courseId && progress.completed
  );
  if (!isCourseCompleted) {
    throw new BadRequestError("Course not completed");
  }

  const updatedCourse = await awardStudentCertificate(courseId);
  if (!updatedCourse) {
    throw new NotFoundError("Course not found");
  }
};

export const showQuizService = async (
  courseId: string,
  quizId: string
): Promise<IQuiz> => {
  const course = await findCourseById(courseId);
  if (!course) {
    throw new NotFoundError("Course not found");
  }

  // Check if the quizId is part of the course's quizzes without converting it to string
  const quizExists = course.quizzes.some((quiz) => quiz.toString() === quizId);

  if (!quizExists) {
    throw new BadRequestError("Quiz does not exist");
  }

  // Directly find the quiz by its ID
  const quiz = await findQuizById(quizId);
  return quiz;
};

export const showAssignmentService = async (
  courseId: string,
  assignmentId: string
): Promise<IAssignment> => {
  const course = await findCourseById(courseId);
  if (!course) {
    throw new NotFoundError("Course not found");
  }
  const assignmentExist = course.assignments.some(
    (assignment) => assignment.toString() === assignmentId
  );
  if (!assignmentExist) {
    throw new BadRequestError("Assignment does not exist");
  }
  const assignment = await findAssignmentById(assignmentId);
  return assignment;
};
