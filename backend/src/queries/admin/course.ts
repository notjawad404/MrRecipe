import { ObjectId } from "mongoose";
import Assignment, { IAssignment } from "../../models/assignment";
import Course, { ICourse } from "../../models/course";
import Quiz, { IQuiz, IQuizQuestion } from "../../models/quiz";

export const findCourseByIdAndAddAssignment = async (
  courseId: string,
  assignmentId: ObjectId
): Promise<ICourse> => {
  const updatedCourse = await Course.findByIdAndUpdate(
    courseId,
    { $addToSet: { assignments: assignmentId } }, // $addToSet adds the item only if it's not already present in the array
    { new: true, runValidators: true }
  );
  return updatedCourse;
};

export const findCourseByIdAndDeleteAssignment = async (
  courseId: string,
  assignmentId: ObjectId
): Promise<ICourse> => {
  const updatedCourse = await Course.findByIdAndUpdate(
    courseId,
    { $pull: { assignments: assignmentId } },
    { new: true, runValidators: true }
  );
  return updatedCourse;
};

export const findCourseByIdAndAddQuiz = async (
  courseId: string,
  quizId: ObjectId
): Promise<ICourse> => {
  const updatedCourse = await Course.findByIdAndUpdate(
    courseId,
    { $addToSet: { quizzes: quizId } }, // $addToSet adds the item only if it's not already present in the array
    { new: true, runValidators: true }
  );
  return updatedCourse;
};

export const findCourseByIdAndDeleteQuiz = async (
  courseId: string,
  quizId: ObjectId
): Promise<ICourse> => {
  const updatedCourse = await Course.findByIdAndUpdate(
    courseId,
    { $pull: { quizzes: quizId } },
    { new: true, runValidators: true }
  );
  return updatedCourse;
};

export const findCourseByIdAndAddLectureVideo = async (
  courseId: string,
  videoURL: string
): Promise<ICourse> => {
  const updatedCourse = await Course.findByIdAndUpdate(
    courseId,
    { $push: { videos: { videoURL, watched: false } } },
    { runValidators: true, new: true }
  );
  return updatedCourse;
};

export const findCourseByIdAndRemoveLectureVideo = async (
  courseId: string,
  videoURL: string
): Promise<ICourse> => {
  const updatedCourse = await Course.findByIdAndUpdate(
    courseId,
    { $pull: { videos: { videoURL, watched: false } } },
    { runValidators: true, new: true }
  );
  return updatedCourse;
};

export const findCourseByIdAndUpdatePrice = async (
  courseId: string,
  price: number
): Promise<ICourse> => {
  const updatedCourse = await Course.findByIdAndUpdate(
    courseId,
    { price: price },
    { runValidators: true, new: true }
  );
  return updatedCourse;
};

export const findQuizByIdAndUpdateName = async (
  quizId: string,
  name: string
):Promise<IQuiz> => {
  const updatedQuiz = await Quiz.findByIdAndUpdate(
    quizId,
    { name: name },
    { runValidators: true, new: true }
  );
  return updatedQuiz
};

export const findQuizByIdAndUpdatePrerequisites = async (quizId:string, prerequisiteLessonNumber: number) :Promise<IQuiz> => {
  const updatedQuiz = await Quiz.findByIdAndUpdate(
    quizId,
    { prerequisiteLesson: prerequisiteLessonNumber },
    { runValidators: true, new: true }
  );
  return updatedQuiz
}

export const findQuizByIdAndAddQuestion = async (quizId: string, quizQuestion: IQuizQuestion):Promise<IQuiz> => {
  const updatedQuiz = await Quiz.findByIdAndUpdate(
    quizId,
    {
      $push: { questions: quizQuestion },
      $inc: { totalMarks: quizQuestion.score, questionNumbers: 1 }
    },
    { new: true, runValidators: true }
  );

  return updatedQuiz;
};

export const findQuizByIdAndRemoveQuestion = async (quizId: string, quizQuestion: IQuizQuestion):Promise<IQuiz> => {
  const updatedQuiz = await Quiz.findByIdAndUpdate(
    quizId,
    {
      $pull: { questions: quizQuestion },
      $inc: { totalMarks: -quizQuestion.score, questionNumbers: -1 }
    },
    { new: true, runValidators: true }
  );

  return updatedQuiz;
};
