import mongoose, { Schema, Document, Model, Types } from "mongoose";
import { IStudent } from "./student";

interface IVideos extends Document { 
 videoURL: string;
 watched: boolean;

}

export interface ICourse extends Document {
  courseName: string;
  videos: Array<IVideos>;
  courseType: "Paid" | "Free";
  price: number;
  quizzes: Array<Schema.Types.ObjectId>;
  assignments: Array<Schema.Types.ObjectId>;
  zoomLink: string;
  certificate: string;
  certificateAwarded: boolean;
  review: Array<{
    student: Types.ObjectId | IStudent;
    content: string; // Review content
  } | null>; // Nullable review field
  discount: number;
  categoryTags: Array<string>;
  overview: string;
  FAQs: Schema.Types.ObjectId;
  articleLinks: Array<string>;
  keyTakeaway: string;
  videoThumbnails: Array<string>;
  enrolledStudents: Array<Schema.Types.ObjectId>;
}

const videoSchema: Schema<IVideos> = new mongoose.Schema({
  videoURL: {
    type:String,
    required:true
  },watched:{
    type:Boolean,
    required:true,
    default:false
  }
})

const courseSchema: Schema<ICourse> = new mongoose.Schema({
  courseName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 60,
  },
  videos: {
     type: [videoSchema],
     required: true
  },
  courseType: {
    type: String,
    required: true,
    enum: ["Paid", "Free"],
  },
  price: {
    type: Number,
    required:true,
    default: 0.0,
  },
  quizzes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Quiz", // Referencing the Quiz schema
    },
  ],
  assignments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Assignment",
    },
  ],

  zoomLink: {
    type: String,
    default: ''
  },
  //assuming its a boolean value
  certificate: {
    type: String,
    default: "",
  },
  certificateAwarded: {
    type: Boolean,
    default: false,
  },
  review: [
    {
      student: {
        type: Schema.Types.ObjectId,
        ref: "Student", // Referencing the Student schema
      },
      content: String,
    },
  ],
  discount: {
    type: Number,
    default: 0.0,
  },
  categoryTags: [
    {
      type: String,
      default: [],
    },
  ],
  overview: {
    type: String,
    default: "",
  },
  FAQs: {
    type: Schema.Types.ObjectId,
    ref: "FAQs",
  },
  articleLinks: [
    {
      type: String,
      default: [],
    },
  ],
  keyTakeaway: {
    type: String,
    default: "",
  },
  videoThumbnails: [
    {
      type: String,
      default: "",
    },
  ],
  enrolledStudents: [
    {
      type:String,
      ref:'Student',
      default: []
    }
  ]
});

const Course: Model<ICourse> = mongoose.model<ICourse>("Course", courseSchema);

export default Course;
