import Post from "../../models/post.model.js";
import Patient from "../../models/patient.model.js";
import Answer from "../../models/answer.model.js";

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

const upvoteAnswer = async (req, res) => {
    const answerId = req.params.answerId;
    const id = req.id;
    const answer = await Answer.findById(answerId)
    if (!answer) {
        res.status(404).send("No such answer found.")
    } else {
        if (answer.upvotes.some(objId => objId.equals(id))) {
            res.send("Cannot upvote the answer again");
        } else if (answer._id === id) {
            res.send("Cannot upvote your own answer");
        } else {
            answer.upvotesCount += 1;
            answer.upvotes.push(id);
            answer.save()
                .then(updatedAns => res.status(200).json(updatedAns))
                .catch(err => res.send("Error occurred while upvoting answer: ", err));
        }
    }

}

export { createPost, upvoteAnswer };