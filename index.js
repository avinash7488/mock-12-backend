const express= require("express");

const app= express();

app.get("/",(req,res)=>{
    res.send("Home Page");
})

app.listen(4500,()=>{
    console.log("server is running on port 4500");
})