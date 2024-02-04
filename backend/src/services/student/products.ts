import { findStudentById } from "../../queries/student/student";
import NotFoundError from "../../errors/not-found";
import { IProductReview } from "../../models/productReviews";
import { IProduct } from "../../models/products";
import { createNewProductReview, findAllProducts, findProductById } from "../../queries/student/products";

export const addProductReviewService = async (
    productId: string,
    studentId: string,
    review: string
  ):Promise<IProductReview> => {
    const [product, student] = await Promise.all([
      findStudentById(studentId),
      findProductById(productId),
    ]);
    if (!product) {
      throw new NotFoundError("Product not found");
    }
    if (!student) {
      throw new NotFoundError("Student not found");
    }
    const productReviewData = await createNewProductReview(productId,studentId,review)
    return productReviewData
  };


  export const getProductsService = async ():Promise<Array<IProduct>> =>{
   const products = await findAllProducts()
   return products
  }


  export const getProductService = async (productId:string):Promise<IProduct> =>{
    const products = await findProductById(productId)
    return products
   }