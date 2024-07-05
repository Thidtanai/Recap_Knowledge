//Connect to database / interact with database
const slugify = require("slugify");
const Blogs = require("../models/blogs");

//Save data
exports.create = (req, res) => {
  const { title, content, author } = req.body;
  const slug = slugify(title); //กำหนด url บทความ

  //Validate
  switch (true) {
    case !title:
      return res.status(400).json({ error: "Please press title" });
      break;
    case !content:
      return res.status(400).json({ error: "Please press content" });
      break;
  }
  // res.json({
  //   data: { title, content, author, slug },
  // });

  //Create data
  Blogs.create({ title, content, author, slug }, (err, blog) => {
    if (err) {
      res.status(400).json({ error: "The title is already used." });
    }
    res.json(blog);
  });
};
