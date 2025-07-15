import express from "express";
import { cancelOrderController, getUserOrdersController, placeOrderController } from "../controllers/orderController.js";
import { requiredSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/place", requiredSignIn, placeOrderController);
router.get("/me", requiredSignIn, getUserOrdersController);
router.delete("/cancel/:orderId", requiredSignIn, cancelOrderController);

export default router;
