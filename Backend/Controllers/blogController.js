const mongoose = require("mongoose");
const blog = require("../Models/blog");
const Blog = mongoose.model('blog');


module.exports.createBlog = (req,res) =>{
    var blog = new Blog();
    blog.image = req.body.image;
    blog.title = req.body.title;
    blog.text = req.body.text;
    blog.author = req.body.author;

    blog.save((err, doc) => {
        if(!err){
            res.send(doc)
        } else{
            console.log(err)
        }
    })
};

module.exports.getBlogs = (req,res) =>{
    Blog.find()
    .then(blogs => {
        res.json({blogs:blogs})
    }) 
}