const express = require('express');
const morgan = require('morgan');
const app = express();
const { mongoose } = require('./databse.js');
//configuraciones
app.set('port', process.env.PORT || 3001);
// middelewares
app.use(morgan('dev'));
app.use(express.json());
//routes
app.use('/api/employees',require('./routes/employee.routes'));
//starting the server 

app.listen(app.get('port'), () => {
    console.log("Servidor en el puerto ", app.get("port"));
}); 