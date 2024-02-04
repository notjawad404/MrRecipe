import { Request, Response } from "express"
import {  addProductService, getProductReviewService, updateProductDiscountService, updateProductQuantityService } from "../../services/admin/products"
import { StatusCodes } from "http-status-codes"

export const addProduct = async (req:Request, res:Response) =>{
    const product = await addProductService(req.body)
    res.status(StatusCodes.CREATED).send({success:true,product})
}

export const getProductReview = async (req:Request, res:Response) => {
    const {productId} = req.params
    const reviews = await getProductReviewService(productId)
    res.status(StatusCodes.OK).send({success:true,reviews})
}

export const updateProductQuantity = async (req:Request, res:Response) => {
    const {productId} = req.params
    const {quantity} = req.body
    await updateProductQuantityService(productId,quantity)
    res.status(StatusCodes.OK).send({success:true,message:'Product quantity updated successfully'})
}

export const updateProductDiscount = async (req:Request, res:Response) => {
    const {productId} = req.params
    const {discount} = req.body
    await updateProductDiscountService(productId,discount)
    res.status(StatusCodes.OK).send({success:true,message:'Product discount updated successfully'})
}

