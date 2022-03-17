const mongoose = require('mongoose');
const URL = 'mongodb+srv://admin:12345@cluster0.8kkpq.mongodb.net/test';

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology:true
})
.then(db => console.log('Conexión exitosa a base de datos'))
.catch(err => console.log('Tienes un error' + err));

module.exports = mongoose;