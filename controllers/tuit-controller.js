import posts from "./tuits/tuits.js";
let tuits = posts;

const createTuit = (req,res) => {
    const newTuit = req.body;
    newTuit._id = (new Date()).getTime()+'';
    newTuit.username = 'Lord Phobos';
    newTuit.avatarImage = 'phobos.png';
    newTuit.handle = 'Phobos_TWRP';
    newTuit.likes = 0;
    newTuit.dislikes = 0;
    tuits.push(newTuit);
    res.json(newTuit);
}

const findAllTuits = (req,res) => {
    res.json(tuits);
}

const updateTuit = (req,res) => {
    const tuitIdToUpdate = req.params.tid;
    const updatedTuit = req.body;
    tuits = tuits.map(t => t._id === tuitIdToUpdate ? updatedTuit : t);
    res.sendStatus(200);
}

const deleteTuit = (req,res) => {
    const tuitIdToDelete = req.params.tid;
    tuits = tuits.filter(t => t._id !== tuitIdToDelete);
    res.sendStatus(200);
}

export default(app) =>{
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}
