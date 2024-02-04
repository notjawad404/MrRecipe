import express from 'express';
import { addCourseReview, awardCertificate, enrollInCourse, enrolledCourseContent, showAssignment, showCourseReview, showCourses, showQuiz, unenrollFromCourse } from '../../controllers/student/course';
import { addCourseToWishList, removeCourseFromWishList } from '../../controllers/student/wishlist';
import { addCourseToCart, removeCourseFromCart } from '../../controllers/student/cart';
const student_course_router = express.Router();

// Adds student's review about that particular course
student_course_router.post('/:courseId/students/:studentId/course-review/',addCourseReview)

// Show all the reviews from the students about a specific course
student_course_router.get('/:courseId/course-reviews/', showCourseReview)

// Show all the courses available on Medology
student_course_router.get('/',showCourses)

// Enrolls a student in a course (payment gateway are yet to be implemented)
student_course_router.post('/:courseId/students/:studentId/enroll', enrollInCourse)

// Deletes a student from a course (payment gateway are yet to be implemented)
student_course_router.delete('/:courseId/students/:studentId/unenroll', unenrollFromCourse)

// Gets the course contents (name, quizzes, assignments, videos)
student_course_router.get('/:courseId/students/:studentId/content', enrolledCourseContent)

// Awards certificate to the student after checking if the course has been completed
student_course_router.patch('/:courseId/students/:studentId/certificate',awardCertificate)

// Shows the details about a specific quiz in the course
student_course_router.get('/:courseId/quizzes/:quizId',showQuiz)

// Shows the details about a specific assignment in a course
student_course_router.get('/:courseId/assignments/:assignmentId',showAssignment)

// Removes course from the wish list
student_course_router.patch('/:courseId/students/:studentId/wishlist/remove',removeCourseFromWishList)

// Adds course to the wish list
student_course_router.patch('/:courseId/students/:studentId/wishlist/add',addCourseToWishList)

// Adds course to the cart
student_course_router.patch('/:courseId/students/:studentId/cart/add',addCourseToCart)

// Remove course from the cart
student_course_router.patch('/:courseId/students/:studentId/cart/remove',removeCourseFromCart)

export default student_course_router