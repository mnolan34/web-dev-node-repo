import mongoose from 'mongoose';
const schema = mongoose.Schema({
    tuit: String,
    likes: {type: Number, default: 0},
    dislikes: {type: Number, default: 0},
    avatarImage: {type: String, default: "https://cdn.mos.cms.futurecdn.net/baYs9AuHxx9QXeYBiMvSLU.jpg"},
    postedBy: {
        username: {type: String, default: "NASA"}
    }
}, {collection: 'tuits'});

export default schema;