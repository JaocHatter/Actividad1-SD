const app = require("./app")

const port = process.env.PORT||3000; //Proceso trabajado en el puerto 3000
app.listen(port,()=>{
    console.log("Server running on port %i",port);
});