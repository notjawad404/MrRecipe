import mongoose, { Model, Document, Schema } from "mongoose";

export interface IBaseInterviewJourney extends Document {
  name: string;
  email: string;
  whatsappNumber: string;
  educationStatus: "Y13/S6" | "Gap Year" | "Postgraduate";
  programChoice: "Medicine" | "Dentistry";
  targetUniversity: string;
  UCATScore: number;
  grades: Grades;
  attendedSchool: string;
  alternativePreparationPlan: string;
  personalityType: "Introvert" | "Extrovert";
  needsFinancialAssistance: boolean;
  additionalDetails: string;
  approved: boolean;
}

export interface IInterviewJourney extends IBaseInterviewJourney {
  selectedTimeSlot: string;
  participationReason: string;
}

export interface IAcceleratedInterviewJourney extends IBaseInterviewJourney {
  canAttendClasses: boolean;
}


interface Grades {
  gcse: Array<string>;
  aLevel: Array<string>;
}

const interviewJourneySchema = new Schema<IBaseInterviewJourney>({
  name: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 20,
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
  whatsappNumber: {
    type: String,
    validate: {
      validator: function (v: string) {
        return /^\+[1-9]\d{1,14}$/.test(v); // WhatsApp number format validation
      },
      message: (props) => `${props.value} is not a valid WhatsApp number!`,
    },
    required: true,
  },
  educationStatus: {
    type: String,
    enum: ["Y13/S6", "Gap Year", "Postgraduate"],
    required: true,
  },
  programChoice: {
    type: String,
    enum: ["Medicine", "Dentistry"],
    required: true,
  },
  targetUniversity: {
    type: String,
    required: true,
  },
  UCATScore: {
    type: Number,
    required: true,
    max: 360,
    min: 0,
  },
  grades: {
    gcse: {
      type: Array<string>,
      required: true,
    },
    aLevel: {
      type: Array<string>,
      required: true,
    },
  },
  attendedSchool: {
    type: String,
    required: true,
  },

  alternativePreparationPlan: {
    type: String,
    required: true,
    min: 0,
    max: 360,
  },
  personalityType: {
    type: String,
    required: true,
    enum: ["Introvert", "Extrovert"],
  },

  needsFinancialAssistance: {
    type: Boolean,
    required: true,
    default: false,
  },
  additionalDetails: {
    type: String,
    default: "",
    min: 0,
    max: 360,
  },
  approved: {
    type: Boolean,
    default: false,
  },
}, { discriminatorKey: 'kind' })


// Schema for 'selectedTimeSlot' case
const addtionalInterviewJourneyDetailsSchema = new Schema<IInterviewJourney>({
  selectedTimeSlot: {
    type: String,
    required: true,
  },
  participationReason: {
    type: String,
    required: true,
    min: 0,
    max: 360,
  },
});

// Schema for 'canAttendedClasses' case
const acceleratedInterviewOptionsSchema = new Schema<IAcceleratedInterviewJourney>({
  canAttendClasses: {
    type: Boolean,
    required: true,
  },
});

// Create the models using the discriminators
const BaseInterviewJourney: Model<IInterviewJourney> =
  mongoose.model<IInterviewJourney>("InterviewJourney", interviewJourneySchema);

export const AcceleratedInterviewJourney = BaseInterviewJourney.discriminator(
    "AcceleratedInterviewJourneyApplicants",
    acceleratedInterviewOptionsSchema, // Pass the schema for AcceleratedInterviewJourney
  );
  
  
export const InterviewJourney = BaseInterviewJourney.discriminator(
  "InterviewJourneyApplicants",
  addtionalInterviewJourneyDetailsSchema
);
