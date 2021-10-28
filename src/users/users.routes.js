const {Router} = require('express');
const userRouter = Router();
const {createUser, findUser, updateUser, removeUser} = require('./users.controllers')

userRouter.post('/users', createUser);
userRouter.post('/users/:username', findUser);
userRouter.put('/users', updateUser);
userRouter.delete('/users/:username', removeUser);
module.exports = userRouter