import mongoose, { Document, Schema } from "mongoose";

// Define an interface for the quiz question
export interface IQuestion extends Document {
  question: string;
  options: [string, string, string, string]; // Four string options
}
export interface ITribalTest extends Document {
  quiz: Array<IQuestion>;
}

const questionSchema = new Schema<IQuestion>({
  question: {
    type: String,
    required: true,
  },
  options: {
    type: [String],
    required: true,
    validate: {
      validator: function (val: string[]) {
        return val.length === 4; // Validate that there are exactly 4 options
      },
      message: "Four options are required",
    },
  },
});

// Define the schema
const TribalTestSchema = new Schema<ITribalTest>({
  quiz: [questionSchema],
});

// Create and export the Mongoose model
const TribalTest = mongoose.model<ITribalTest>(
  "TribalTest",
  TribalTestSchema
);

export default TribalTest;
