const { Router } = require("express");
const express = require("express");
const userRouter= require("./Routers/userRouter");
const planRouter = require("./Routers/planRouter");
const reviewRouter = require("./Routers/reviewRouter")
const bookingRouter = require("./Routers/bookingRouter");
//const authRouter= require("./Routers/authRouter");
const cookieParser = require("cookie-parser");
let app = express();
var cors = require('cors');

app.use(express.urlencoded({ extended: true }));

const port = 3000||process.env.PORT ;

app.listen(port);

app.use(cors());
app.use(express.static('public/build'))
app.use(cookieParser());
app.use(express.json());




// app.get( "/user", (req, res)=>{

//     console.log("get request");
//     //console.log(req.body);
//     res.send(users);
// });

// mini app
// let authRouter = express.Router();
// let userRouter = express.Router();

app.use("/user", userRouter);
app.use("/plan", planRouter);
app.use("/review", reviewRouter);
app.use("/booking", bookingRouter);
//app.use("/auth", userRouter);


// userRouter
// userRouter
// .route("/:id")
// .get(getUserByid);









// async function createuser(){

//     let user ={
//         name :"saket",
//         email:"saket0403@gmail.com",
//         password : "saket3",
//         confirmpassword: "saket3"
//     };

//      let data = await usermodel.create(user);
//      console.log(data);

// };

// createuser();

// const planmodel = require("./models/planModel");



