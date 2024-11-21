const PostModel = require('../models/postModel');

exports.getPosts = (req, res) => {
    const posts = PostModel.getAllPosts();
    res.render('postListView', { posts });
};

exports.getPost = (req, res) => {
    const post = PostModel.getPostById(req.params.id);
    res.render('postDetailView', { post });
};

exports.createPost = (req, res) => {
    const newPost = { 
        id: Date.now(), 
        title: req.body.title, 
        content: req.body.content, 
        category: req.body.category, 
        date: new Date() 
    };
    PostModel.addPost(newPost);
    res.redirect('/');
};
