const mongoose = require('mongoose');

const connection = mongoose.connect('mongodb://localhost/Delivery-system');

mongoose.connection.once('open', ()=>{ console.log(`DATABASE CONNECTION IS OPENED...`) })


module.exports = connection;