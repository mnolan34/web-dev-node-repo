import mongoose from 'mongoose';
const schema = mongoose.Schema({
    tuit: String,
    likes: {type: Number, default: 0},
    postedBy: {
        username: {type: String, default: "Lord Phobos"}
    }
}, {collection: 'tuits'});

export default schema;