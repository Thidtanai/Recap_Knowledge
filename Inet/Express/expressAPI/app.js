var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
require("dotenv").config();
require('./db')

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const productsRouter = require("./routes/products");
const verfyToken = require("./middleware/jwt_decode");

var app = express();

// cors
var cors = require("cors");
// const mongoose = require("mongoose");
// const { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASS } = process.env;
// mongoose
//   .connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
//     user: DB_USER,
//     pass: DB_PASS,
//   })
//   .then(() => {
//     console.log(`DB connect at port ${DB_PORT}`);
//   })
//   .catch((err) => {
//     console.log(DB_PORT, DB_HOST);
//     console.log("DB connect fail!!");
//   });
app.use(cors());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", verfyToken, usersRouter);
app.use("/products", productsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
