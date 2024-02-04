import mongoose, { Document, Schema,Model } from "mongoose";


export interface IQuizQuestion  extends Document {
  questionText: string;
  score: number;
  answers: string[];
  typeOfQuestion: string;
  choices: string[];
}

// Interface for Quiz
export interface IQuiz extends Document {
  time: number;
  name: string;
  prerequisiteLesson: number; //Lesson number
  courseId: Schema.Types.ObjectId;
  questionNumbers: number;
  status: "Unlocked" | "Locked";
  totalMarks: number;
  questions: Array< IQuizQuestion >;
}

// Schema for Quiz
const quizSchema = new Schema<IQuiz>({
  time: { type: Number, required: true },
  courseId: { type: Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
  prerequisiteLesson: { type: Number, dafault: 0 },
  questionNumbers: { type: Number, required: true },
  status: { type: String, required: true, enum: ["Unlocked", "Locked"] },
  totalMarks: { type: Number, required: true },
  questions: [
    {
      score: { type: Number, required: true },
      questionText: { type: String, required: true },
      answers: [{ type: String }],
      typeOfQuestion: { type: String, required: true },
      choices: [{ type: String }],
    },
  ],
});

// Create the Model
const Quiz:Model<IQuiz> = mongoose.model<IQuiz>("Quiz", quizSchema);

export default Quiz;
