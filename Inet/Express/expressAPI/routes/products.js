var express = require("express");
var router = express.Router();
const productModel = require("../models/product");
const { default: mongoose } = require("mongoose");

// upload image
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().getTime() + "_" + file.originalname);
  },
});
const upload = multer({ storage: storage });

// API
router.get("/", async (req, res, next) => {
  try {
    let products = await productModel.find();
    return res.status(200).send({
      data: products,
      message: "success",
      success: true,
    });
  } catch (error) {
    return res.status(500).send({
      message: "server",
      success: false,
    });
  }
});

router.post("/", upload.single("image"), async (req, res, next) => {
  try {
    let nameImage = "rambo.jpg";
    if (req.file){
      nameImage = req.file.filename;
    }

    const { product_name, price, amount } = req.body;
    let newProduct = new productModel({
      product_name: product_name,
      price: price,
      amount: amount,
    });
    let product = await newProduct.save();
    return res.status(201).send({
      data: product,
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

router.get("/:id", async (req, res, next) => {
  try {
    let id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send({
        message: "id Invalid",
        success: false,
        error: ["id is not a ObjectId"],
      });
    }
    let products = await productModel.findById(id);
    return res.status(200).send({
      data: products,
      message: "success",
      success: true,
    });
  } catch (error) {
    return res.status(500).send({
      message: "server error",
      success: false,
    });
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    let id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send({
        message: "id Invalid",
        success: false,
        error: ["id is not a Object"],
      });
    }
    await productModel.updateOne(
      { _id: mongoose.Types.ObjectId(id) },
      { $set: req.body }
    );
    let product = await productModel.findById(id);
    return res.status(201).send({
      data: product,
      message: "update success",
      success: true,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({
      message: "update fail",
      success: false,
    });
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    let id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send({
        message: "id Invalid",
        success: false,
        error: ["id is not a ObjectId"],
      });
    }
    await productModel.deleteOne({ _id: mongoose.Types.ObjectId(id) });
    let products = await productModel.find();
    return res.status(200).send({
      data: products,
      message: "delete success",
      success: true,
    });
  } catch (error) {
    return res.status(500).send({
      message: "delete fail",
      success: false,
    });
  }
});

module.exports = router;
