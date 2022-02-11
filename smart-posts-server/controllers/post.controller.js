const { default: slugify } = require("slugify");
const Post = require("../model/post.model");

//get all posts
const GetPosts = (req, res) => {
    Post.find({})
        .sort({ createdAt: -1 })
        .exec((err, posts) => {
            if (err) res.json(err);
            res.json(posts);
    })
}

//read one
const read = (req, res) => {
    const { slug } = req.params;
    Post.findOne({ slug })
        .exec((err, post) => {
            if (err) console.log(err);
             return res.json(post);
        })
    
    
}


//Create post
const CreatePost = (req, res) => {
    const { title, content, user, imgUrl } = req.body;
    
    //validating
    if (!title || !content)
    {
        return res.status(400).json({ error: "Title or Content is missing" });
        }

    const slug = slugify(title);

    Post.create({
        title,
        content,
        user,
        slug,
        imgUrl
    }, (err, post) => {
        if (err) {
            return res.status(400).json({ error: `Duplicate Post ` })
        }
        res.status(200).json(post);
    });

    

}

const update = (req, res) => {
    const { title, content, user, imgUrl } = req.body;
    //validating
    if (!title || !content)
    {
        return res.status(400).json({ error: "Title or Content is missing" });
        }
    const { slug } = req.params;
    const newSlug = slugify(title);

    Post.findOneAndUpdate({ slug }, { title, content, user, imgUrl, slug: newSlug }, { new: true })
        .exec((err, post) => {
            if (err) console.log(err);
            res.json(post);
        });
}


const remove = (req, res) => {
    const { slug } = req.params;
    Post.findOneAndDelete({ slug })
        .exec((err, post) => {
            if (err) console.log(err);
            res.json({ msg: "Post Deleted" });
    })
}

module.exports = {
    CreatePost,
    GetPosts,
    read,
    update,
    remove
}