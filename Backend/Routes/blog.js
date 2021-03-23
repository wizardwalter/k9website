var express = require("express");
var router = express.Router();
const blogController = require("../Controllers/blogController");


router.post("/create", blogController.createBlog);

router.get("/get", blogController.getBlogs);











module.exports = router;