const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config(); //use with .env file
const blogRoute = require("./routes/blog")

const app = express(); //create express web server

//connect cloud database
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: false,
  })
  .then(() => console.log("เชื่อมต่อเรียบร้อย"))
  .catch((err) => console.log(err));

//middleware
app.use(express.json()); //REST API with json
app.use(cors());
app.use(morgan("dev")); //filter request

//route
app.use('/api',blogRoute)   //api/blog

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Start server in port ${port}`));
