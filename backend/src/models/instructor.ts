import mongoose, { Document, Model, Schema } from "mongoose";

export interface IInstructor {
  name: string;
  email: string;
  medicalOrDental: "Medical" | "Dental";
  instituteName: string;
  contactNumber: string;
  country: string;
  traits: "Introvert" | "Extrovert";
  students: Array<Schema.Types.ObjectId>;
  interviewJourneyGroup: "A" | "B" ;
  sessionToAttend
}

const instructorSchema: Schema<IInstructor> = new Schema({
  name: {
    type: String,
    required: true,
    min: 3,
    max: 30,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      //pattern for an email to follow
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email",
    ],
  },
  country: {
    type: String,
    required: true,
  },
  medicalOrDental: {
    type: String,
    required: true,
    enum: ["Medical", "Dental"],
  },
  instituteName: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  traits: {
    type: String,
    required: true,
    enum: ["Introvert", "Extrovert"],
  },
  students: [
    {
      type: Schema.Types.ObjectId,
      required: true,
      default: [],
    },
  ],
  interviewJourneyGroup: {
    type: String,
    required: true,
    enum: ["A", "B"]
  },
});

const Instructor: Model<IInstructor> = mongoose.model<IInstructor>(
  "Instructor",
  instructorSchema
);

export default Instructor;
