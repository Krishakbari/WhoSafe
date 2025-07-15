import express from "express";
import {requiredSignIn} from "../middlewares/authMiddleware.js"
import { addToCartController, getCartController, removeFromCartController, updateQuantityController } from "../controllers/cartController.js";

const router = express.Router();

router.get("/", requiredSignIn, getCartController);
router.post("/", requiredSignIn, addToCartController);
router.delete("/:productId", requiredSignIn, removeFromCartController);
router.patch("/:productId", requiredSignIn, updateQuantityController);


export default router;