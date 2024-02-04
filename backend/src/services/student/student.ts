import Student from "../../models/student";
import UnauthenticatedError from "../../errors/unauthenticated";
import { ObjectId } from "mongoose";
import { ICourse } from "../../models/course";
import { calculateScores } from "../../utils/calculateScores";
import NotFoundError from "../../errors/not-found";
import BadRequestError from "../../errors/bad-request";
import WishList from "../../models/wishList";
import { IWishList } from "../../models/wishList";

import TribalTest, { IQuestion, ITribalTest } from "../../models/tribalTest";
import {
  findStudentById,
  findStudentTribeNameAndPoints,
  findTribalTest,
  modifyStudentAvatar,
  modifyStudentBio,
  modifyStudentSocialAccount,
} from "../../queries/student/student";
import { findWishListByStudentId } from "../../queries/student/wishlist";
import { findCartByStudentId } from "../../queries/student/cart";
import { ICart } from "../../models/cart";
interface IProgressDetails {
  totalCourses: number;
  count: number;
}

interface IStudentDetails {
  points: number;
  tribeName: string;
}

export const showEnrolledCoursesService = async (
  studentId: string
): Promise<Array<ObjectId | ICourse>> => {
  const student = await findStudentById(studentId);
  if (!student) {
    throw new NotFoundError("Student not found");
  }
  const enrolledCourses = student.enrolledCourses;
  return enrolledCourses;
};

export const courseProgressDetailSerives = async (
  studentId: string,
  status: string
): Promise<IProgressDetails> => {
  const student = await findStudentById(studentId);
  if (!student) {
    throw new NotFoundError("Student not found");
  }
  const { enrolledCoursesCount, courseProgress } = student;

  const count = courseProgress.filter((course) =>
    status == "in-progress"
      ? course.progress > 0 && course.progress < 100
      : course.completed == true
  ).length;

  const progressDetails = {
    totalCourses: enrolledCoursesCount,
    count,
  };
  return progressDetails;
};

export const scoresDetailService = async (
  studentId: string,
  courseId: string,
  status: string
) => {
  const student = await findStudentById(studentId);
  if (!student) {
    throw new NotFoundError("Student not found");
  }
  let scores = 0;

  if (status === "assignment") {
    scores = calculateScores(student.assignmentScores, courseId);
  } else if (status === "quiz") {
    scores = calculateScores(student.quizScores, courseId);
  } else if (status === "accumulated") {
    const assignmentScores = calculateScores(
      student.assignmentScores,
      courseId
    );
    const quizScores = calculateScores(student.quizScores, courseId);
    scores = (assignmentScores + quizScores) / 2;
  } else {
    throw new BadRequestError("Status not specified properly");
  }

  return scores;
};

export const studentsPointsAndTribeService = async (
  tribe: string
): Promise<Array<IStudentDetails>> => {
  let query = {};

  if (tribe && tribe !== "") {
    query = { tribe };
  }
  const studentsDetails = await findStudentTribeNameAndPoints(query);
  return studentsDetails;
};

export const modifyBioService = async (
  studentId: string,
  bio: string
): Promise<void> => {
  const result = await modifyStudentBio(studentId, bio);

  if (result.matchedCount === 0) {
    throw new NotFoundError("Student not found");
  }
};

export const modifySocialAccountService = async (
  studentId: string,
  facebookUrl: string,
  instagramUrl: string,
  linkedInUrl: string
): Promise<void> => {
  const result = await modifyStudentSocialAccount(
    studentId,
    facebookUrl,
    instagramUrl,
    linkedInUrl
  );
  if (result.matchedCount === 0) {
    throw new NotFoundError("Student not found");
  }
};



export const getWishListService = async (
  studentId: string
): Promise<IWishList> => {

  const wishlist = await findWishListByStudentId(studentId);
  if (!wishlist) {
    throw new NotFoundError("Student wishlist not found");
  }
  return wishlist;
};


export const getCartService = async (
  studentId: string
): Promise<ICart> => {

  const cart = await findCartByStudentId(studentId);
  if (!cart) {
    throw new NotFoundError("Student cart not found");
  }
  return cart;
};



export const modifyAvatarService = async (
  studentId: string,
  avatarURL: string
): Promise<void> => {
  const student = await modifyStudentAvatar(studentId, avatarURL);
  if (!student) {
    throw new NotFoundError("Student not found");
  }
};

export const getTribalTestService = async (): Promise<ITribalTest> => {
  const tribalTest = await findTribalTest();
  return tribalTest;
};
