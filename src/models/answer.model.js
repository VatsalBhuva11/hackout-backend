import mongoose from "mongoose";

const answerSchema = new mongoose.Schema({
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor'
    },
    post :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    },
    content: {
        type: String,
        required: true
    },
    isAccepted: {
        type: Boolean,
        required: true,
        default: false,
    },
    upvotes: {
        type: Number,
        default: 0
    }
});

const Answer = mongoose.model('Answer', answerSchema);
export default Answer;