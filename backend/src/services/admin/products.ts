import BadRequestError from "../../errors/bad-request";
import NoContentError from "../../errors/no-content-error";
import ProductReview from "../../models/productReviews";

import { IProduct } from "../../models/products";
import {
  createNewProduct,
  findAllProductReviews,
  findProductByIdAndUpdateDiscount,
  findProductByIdAndUpdateQuantity,
} from "../../queries/admin/products";
import { findProductById } from "../../queries/student/products";

export const addProductService = async (data: IProduct): Promise<IProduct> => {
  const product = createNewProduct(data);
  if (!product) {
    throw new BadRequestError("Product could not be added");
  }
  return product;
};

export const getProductReviewService = async (
  productId: string
): Promise<Array<string>> => {
  const productReviewsData = await findAllProductReviews(productId);
  if (productReviewsData.length === 0) {
    throw new NoContentError("No product reviews found");
  }
  const productReviews = productReviewsData.map((data) => data.content);
  return productReviews;
};

export const updateProductQuantityService = async (
  productId: string,
  quantity: number
) => {
  const updatedProduct = await findProductByIdAndUpdateQuantity(
    productId,
    quantity
  );
  if (!updatedProduct) {
    throw new Error("Product quantity could not be updated");
  }
};

export const updateProductDiscountService = async (
  productId: string,
  discount: number
) => {
  const updatedProduct = await findProductByIdAndUpdateDiscount(
    productId,
    discount
  );
  if (!updatedProduct) {
    throw new Error("Product discount could not be updated");
  }
};
