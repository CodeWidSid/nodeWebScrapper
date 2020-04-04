const Post = require('../model/include').postModel

exports.getAdmin = (req,res,next)=>{
    res.render('admin');
}

exports.postEditAdmin = (req,res,next)=>{
    editPostId = req.query.editId;
    Post.fetchPostById(editPostId,data=>{
        res.render('edit', {postData : data});
    })
}
