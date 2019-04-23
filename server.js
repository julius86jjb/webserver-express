var express = require('express')
var app = express() // nos permite utilizar express

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'))

// Express HBS
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', function(req, res) { //configurando una peticion get cuando el path sea un '/'

    res.render('home', {
        nombre: 'julius'
    });
})

app.get('/about', function(req, res) { //configurando una peticion get cuando el path sea un '/'

    res.render('about');
})

// app.get('/data', function(req, res) { //configurando una peticion get cuando el path sea un '/'
//     res.send('hola data');
// })

app.listen(3000, () => {
    console.log(`/// Escuchando peticiones en el puerto ${port}... ///`)
})