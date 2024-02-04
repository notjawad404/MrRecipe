import mongoose, { Schema, Document } from 'mongoose';
import { ICourse } from './course';

export interface IBundledCourses extends Document {
  course1: Schema.Types.ObjectId | ICourse;
  course2: Schema.Types.ObjectId | ICourse;
  totalPrice: number;
  discount: number;
}

const bundledCoursesSchema: Schema<IBundledCourses> = new mongoose.Schema({
  course1: {
    type: Schema.Types.ObjectId,
    ref: 'Course',
    required: true,
  },
  course2: {
    type: Schema.Types.ObjectId,
    ref: 'Course', 
    required: true,
  },
  totalPrice: {
    type: Number,
    default: function () {
      // Default value calculated based on prices of course1 and course2
      const course1Price = (this as any).course1.price || 0;
      const course2Price = (this as any).course2.price || 0;
      return course1Price + course2Price;
    },
  },
  discount: {
    type: Number,
    required: true,
  },
});

const BundledCourses = mongoose.model<IBundledCourses>('BundledCourses', bundledCoursesSchema);

export default BundledCourses;
