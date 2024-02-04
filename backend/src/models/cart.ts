import mongoose, { Document, Model, Schema } from "mongoose";

export interface ICartItems extends Document {
  itemType: 'Course'|'Product';
  itemId: Schema.Types.ObjectId;
  quantity: number;
}

export interface ICart extends Document {
  studentId: Schema.Types.ObjectId;
  items: Array<ICartItems>;
}

const cartItemSchema: Schema<ICartItems> = new mongoose.Schema({
  itemType:{
    type:String,
    required:true,
    enum:['Course','Product']
  },
  itemId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const cartSchema: Schema<ICart> = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  items: [cartItemSchema],
});
const Cart: Model<ICart> = mongoose.model<ICart>("Cart", cartSchema);

export default Cart;
