import mongoose, { Document, Schema, Model } from "mongoose";

// Interface for FAQ
interface IFAQ extends Document {
  courseId: Schema.Types.ObjectId;
  numberOfQuestions: number;
  questions: Array<{ question: string; answer: string }>;
}

const faqSchema = new Schema<IFAQ>({
  courseId: {
    type: Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  numberOfQuestions: {
    type: Number,
    required: true,
  },
  questions: [
    {
      question: { type: String, required: true },
      answer: { type: String, required: true },
    },
  ],
});

// Create the Model
const FAQ: Model<IFAQ> = mongoose.model("FAQ", faqSchema);

export default FAQ;
