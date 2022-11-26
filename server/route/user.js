const express = require("express")
const { registerUser} = require("../controller/user")

const router = express.Router()

// router.route("/").get(allUser)
router.route("/").post(registerUser)
// router.post("/login", loginUser)

module.exports= router;