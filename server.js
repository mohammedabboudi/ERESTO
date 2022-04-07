const express = require('express');
const dotenv = require('dotenv').config();
const database = require('./app/config/database/Mongoose_connection')
const port = process.env.PORT || 3000;
const app = express();

app.listen(port, ()=>{ console.log(`WE ARE CONNECTED TO THE SERVER SUCCESSFULY...`) });