const Post = require('../model/include').postModel

exports.getIndex = (req,res,next)=>{
    Post.fetchPosts(data=>{
        res.render('index',{posts:data, pagetitle:'Sample App'});
    })
}

exports.postIndex = async (req,res,next)=>{
    let post = new Post(req.body.postHeader,req.body.imgUrl, req.body.postContent);
    if(req.body.editFlagId){
        let newData = { header : req.body.postHeader,
        imageUrl : req.body.imgUrl,
        content : req.body.postContent,
        id : req.body.editFlagId}
        Post.editPostById(req.body.editFlagId,newData)
        await res.redirect('/')
    }else{
        post.savePost();
        res.redirect('/');
    }
}

exports.deletePost = (req,res,next)=>{
    Post.deletePostById(req.body.deletePostId);
    res.redirect('/');
}
