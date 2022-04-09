import mongoose from 'mongoose';
const schema = mongoose.Schema({
    tuit: String,
    likes: {type: Number, default: 0},
    dislikes: {type: Number, default: 0},
    avatarImage: {type: String, default: "https://d3cm515ijfiu6w.cloudfront.net/wp-content/uploads/2022/04/08101009/max-verstappen-red-bull-serious-pre-australian-grand-prix-2022-planetf1.jpg"},
    postedBy: {
        username: {type: String, default: "Max Verstappen"}
    }
}, {collection: 'tuits'});

export default schema;