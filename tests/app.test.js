const { request } = require("express");
const require = require("supertest");
const app = express("/home/jared/Desktop/Universidad/6toCiclo/DesarrolloSoftware/Actividad1/devops-practice/src/app.js");

//describe(...): Es una función proporcionada por Jest que agrupa varias pruebas relacionadas. 
//En este caso, agrupa las pruebas relacionadas con la ruta GET /
describe("GET /",() =>{
    //it(...): Es otra función proporcionada por Jest, usada para definir una prueba individual.
    it("Should return Hello World!",async ()=>{
        //nos retorna la respuesta del servidor ante nuestra solicitud!
        const response = request(app).get("/");
        //Pruebas
        expect(respose.statusCode).toEqual(200); //nos retorne 200 httpStatus
        expect(response.text).toBe  ("Hello World!") //nuestro Hello World
    });
});