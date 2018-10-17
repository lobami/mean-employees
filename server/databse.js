const mongoose = require('mongoose');
const URI = 'mongodb://localhost/mean-crud'; //aqui pondremos la direccion de la BD y si nohay la creara
mongoose.connect(URI)
.then(db => console.log("conectado a la base de datos"))
.catch(err => console.log(err));
module.exports = mongoose;