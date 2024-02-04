import mongoose, { Schema, Document, Model } from "mongoose";
import bcrypt from "bcrypt";
import { ICourse } from "./course";
import EmailExistsError from "../errors/email-exists-error";


interface ISocialAccounts {
  Facebook: string;
  Instagram: string;
  LinkedIn: string;
}

export interface IStudent extends Document {
  name: string;
  email: string;
  password: string;
  country: string;
  medicalOrDental: "Medical" | "Dental";
  educationStatus: string;
  instituteName: string;
  avatar: string;
  points: number;
  tribeName: string;
  enrolledCourses: Array<Schema.Types.ObjectId | ICourse>;
  enrolledCoursesCount: number;
  courseProgress: Array<{
    courseId: Schema.Types.ObjectId;
    progress: number; // Progress value for the course (0-100 or any scale)
    completed: boolean; // Indicates if the course is completed or in progress
  }>;
  quizScores: Array<{
    quizId: Schema.Types.ObjectId;
    courseId: Schema.Types.ObjectId;
    score: number;
  }>;
  assignmentScores: Array<{
    assignmentId: Schema.Types.ObjectId;
    courseId: Schema.Types.ObjectId;
    score: number;
  }>;
  resetPasswordCode?: string;
  resetPasswordExpires?: Date;
  validatePassword(canditatePassword: string): Promise<boolean>;
  bio: string;
  socialAccounts: ISocialAccounts;
  eventsAttending: Array<Schema.Types.ObjectId>;
  blocked: boolean;
}

const studentSchema: Schema<IStudent> = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20,
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
  password: {
    type: String,
    required: true,
    minlength: 6,
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
  educationStatus: {
    type: String,
    default: "student",
  },
  instituteName: {
    type: String,
    required: true,
  },
  avatar: {
    type: String, // Assuming it's a URL pointing to the student's avatar image
    default: "",
  },
  points: {
    type: Number,
    default: 0.0,
  },
  tribeName: {
    type: String,
    default: "",
  },
  enrolledCourses: [
    {
      type: Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
  enrolledCoursesCount: {
    type: Number,
    default: 0,
  },
  courseProgress: [
    {
      courseId: {
        type: Schema.Types.ObjectId,
        ref: "Course",
      },
      progress: {
        type: Number,
        default: 0, // Initial progress is 0%
      },
      completed: {
        type: Boolean,
        default: false, // Initially, the course is not completed
      },
    },
  ],
  quizScores: [
    {
      quizId: {
        type: Schema.Types.ObjectId,
        ref: "Quiz",
      },
      courseId: {
        type: Schema.Types.ObjectId,
        ref: "Course",
      },
      score: {
        type: Number,
        default: 0,
      },
    },
  ],
  assignmentScores: [
    {
      assignmentId: {
        type: Schema.Types.ObjectId,
        ref: "Quiz",
      },
      courseId: {
        type: Schema.Types.ObjectId,
        ref: "Course",
      },
      score: {
        type: Number,
        default: 0,
      },
    },
  ],
  eventsAttending:[
    {
      type:Schema.Types.ObjectId,
      ref: 'Event',
      default:[]
    }
  ],
  resetPasswordCode: { type: String },
  resetPasswordExpires: { type: Date },
  bio: {
    type: String,
    default: "",
  },
  socialAccounts: {
    type: Map,
    of: String,
    default: {
      Facebook: '', // Initial value for Facebook account link
      Instagram: '', 
      LinkedIn: ''
    },
  },blocked:{
    type: Boolean,
    default: false
  }
},{
  timestamps:true
});


studentSchema.pre<IStudent>('save', async function () {
  const emailExists = await Student.exists({ email: this.email });

  if (emailExists) {
    throw new EmailExistsError('Email already exists')
  }
});

studentSchema.methods.validatePassword = async function (
  canditatePassword: string
): Promise<boolean> {
  const isMatch = await bcrypt.compare(canditatePassword, this.password);
  return isMatch;
};

const Student: Model<IStudent> = mongoose.model<IStudent>(
  "Student",
  studentSchema
);

export default Student;
