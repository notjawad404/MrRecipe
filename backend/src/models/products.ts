import mongoose, { Document, Schema, Model } from "mongoose";

export interface IProduct extends Document {
  name: string;
  category: string;
  description: string;
  availability: boolean;
  discount: number;
  price: number;
  quantity: number;
  productThumbnail: string
  reviews: Schema.Types.ObjectId;
}

const productSchema = new Schema<IProduct>({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  availability: {
    type: Boolean,
    default: false,
  },
  discount: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    default: 0,
  },productThumbnail:{
    type: String,
    required: true,
  },
  reviews: {
    type: Schema.Types.ObjectId,
    ref: "ProductReview",
  },
});

const Product: Model<IProduct> = mongoose.model<IProduct>(
  "Product",
  productSchema
);
export default Product;
