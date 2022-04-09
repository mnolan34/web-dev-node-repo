import tuitsModel from "../mongoose/tuits-model.js";

export default class tuitDao{
    findAllTuits = () => tuitsModel.find();
    createTuit = (tuit) => tuitsModel.create(tuit);
    deleteTuit = (tid) => tuitsModel.deleteOne({_id: tid});
    updateTuit = (tid, tuit) => tuitsModel.updateOne({_id: tid}, {$set: tuit});

}