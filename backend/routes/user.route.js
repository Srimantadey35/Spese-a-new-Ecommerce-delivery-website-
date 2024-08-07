import {Router} from "express"
import { logOut, login, registerUser,generateRefreshToken } from "../controllers/register.controllers.js"
import { verifyJwt } from "../middlewares/auth.middleware.js"
import { userDetails } from "../controllers/userDetails.controllers.js"
import { uploadProductDetails } from "../controllers/product.controllers.js"
import { getProductDetails } from "../controllers/getProduct.controllers.js"
import { checkoutPayment } from "../controllers/checkout.controllers.js"
import { contactDetails } from "../controllers/contact.controllers.js"

const router = Router()

router.route("/register").post(registerUser)
router.route("/login").post(login)
router.route("/logout").get(verifyJwt,logOut)
router.route("/user-details").get(verifyJwt,userDetails)
router.route("/upload-product").post(verifyJwt,uploadProductDetails)
router.route("/products").get(getProductDetails)
router.route("/checkout-payment").post(checkoutPayment)
router.route("/contact").post(contactDetails)
router.route("/refreshToken").post(generateRefreshToken)


export default router
