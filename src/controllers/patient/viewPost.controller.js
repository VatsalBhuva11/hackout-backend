import Post from "../../models/post.model.js";

const viewPost = async (req, res) => {
    const postId = req.params.postId;
    const post = await Post.findById(postId);
    if (!post) {
        res.status(404).send("Post not found, please check again.")
    } else {
        const creator = post.patient;
        console.log(creator);
        console.log(req.id);
        if (creator.toString() !== req.id) {
            res.send("Cannot access the posts of another patient.")
        } else {
            res.status(200).json(post);
        }
    }
}

export default viewPost;