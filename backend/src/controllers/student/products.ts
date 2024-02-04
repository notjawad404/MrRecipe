import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes"
import { addProductReviewService, getProductService, getProductsService } from "../../services/student/products"
export const addProductReview = async (req:Request, res:Response) => {
    const {studentId,productId} = req.params
    const {review} = req.body
    const productReview = await addProductReviewService(productId,studentId,review)
    res.status(StatusCodes.CREATED).send({success:true,productReview})

}


  export const getProducts= async (req: Request, res: Response) =>{
    const products = await getProductsService()
    res.status(StatusCodes.OK).send({ success: true, products})
  }
  

  export const getProduct= async (req: Request, res: Response) =>{
    const {productId} = req.params
    const products = await getProductService(productId)
    res.status(StatusCodes.OK).send({ success: true, products})
  }
  