import tuitsModel from "../mongoose/tuits-model.js";

export const findAllTuits = () => tuitsModel.find();
export const createTuits = (tuit) => tuitsModel.create(tuit);
export const deleteTuit = (tid) => tuitsModel.deleteOne({_id: tid});
export const updateTuit = (tid, tuit) => tuitsModel.updateOne({_id: tid}, {$set: tuit});
