import express from 'express';
import bcrypt from 'bcryptjs';
import expressAsyncHandler from 'express-async-handler'
import User from '../models/userModel.js';
import data from '../data.js';
import { generateToken } from '../utils.js';



const userRouter = express.Router();

userRouter.post('/signin', expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ name: req.body.name });
    if(user){
        if(bcrypt.compareSync(req.body.password, user.password)){
            res.send({
                _id: user._id,
                name: user.name,
                isAdmin: user.isAdmin,
                token: generateToken(user)
            });
            return;
        }
    }
    res.status(401).send({message: 'Invalid name or password'})
})
);

userRouter.get('/seed', expressAsyncHandler(async (req,res)=> {
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers })
}));

export default userRouter;