import dotenv from 'dotenv'
dotenv.config();
import express from "express";
import cors from 'cors'
import mongoose from "mongoose";
import bodyParser from 'body-parser';

const app = express()
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

function establishMongooseConnection(dbName) {
    mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.gy84sde.mongodb.net/${dbName}?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log(`Connected to the mongodb of ${dbName}`)
    })
    .catch((error) => {
        console.log("Mongod connection error; ", error)
    })
}

establishMongooseConnection("BlogPost")


app.post("/hello",(req, res)=>{
    const {page, item, postHeading, postPara, postMajor}=req.body;
    console.log(page, item, postHeading, postPara, postMajor)
    res.json({message:"the data has been sent"})
})

app.listen(5000, () => {
    console.log("The App has started listen on port 5000")
})