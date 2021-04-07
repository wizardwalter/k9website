const { json } = require("body-parser");
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
};
 //if im projecting _id from my param id and storing that res in blog why does it keep throwing an error and the error i get says it is coming from 
 //my backend but when i use postman i get the response back perfectly fine????? got me tweaking
module.exports.getBlog = (req,res) => {
    Blog.findById(req.params.id)
    .exec((err,blog)=> {
        if(err) {
            console.log(err); 
        } else{
            console.log(blog);
            res.json({blog:blog});
        }  
    }) 
    
}; 
    
