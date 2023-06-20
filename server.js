const express = require('express');
const app = express();//app is a backend application

app.get("/",(req,res)=>{
    res.send("welcome to my Clark's backend application");
});// forward slash means the context root of the application, or the url without

app.get("/clark",(req,res)=>{
    res.send("Hello Clark!");
});

app.listen(3000, ()=>{
    console.log("Listening");
});