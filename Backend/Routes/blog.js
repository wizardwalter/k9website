var express = require("express");
var router = express.Router();
const blogController = require("../Controllers/blogController");
// const cloudinary = require("../cloudinary");
const fs = require('fs');
const upload = require("multer");
const cloud = require("../config/cloudinary_config")




router.post("/create", cloud.single("photo"), blogController.createBlog);

router.get("", blogController.getBlogs);

router.get("/:id", blogController.getBlog);

router.put("/:id", blogController.editBlog);

router.delete("/:id", blogController.deleteBlog);


module.exports = router;