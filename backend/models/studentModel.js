import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    name: {type: String, unique: true},
    image: {type: String},
    grade: {type: String},
    points: {type: Number}
},
{
    timestamps: true
})

const Student = mongoose.model("Student", studentSchema);

export default Student;