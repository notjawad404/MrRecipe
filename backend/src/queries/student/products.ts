import ProductReview, { IProductReview } from "../../models/productReviews";
import Product, { IProduct } from "../../models/products";


export const createNewProductReview = async (
    productId: string,
    studentId: string,
    review: string
  ):Promise<IProductReview> => {
    const productReview = await ProductReview.create({
      productId,
      studentId,
      review,
    });
    return productReview;
  };
  


  export const findAllProducts =  async ():Promise<Array<IProduct>> =>{
    const products = await Product.find({})
    return products
  }

  
  export const findProductById =  async (productId:string):Promise<IProduct> =>{
    const products = await Product.findById(productId)
    return products
  }
