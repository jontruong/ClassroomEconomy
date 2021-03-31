import express from 'express';
import data from '../data.js';
import Student from '../models/studentModel.js';
import expressAsyncHandler from 'express-async-handler';


const studentRouter = express.Router();

studentRouter.get('/', expressAsyncHandler(async (req, res) => {
    const students = await Student.find({});
    res.send(students);
})
)

studentRouter.get('/seed', expressAsyncHandler(async(req, res) => {
    const createdStudents = await Student.insertMany(data.students);
    res.send({ createdStudents });
})
);

studentRouter.get('/:id', expressAsyncHandler(async(req, res) => {
    const student = await Student.findById(req,params.id);
    if(student){
        res.send(student)
    } else {
        res.status(404).send( { message: 'Student not Found'});
    }
}))

export default studentRouter;