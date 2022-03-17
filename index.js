const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const {mongoose} = require('./database');

const app = express();

//const port = process.env.PORT || 3000;
app.set('port', process.env.PORT || 3000);

//MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: '*'}));

//ROUTES
app.use('/api/cars', require('./routes/cars.routes'));

//SERVER
app.listen(app.get('port'), () => {
    console.log('servidor inicializado en puerto: ' + app.get('port'));
});