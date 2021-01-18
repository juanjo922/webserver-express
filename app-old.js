const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'appication/json' });
        let salida = {
            nombre: 'Juan',
            sexo: 'Hombre',
            url: req.url
        }

        res.write(JSON.stringify(salida));

        // res.write("hola mundo");
        res.end();
    })
    .listen(8080);

console.log('Escuchando el puerto 8080');