const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

//poniendo puesto para correr el programa en produccion
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



app.get('/', function(req, res) {

    res.render('home', {
        nombre: 'Juan martínez'
    });
})

app.get('/about', function(req, res) {

    res.render('about');
})

// app.get('/', (req, res) => {
//     // res.send('hola mundo')
//     let salida = {
//         nombre: 'Juan',
//         sexo: 'Hombre',
//         url: req.url
//     }

//     res.send(salida);
// })

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`)
});