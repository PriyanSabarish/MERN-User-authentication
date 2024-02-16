const {register, login} = require("D:\\login\\server\\Controllers\\AuthControllers.js")
const { checkUser } = require("D:\\login\\server\\Middlewares\\AuthMiddleware.js");
const express = require("express");
const router = express.Router();
const cors = require("cors");

router.use(cors({
    origin : ["http://localhost:3000"],
    credentials: true
}));


//router.post("/", checkUser); 
router.post("/register",register);
router.post("/login",login);

module.exports = router;