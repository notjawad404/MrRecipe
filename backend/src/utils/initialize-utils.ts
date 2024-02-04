import Cart, { ICart } from "../models/cart";
import WishList from "../models/wishList";
import { IWishList } from "../models/wishList";
export const initializeWishListAndCart = async (
  studentId: string
): Promise<[IWishList,ICart]> => {
  const wishList = await WishList.create({
    studentId,
  });
  const cart = await Cart.create({
    studentId
  })

  return [wishList,cart];
};
