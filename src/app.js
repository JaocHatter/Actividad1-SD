// De esta manera importas la libreria express para hacer aplicaciones web
const express = require("express");
//Instanciamos la variables express!
const app = express();


// PRIMER ENDPOINT
//app.get(enpoint, (REQues,RESponse))
app.get("/",(req,res) => {
    res.send("Hello World!");
});

//SEGUNDO ENDPOINT
app.get("/camera_status", (req,res)=>{
    const camera_status = [
        {id: 1 , status: "online"},
        {id: 2, status: "offline"},
        {id: 3, status: "online"},
    ];
    res.json(camera_status)
});

module.exports = app;