import express from 'express';
import data from './data.js';
import mongoose from 'mongoose';
import userRouter from './routers/userRouter.js';


const app = express();
mongoose.connect('mongodb://localhost/classroomeconomy', {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true,
})

app.get('/api/students/:id', (req, res) => {
    const student = data.students.find( x => x._id === req.params.id);
    if(student){
        res.send(student);
    } else {
        res.status(404).send({message: 'Student not Found'});
    }
}); 
app.get('/api/students', (req, res) => {
    res.send(data.students);
});

app.use('/api/users', userRouter)
app.get('/', (req, res) => {
    res.send('Server is Ready');
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`)
})