import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes"
import { addCourseToCartService, addProductToCartService, removeCourseFromCartService, removeProductFromCartService, updateItemQuantityService } from "../../services/student/cart";

// Removes a product from the cart
// Allows query params i.e
// product: ID of the ecommerce product that is to be removed from the cart
export const removeProductFromCart = async (req: Request, res: Response) => {
    const { studentId , productId} = req.params;
    const {quantity=1} = req.body;
    await removeProductFromCartService(studentId, productId,quantity);
    res
      .status(StatusCodes.OK)
      .send({ success: true, message: "Removed from cart successfully" });
  };



// Updates the quantity of an item (product, course) present in the cart
export const updateItemQuantity = async (req:Request, res:Response) =>{
  const { studentId , itemId} = req.params;
  const { quantity } = req.body;
  await updateItemQuantityService(studentId, itemId, quantity)
  res
  .status(StatusCodes.OK)
  .send({ success: true, message: "Cart updated successfully" });
};



// Removes course from the cart
// Allows query params i.e
// course: ID of the course that is to be removed from the cart
export const removeCourseFromCart = async (req: Request, res: Response) => {
  const { studentId,courseId } = req.params;
  const {quantity=1} = req.body;
  await removeCourseFromCartService(studentId, courseId,quantity);
  res
    .status(StatusCodes.OK)
    .send({ success: true, message: "Removed from cart successfully" });
};



// Adds products or courses to cart
export const addCourseToCart = async (req: Request, res: Response) => {
    const { studentId, courseId } = req.params;
    const {quantity=1} = req.body;
    await addCourseToCartService(studentId, courseId,quantity);
    res
      .status(StatusCodes.OK)
      .send({ success: true, message: "Added to cart successfully" });
  };


  // Adds products or courses to cart
export const addProductToCart = async (req: Request, res: Response) => {
  const { studentId,productId } = req.params;
  const {quantity=1} = req.body;
  await addProductToCartService(studentId, productId,quantity);
  res
    .status(StatusCodes.OK)
    .send({ success: true, message: "Added to cart successfully" });
};