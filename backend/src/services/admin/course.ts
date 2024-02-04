import BadRequestError from "../../errors/bad-request";
import NoContentError from "../../errors/no-content-error";
import NotFoundError from "../../errors/not-found";
import { ICourse } from "../../models/course";
import { IQuizQuestion } from "../../models/quiz";
import {
  findCourseByIdAndAddAssignment,
  findCourseByIdAndAddLectureVideo,
  findCourseByIdAndAddQuiz,
  findCourseByIdAndDeleteAssignment,
  findCourseByIdAndDeleteQuiz,
  findCourseByIdAndRemoveLectureVideo,
  findCourseByIdAndUpdatePrice,
  findQuizByIdAndAddQuestion,
  findQuizByIdAndRemoveQuestion,
  findQuizByIdAndUpdateName,
  findQuizByIdAndUpdatePrerequisites,
} from "../../queries/admin/course";
import {
  findAssignmentById,
  findCourseById,
  findQuizById,
} from "../../queries/student/course";
import {
  findAllStudents,
  findStudentById,
} from "../../queries/student/student";
import { sendNotification } from "../../utils/notification-utils";

interface IStudentCourseProgress {
  studentName: string;
  courseName: string;
  courseProgress: number;
  courseCompleted: boolean;
}

export const addAssignmentToCourseService = async (
  courseId: string,
  assignmentId: string
): Promise<void> => {
  // First, find the assignment to ensure it exists
  const assignment = await findAssignmentById(assignmentId);
  if (!assignment) {
    throw new NotFoundError("Assignment not found");
  }
  // Update the course by adding the assignment if it's not already included
  const updatedCourse = await findCourseByIdAndAddAssignment(
    courseId,
    assignment._id
  );

  if (!updatedCourse) {
    throw new NotFoundError("Course not found");
  }
};

export const getCourseService = async (courseId: string): Promise<ICourse> => {
  const course = await findCourseById(courseId);
  if (!course) {
    throw new NotFoundError("Course not found");
  }
  return course;
};

export const addQuizToCourseService = async (
  courseId: string,
  quizId: string
): Promise<void> => {
  // First, find the assignment to ensure it exists
  const quiz = await findQuizById(quizId);
  if (!quiz) {
    throw new NotFoundError("Quiz not found");
  }
  // Update the course by adding the quiz if it's not already included
  const updatedCourse = await findCourseByIdAndAddQuiz(courseId, quiz._id);

  if (!updatedCourse) {
    throw new NotFoundError("Course not found");
  }
};

export const deleteAssignmentFromCourseService = async (
  courseId: string,
  assignmentId: string
): Promise<void> => {
  // First, find the assignment to ensure it exists
  const assignment = await findAssignmentById(assignmentId);
  if (!assignment) {
    throw new NotFoundError("Assignment not found");
  }
  const updatedCourse = await findCourseByIdAndDeleteAssignment(
    courseId,
    assignment._id
  );

  if (!updatedCourse) {
    throw new NotFoundError("Course not found");
  }
};

export const deleteQuizFromCourseService = async (
  courseId: string,
  quizId: string
): Promise<void> => {
  // First, find the assignment to ensure it exists
  const quiz = await findQuizById(quizId);
  if (!quiz) {
    throw new NotFoundError("Assignment not found");
  }
  const updatedCourse = await findCourseByIdAndDeleteQuiz(courseId, quiz._id);
  if (!updatedCourse) {
    throw new NotFoundError("Course not found");
  }
};

export const sendCourseUpdateToStudents = async (course: ICourse) => {
  const students = await findAllStudents();
  if (students.length === 0) {
    throw new NoContentError("No students found to notify");
  }
  const notificationPromises = students.map((student) => {
    return sendNotification(
      student._id.toString(),
      "New course has been updated",
      "Course"
    );
  });

  await Promise.all(notificationPromises);
};

export const getEnrolledStudentsService = async (
  courseId: string
): Promise<Array<string>> => {
  const course = await findCourseById(courseId);
  if (!course) {
    throw new NotFoundError("Course not found");
  }
  const enrolledStudentsID = course.enrolledStudents;
  if (enrolledStudentsID.length === 0) {
    throw new NoContentError("No student is enrolled in this course");
  }
  const students = await Promise.all(
    enrolledStudentsID.map((studentId) => findStudentById(studentId.toString()))
  );
  const studentNames = students.map((student) => student.name);
  return studentNames;
};

export const getEnrolledStudentsProgressService = async (
  courseId: string
): Promise<Array<IStudentCourseProgress>> => {
  const course = await findCourseById(courseId);
  if (!course) {
    throw new NotFoundError("Course not found");
  }
  const enrolledStudentsID = course.enrolledStudents;
  if (enrolledStudentsID.length === 0) {
    throw new NoContentError("No student is enrolled in this course");
  }
  const enrolledStudents = await Promise.all(
    enrolledStudentsID.map((studentId) => findStudentById(studentId.toString()))
  );
  const courseProgress = enrolledStudents.map((student) => {
    const { progress, completed } = student.courseProgress.filter(
      (progress) => progress.courseId.toString() === courseId
    )[0];
    return {
      studentName: student.name,
      courseName: course.courseName,
      courseProgress: progress,
      courseCompleted: completed,
    };
  });
  return courseProgress;
};

export const addLectureVideoService = async (
  courseId: string,
  videoURL: string
):Promise<void> => {
  const course = await findCourseById(courseId);
  if (!course) {
    throw new NotFoundError("Course not found");
  }
  const videoURLExists = course.videos.some((video) => video.videoURL === videoURL)
  if(videoURLExists) {
    throw new BadRequestError('Video already exist in the course')
  }
  const updatedCourse = await findCourseByIdAndAddLectureVideo(courseId,videoURL)
  if(!updatedCourse) {
    throw new Error('Video lecture could not be added')
  }

};



export const deleteLectureVideoService = async (
  courseId: string,
  videoURL: string
):Promise<void> => {
  const course = await findCourseById(courseId);
  if (!course) {
    throw new NotFoundError("Course not found");
  }
  
  const videoURLExists = course.videos.some((video) => video.videoURL === videoURL)
  if(!videoURLExists) {
    throw new NotFoundError('Video does not exist in the course')
  }
  const updatedCourse = await findCourseByIdAndRemoveLectureVideo(courseId,videoURL)
  if(!updatedCourse) {
    throw new Error('Video lecture could not be removed')
  }

};

export const modifyCoursePriceService = async (courseId: string,price:number):Promise<void> => {
   const course = await findCourseById(courseId)
   if (!course) {
    throw new NotFoundError("Course not found");
  }
  const updatedCourse = await findCourseByIdAndUpdatePrice(courseId, price)
  if(!updatedCourse) {
    throw new Error('Price could not be updated')
  }

}


export const getCourseReviewsService = async (courseId:string):Promise<Array<string>> =>{
  const course = await findCourseById(courseId)
  if (!course) {
   throw new NotFoundError("Course not found");
 }
 const reviews = course.review?.map(reviews => reviews.content) || []
 return reviews
}

export const addQuestionToQuizService = async (quizId:string,question:IQuizQuestion):Promise<void> => {
  const quiz = await findQuizById(quizId)
  if (!quiz) {
   throw new NotFoundError("Quiz not found");
 }
 const questionExist = quiz.questions.some(quizData => quizData.questionText===(question.questionText))
 if(questionExist){
  throw new BadRequestError('Question already exists in the quiz')
 }

 const updatedCourse = await findQuizByIdAndAddQuestion(quizId,question)
 if(!updatedCourse){
  throw new Error('Question could not be added to the quiz')
 }
}


export const removeQuestionToQuizService = async (quizId:string,question:IQuizQuestion):Promise<void> => {
  const quiz = await findQuizById(quizId)
  if (!quiz) {
   throw new NotFoundError("Quiz not found");
 }
 const questionExist = quiz.questions.some(quizData => quizData.questionText === question.questionText)
 
 if(!questionExist){
  throw new NotFoundError('Question does not exists in the quiz')
 }

 const updatedCourse = await findQuizByIdAndRemoveQuestion(quizId,question)
 if(!updatedCourse){
  throw new Error('Question could not be removed from the quiz')
 }
}


export const updatePrerequisiteLessonService = async (quizId:string, prerequisiteLesson:number) :Promise<void>=>{
  const quiz = await findQuizById(quizId)
  if (!quiz) {
   throw new NotFoundError("Quiz not found");
 }
 
 const updatedCourse = await findQuizByIdAndUpdatePrerequisites(quizId,prerequisiteLesson)
 if(!updatedCourse){
  throw new Error('Prerequisite lesson could not be updated')
 }
}

export const modifyQuizNameService = async (quizId:string, name:string):Promise<void> => {
  const quiz = await findQuizById(quizId)
  if (!quiz) {
   throw new NotFoundError("Quiz not found");
 }
 
 const updatedCourse = await findQuizByIdAndUpdateName(quizId,name)
 if(!updatedCourse){
  throw new Error('Quiz name could not be updated')
 }
}