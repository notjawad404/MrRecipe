import express from "express";
import {
  courseProgressDetail,
  getCart,
  getTribalTest,
  getWishList,
  modifyAvatar,
  modifyBio,
  modifySocialAccount,
  scoresDetail,
  showEnrolledCourses,
  studentsPointsAndTribe,
} from "../../controllers/student/student";
import { updateItemQuantity } from "../../controllers/student/cart";

const student_router = express.Router();

// Shows the student's enrolled courses
student_router.get("/:studentId/enrolled-courses", showEnrolledCourses);

// Shows how many courses are in progress or completed
student_router.get("/:studentId/course-progress", courseProgressDetail);

// Shows the scores of the assignments or quizzes in a course
student_router.get("/:studentId/scores/courses/:courseId", scoresDetail);

// Shows the points and tribe to the students
student_router.get("/points-tribe", studentsPointsAndTribe);

// Modifies the bio of students
student_router.patch("/:studentId/bio", modifyBio);

// Modifies social accounts link of students
student_router.patch("/:studentId/social-account", modifySocialAccount);

// Modifies the avatar of the student's account
student_router.patch("/:studentId/avatar", modifyAvatar);

// Get products present in the wish list
student_router.get("/:studentId/wishlist", getWishList);

// Updates the quantity of the item (product/course) present in the cart
student_router.patch('/:studentId/items/:itemId/update-quantity',updateItemQuantity)

// Get products present in the cart
student_router.get("/:studentId/cart", getCart);

// Gets the tribal test
student_router.get("/tribal-test", getTribalTest);

export default student_router;
