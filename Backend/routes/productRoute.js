import express from "express"
import { createProductController, deleteProductBySlugController, getProductController, getSingleProductController, updateProductController } from "../controllers/productController.js"
import { upload } from "../middlewares/uploadMiddleware.js"
import {requiredSignIn,adminOnly} from "../middlewares/authMiddleware.js"
const router=express.Router()

// routes
// router.post("/create-product" ,upload.array("photos") ,createProductController)
router.post("/create-product", requiredSignIn , adminOnly, upload.array("photos",10), createProductController);


// get products
router.get("/get-products", getProductController)

// single product
router.get("/get-product/:slug",getSingleProductController)

// del product
router.delete('/delete/:slug', deleteProductBySlugController);

router.put('/update-product/:slug', requiredSignIn, adminOnly, upload.array("photos", 10), updateProductController);


export default router