require('./config/config');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//Configuracion glocal rutas
app.use(require('./routes/index'));

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}, (err, res) => {
    if (err) {
        throw err;
    }
    console.log('Base de datos Online');
});

app.listen(process.env.PORT, () => {
    console.log(`Eschando puerto ${process.env.PORT}`);
});