import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routers/userRouter.js';
import studentRouter from './routers/studentRouter.js';


dotenv.config()
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true}));
/*Mongodb*/
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/classroomeconomy', {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true,
})


app.use('/api/users', userRouter);
app.use('/api/students', studentRouter);
app.get('/', (req, res) => {
    res.send('Server is Ready');
});

app.use((err, req, res, next) => {
    res.status(500).send({message: err.message})
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`)
})