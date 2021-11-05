const { Router } = require('express');
const { auth } = require('../middleware')
const userRouter = Router();
const {createUser, findUser, updateUser, removeUser
    , authUsers
} = require('./users.controllers')

userRouter.post('/users', createUser);
userRouter.get("/users", auth, authUsers);
userRouter.post('/users/:username', findUser);
userRouter.put('/users', updateUser);
userRouter.delete('/users/:username', removeUser);
module.exports = userRouter