const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myconnection = require('express-myconnection');

//iniciar express
const app = express();

//importing router
const routercliente = require('./routes/routeCliente');

//connection data
dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'crud'
  };

//settign
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views') );

//middlewares
app.use(morgan('dev'));
app.use(myconnection(mysql, dbOptions, 'single'));
app.use(express.urlencoded({extended: false}));

//routes
app.use('/', routercliente);

//static file
app.use(express.static(path.join(__dirname, 'public')));


//starting the server
app.listen(app.get('port'),() =>{
    console.log(`Escuchando servidor en el puerto ${app.get('port')}`);
});
