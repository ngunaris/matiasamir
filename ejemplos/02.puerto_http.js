/* ===================================
UBICAMOS LOS REQUERIMIENTOS
===================================
 */

const http = require('http');

/*Salida del puerto*/

http.createServer((req, res)=>{

//  res.write("Hola Juan");
//  res.end();
/*========================== 
SALIDA JSON 
==============================*/

res.writeHead(200,{'Content-Type': 'application/json'})

let salida = {

    nombre: "juan",
    edad: 37,
    url: req.url
}

res.write(JSON.stringify(salida));
res.end();

})
.listen(4000);

console.log("habilitado el puerto 4000");