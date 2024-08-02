const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split("Bearer ")[1];
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    req.auth = decoded;
    return next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      message: "Auth failed",
    });
  }
};
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmFjN2Q3NjNkNGNiMDI5YzBkZmU1ZjciLCJlbWFpbCI6InNvbWJvb25AZ21haWwuY29tIiwiaWF0IjoxNzIyNTg5MTU5fQ.k7LybcKoUANTNrsNd99ZCV6zylqhRsH5Llr-jnV6Hec
