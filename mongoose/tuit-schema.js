import mongoose from 'mongoose';
const schema = mongoose.Schema({
    tuit: String,
    likes: {type: Number, default: 0},
    dislikes: {type: Number, default: 0},
    avatarImage: {type: String, default: "https://open.spotify.com/track/3cKzY51GRiJngSVOnOfjgl?si=9d92fe6df3764e4e"},
    postedBy: {
        username: {type: String, default: "NASA"}
    }
}, {collection: 'tuits'});

export default schema;