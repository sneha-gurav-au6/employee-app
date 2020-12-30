const express = require("express");
const router = express.Router();
const passport = require("passport");
const {
    registerUser,
    loginUser,
    getAlluser,
    EditProfile,
    deleteUser,
    createEmployee,
} = require("../controller/apiController/userApiController");

//route to user register
router.post("/user/register", registerUser);
//route to user login
router.post("/user/login", loginUser);

//route to get all user list
router.get("/getalluser", getAlluser);

//delet user
router.post("/delet-employes/:id", deleteUser);

router.post("/create-empolyee", createEmployee);

module.exports = router;
