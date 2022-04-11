const express = require('express');
const dotenv = require('dotenv').config();
const database = require('./app/config/database/Mongoose_connection')
const bodyParser = require('body-parser');
const userRouter = require('./app/api/routes/User');
const loginRouter = require('./app/api/routes/Login');

const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

app.use('/user', userRouter);

app.use('/', loginRouter);

app.listen(port, ()=>{ console.log(`WE ARE CONNECTED TO THE SERVER SUCCESSFULY ON THE PORT : ${port}`) });