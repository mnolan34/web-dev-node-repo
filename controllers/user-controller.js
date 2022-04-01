import people from './users/user.js';
let users = people;

const userController = (app) => {
    app.get('/api/users', findAllUsers);
    app.get('/api/users/:uid', findUserById);
}


const findUserById = (req, res) => {
    const userId = req.params.uid;
    const user = users.find(u=> u._id === userId);
    res.json(user);
}



const findUsersByType =  (type) => {
    const wantedUsers = users.filter(user => user.type === type);
    return wantedUsers;
}

const findAllUsers = (req, res) => {
    const type = req.query.type;
    if(type){
        res.json(findUsersByType(type));
        return;
    }
    res.json(users);
}

export default userController;