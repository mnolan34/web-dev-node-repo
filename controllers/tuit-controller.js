import {findAllTuits, deleteTuit, createTuits, updateTuit} from "../dao/tuits-dao.js";

const createTuit = async (req,res) => {
    const newTuit = req.body;
    const insertedTuit = await createTuit(newTuit);
    //newTuit._id = (new Date()).getTime()+'';
    //newTuit.username = 'Lord Phobos';
    //newTuit.avatarImage = "https://i.scdn.co/image/ab6761610000e5eba6202a799672fa3ad8f63023";
    //newTuit.handle = 'Phobos_TWRP';
    //newTuit.likes = 0;
    //newTuit.dislikes = 0;
    //tuits.push(newTuit);
    res.json(insertedTuit);
}

const findAllTuits = async (req,res) => {
    const tuits = await findAllTuits()
    res.json(tuits);
}

const updateTuit = async (req,res) => {
    const tuitIdToUpdate = req.params.tid;
    const updatedTuit = req.body;
    const status = await updateTuit(tuitIdToUpdate, updatedTuit);
    //tuits = tuits.map(t => t._id === tuitIdToUpdate ? updatedTuit : t);
    //res.sendStatus(200);
    res.send(status);
}

const deleteTuit = async (req,res) => {
    const tuitIdToDelete = req.params.tid;
    const status = await deleteTuit(tuitIdToDelete);
    //tuits = tuits.filter(t => t._id !== tuitIdToDelete);
    //res.sendStatus(200);
    res.send(status);
}

export default(app) =>{
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}
