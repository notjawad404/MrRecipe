import express from 'express';
import { addProductReview, getProduct, getProducts } from '../../controllers/student/products';
import { addProductToWishList, removeProductFromWishList } from '../../controllers/student/wishlist';
import { addProductToCart, removeProductFromCart } from '../../controllers/student/cart';
const student_product_router = express.Router()

// Add product's review
student_product_router.post('/:productId/students/:studentId/add-review',addProductReview)

// Deletes a product from the wish list
student_product_router.patch('/:productId/students/:studentId/wishlist/remove',removeProductFromWishList)

// Add items to wish list
student_product_router.patch('/:productId/students/:studentId/wishlist/add', addProductToWishList)

// Adds product to cart
student_product_router.patch('/:productId/students/:studentId/cart/add', addProductToCart)

// Removes the product from cart
student_product_router.patch('/:productId/students/:studentId/cart/remove', removeProductFromCart)

// Gets the details of a specific product
student_product_router.get('/:productId', getProduct)

// Fetches all the products
student_product_router.get('/', getProducts)



export default student_product_router