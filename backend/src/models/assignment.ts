import mongoose, { Model, Schema, Document } from "mongoose";
import { ICourse } from "./course";

export interface IAssignment extends Document {
  name: string;
  assignmentFile: string;
  submissionFile: string;
  status: "Unlocked" | "Locked";
  submitStatus: "Submitted" | "Not submitted";
  score: number;
  comments: string;
  prerequisiteLesson: number;
  courseId: Schema.Types.ObjectId | ICourse;
}

const assignmentSchema: Schema<IAssignment> = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  assignmentFile: {
    type: String,
    required: true,
  },
  submissionFile: {
    type: String,
    default: "",
  },
  status: {
    type: String,
    required: true,
    enum: ["Unlocked", "Locked"],
  },
  submitStatus: {
    type: String,
    required: true,
    enum: ["Submitted", "Not submitted"],
    default: "Not submitted",
  },
  score: {
    type: Number,
    default: 0.0,
  },
  comments: {
    type: String,
    default: "",
  },
  prerequisiteLesson: {
    type: Number,
    default: 0,
  },
  courseId: {
    type: Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
});

const Assignment: Model<IAssignment> = mongoose.model<IAssignment>(
  "Assignment",
  assignmentSchema
);
export default Assignment;
