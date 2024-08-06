var express = require("express");
var router = express.Router();
const bcrypt = require("bcrypt");
const Users = require("../models/user");
const multer = require("multer");
const jwt = require("jsonwebtoken");
const { authToken } = require("../middleware/auth");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

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

/* New */
/**
 * req
 * - req.params
 * - req.query -> ต่อท้าย ? ใช้ตอนส่ง token หรือ search ยาวกว่า params
 * - req.headers -> ข้อมูลการตั้งค่าหรือ config
 * - req.body -> ข้อมูลหลายๆชุด
 */

// ex. users/1?search=user
router.post("/new/:id", authToken, async function (req, res, next) {
  const { id } = req.params;
  // const { search } = req.query;
  try {
    let user = await Users.findById(id);
    let is_pass = await bcrypt.compare(req.body.password, user.password);
    if(!is_pass){
      return res.status(500).send("wrong password")
    }
    user = {
      ...user._doc,
      is_pass,
    };
    let token = await jwt.sign(user, process.env.JWT_KEY);
    let decoded = await jwt.verify(token, process.env.JWT_KEY);
    res.send(decoded);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put("/new/:id", async (req, res, next) => {
  const { id } = req.params;
  const { username, email } = req.body;

  try {
    await Users.findByIdAndUpdate(id, { email });
    res.send("Update success");
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete("/new/:id", async (req, res, next) => {
  const { id } = req.params;

  try {
    await Users.findByIdAndDelete(id);
    res.send("Delete success");
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/new/", upload.single("profile"), async (req, res, next) => {
  const { username, email, password } = req.body;
  const { authorization } = req.headers;

  try {
    await Users.create({
      username,
      email,
      password: await bcrypt.hash(password, 10),
    });
    res.send("Create success");
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
