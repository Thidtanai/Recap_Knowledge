var express = require("express");
var router = express.Router();
const bcrypt = require("bcrypt");
const Users = require("../models/user");

/* GET users listing. */
router.get("/", async (req, res, next) => {
  try {
    const users = await Users.find();
    return res.status(200).send({
      data: users,
      message: "success",
      success: true,
    });
  } catch (error) {
    return res.status(500).send({
      message: "fail",
      success: false,
    });
  }
});

router.post("/", async (req, res, next) => {
  try {
    let { password, username, firstName, lastName, email } = req.body;
    let hashPassword = await bcrypt.hash(password, 10);
    const newUser = new Users({
      username,
      password: hashPassword,
      firstName,
      lastName,
      email,
    });
    const user = await newUser.save();
    return res.status(200).send({
      data: { _id: user._id, username, firstName, lastName, email },
      message: "create success",
      success: true,
    });
  } catch (error) {
    return res.status(500).send({
      message: "create fail",
      success: false,
    });
  }
});

module.exports = router;
