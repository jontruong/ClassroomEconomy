import bcrypt from "bcryptjs";

const data = {
    users:[
        {
            name:"Jon",
            password: bcrypt.hashSync("1234", 8),
            isAdmin: true,
        },
        {
            name:"Joe",
            password: bcrypt.hashSync("Password1!", 8),
            isAdmin: true,   
        }
    ],
    students:[
       {
           name: "Aris",
           image: "/images/pikachu.png",
           grade:"2nd",
           points: 100,
       },
       {
           name:"Evan",
           image:"/images/pikachu.png",
           grade: "5th",
           points: 23,
       },
       {
           name:"Emma",
           image:"/images/pikachu.png",
           grade: "2nd",
           points: 56
       },
       {
            name:"Tyler",
            image:"/images/pikachu.png",
            grade: "5th",
            points: 25
    },{
            name:"Sophia",
            image:"/images/pikachu.png",
            grade: "2nd",
            points: 45
    }
    ]
}

export default data;