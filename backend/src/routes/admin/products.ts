import express from 'express';
import { addProduct, getProductReview, updateProductDiscount, updateProductQuantity } from '../../controllers/admin/products';
import { getProduct, getProducts } from '../../controllers/student/products';
const admin_products_router = express.Router();

admin_products_router.post('/product',addProduct)

admin_products_router.get('/products/:productId/reviews', getProductReview)

admin_products_router.patch('/products/:productId/quantity/update',updateProductQuantity)

admin_products_router.patch('/products/:productId/discount/update',updateProductDiscount)

admin_products_router.get('/products/:productId/',getProduct)

admin_products_router.get('/products/',getProducts)


export default admin_products_router 