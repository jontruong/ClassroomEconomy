import bcrypt from 'bcryptjs';

const data = {
    users:[
        {
            name:'Jon',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name:'Jon',
            password: bcrypt.hashSync('Password1!', 8),
            isAdmin: true,   
        }
    ],
    students:[
       {
           _id:'1',
           name: 'Aris',
           image: '/images/pikachu.png',
           grade:'2nd',
           points: 100,
       },
       {
           _id:'2',
           name:'Evan',
           image:'/images/pikachu.png',
           grade: '5th',
           points: 23,
       },
       {
           _id:'3',
           name:'Emma',
           image:'/images/pikachu.png',
           grade: '2nd',
           points: 56
       },
       {
            _id:'4',
            name:'Tyler',
            image:'/images/pikachu.png',
            grade: '5th',
            points: 25
    },{
            _id:'5',
            name:'Sophia',
            image:'/images/pikachu.png',
            grade: '2nd',
            points: 45
    }
    ]
}

export default data;