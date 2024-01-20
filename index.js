const express = require('express');

const app = express();
const port = 5050;

app.get("/", (req,res) =>{
    res.send("my server in express");
});

app.listen(port, ()=>{
    console.log("my port is " + port);
});