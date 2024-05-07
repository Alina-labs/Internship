const express = require("express");
const router = express.Router();
const authController = require("../../controller/Auth/authController")



router.route("/signup").post(authController.SignUp);
router.route("/signin").post(authController.SignIn);
router.route("/csignup").post(authController.CSignUp);
router.route("/profile").get(authController.CProfile);
router.route("/csignin").post(authController.CSignIn);


module.exports = router;

