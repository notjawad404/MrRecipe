import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes"
import {  addCourseToWishlistService, addProductToWishlistService, removeCourseFromWishlistService, removeProductFromWishlistService } from "../../services/student/wishlist";

// Removes a product from the wish list
// Allows query params i.e
// product: ID of the ecommerce product that is to be removed from the wish list
export const removeProductFromWishList = async (req: Request, res: Response) => {
    const { studentId , productId} = req.params;
    await removeProductFromWishlistService(studentId, productId);
    res
      .status(StatusCodes.OK)
      .send({ success: true, message: "Removed from wish list successfully" });
  };


// Removes course from the wish list
// Allows query params i.e
// course: ID of the course that is to be removed from the wish list
export const removeCourseFromWishList = async (req: Request, res: Response) => {
  const { studentId,courseId } = req.params;
  await removeCourseFromWishlistService(studentId, courseId);
  res
    .status(StatusCodes.OK)
    .send({ success: true, message: "Removed from wish list successfully" });
};



// Adds products or courses to wishlist (api check remaining)
export const addCourseToWishList = async (req: Request, res: Response) => {
    const { studentId, courseId } = req.params;
    // Array of products or courses IDs
    await addCourseToWishlistService(studentId, courseId);
    res
      .status(StatusCodes.OK)
      .send({ success: true, message: "Added to wish list successfully" });
  };


  // Adds products or courses to wishlist (api check remaining)
export const addProductToWishList = async (req: Request, res: Response) => {
  const { studentId,productId } = req.params;
  // Array of products or courses IDs
  await addProductToWishlistService(studentId, productId);
  res
    .status(StatusCodes.OK)
    .send({ success: true, message: "Added to wish list successfully" });
};