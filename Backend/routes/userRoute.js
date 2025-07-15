import express from "express"
import { loginController, registerController, updateProfileController} from "../controllers/userController.js"
import {requiredSignIn,isAdmin} from "../middlewares/authMiddleware.js"
// router obj
const router=express.Router()

// register || post
router.post("/register",registerController )

// login || post
router.post("/login",loginController )

// update route
router.put("/update-profile", requiredSignIn, updateProfileController);

export default router