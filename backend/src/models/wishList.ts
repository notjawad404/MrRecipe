import mongoose, { Document, Model, Schema } from "mongoose";

export interface IWishListItems extends Document {
  itemType: 'Course'|'Product';
  itemId: Schema.Types.ObjectId;
}

export interface IWishList extends Document {
  studentId: Schema.Types.ObjectId;
  items: Array<IWishListItems>;
}

const wishlistItemSchema: Schema<IWishListItems> = new mongoose.Schema({
  itemType: {
    type: String,
    required: true,
    enum: ["Course", "Product"],
  },
  itemId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});

const wishlistSchema: Schema<IWishList> = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  items: [wishlistItemSchema],
});
const WishList: Model<IWishList> = mongoose.model<IWishList>(
  "WishList",
  wishlistSchema
);

export default WishList;
