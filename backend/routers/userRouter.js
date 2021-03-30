import express from 'express';
import expressAsyncHandler from 'express-async-handler'
import User from '../models/useModel.js';
import data from '../data.js';


const userRouter = express.Router();

userRouter.get('/seed', expressAsyncHandler(async (req,res)=> {
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers })
}));

export default userRouter;