const express = require('express');
const app = express();
const path = require('path');
const usuarioRouters = require('./routes/usuarioRouters');


const port = process.env.PORT || 5000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(usuarioRouters);



app.listen(port,() => {
    console.log(`Servidor rodando na porta: http://localhost:5000 ${port}`)
});