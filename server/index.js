const express = require("express");
const bodyParser = require('body-parser');
const app = express()
const mongoose= require("mongoose")
const authRoutes = require("./Routes/AuthRoutes")
const cookieParser = require("cookie-parser")

// const cors = require("cors");
// app.use(cors({
//     origin : ["http://localhost:3000"],
//     methods : ["GET"],
//     credentials: true
// }));
mongoose.connect("mongodb://localhost:27017/jwt").then(() => {
    app.listen(4000, ()=> {
        console.log("Server Started")
    })
    console.log("DB connection successful");
}).catch((err) => {
    console.log(err.message);
});


app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", authRoutes);


