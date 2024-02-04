import Assignment, { IAssignment } from "../../models/assignment";
import Course, { ICourse } from "../../models/course";
import Quiz, { IQuiz } from "../../models/quiz";
import Student, { IStudent } from "../../models/student";

export const findCourseByIdAndUpdate = async (
  courseId: string,
  studentId: string,
  review: string
): Promise<ICourse> => {
  const course = await Course.findOneAndUpdate(
    { _id: courseId },
    { $push: { review: { student: studentId, content: review } } },
    { new: true }
  );
  return course;
};

export const findCourseById = async (courseId: string): Promise<ICourse> => {
  const course = await Course.findById(courseId).lean();
  return course;
};

export const findCourseWithConstraints = async (
  skip: number,
  limit: number
): Promise<Array<ICourse>> => {
  const courses = await Course.find({}).skip(skip).limit(limit).lean();
  return courses;
};

export const findQuizById = async (quizId: string): Promise<IQuiz> => {
  const quiz = await Quiz.findById(quizId).lean();
  return quiz;
};

export const findAssignmentById = async (
  assignmentId: string
): Promise<IAssignment> => {
  const assignment = await Assignment.findById(assignmentId).lean();
  return assignment;
};

export const enrollStudentInCourse = async (
  studentId: string,
  courseId: string
): Promise<[IStudent, ICourse]> => {
  const updatedStudent = await Student.findByIdAndUpdate(
    studentId,
    {
      $addToSet: {
        enrolledCourses: courseId,
        courseProgress: { courseId, progress: 0, completed: false },
      },
      $inc: { enrolledCourseCount: 1 },
    }, // $addToSet prevents duplicate entries
    { new: true, runValidators: true }
  );

  const updatedCourse = await Course.findByIdAndUpdate(
    courseId,
    {
      $addToSet: { enrolledStudents: studentId },
    },
    { new: true, runValidators: true }
  );
  return [updatedStudent, updatedCourse];
};

export const unenrollStudentFromCourse = async (
  studentId: string,
  courseId: string
): Promise<IStudent> => {
  const updatedStudent = await Student.findByIdAndUpdate(
    studentId,
    {
      $pull: { enrolledCourses: courseId },
      $inc: { enrolledCourseCount: -1 },
    },
    { new: true, runValidators: true }
  );
  return updatedStudent;
};

export const awardStudentCertificate = async (courseId: string) => {
  const updatedCourse = await Course.findByIdAndUpdate(courseId, {
    certificateAwarded: true,
  });
  return updatedCourse;
};
