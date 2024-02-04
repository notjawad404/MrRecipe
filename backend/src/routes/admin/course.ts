import express from "express";
import {
  addAssignmentToCourse,
  addLectureVideo,
  addQuestionToQuiz,
  addQuizToCourse,
  createAssignment,
  createNewCourse,
  createQuiz,
  deleteLectureVideo,
  deleteQuizFromCourse,
  getCourse,
  getCourseReviews,
  getEnrolledStudents,
  getEnrolledStudentsProgress,
  modifyCoursePrice,
  modifyQuizName,
  removeQuestionFromQuiz,
  updatePrerequisiteLesson,
} from "../../controllers/admin/course";

const admin_course_router = express.Router();

// Allows the admin to create a new course
admin_course_router.post("/courses", createNewCourse);

// Allows the admin to access all the details about the specified course
admin_course_router.get("/courses/:courseId", getCourse);

// Lets the admin create a new assignment
admin_course_router.post("/assignments", createAssignment);

// Adds the specified assignment to the specified course
admin_course_router.patch(
  "/courses/:courseId/assignments/:assignmentId",
  addAssignmentToCourse
);

// Deletes the specified assignment from the specified course
admin_course_router.patch(
  "/courses/:courseId/assignments/:assignmentId",
  deleteQuizFromCourse
);

// Adds the specified quiz to the specified course
admin_course_router.patch(
  "/courses/:courseId/quizzes/:quizId",
  addQuizToCourse
);

// Deletes the specified quiz from the specified course
admin_course_router.patch(
  "/courses/:courseId/quizzes/:quizId",
  deleteQuizFromCourse
);

admin_course_router.get(
  "/courses/:courseId/enrolled-students",
  getEnrolledStudents
);

admin_course_router.get(
  "/courses/:courseId/enrolled-students/progress",
  getEnrolledStudentsProgress
);

admin_course_router.patch(
  "/courses/:courseId/video-lecture/add",
  addLectureVideo
);

admin_course_router.patch(
  "/courses/:courseId/video-lecture/remove",
  deleteLectureVideo
);

admin_course_router.patch("/courses/:courseId/price/update", modifyCoursePrice);

admin_course_router.get("/courses/:courseId/reviews", getCourseReviews);

// Lets the admin create a new quiz
admin_course_router.post("/quizzes", createQuiz);

admin_course_router.patch("/quizzes/:quizId/question/add", addQuestionToQuiz);

admin_course_router.patch(
  "/quizzes/:quizId/question/remove",
  removeQuestionFromQuiz
);

admin_course_router.patch(
  "/quizzes/:quizId/prerequisite-lesson/modify",
  updatePrerequisiteLesson
);

admin_course_router.patch("/quizzes/:quizId/name/modify", modifyQuizName);

export default admin_course_router;
