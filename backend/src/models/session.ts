import mongoose, { Schema, Document, Model } from "mongoose";

export interface IAttendee extends Document {
  instructor: Schema.Types.ObjectId;
  student: Schema.Types.ObjectId;
  sessionConfirmed: boolean;
  timeSlot: ITimeslot;
}

export interface ITimeslot extends Document {
  time: string;
  date: Date;
}

export interface ISession extends Document {
  availableTimeSlots: Array<ITimeslot>;
  sessions: Array<IAttendee>;
}

const sessionSchema = new Schema<ISession>({
  availableTimeSlots: {
    type: [
      {
        time: {
          type: String,
          required: true,
          unique: true,
        },
        date: {
          type: Date,
          required: true,
          unique: true,
        },
      },
    ],
    required: true,
  },
  sessions: [
    {
      instructor: {
        type: Schema.Types.ObjectId,
        ref: "Instructor",
        default: null
      },
      student: {
        type: Schema.Types.ObjectId,
        ref: "Student",
      },
      sessionConfirmed: {
        type: Boolean,
        default: false,
      },
      timeSlot: {
        time: {
          type: String,
          required: true,
        },
        date: {
          type: Date,
          required: true,
        },
      },
    },
  ],
});

const Session: Model<ISession> = mongoose.model<ISession>(
  "Session",
  sessionSchema
);

export default Session;
