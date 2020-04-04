const Post = require('../model/include').postModel

exports.getPostById = (req,res,next)=>{
    let postId = req.params.Id;
    Post.fetchPostById(postId,data=>{
        res.render('post',{post : data});
    })
}