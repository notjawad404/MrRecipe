import mongoose, { Model, Schema, Document } from "mongoose";

export interface INotification extends Document {
  studentId: Schema.Types.ObjectId;
  content: string;
  sentBy: "Medology" | "Course" | "Event";
}

const noticationSchema: Schema<INotification> = new mongoose.Schema({
  studentId: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  sentBy: {
    type: String,
    required: true,
    enum: ["Modology", "Course", "Event"],
  },
});

const Notification: Model<INotification> = mongoose.model<INotification>(
  "Notification",
  noticationSchema
);
export default Notification;
