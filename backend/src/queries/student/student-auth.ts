import Student, { IStudent } from "../../models/student";

// Create or retrieve data from the database
export const findStudentByEmail = async (
  email: string
): Promise<IStudent | null> => {
  const student: IStudent | null = await Student.findOne({ email }).lean();
  return student;
};

export const createStudent = async (
  studentData: IStudent,
  passwordHash: string
): Promise<IStudent> => {
  const newStudent: IStudent = await Student.create({
    ...studentData,
    password: passwordHash,
  });
  return newStudent;
};

// Update student data in the database
export const updateStudentPassword = async (
  email: string,
  passwordHash: string
): Promise<IStudent | null> => {
  const updatedStudent = await Student.findOneAndUpdate(
    { email },
    {
      password: passwordHash,
      resetPasswordCode: undefined,
      resetPasswordExpires: undefined,
    },
    { new: true, runValidators: true }
  );
  return updatedStudent;
};

export const studentPasswordResetDetails = async (
  email: string,
  verificationCode: string,
  RESET_PASSWORD_EXPIRATION: number
): Promise<IStudent> => {
  const student = await Student.findOneAndUpdate(
    { email },
    {
      resetPasswordCode: verificationCode,
      resetPasswordExpires: new Date(Date.now() + RESET_PASSWORD_EXPIRATION),
    },
    { new: true, runValidators: true }
  );
  return student;
};
