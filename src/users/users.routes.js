const { Router } = require('express');
// const { auth } = require('../middleware');

const {createUser, findUser, updateUser, removeUser, authUser} = require('./users.controllers');
const userRouter = Router();
userRouter.post('/users', createUser);
userRouter.get('/users/:username', findUser);
userRouter.put('/users', updateUser);
userRouter.delete('/users/:username', removeUser);
// userRouter.get('/users', auth, authUser);

module.exports = userRouter;