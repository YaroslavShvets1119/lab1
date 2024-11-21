class PostModel {
    constructor() {
        this.posts = [
            { 
                id: 1, 
                title: 'Welcome to Investment Blog', 
                content: 'This is the first post about investing tips and financial news.', 
                category: 'Tips', 
                date: new Date() 
            }
        ];
    }

    getAllPosts() {
        return this.posts;
    }

    getPostById(id) {
        return this.posts.find(post => post.id === parseInt(id));
    }

    addPost(post) {
        this.posts.push(post);
    }
}

module.exports = new PostModel();
