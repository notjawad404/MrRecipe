import BadRequestError from "../../errors/bad-request";
import NotFoundError from "../../errors/not-found";
import {
  findProductAndAddToCart,
  findCartByStudentId,
  findProductAndRemoveFromCart,
  findProductAndUpdateQuantity,
} from "../../queries/student/cart";
import { findStudentById } from "../../queries/student/student";

const removeItemFromCart = async (
  studentId: string,
  itemId: string,
  itemType: string,
  quantity: number
): Promise<void> => {
  const student = await findStudentById(studentId);
  if (!student) {
    throw new NotFoundError("Student not found");
  }

  // Find the cart for the student
  const cart = await findCartByStudentId(studentId);
  // Check if the cart exists
  if (!cart) {
    throw new NotFoundError("Cart not found");
  }

  const itemExists = cart.items.some(
    (item) => item.itemId.toString() === itemId
  );

  if (!itemExists) {
    throw new BadRequestError(`${itemType} not found in cart`);
  }

  // Items to be removed
  const itemsToRemove = [];

  if (itemId) {
    itemsToRemove.push({ itemType, itemId, quantity });
  }
  // Remove the items from the cart
  const updatedCart = await findProductAndRemoveFromCart(
    studentId,
    itemsToRemove
  );

  if (!updatedCart) {
    throw new BadRequestError("Item could not be removed");
  }
};

export const updateItemQuantityService = async (
  studentId: string,
  productId: string,
  quantity: number
) => {
  const student = await findStudentById(studentId);
  if (!student) {
    throw new NotFoundError("Student not found");
  }

  // Find the cart for the student
  const cart = await findCartByStudentId(studentId);
  // Check if the cart exists
  if (!cart) {
    throw new NotFoundError("Cart not found");
  }

  const itemExists = cart.items.some(
    (item) => item.itemId.toString() === productId
  );

  if (!itemExists) {
    throw new BadRequestError(`Item not found in cart`);
  }
  const updatedCart = await findProductAndUpdateQuantity(
    studentId,
    productId,
    quantity
  );
  if (!updatedCart) {
    throw new BadRequestError(`Cart could not be updated`);
  }
};

export const removeProductFromCartService = async (
  studentId: string,
  productId: string,
  quantity: number
) => {
  await removeItemFromCart(studentId, productId, "Product", quantity);
};

export const removeCourseFromCartService = async (
  studentId: string,
  courseId: string,
  quantity: number
) => {
  await removeItemFromCart(studentId, courseId, "Course", quantity);
};

export const addItemToCart = async (
  studentId: string,
  itemId: string,
  itemType: string,
  quantity: number
): Promise<void> => {
  const student = await findStudentById(studentId);
  if (!student) {
    throw new NotFoundError("Student not found");
  }

  const cart = await findCartByStudentId(studentId);

  // Check if the cart exists
  if (!cart) {
    throw new NotFoundError("Cart not found");
  }
  let itemsToAdd = [];
  if (itemId) {
    itemsToAdd.push({ itemType, itemId, quantity });
  }

  const itemExists = cart.items.some(
    (item) => item.itemId.toString() === itemId && item.quantity === quantity
  );

  const itemExistWithDifferentQuantity = cart.items.some(
    (item) => item.itemId.toString() === itemId && item.quantity !== quantity
  );
  if (itemExists) {
    throw new BadRequestError("Item already in Cart");
  }
  if (itemExistWithDifferentQuantity) {
    const updatedCart = await findProductAndUpdateQuantity(
      studentId,
      itemId,
      quantity
    );
    if (!updatedCart) {
      throw new BadRequestError("Item could not be added");
    }
    return;
  }

  const updatedCart = await findProductAndAddToCart(studentId, itemsToAdd);
  if (!updatedCart) {
    throw new BadRequestError("Item could not be added");
  }
};

export const addCourseToCartService = async (
  studentId: string,
  courseId: string,
  quantity: number
) => {
  await addItemToCart(studentId, courseId, "Course", quantity);
};

export const addProductToCartService = async (
  studentId: string,
  productId: string,
  quantity: number
) => {
  await addItemToCart(studentId, productId, "Product", quantity);
};
