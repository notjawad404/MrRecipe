import BadRequestError from "../../errors/bad-request";
import NotFoundError from "../../errors/not-found";
import { IInstructor } from "../../models/instructor";
import {
  createInstructor,
  findAllInstructors,
  findInstructorByEmail,
} from "../../queries/admin/instructor";

export const addNewInstructorSerivce = async (instructorData: IInstructor) => {
  const instructor = await createInstructor(instructorData);
  if (!instructor) {
    throw new BadRequestError("New instructor could not be created");
  }
};

export const getAllInstructorsService = async (): Promise<
  Array<IInstructor>
> => {
  const instructors = await findAllInstructors();
  if (instructors.length === 0) {
    throw new NotFoundError("Instructors could not be found");
  }
  return instructors;
};

export const getInstructorService = async (
  instructorEmail: string
): Promise<IInstructor> => {
  const instructor = await findInstructorByEmail(instructorEmail);
  if (!instructor) {
    throw new NotFoundError("Instructors could not be found");
  }
  return instructor;
};
