import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        // required: true,
    },
    categrery: {
        type: String,
        // required: true,
    },
    author: {
        type: String,
        // required: true,
    },
    image:{
        type: String,
        // required: true,
    },
    // authorImg:{
    //     type: String,
    //     // required: true,
    // },
    date: {
        type: Date,
        default: Date.now,
    },
}
)

const blogmodel = mongoose.models.BlogData || mongoose.model("BlogData", blogSchema);
export default blogmodel;

