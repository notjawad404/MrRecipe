import Student, { IStudent } from "../../models/student";
import TribalTest, { ITribalTest } from "../../models/tribalTest";
import { UpdateWriteOpResult } from "mongoose";

interface IStudentDetails {
  points: number;
  tribeName: string;
}

export const findStudentById = async (studentId: string): Promise<IStudent> => {
  const student = await Student.findById(studentId).lean();
  return student;
};


export const findAllStudents = async () :Promise<Array<IStudent>>=>{
  const students = await Student.find({}).lean()
  return students
}

export const findStudentTribeNameAndPoints = async (query: {}): Promise<
  Array<IStudentDetails>
> => {
  const studentsDetails = await Student.find(query, "tribeName points").lean();
  return studentsDetails;
};

export const findTribalTest = async (): Promise<ITribalTest> => {
  const tribalTest = await TribalTest.findOne({}).lean();
  return tribalTest;
};

export const modifyStudentBio = async (
  studentId: string,
  bio: string
): Promise<UpdateWriteOpResult> => {
  const result = await Student.updateOne(
    { _id: studentId },
    { $set: { bio } },
    { runValidators: true, new: true }
  );
  return result;
};

export const modifyStudentSocialAccount = async (
  studentId: string,
  facebookUrl: string,
  instagramUrl: string,
  linkedInUrl: string
): Promise<UpdateWriteOpResult> => {
  const result = await Student.updateOne(
    { _id: studentId },
    {
      $set: {
        socialAccounts: {
          Facebook: facebookUrl,
          Instagram: instagramUrl,
          LinkedIn: linkedInUrl,
        },
      },
    },
    { runValidators: true, new: true }
  );
  return result;
};



export const modifyStudentAvatar = async (
  studentId: string,
  avatarURL: string
): Promise<IStudent> => {
  const student = await Student.findByIdAndUpdate(
    studentId,
    { avatar: avatarURL },
    { new: true, runValidators: true }
  );
  return student;
};
