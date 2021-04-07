var express = require("express");
var router = express.Router();
const blogController = require("../Controllers/blogController");


router.post("/create", blogController.createBlog);

router.get("/blogs", blogController.getBlogs);

router.get("/blogs/:id", blogController.getBlog);











module.exports = router;