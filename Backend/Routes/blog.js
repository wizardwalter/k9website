var express = require("express");
var router = express.Router();
const blogController = require("../Controllers/blogController");


router.post("/create", blogController.createBlog);

router.get("", blogController.getBlogs);

router.get("/:id", blogController.getBlog);

router.put("/:id", blogController.editBlog);

router.delete("/:id", blogController.deleteBlog);


module.exports = router;