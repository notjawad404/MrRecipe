import ProductReview, { IProductReview } from "../../models/productReviews";
import Product, { IProduct } from "../../models/products";

export const createNewProduct = async (data: IProduct): Promise<IProduct> => {
  const product = await Product.create({ ...data });
  return product;
};


export const findProductByIdAndUpdateQuantity = async (productId:string,quantity:number):Promise<IProduct> => {
  const updatedProduct = await Product.findByIdAndUpdate(
    productId,
    {quantity: quantity},
    {runValidators:true, new:true}
  )
  return updatedProduct
}

export const findProductByIdAndUpdateDiscount = async (productId:string,newDiscount:number):Promise<IProduct> => {
  const updatedProduct = await Product.findByIdAndUpdate(
    productId,
    {discount:newDiscount},
    {runValidators:true, new:true}
  )
  return updatedProduct

}


export const findAllProductReviews = async (productId:string):Promise<Array<IProductReview>> => {
  const productReview = await ProductReview.find({productId:productId})
  return productReview
}