import bcrypt from "bcrypt";
import Student, { IStudent } from "../../models/student";
import sendVerificationCodeEmail, {
  generateVerificationCode,
} from "../../utils/verfication-code";
import BadRequestError from "../../errors/bad-request";
import UnauthenticatedError from "../../errors/unauthenticated";
import NotFoundError from "../../errors/not-found";
import {  initializeWishListAndCart } from "../../utils/initialize-utils";
import {
  createStudent,
  findStudentByEmail,
  studentPasswordResetDetails,
  updateStudentPassword,
} from "../../queries/student/student-auth";
import sendMail from "../../utils/mail-student";

//Registers student and store their information in the database
export const registerStudentService = async (
  studentData: IStudent
): Promise<IStudent> => {
  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(studentData.password, salt);
  const { email } = studentData;
  const newStudent = await createStudent(studentData, passwordHash);

  if (!newStudent) {
    throw new BadRequestError("Could not register student");
  }

  const [wishlist, cart] = await initializeWishListAndCart(newStudent._id);

  if (!wishlist || !cart) {
    throw new BadRequestError("Error occurred while registering student");
  }
  const welcomeMessage = `Welcome to Medology! Thank you for joining us on this journey towards learning excellence.`;
  const subject = "Welcome to Medology!";
  await sendMail(email, welcomeMessage, subject);
  return newStudent;
};

// Login student by validating email and password
export const loginStudentService = async (
  email: string,
  password: string
): Promise<IStudent> => {
  if (!email || !password) {
    throw new BadRequestError("Please provide email and password");
  }

  const student = await findStudentByEmail(email);

  if (!student) {
    // Student with the given email not found
    throw new NotFoundError("Student not found");
  }

  if(student.blocked){
    throw new BadRequestError('Student account has been deactived')
  }

  const isPasswordCorrect: boolean = await student.validatePassword(password);

  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("Incorrect password");
  }

  return student;
};

// Sends verification code to the student
export const forgetPasswordStudentService = async (
  email: string
): Promise<void> => {
  const RESET_PASSWORD_EXPIRATION = 3600000; // 1 hour in milliseconds
  const verificationCode = generateVerificationCode();

  const student = await studentPasswordResetDetails(
    email,
    verificationCode,
    RESET_PASSWORD_EXPIRATION
  );

  if (!student) {
    throw new NotFoundError("Student not found");
  }

  // Send the verification code to the user's email
  sendVerificationCodeEmail(student.email, verificationCode);
};

// Resets the password
export const resetPasswordStudentSerivce = async (
  email: string,
  newPassword: string
): Promise<void> => {
  // Hash the new password
  const passwordHash = await bcrypt.hash(newPassword, 10);

  // Update the password and clear the reset code and expiration in one step
  const updatedStudent = await updateStudentPassword(email, passwordHash);
  if (!updatedStudent) {
    throw new NotFoundError("Student not found");
  }
};

// Verifies the verification codes
export const verifyCodeService = async (
  email: string,
  verificationCode: string
): Promise<void> => {
  const student = await findStudentByEmail(email);

  if (!student) {
    throw new NotFoundError("Student not found");
  }

  if (
    student.resetPasswordCode !== verificationCode ||
    student.resetPasswordExpires < new Date(Date.now())
  ) {
    throw new BadRequestError("Code invalid or expired");
  }
};
