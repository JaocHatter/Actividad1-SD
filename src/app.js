const express = require("express");
//Instanciamos la variables express!
const app = express();

//app.get(enpoint, (REQues,RESponse))
app.get("/",(req,res) => {
    res.send("Hello World!");
});

const port = process.env.port||3000; //Proceso trabajado en el puerto 3000

app.listen(port,()=>{
    console.log("Server running on port ${port}");
});

module.exports = app;