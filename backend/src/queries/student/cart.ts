import Cart, { ICart } from "../../models/cart";
import WishList, { IWishList } from "../../models/wishList";




interface IItemsArray {
    itemType: string;
    itemId: string;
    quantity: number;
  }

  

export const findProductAndUpdateQuantity = async (studentId:string,productId:string,newQuantity:number):Promise<ICart> =>{
    const cart = await Cart.findOneAndUpdate(
      { 
        studentId,
        "items.itemId": productId 
      },
      {
        $set: {
          "items.$.quantity": newQuantity  // Update part using the positional $ operator
        }
      },
      {
        runValidators: true,
        new: true
      }
    );
  return cart
}

export const findProductAndRemoveFromCart = async (
    studentId: string,
    itemsToRemove: Array<IItemsArray>
  ): Promise<ICart> => {
    const cart = await Cart.findOneAndUpdate(
      { studentId },
      {
        $pull: {
          items: {
            itemType: { $in: itemsToRemove.map((item) => item.itemType) },
            itemId: { $in: itemsToRemove.map((item) => item.itemId) },
            quantity: { $in: itemsToRemove.map((item) => item.quantity) },
          },
        },
      },
      {
        runValidators: true,
        new: true,
      }
    );
    return cart
  };



  export const findProductAndAddToCart = async (
    studentId: string,
    itemsToAdd: Array<IItemsArray>
  ): Promise<ICart> => {
    const cart =await Cart.findOneAndUpdate(
      { studentId },
      { $push: { items: itemsToAdd } }, // Use $push to add items to the array
      {
        runValidators: true,
        new: true,
        upsert: true, // Creates a new wishlist if it doesn't already exist
      }
    );
    return cart
  };
  

  
export const findCartByStudentId = async (
    studentId: string
  ): Promise<ICart> => {
    const cart = await Cart.findOne({ studentId }).lean();
    return cart;
  };