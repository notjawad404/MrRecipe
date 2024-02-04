import mongoose, { Document, Model, Schema } from "mongoose";

export interface IProductReview extends Document {
  studentId: Schema.Types.ObjectId;
  productId: Schema.Types.ObjectId;
  content: string;
}

const productReviewSchema = new Schema<IProductReview>({
  studentId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  productId: { type: Schema.Types.ObjectId, required: true },
  content: {
    type: String,
    required: true,
  },
});

const ProductReview: Model<IProductReview> = mongoose.model<IProductReview>(
  "ProductReview",
  productReviewSchema
);

export default ProductReview
