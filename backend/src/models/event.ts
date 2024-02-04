import mongoose, { Schema, Document, Types } from "mongoose";
import { IStudent } from "./student";

export interface IEvent extends Document {
  name: string;
  date: Date;
  time: string;
  shareLink: string;
  discount: number;
  attendees: number;
  price:number
  type: "webinar" | "seminar";
  feeStatus: "paid" | "free";
  location: string;
  QRCode:string;
}

const eventSchema: Schema<IEvent> = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  price:{
    type:Number,
    default:0,
    
  },
  date: {
    type: Date,
    required: true,
  },
  type: {
    type: String,
    enum: ["webinar", "seminar"],
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  feeStatus: {
    type: String,
    enum: ["paid", "free"],
    default: "free",
  },
  discount: {
    type: Number,
    default: 0,
  },
  attendees: {
    type: Number,
    default: 0,
  },
  shareLink: {
    type: String,
    default: "",
  },
  time: {
    type: String,
    required: true,
  },QRCode:{
    type:String,
    default:'',
  }
});

const Event = mongoose.model<IEvent>("Event", eventSchema);

export default Event;
