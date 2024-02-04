import Student from "../../models/student";
import { Request, Response } from "express";
import "express-async-errors";
import { StatusCodes } from "http-status-codes";
import {
  showEnrolledCoursesService,
  courseProgressDetailSerives,
  scoresDetailService,
  studentsPointsAndTribeService,
  modifyBioService,
  modifySocialAccountService,
  getWishListService,
  modifyAvatarService,
  getTribalTestService,
  getCartService,
} from "../../services/student/student";

// Shows all the courses in which student is enrolled
export const showEnrolledCourses = async (req: Request, res: Response) => {
  const { studentId } = req.params;
  const enrolledCourses = await showEnrolledCoursesService(studentId);
  res.status(StatusCodes.OK).send({ success: true, enrolledCourses });
};

// Displays the count of courses
// Allows query params i.e.
// in-progress: to show the count of courses that are in progress
// completed: to show the count of courses that have been completed
export const courseProgressDetail = async (req: Request, res: Response) => {
  const { studentId } = req.params;
  const status = req.query.status.toString();
  const progressDetails = await courseProgressDetailSerives(studentId, status);
  res.status(StatusCodes.OK).send({ success: true, progressDetails });
};

// Displays the scores of student on the specified course
// Allows query params i.e.
// assignment: to show the scores of assignments
// quiz: to show the scores of quiz
// accumulated: to show the combined scores of assignments and quiz
export const scoresDetail = async (req: Request, res: Response) => {
  const { studentId, courseId } = req.params;
  const status = req.query.status.toString();
  const scores = await scoresDetailService(studentId, courseId, status);
  res.status(StatusCodes.OK).send({ success: true, scores });
};

// Fetches all students points and tribe belonging to a particular tribe
// Allows query params i.e.
// tribe: to retrieve students belonging to the speficied tribe
export const studentsPointsAndTribe = async (req: Request, res: Response) => {
  const tribe = req.query.tribe.toString() || "";
  const studentsDetails = await studentsPointsAndTribeService(tribe);
  res.status(StatusCodes.OK).send({ success: true, studentsDetails });
};

// Updates/Adds the bio of the student
export const modifyBio = async (req: Request, res: Response) => {
  const { studentId } = req.params;
  const { bio } = req.body;
  await modifyBioService(studentId, bio);
  res
    .status(StatusCodes.OK)
    .send({ success: true, message: "Bio updated successfully" });
};

// Updates/Adds student's social accounts
export const modifySocialAccount = async (req: Request, res: Response) => {
  const { studentId } = req.params;
  const facebookURL = req.body.facebook || "";
  const instagramURL = req.body.instagram || "";
  const linkedInURL = req.body.linkedIn || "";
  await modifySocialAccountService(
    studentId,
    facebookURL,
    instagramURL,
    linkedInURL
  );
  res
    .status(StatusCodes.OK)
    .send({ success: true, message: "Social account(s) updated successfully" });
};

export const modifyAvatar = async (req: Request, res: Response) => {
  const { studentId } = req.params;
  const { avatarURL } = req.body;
  await modifyAvatarService(studentId, avatarURL);
  res
    .status(200)
    .send({ success: true, message: "Avatar updated successfully" });
};

// Gets all the items present in the wish list
export const getWishList = async (req: Request, res: Response) => {
  const { studentId } = req.params;
  const wishlist = await getWishListService(studentId);
  res.status(StatusCodes.OK).send({ success: true, wishlist });
};



// Gets all the items present in the cart
export const getCart = async (req: Request, res: Response) => {
  const { studentId } = req.params;
  const wishlist = await getCartService(studentId);
  res.status(StatusCodes.OK).send({ success: true, wishlist });
};


export const getTribalTest = async (req: Request, res: Response) => {
  const tribalTest = await getTribalTestService();
  res.status(StatusCodes.OK).send({ success: true, tribalTest });
};
