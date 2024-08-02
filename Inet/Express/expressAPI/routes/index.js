var express = require("express");
var router = express.Router();
const Users = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/login", async (req, res, next) => {
  try {
    let { password, username } = req.body;
    let user = await Users.findOne({
      username: username,
    });
    if (!user) {
      // หาไม่เจอ
      return res.status(500).send({
        message: "login fail",
        success: false,
      });
    }
    const checkPassword = await bcrypt.compare(password, user.password);
    console.log(checkPassword);
    if (!checkPassword) {
      return res.status(500).send({
        message: "login fail",
        success: false,
      });
    }
    const { _id, firstName, lastName, email } = user;
    const token = jwt.sign(
      { _id, firstName, lastName, email },
      process.env.JWT_KEY
    );
    return res.status(201).send({
      data: { _id, firstName, lastName, email, token },
      message: "login success",
      success: true,
    });
  } catch (error) {
    return res.status(500).send({
      message: "login fail",
      success: false,
    });
  }
});

module.exports = router;
