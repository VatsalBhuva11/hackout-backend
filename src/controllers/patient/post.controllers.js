import Post from "../../models/post.model.js";
import Patient from "../../models/patient.model.js";

const createPost = async (req, res) => {
    try {
        const title = req.body.title;
        const content = req.body.content;
        const patient = req.id;

        if (!title || !content) {
            res.status(400).send('All fields are required');
        } else {
            const newPost = await Post.create({
                title,
                content,
                patient
            })
    
            const patientFound = await Patient.findByIdAndUpdate(
                patient,
                { $push: {posts: newPost._id} }
            );

    
            res.status(200).json(newPost);
        }
    
    } catch (error) {
        console.log(error);
        res.send("Some error occurred while creating the post.")
    }

}

export default createPost;