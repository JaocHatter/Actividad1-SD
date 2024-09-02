const request = require("supertest");
const app = require("../src/app");

//describe(...): Es una función proporcionada por Jest que agrupa varias pruebas relacionadas. 
//En este caso, agrupa las pruebas relacionadas con la ruta GET /

describe("GET /",() =>{
    //it(...): Es otra función proporcionada por Jest, usada para definir una prueba individual.
    it("Should return Hello World!",async ()=>{
        //nos retorna la respuesta del servidor ante nuestra solicitud!
        const response = await request(app).get("/");
        //Pruebas
        expect(response.statusCode).toEqual(200); //nos retorne 200 httpStatus
        expect(response.text).toBe("Hello World!"); //nuestro Hello World
    });
});

describe("GET /camera_status",()=>{
    it("Should return an array with the cameras status", async ()=>{
        const response = await request(app).get("/camera_status");
        expect(response.statusCode).toEqual(200);
        expect(Array.isArray(response.body)).toBe(true);
    });
});
