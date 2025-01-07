import express from "express";
import mongoose from "mongoose"
const app = express();




app.use(express.static('public'))

app.use(express.urlencoded({extended:true}));



const url = "mongodb://127.0.0.1:27017/myData"
mongoose.connect(url).then(()=>{
    console.log("mongodb connect")
    app.listen(3000,()=>{
        console.log("server host 3000")
    })
}).catch(()=>{
    console.log("error occur")
});




app.get("/",(req,res)=>{
    // res.send("response set")
    res.sendFile("index.html")
})

app.post("/add",(req,res)=>{
    res.send("addfile")
   console.log(req.body,"request body")
})

