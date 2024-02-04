import BadRequestError from "../../errors/bad-request";
import NotFoundError from "../../errors/not-found";
import { findStudentById } from "../../queries/student/student";
import {
  addItemsToWishList,
  findWishListByStudentId,
  removeItemsFromWishlist,
} from "../../queries/student/wishlist";

const removeItemFromWishList = async (
  studentId: string,
  itemId: string,
  itemType: string
): Promise<void> => {
  
  const student = await findStudentById(studentId)
  if(!student){
    throw new NotFoundError('Student not found')
  }

  // Find the wishlist for the student
  const wishList = await findWishListByStudentId(studentId);
  // Check if the wishlist exists
  if (!wishList) {
    throw new NotFoundError("Wishlist not found");
  }

  const itemExists = wishList.items.some(
    (item) => item.itemId.toString() === itemId
  );

  if (!itemExists) {
    throw new BadRequestError(`${itemType} not found in wishlist`);
  }

  // Items to be removed
  const itemsToRemove = [];

  if (itemId) {
    itemsToRemove.push({ itemType, itemId });
  }
  // Remove the items from the wishlist
  await removeItemsFromWishlist(studentId, itemsToRemove);
};

export const removeProductFromWishlistService = async (
  studentId: string,
  productId: string
) => {
  await removeItemFromWishList(studentId, productId, "Product");
};

export const removeCourseFromWishlistService = async (
  studentId: string,
  courseId: string
) => {
  await removeItemFromWishList(studentId, courseId, "Course");
};

export const addItemToWishList = async (
  studentId: string,
  itemId: string,
  itemType: string
): Promise<void> => {
  const student = await findStudentById(studentId)
  if(!student){
    throw new NotFoundError('Student not found')
  }
  
  const wishList = await findWishListByStudentId(studentId);

  // Check if the wishlist exists
  if (!wishList) {
    throw new NotFoundError("Wishlist not found");
  }
  let itemsToAdd = [];
  if (itemId) {
    itemsToAdd.push({ itemType, itemId });
  }

  const itemExists = wishList.items.some(
    (item) => item.itemId.toString() === itemId
  );
  if (itemExists) {
    throw new BadRequestError("Item already in wishlist");
  }
  await addItemsToWishList(studentId, itemsToAdd);
};

export const addCourseToWishlistService = async (
  studentId: string,
  courseId: string
) => {
  await addItemToWishList(studentId, courseId, "Course");
};


export const addProductToWishlistService = async (
  studentId: string,
  productId: string
) => {
  await addItemToWishList(studentId, productId, "Product");
};
