var express = require("express");
var router = express.Router();
const blogController = require("../Controllers/blogController");


router.post("/create", blogController.createBlog);

router.get("", blogController.getBlogs);

router.get("/:id", blogController.getBlog);











module.exports = router;